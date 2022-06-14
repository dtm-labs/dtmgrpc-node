// package: dtmgimp
// file: dtmgimp.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as dtmgimp_pb from "./dtmgimp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IDtmService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    newGid: IDtmService_INewGid;
    submit: IDtmService_ISubmit;
    prepare: IDtmService_IPrepare;
    abort: IDtmService_IAbort;
    registerBranch: IDtmService_IRegisterBranch;
}

interface IDtmService_INewGid extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, dtmgimp_pb.DtmGidReply> {
    path: "/dtmgimp.Dtm/NewGid";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<dtmgimp_pb.DtmGidReply>;
    responseDeserialize: grpc.deserialize<dtmgimp_pb.DtmGidReply>;
}
interface IDtmService_ISubmit extends grpc.MethodDefinition<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty> {
    path: "/dtmgimp.Dtm/Submit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dtmgimp_pb.DtmRequest>;
    requestDeserialize: grpc.deserialize<dtmgimp_pb.DtmRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDtmService_IPrepare extends grpc.MethodDefinition<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty> {
    path: "/dtmgimp.Dtm/Prepare";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dtmgimp_pb.DtmRequest>;
    requestDeserialize: grpc.deserialize<dtmgimp_pb.DtmRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDtmService_IAbort extends grpc.MethodDefinition<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty> {
    path: "/dtmgimp.Dtm/Abort";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dtmgimp_pb.DtmRequest>;
    requestDeserialize: grpc.deserialize<dtmgimp_pb.DtmRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IDtmService_IRegisterBranch extends grpc.MethodDefinition<dtmgimp_pb.DtmBranchRequest, google_protobuf_empty_pb.Empty> {
    path: "/dtmgimp.Dtm/RegisterBranch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dtmgimp_pb.DtmBranchRequest>;
    requestDeserialize: grpc.deserialize<dtmgimp_pb.DtmBranchRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const DtmService: IDtmService;

export interface IDtmServer extends grpc.UntypedServiceImplementation {
    newGid: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, dtmgimp_pb.DtmGidReply>;
    submit: grpc.handleUnaryCall<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty>;
    prepare: grpc.handleUnaryCall<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty>;
    abort: grpc.handleUnaryCall<dtmgimp_pb.DtmRequest, google_protobuf_empty_pb.Empty>;
    registerBranch: grpc.handleUnaryCall<dtmgimp_pb.DtmBranchRequest, google_protobuf_empty_pb.Empty>;
}

export interface IDtmClient {
    newGid(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    newGid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    newGid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    submit(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    submit(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    submit(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    prepare(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    prepare(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    prepare(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    abort(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    abort(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    abort(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerBranch(request: dtmgimp_pb.DtmBranchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerBranch(request: dtmgimp_pb.DtmBranchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    registerBranch(request: dtmgimp_pb.DtmBranchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class DtmClient extends grpc.Client implements IDtmClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public newGid(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    public newGid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    public newGid(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dtmgimp_pb.DtmGidReply) => void): grpc.ClientUnaryCall;
    public submit(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public submit(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public submit(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public prepare(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public prepare(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public prepare(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public abort(request: dtmgimp_pb.DtmRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public abort(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public abort(request: dtmgimp_pb.DtmRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerBranch(request: dtmgimp_pb.DtmBranchRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerBranch(request: dtmgimp_pb.DtmBranchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public registerBranch(request: dtmgimp_pb.DtmBranchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
