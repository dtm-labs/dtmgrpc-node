import { IDtmClient } from './proto/dtmgimp_grpc_pb';
import IdGenerator from './id';
import {
  DtmBranchRequest,
  DtmRequest,
  DtmTransOptions,
} from './proto/dtmgimp_pb';

import jspb from 'google-protobuf';
import { Metadata } from '@grpc/grpc-js';
import { TransOp, TransType } from './constants';
import { TccCallback } from './types';

export default class Tcc {
  idGen: IdGenerator;
  gid: string;
  dtmClient: IDtmClient;

  constructor(dtmClient: IDtmClient, gid: string) {
    this.gid = gid;
    this.idGen = new IdGenerator();
    this.dtmClient = dtmClient;
  }

  registerBranchPromise(
    dtmBranchRequest: DtmBranchRequest,
    metadata: Metadata,
  ) {
    return new Promise((resolve, reject) => {
      this.dtmClient.registerBranch(
        dtmBranchRequest,
        metadata,
        (error, response) => {
          if (error) {
            return reject(error);
          } else {
            return resolve(response);
          }
        },
      );
    });
  }

  preparePromise(dtmRequest: DtmRequest, metadata: Metadata) {
    return new Promise((resolve, reject) => {
      this.dtmClient.prepare(dtmRequest, metadata, (error, response) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(response);
        }
      });
    });
  }

  submitPromise(dtmRequest: DtmRequest, metadata: Metadata) {
    return new Promise((resolve, reject) => {
      this.dtmClient.submit(dtmRequest, metadata, (error, response) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(response);
        }
      });
    });
  }

  abortPromise(dtmRequest: DtmRequest, metadata: Metadata) {
    return new Promise((resolve, reject) => {
      this.dtmClient.abort(dtmRequest, metadata, (error, response) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(response);
        }
      });
    });
  }

  async tccGlobalTransaction({
    passthroughHeadersList,
    metadata,
    tccFunc,
  }: {
    passthroughHeadersList: string[];
    metadata: Metadata;
    tccFunc: TccCallback;
  }) {
    const dtmTransOptions = new DtmTransOptions();
    dtmTransOptions.setPassthroughheadersList(passthroughHeadersList);
    const dtmRequest = new DtmRequest();
    dtmRequest.setGid(this.gid);
    dtmRequest.setTranstype(TransType.tcc);
    dtmRequest.setTransoptions(dtmTransOptions);

    try {
      await this.preparePromise(dtmRequest, metadata);
      await tccFunc();
      await this.submitPromise(dtmRequest, metadata);
    } catch (error) {
      await this.abortPromise(dtmRequest, metadata);
      throw error;
    }

    return this.gid;
  }

  registerBranch({
    msg,
    metadata,
    confirmUrl,
    cancelUrl,
  }: {
    msg: jspb.Message;
    metadata: Metadata;
    confirmUrl: string;
    cancelUrl: string;
  }) {
    let branchId = this.idGen.newBranchId();

    const dtmBranchRequest = new DtmBranchRequest();
    dtmBranchRequest.setGid(this.gid);
    dtmBranchRequest.setBranchid(branchId);
    dtmBranchRequest.setTranstype(TransType.tcc);
    dtmBranchRequest.setBusipayload(msg.serializeBinary());
    dtmBranchRequest.getDataMap().set(TransOp.confirm, confirmUrl);
    dtmBranchRequest.getDataMap().set(TransOp.cancel, cancelUrl);

    return this.registerBranchPromise(dtmBranchRequest, metadata);
  }
}
