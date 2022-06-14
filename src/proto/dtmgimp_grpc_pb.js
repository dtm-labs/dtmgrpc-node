// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var dtmgimp_pb = require('./dtmgimp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_dtmgimp_DtmBranchRequest(arg) {
  if (!(arg instanceof dtmgimp_pb.DtmBranchRequest)) {
    throw new Error('Expected argument of type dtmgimp.DtmBranchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dtmgimp_DtmBranchRequest(buffer_arg) {
  return dtmgimp_pb.DtmBranchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dtmgimp_DtmGidReply(arg) {
  if (!(arg instanceof dtmgimp_pb.DtmGidReply)) {
    throw new Error('Expected argument of type dtmgimp.DtmGidReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dtmgimp_DtmGidReply(buffer_arg) {
  return dtmgimp_pb.DtmGidReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dtmgimp_DtmRequest(arg) {
  if (!(arg instanceof dtmgimp_pb.DtmRequest)) {
    throw new Error('Expected argument of type dtmgimp.DtmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dtmgimp_DtmRequest(buffer_arg) {
  return dtmgimp_pb.DtmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The dtm service definition.
var DtmService = exports.DtmService = {
  newGid: {
    path: '/dtmgimp.Dtm/NewGid',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: dtmgimp_pb.DtmGidReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_dtmgimp_DtmGidReply,
    responseDeserialize: deserialize_dtmgimp_DtmGidReply,
  },
  submit: {
    path: '/dtmgimp.Dtm/Submit',
    requestStream: false,
    responseStream: false,
    requestType: dtmgimp_pb.DtmRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dtmgimp_DtmRequest,
    requestDeserialize: deserialize_dtmgimp_DtmRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  prepare: {
    path: '/dtmgimp.Dtm/Prepare',
    requestStream: false,
    responseStream: false,
    requestType: dtmgimp_pb.DtmRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dtmgimp_DtmRequest,
    requestDeserialize: deserialize_dtmgimp_DtmRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  abort: {
    path: '/dtmgimp.Dtm/Abort',
    requestStream: false,
    responseStream: false,
    requestType: dtmgimp_pb.DtmRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dtmgimp_DtmRequest,
    requestDeserialize: deserialize_dtmgimp_DtmRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  registerBranch: {
    path: '/dtmgimp.Dtm/RegisterBranch',
    requestStream: false,
    responseStream: false,
    requestType: dtmgimp_pb.DtmBranchRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_dtmgimp_DtmBranchRequest,
    requestDeserialize: deserialize_dtmgimp_DtmBranchRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DtmClient = grpc.makeGenericClientConstructor(DtmService);
