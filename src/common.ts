import DTMError from './error';
import { IDtmClient } from './proto/dtmgimp_grpc_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export function genGid(dtmClient: IDtmClient): Promise<string> {
  return new Promise((resolve, reject) => {
    dtmClient.newGid(
      new google_protobuf_empty_pb.Empty(),
      (error: any, response: any) => {
        const gid = response.getGid();
        if (error) {
          return reject(error);
        } else if (!gid) {
          return reject(
            new DTMError(`newGid error, response ${JSON.stringify(gid)}`),
          );
        }
        return resolve(response.getGid());
      },
    );
  });
}
