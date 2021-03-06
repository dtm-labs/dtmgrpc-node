// source: dtmgimp.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.dtmgimp.DtmBranchRequest', null, global);
goog.exportSymbol('proto.dtmgimp.DtmGidReply', null, global);
goog.exportSymbol('proto.dtmgimp.DtmRequest', null, global);
goog.exportSymbol('proto.dtmgimp.DtmTransOptions', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dtmgimp.DtmTransOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dtmgimp.DtmTransOptions.repeatedFields_, null);
};
goog.inherits(proto.dtmgimp.DtmTransOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dtmgimp.DtmTransOptions.displayName = 'proto.dtmgimp.DtmTransOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dtmgimp.DtmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dtmgimp.DtmRequest.repeatedFields_, null);
};
goog.inherits(proto.dtmgimp.DtmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dtmgimp.DtmRequest.displayName = 'proto.dtmgimp.DtmRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dtmgimp.DtmGidReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dtmgimp.DtmGidReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dtmgimp.DtmGidReply.displayName = 'proto.dtmgimp.DtmGidReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dtmgimp.DtmBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dtmgimp.DtmBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.dtmgimp.DtmBranchRequest.displayName = 'proto.dtmgimp.DtmBranchRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dtmgimp.DtmTransOptions.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dtmgimp.DtmTransOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.dtmgimp.DtmTransOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dtmgimp.DtmTransOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmTransOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    waitresult: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    timeouttofail: jspb.Message.getFieldWithDefault(msg, 2, 0),
    retryinterval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    passthroughheadersList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    branchheadersMap: (f = msg.getBranchheadersMap()) ? f.toObject(includeInstance, undefined) : [],
    requesttimeout: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dtmgimp.DtmTransOptions}
 */
proto.dtmgimp.DtmTransOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dtmgimp.DtmTransOptions;
  return proto.dtmgimp.DtmTransOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dtmgimp.DtmTransOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dtmgimp.DtmTransOptions}
 */
proto.dtmgimp.DtmTransOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWaitresult(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeouttofail(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRetryinterval(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPassthroughheaders(value);
      break;
    case 5:
      var value = msg.getBranchheadersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequesttimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dtmgimp.DtmTransOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dtmgimp.DtmTransOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dtmgimp.DtmTransOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmTransOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaitresult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTimeouttofail();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRetryinterval();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPassthroughheadersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getBranchheadersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getRequesttimeout();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional bool WaitResult = 1;
 * @return {boolean}
 */
proto.dtmgimp.DtmTransOptions.prototype.getWaitresult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.setWaitresult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 TimeoutToFail = 2;
 * @return {number}
 */
proto.dtmgimp.DtmTransOptions.prototype.getTimeouttofail = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.setTimeouttofail = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 RetryInterval = 3;
 * @return {number}
 */
proto.dtmgimp.DtmTransOptions.prototype.getRetryinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.setRetryinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string PassthroughHeaders = 4;
 * @return {!Array<string>}
 */
proto.dtmgimp.DtmTransOptions.prototype.getPassthroughheadersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.setPassthroughheadersList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.addPassthroughheaders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.clearPassthroughheadersList = function() {
  return this.setPassthroughheadersList([]);
};


/**
 * map<string, string> BranchHeaders = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.dtmgimp.DtmTransOptions.prototype.getBranchheadersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.clearBranchheadersMap = function() {
  this.getBranchheadersMap().clear();
  return this;};


/**
 * optional int64 RequestTimeout = 6;
 * @return {number}
 */
proto.dtmgimp.DtmTransOptions.prototype.getRequesttimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.dtmgimp.DtmTransOptions} returns this
 */
proto.dtmgimp.DtmTransOptions.prototype.setRequesttimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dtmgimp.DtmRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dtmgimp.DtmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dtmgimp.DtmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dtmgimp.DtmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transtype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transoptions: (f = msg.getTransoptions()) && proto.dtmgimp.DtmTransOptions.toObject(includeInstance, f),
    customeddata: jspb.Message.getFieldWithDefault(msg, 4, ""),
    binpayloadsList: msg.getBinpayloadsList_asB64(),
    queryprepared: jspb.Message.getFieldWithDefault(msg, 6, ""),
    steps: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dtmgimp.DtmRequest}
 */
proto.dtmgimp.DtmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dtmgimp.DtmRequest;
  return proto.dtmgimp.DtmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dtmgimp.DtmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dtmgimp.DtmRequest}
 */
proto.dtmgimp.DtmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranstype(value);
      break;
    case 3:
      var value = new proto.dtmgimp.DtmTransOptions;
      reader.readMessage(value,proto.dtmgimp.DtmTransOptions.deserializeBinaryFromReader);
      msg.setTransoptions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomeddata(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addBinpayloads(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryprepared(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSteps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dtmgimp.DtmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dtmgimp.DtmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dtmgimp.DtmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTranstype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransoptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.dtmgimp.DtmTransOptions.serializeBinaryToWriter
    );
  }
  f = message.getCustomeddata();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBinpayloadsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
  f = message.getQueryprepared();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSteps();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string Gid = 1;
 * @return {string}
 */
proto.dtmgimp.DtmRequest.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TransType = 2;
 * @return {string}
 */
proto.dtmgimp.DtmRequest.prototype.getTranstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setTranstype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DtmTransOptions TransOptions = 3;
 * @return {?proto.dtmgimp.DtmTransOptions}
 */
proto.dtmgimp.DtmRequest.prototype.getTransoptions = function() {
  return /** @type{?proto.dtmgimp.DtmTransOptions} */ (
    jspb.Message.getWrapperField(this, proto.dtmgimp.DtmTransOptions, 3));
};


/**
 * @param {?proto.dtmgimp.DtmTransOptions|undefined} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
*/
proto.dtmgimp.DtmRequest.prototype.setTransoptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.clearTransoptions = function() {
  return this.setTransoptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.dtmgimp.DtmRequest.prototype.hasTransoptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string CustomedData = 4;
 * @return {string}
 */
proto.dtmgimp.DtmRequest.prototype.getCustomeddata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setCustomeddata = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated bytes BinPayloads = 5;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.dtmgimp.DtmRequest.prototype.getBinpayloadsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * repeated bytes BinPayloads = 5;
 * This is a type-conversion wrapper around `getBinpayloadsList()`
 * @return {!Array<string>}
 */
proto.dtmgimp.DtmRequest.prototype.getBinpayloadsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getBinpayloadsList()));
};


/**
 * repeated bytes BinPayloads = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBinpayloadsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.dtmgimp.DtmRequest.prototype.getBinpayloadsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getBinpayloadsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setBinpayloadsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.addBinpayloads = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.clearBinpayloadsList = function() {
  return this.setBinpayloadsList([]);
};


/**
 * optional string QueryPrepared = 6;
 * @return {string}
 */
proto.dtmgimp.DtmRequest.prototype.getQueryprepared = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setQueryprepared = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Steps = 7;
 * @return {string}
 */
proto.dtmgimp.DtmRequest.prototype.getSteps = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmRequest} returns this
 */
proto.dtmgimp.DtmRequest.prototype.setSteps = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dtmgimp.DtmGidReply.prototype.toObject = function(opt_includeInstance) {
  return proto.dtmgimp.DtmGidReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dtmgimp.DtmGidReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmGidReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dtmgimp.DtmGidReply}
 */
proto.dtmgimp.DtmGidReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dtmgimp.DtmGidReply;
  return proto.dtmgimp.DtmGidReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dtmgimp.DtmGidReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dtmgimp.DtmGidReply}
 */
proto.dtmgimp.DtmGidReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dtmgimp.DtmGidReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dtmgimp.DtmGidReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dtmgimp.DtmGidReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmGidReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Gid = 1;
 * @return {string}
 */
proto.dtmgimp.DtmGidReply.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmGidReply} returns this
 */
proto.dtmgimp.DtmGidReply.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dtmgimp.DtmBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.dtmgimp.DtmBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dtmgimp.DtmBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transtype: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branchid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    op: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, undefined) : [],
    busipayload: msg.getBusipayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dtmgimp.DtmBranchRequest}
 */
proto.dtmgimp.DtmBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dtmgimp.DtmBranchRequest;
  return proto.dtmgimp.DtmBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dtmgimp.DtmBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dtmgimp.DtmBranchRequest}
 */
proto.dtmgimp.DtmBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranstype(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOp(value);
      break;
    case 5:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBusipayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dtmgimp.DtmBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.dtmgimp.DtmBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.dtmgimp.DtmBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.dtmgimp.DtmBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTranstype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranchid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getBusipayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional string Gid = 1;
 * @return {string}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getGid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.setGid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string TransType = 2;
 * @return {string}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getTranstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.setTranstype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BranchID = 3;
 * @return {string}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getBranchid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.setBranchid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string Op = 4;
 * @return {string}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getOp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.setOp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> Data = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.clearDataMap = function() {
  this.getDataMap().clear();
  return this;};


/**
 * optional bytes BusiPayload = 6;
 * @return {!(string|Uint8Array)}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getBusipayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes BusiPayload = 6;
 * This is a type-conversion wrapper around `getBusipayload()`
 * @return {string}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getBusipayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBusipayload()));
};


/**
 * optional bytes BusiPayload = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBusipayload()`
 * @return {!Uint8Array}
 */
proto.dtmgimp.DtmBranchRequest.prototype.getBusipayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBusipayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.dtmgimp.DtmBranchRequest} returns this
 */
proto.dtmgimp.DtmBranchRequest.prototype.setBusipayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


goog.object.extend(exports, proto.dtmgimp);
