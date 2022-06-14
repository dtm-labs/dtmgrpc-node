// package: dtmgimp
// file: dtmgimp.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DtmTransOptions extends jspb.Message { 
    getWaitresult(): boolean;
    setWaitresult(value: boolean): DtmTransOptions;
    getTimeouttofail(): number;
    setTimeouttofail(value: number): DtmTransOptions;
    getRetryinterval(): number;
    setRetryinterval(value: number): DtmTransOptions;
    clearPassthroughheadersList(): void;
    getPassthroughheadersList(): Array<string>;
    setPassthroughheadersList(value: Array<string>): DtmTransOptions;
    addPassthroughheaders(value: string, index?: number): string;

    getBranchheadersMap(): jspb.Map<string, string>;
    clearBranchheadersMap(): void;
    getRequesttimeout(): number;
    setRequesttimeout(value: number): DtmTransOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DtmTransOptions.AsObject;
    static toObject(includeInstance: boolean, msg: DtmTransOptions): DtmTransOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DtmTransOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DtmTransOptions;
    static deserializeBinaryFromReader(message: DtmTransOptions, reader: jspb.BinaryReader): DtmTransOptions;
}

export namespace DtmTransOptions {
    export type AsObject = {
        waitresult: boolean,
        timeouttofail: number,
        retryinterval: number,
        passthroughheadersList: Array<string>,

        branchheadersMap: Array<[string, string]>,
        requesttimeout: number,
    }
}

export class DtmRequest extends jspb.Message { 
    getGid(): string;
    setGid(value: string): DtmRequest;
    getTranstype(): string;
    setTranstype(value: string): DtmRequest;

    hasTransoptions(): boolean;
    clearTransoptions(): void;
    getTransoptions(): DtmTransOptions | undefined;
    setTransoptions(value?: DtmTransOptions): DtmRequest;
    getCustomeddata(): string;
    setCustomeddata(value: string): DtmRequest;
    clearBinpayloadsList(): void;
    getBinpayloadsList(): Array<Uint8Array | string>;
    getBinpayloadsList_asU8(): Array<Uint8Array>;
    getBinpayloadsList_asB64(): Array<string>;
    setBinpayloadsList(value: Array<Uint8Array | string>): DtmRequest;
    addBinpayloads(value: Uint8Array | string, index?: number): Uint8Array | string;
    getQueryprepared(): string;
    setQueryprepared(value: string): DtmRequest;
    getSteps(): string;
    setSteps(value: string): DtmRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DtmRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DtmRequest): DtmRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DtmRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DtmRequest;
    static deserializeBinaryFromReader(message: DtmRequest, reader: jspb.BinaryReader): DtmRequest;
}

export namespace DtmRequest {
    export type AsObject = {
        gid: string,
        transtype: string,
        transoptions?: DtmTransOptions.AsObject,
        customeddata: string,
        binpayloadsList: Array<Uint8Array | string>,
        queryprepared: string,
        steps: string,
    }
}

export class DtmGidReply extends jspb.Message { 
    getGid(): string;
    setGid(value: string): DtmGidReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DtmGidReply.AsObject;
    static toObject(includeInstance: boolean, msg: DtmGidReply): DtmGidReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DtmGidReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DtmGidReply;
    static deserializeBinaryFromReader(message: DtmGidReply, reader: jspb.BinaryReader): DtmGidReply;
}

export namespace DtmGidReply {
    export type AsObject = {
        gid: string,
    }
}

export class DtmBranchRequest extends jspb.Message { 
    getGid(): string;
    setGid(value: string): DtmBranchRequest;
    getTranstype(): string;
    setTranstype(value: string): DtmBranchRequest;
    getBranchid(): string;
    setBranchid(value: string): DtmBranchRequest;
    getOp(): string;
    setOp(value: string): DtmBranchRequest;

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;
    getBusipayload(): Uint8Array | string;
    getBusipayload_asU8(): Uint8Array;
    getBusipayload_asB64(): string;
    setBusipayload(value: Uint8Array | string): DtmBranchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DtmBranchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DtmBranchRequest): DtmBranchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DtmBranchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DtmBranchRequest;
    static deserializeBinaryFromReader(message: DtmBranchRequest, reader: jspb.BinaryReader): DtmBranchRequest;
}

export namespace DtmBranchRequest {
    export type AsObject = {
        gid: string,
        transtype: string,
        branchid: string,
        op: string,

        dataMap: Array<[string, string]>,
        busipayload: Uint8Array | string,
    }
}
