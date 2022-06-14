import { DtmClient, IDtmClient } from './proto/dtmgimp_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { isFunction } from './utils';

class DtmgrpcClient {
  private dtmClients: Map<string, IDtmClient> = new Map();

  getClient(grpcServer: string) {
    const dtmClient = this.dtmClients.get(grpcServer);
    if (dtmClient) {
      return dtmClient;
    } else {
      const newDtmClient = new DtmClient(
        grpcServer,
        grpc.credentials.createInsecure(),
      );
      this.dtmClients.set(grpcServer, newDtmClient);
      return newDtmClient;
    }
  }

  async closeAll() {
    this.dtmClients.forEach((dtmClient: any) => {
      if (dtmClient && isFunction(dtmClient.close)) {
        dtmClient.close();
      }
    });
  }
}

export default new DtmgrpcClient();
