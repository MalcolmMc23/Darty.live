"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteIngressRequest = exports.ListIngressResponse = exports.ListIngressRequest = exports.UpdateIngressRequest = exports.InputAudioState = exports.InputVideoState = exports.IngressState = exports.IngressInfo = exports.IngressVideoEncodingOptions = exports.IngressAudioEncodingOptions = exports.IngressVideoOptions = exports.IngressAudioOptions = exports.CreateIngressRequest = exports.ingressState_StatusToJSON = exports.ingressState_StatusFromJSON = exports.IngressState_Status = exports.ingressVideoEncodingPresetToJSON = exports.ingressVideoEncodingPresetFromJSON = exports.IngressVideoEncodingPreset = exports.ingressAudioEncodingPresetToJSON = exports.ingressAudioEncodingPresetFromJSON = exports.IngressAudioEncodingPreset = exports.ingressInputToJSON = exports.ingressInputFromJSON = exports.IngressInput = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const livekit_models_1 = require("./livekit_models");
exports.protobufPackage = "livekit";
var IngressInput;
(function (IngressInput) {
    IngressInput[IngressInput["RTMP_INPUT"] = 0] = "RTMP_INPUT";
    IngressInput[IngressInput["WHIP_INPUT"] = 1] = "WHIP_INPUT";
    /** URL_INPUT - Pull from the provided URL. Only HTTP url are supported, serving either a single media file or a HLS stream */
    IngressInput[IngressInput["URL_INPUT"] = 2] = "URL_INPUT";
    IngressInput[IngressInput["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IngressInput = exports.IngressInput || (exports.IngressInput = {}));
function ingressInputFromJSON(object) {
    switch (object) {
        case 0:
        case "RTMP_INPUT":
            return IngressInput.RTMP_INPUT;
        case 1:
        case "WHIP_INPUT":
            return IngressInput.WHIP_INPUT;
        case 2:
        case "URL_INPUT":
            return IngressInput.URL_INPUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IngressInput.UNRECOGNIZED;
    }
}
exports.ingressInputFromJSON = ingressInputFromJSON;
function ingressInputToJSON(object) {
    switch (object) {
        case IngressInput.RTMP_INPUT:
            return "RTMP_INPUT";
        case IngressInput.WHIP_INPUT:
            return "WHIP_INPUT";
        case IngressInput.URL_INPUT:
            return "URL_INPUT";
        case IngressInput.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ingressInputToJSON = ingressInputToJSON;
var IngressAudioEncodingPreset;
(function (IngressAudioEncodingPreset) {
    /** OPUS_STEREO_96KBPS - OPUS, 2 channels, 96kbps */
    IngressAudioEncodingPreset[IngressAudioEncodingPreset["OPUS_STEREO_96KBPS"] = 0] = "OPUS_STEREO_96KBPS";
    /** OPUS_MONO_64KBS - OPUS, 1 channel, 64kbps */
    IngressAudioEncodingPreset[IngressAudioEncodingPreset["OPUS_MONO_64KBS"] = 1] = "OPUS_MONO_64KBS";
    IngressAudioEncodingPreset[IngressAudioEncodingPreset["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IngressAudioEncodingPreset = exports.IngressAudioEncodingPreset || (exports.IngressAudioEncodingPreset = {}));
function ingressAudioEncodingPresetFromJSON(object) {
    switch (object) {
        case 0:
        case "OPUS_STEREO_96KBPS":
            return IngressAudioEncodingPreset.OPUS_STEREO_96KBPS;
        case 1:
        case "OPUS_MONO_64KBS":
            return IngressAudioEncodingPreset.OPUS_MONO_64KBS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IngressAudioEncodingPreset.UNRECOGNIZED;
    }
}
exports.ingressAudioEncodingPresetFromJSON = ingressAudioEncodingPresetFromJSON;
function ingressAudioEncodingPresetToJSON(object) {
    switch (object) {
        case IngressAudioEncodingPreset.OPUS_STEREO_96KBPS:
            return "OPUS_STEREO_96KBPS";
        case IngressAudioEncodingPreset.OPUS_MONO_64KBS:
            return "OPUS_MONO_64KBS";
        case IngressAudioEncodingPreset.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ingressAudioEncodingPresetToJSON = ingressAudioEncodingPresetToJSON;
var IngressVideoEncodingPreset;
(function (IngressVideoEncodingPreset) {
    /** H264_720P_30FPS_3_LAYERS - 1280x720,  30fps, 1900kbps main layer, 3 layers total */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_720P_30FPS_3_LAYERS"] = 0] = "H264_720P_30FPS_3_LAYERS";
    /** H264_1080P_30FPS_3_LAYERS - 1980x1080, 30fps, 3500kbps main layer, 3 layers total */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_1080P_30FPS_3_LAYERS"] = 1] = "H264_1080P_30FPS_3_LAYERS";
    /** H264_540P_25FPS_2_LAYERS - 960x540,  25fps, 1000kbps  main layer, 2 layers total */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_540P_25FPS_2_LAYERS"] = 2] = "H264_540P_25FPS_2_LAYERS";
    /** H264_720P_30FPS_1_LAYER - 1280x720,  30fps, 1900kbps, no simulcast */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_720P_30FPS_1_LAYER"] = 3] = "H264_720P_30FPS_1_LAYER";
    /** H264_1080P_30FPS_1_LAYER - 1980x1080, 30fps, 3500kbps, no simulcast */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_1080P_30FPS_1_LAYER"] = 4] = "H264_1080P_30FPS_1_LAYER";
    /** H264_720P_30FPS_3_LAYERS_HIGH_MOTION - 1280x720,  30fps, 2500kbps main layer, 3 layers total, higher bitrate for high motion, harder to encode content */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_720P_30FPS_3_LAYERS_HIGH_MOTION"] = 5] = "H264_720P_30FPS_3_LAYERS_HIGH_MOTION";
    /** H264_1080P_30FPS_3_LAYERS_HIGH_MOTION - 1980x1080, 30fps, 4500kbps main layer, 3 layers total, higher bitrate for high motion, harder to encode content */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_1080P_30FPS_3_LAYERS_HIGH_MOTION"] = 6] = "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION";
    /** H264_540P_25FPS_2_LAYERS_HIGH_MOTION - 960x540,  25fps, 1300kbps  main layer, 2 layers total, higher bitrate for high motion, harder to encode content */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_540P_25FPS_2_LAYERS_HIGH_MOTION"] = 7] = "H264_540P_25FPS_2_LAYERS_HIGH_MOTION";
    /** H264_720P_30FPS_1_LAYER_HIGH_MOTION - 1280x720,  30fps, 2500kbps, no simulcast, higher bitrate for high motion, harder to encode content */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_720P_30FPS_1_LAYER_HIGH_MOTION"] = 8] = "H264_720P_30FPS_1_LAYER_HIGH_MOTION";
    /** H264_1080P_30FPS_1_LAYER_HIGH_MOTION - 1980x1080, 30fps, 4500kbps, no simulcast, higher bitrate for high motion, harder to encode content */
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["H264_1080P_30FPS_1_LAYER_HIGH_MOTION"] = 9] = "H264_1080P_30FPS_1_LAYER_HIGH_MOTION";
    IngressVideoEncodingPreset[IngressVideoEncodingPreset["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IngressVideoEncodingPreset = exports.IngressVideoEncodingPreset || (exports.IngressVideoEncodingPreset = {}));
function ingressVideoEncodingPresetFromJSON(object) {
    switch (object) {
        case 0:
        case "H264_720P_30FPS_3_LAYERS":
            return IngressVideoEncodingPreset.H264_720P_30FPS_3_LAYERS;
        case 1:
        case "H264_1080P_30FPS_3_LAYERS":
            return IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS;
        case 2:
        case "H264_540P_25FPS_2_LAYERS":
            return IngressVideoEncodingPreset.H264_540P_25FPS_2_LAYERS;
        case 3:
        case "H264_720P_30FPS_1_LAYER":
            return IngressVideoEncodingPreset.H264_720P_30FPS_1_LAYER;
        case 4:
        case "H264_1080P_30FPS_1_LAYER":
            return IngressVideoEncodingPreset.H264_1080P_30FPS_1_LAYER;
        case 5:
        case "H264_720P_30FPS_3_LAYERS_HIGH_MOTION":
            return IngressVideoEncodingPreset.H264_720P_30FPS_3_LAYERS_HIGH_MOTION;
        case 6:
        case "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION":
            return IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS_HIGH_MOTION;
        case 7:
        case "H264_540P_25FPS_2_LAYERS_HIGH_MOTION":
            return IngressVideoEncodingPreset.H264_540P_25FPS_2_LAYERS_HIGH_MOTION;
        case 8:
        case "H264_720P_30FPS_1_LAYER_HIGH_MOTION":
            return IngressVideoEncodingPreset.H264_720P_30FPS_1_LAYER_HIGH_MOTION;
        case 9:
        case "H264_1080P_30FPS_1_LAYER_HIGH_MOTION":
            return IngressVideoEncodingPreset.H264_1080P_30FPS_1_LAYER_HIGH_MOTION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IngressVideoEncodingPreset.UNRECOGNIZED;
    }
}
exports.ingressVideoEncodingPresetFromJSON = ingressVideoEncodingPresetFromJSON;
function ingressVideoEncodingPresetToJSON(object) {
    switch (object) {
        case IngressVideoEncodingPreset.H264_720P_30FPS_3_LAYERS:
            return "H264_720P_30FPS_3_LAYERS";
        case IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS:
            return "H264_1080P_30FPS_3_LAYERS";
        case IngressVideoEncodingPreset.H264_540P_25FPS_2_LAYERS:
            return "H264_540P_25FPS_2_LAYERS";
        case IngressVideoEncodingPreset.H264_720P_30FPS_1_LAYER:
            return "H264_720P_30FPS_1_LAYER";
        case IngressVideoEncodingPreset.H264_1080P_30FPS_1_LAYER:
            return "H264_1080P_30FPS_1_LAYER";
        case IngressVideoEncodingPreset.H264_720P_30FPS_3_LAYERS_HIGH_MOTION:
            return "H264_720P_30FPS_3_LAYERS_HIGH_MOTION";
        case IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS_HIGH_MOTION:
            return "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION";
        case IngressVideoEncodingPreset.H264_540P_25FPS_2_LAYERS_HIGH_MOTION:
            return "H264_540P_25FPS_2_LAYERS_HIGH_MOTION";
        case IngressVideoEncodingPreset.H264_720P_30FPS_1_LAYER_HIGH_MOTION:
            return "H264_720P_30FPS_1_LAYER_HIGH_MOTION";
        case IngressVideoEncodingPreset.H264_1080P_30FPS_1_LAYER_HIGH_MOTION:
            return "H264_1080P_30FPS_1_LAYER_HIGH_MOTION";
        case IngressVideoEncodingPreset.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ingressVideoEncodingPresetToJSON = ingressVideoEncodingPresetToJSON;
var IngressState_Status;
(function (IngressState_Status) {
    IngressState_Status[IngressState_Status["ENDPOINT_INACTIVE"] = 0] = "ENDPOINT_INACTIVE";
    IngressState_Status[IngressState_Status["ENDPOINT_BUFFERING"] = 1] = "ENDPOINT_BUFFERING";
    IngressState_Status[IngressState_Status["ENDPOINT_PUBLISHING"] = 2] = "ENDPOINT_PUBLISHING";
    IngressState_Status[IngressState_Status["ENDPOINT_ERROR"] = 3] = "ENDPOINT_ERROR";
    IngressState_Status[IngressState_Status["ENDPOINT_COMPLETE"] = 4] = "ENDPOINT_COMPLETE";
    IngressState_Status[IngressState_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IngressState_Status = exports.IngressState_Status || (exports.IngressState_Status = {}));
function ingressState_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ENDPOINT_INACTIVE":
            return IngressState_Status.ENDPOINT_INACTIVE;
        case 1:
        case "ENDPOINT_BUFFERING":
            return IngressState_Status.ENDPOINT_BUFFERING;
        case 2:
        case "ENDPOINT_PUBLISHING":
            return IngressState_Status.ENDPOINT_PUBLISHING;
        case 3:
        case "ENDPOINT_ERROR":
            return IngressState_Status.ENDPOINT_ERROR;
        case 4:
        case "ENDPOINT_COMPLETE":
            return IngressState_Status.ENDPOINT_COMPLETE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IngressState_Status.UNRECOGNIZED;
    }
}
exports.ingressState_StatusFromJSON = ingressState_StatusFromJSON;
function ingressState_StatusToJSON(object) {
    switch (object) {
        case IngressState_Status.ENDPOINT_INACTIVE:
            return "ENDPOINT_INACTIVE";
        case IngressState_Status.ENDPOINT_BUFFERING:
            return "ENDPOINT_BUFFERING";
        case IngressState_Status.ENDPOINT_PUBLISHING:
            return "ENDPOINT_PUBLISHING";
        case IngressState_Status.ENDPOINT_ERROR:
            return "ENDPOINT_ERROR";
        case IngressState_Status.ENDPOINT_COMPLETE:
            return "ENDPOINT_COMPLETE";
        case IngressState_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.ingressState_StatusToJSON = ingressState_StatusToJSON;
function createBaseCreateIngressRequest() {
    return {
        inputType: 0,
        url: "",
        name: "",
        roomName: "",
        participantIdentity: "",
        participantName: "",
        bypassTranscoding: false,
        audio: undefined,
        video: undefined,
    };
}
exports.CreateIngressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.inputType !== undefined && message.inputType !== 0) {
            writer.uint32(8).int32(message.inputType);
        }
        if (message.url !== undefined && message.url !== "") {
            writer.uint32(74).string(message.url);
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(26).string(message.roomName);
        }
        if (message.participantIdentity !== undefined && message.participantIdentity !== "") {
            writer.uint32(34).string(message.participantIdentity);
        }
        if (message.participantName !== undefined && message.participantName !== "") {
            writer.uint32(42).string(message.participantName);
        }
        if (message.bypassTranscoding === true) {
            writer.uint32(64).bool(message.bypassTranscoding);
        }
        if (message.audio !== undefined) {
            exports.IngressAudioOptions.encode(message.audio, writer.uint32(50).fork()).ldelim();
        }
        if (message.video !== undefined) {
            exports.IngressVideoOptions.encode(message.video, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateIngressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputType = reader.int32();
                    break;
                case 9:
                    message.url = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.roomName = reader.string();
                    break;
                case 4:
                    message.participantIdentity = reader.string();
                    break;
                case 5:
                    message.participantName = reader.string();
                    break;
                case 8:
                    message.bypassTranscoding = reader.bool();
                    break;
                case 6:
                    message.audio = exports.IngressAudioOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.video = exports.IngressVideoOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            inputType: isSet(object.inputType) ? ingressInputFromJSON(object.inputType) : 0,
            url: isSet(object.url) ? String(object.url) : "",
            name: isSet(object.name) ? String(object.name) : "",
            roomName: isSet(object.roomName) ? String(object.roomName) : "",
            participantIdentity: isSet(object.participantIdentity) ? String(object.participantIdentity) : "",
            participantName: isSet(object.participantName) ? String(object.participantName) : "",
            bypassTranscoding: isSet(object.bypassTranscoding) ? Boolean(object.bypassTranscoding) : false,
            audio: isSet(object.audio) ? exports.IngressAudioOptions.fromJSON(object.audio) : undefined,
            video: isSet(object.video) ? exports.IngressVideoOptions.fromJSON(object.video) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.inputType !== undefined && (obj.inputType = ingressInputToJSON(message.inputType));
        message.url !== undefined && (obj.url = message.url);
        message.name !== undefined && (obj.name = message.name);
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.participantIdentity !== undefined && (obj.participantIdentity = message.participantIdentity);
        message.participantName !== undefined && (obj.participantName = message.participantName);
        message.bypassTranscoding !== undefined && (obj.bypassTranscoding = message.bypassTranscoding);
        message.audio !== undefined && (obj.audio = message.audio ? exports.IngressAudioOptions.toJSON(message.audio) : undefined);
        message.video !== undefined && (obj.video = message.video ? exports.IngressVideoOptions.toJSON(message.video) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseCreateIngressRequest();
        message.inputType = (_a = object.inputType) !== null && _a !== void 0 ? _a : 0;
        message.url = (_b = object.url) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.roomName = (_d = object.roomName) !== null && _d !== void 0 ? _d : "";
        message.participantIdentity = (_e = object.participantIdentity) !== null && _e !== void 0 ? _e : "";
        message.participantName = (_f = object.participantName) !== null && _f !== void 0 ? _f : "";
        message.bypassTranscoding = (_g = object.bypassTranscoding) !== null && _g !== void 0 ? _g : false;
        message.audio = (object.audio !== undefined && object.audio !== null)
            ? exports.IngressAudioOptions.fromPartial(object.audio)
            : undefined;
        message.video = (object.video !== undefined && object.video !== null)
            ? exports.IngressVideoOptions.fromPartial(object.video)
            : undefined;
        return message;
    },
};
function createBaseIngressAudioOptions() {
    return { name: "", source: 0, preset: undefined, options: undefined };
}
exports.IngressAudioOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.source !== undefined && message.source !== 0) {
            writer.uint32(16).int32(message.source);
        }
        if (message.preset !== undefined) {
            writer.uint32(24).int32(message.preset);
        }
        if (message.options !== undefined) {
            exports.IngressAudioEncodingOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressAudioOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.source = reader.int32();
                    break;
                case 3:
                    message.preset = reader.int32();
                    break;
                case 4:
                    message.options = exports.IngressAudioEncodingOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            source: isSet(object.source) ? livekit_models_1.trackSourceFromJSON(object.source) : 0,
            preset: isSet(object.preset) ? ingressAudioEncodingPresetFromJSON(object.preset) : undefined,
            options: isSet(object.options) ? exports.IngressAudioEncodingOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.source !== undefined && (obj.source = livekit_models_1.trackSourceToJSON(message.source));
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? ingressAudioEncodingPresetToJSON(message.preset) : undefined);
        message.options !== undefined &&
            (obj.options = message.options ? exports.IngressAudioEncodingOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIngressAudioOptions();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.source = (_b = object.source) !== null && _b !== void 0 ? _b : 0;
        message.preset = (_c = object.preset) !== null && _c !== void 0 ? _c : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.IngressAudioEncodingOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseIngressVideoOptions() {
    return { name: "", source: 0, preset: undefined, options: undefined };
}
exports.IngressVideoOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.source !== undefined && message.source !== 0) {
            writer.uint32(16).int32(message.source);
        }
        if (message.preset !== undefined) {
            writer.uint32(24).int32(message.preset);
        }
        if (message.options !== undefined) {
            exports.IngressVideoEncodingOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressVideoOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.source = reader.int32();
                    break;
                case 3:
                    message.preset = reader.int32();
                    break;
                case 4:
                    message.options = exports.IngressVideoEncodingOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            source: isSet(object.source) ? livekit_models_1.trackSourceFromJSON(object.source) : 0,
            preset: isSet(object.preset) ? ingressVideoEncodingPresetFromJSON(object.preset) : undefined,
            options: isSet(object.options) ? exports.IngressVideoEncodingOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.source !== undefined && (obj.source = livekit_models_1.trackSourceToJSON(message.source));
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? ingressVideoEncodingPresetToJSON(message.preset) : undefined);
        message.options !== undefined &&
            (obj.options = message.options ? exports.IngressVideoEncodingOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIngressVideoOptions();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.source = (_b = object.source) !== null && _b !== void 0 ? _b : 0;
        message.preset = (_c = object.preset) !== null && _c !== void 0 ? _c : undefined;
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.IngressVideoEncodingOptions.fromPartial(object.options)
            : undefined;
        return message;
    },
};
function createBaseIngressAudioEncodingOptions() {
    return { audioCodec: 0, bitrate: 0, disableDtx: false, channels: 0 };
}
exports.IngressAudioEncodingOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioCodec !== undefined && message.audioCodec !== 0) {
            writer.uint32(8).int32(message.audioCodec);
        }
        if (message.bitrate !== undefined && message.bitrate !== 0) {
            writer.uint32(16).uint32(message.bitrate);
        }
        if (message.disableDtx === true) {
            writer.uint32(24).bool(message.disableDtx);
        }
        if (message.channels !== undefined && message.channels !== 0) {
            writer.uint32(32).uint32(message.channels);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressAudioEncodingOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioCodec = reader.int32();
                    break;
                case 2:
                    message.bitrate = reader.uint32();
                    break;
                case 3:
                    message.disableDtx = reader.bool();
                    break;
                case 4:
                    message.channels = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            audioCodec: isSet(object.audioCodec) ? livekit_models_1.audioCodecFromJSON(object.audioCodec) : 0,
            bitrate: isSet(object.bitrate) ? Number(object.bitrate) : 0,
            disableDtx: isSet(object.disableDtx) ? Boolean(object.disableDtx) : false,
            channels: isSet(object.channels) ? Number(object.channels) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.audioCodec !== undefined && (obj.audioCodec = livekit_models_1.audioCodecToJSON(message.audioCodec));
        message.bitrate !== undefined && (obj.bitrate = Math.round(message.bitrate));
        message.disableDtx !== undefined && (obj.disableDtx = message.disableDtx);
        message.channels !== undefined && (obj.channels = Math.round(message.channels));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseIngressAudioEncodingOptions();
        message.audioCodec = (_a = object.audioCodec) !== null && _a !== void 0 ? _a : 0;
        message.bitrate = (_b = object.bitrate) !== null && _b !== void 0 ? _b : 0;
        message.disableDtx = (_c = object.disableDtx) !== null && _c !== void 0 ? _c : false;
        message.channels = (_d = object.channels) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseIngressVideoEncodingOptions() {
    return { videoCodec: 0, frameRate: 0, layers: [] };
}
exports.IngressVideoEncodingOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.videoCodec !== undefined && message.videoCodec !== 0) {
            writer.uint32(8).int32(message.videoCodec);
        }
        if (message.frameRate !== undefined && message.frameRate !== 0) {
            writer.uint32(17).double(message.frameRate);
        }
        if (message.layers !== undefined && message.layers.length !== 0) {
            for (const v of message.layers) {
                livekit_models_1.VideoLayer.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressVideoEncodingOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.videoCodec = reader.int32();
                    break;
                case 2:
                    message.frameRate = reader.double();
                    break;
                case 3:
                    message.layers.push(livekit_models_1.VideoLayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            videoCodec: isSet(object.videoCodec) ? livekit_models_1.videoCodecFromJSON(object.videoCodec) : 0,
            frameRate: isSet(object.frameRate) ? Number(object.frameRate) : 0,
            layers: Array.isArray(object === null || object === void 0 ? void 0 : object.layers) ? object.layers.map((e) => livekit_models_1.VideoLayer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.videoCodec !== undefined && (obj.videoCodec = livekit_models_1.videoCodecToJSON(message.videoCodec));
        message.frameRate !== undefined && (obj.frameRate = message.frameRate);
        if (message.layers) {
            obj.layers = message.layers.map((e) => e ? livekit_models_1.VideoLayer.toJSON(e) : undefined);
        }
        else {
            obj.layers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIngressVideoEncodingOptions();
        message.videoCodec = (_a = object.videoCodec) !== null && _a !== void 0 ? _a : 0;
        message.frameRate = (_b = object.frameRate) !== null && _b !== void 0 ? _b : 0;
        message.layers = ((_c = object.layers) === null || _c === void 0 ? void 0 : _c.map((e) => livekit_models_1.VideoLayer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIngressInfo() {
    return {
        ingressId: "",
        name: "",
        streamKey: "",
        url: "",
        inputType: 0,
        bypassTranscoding: false,
        audio: undefined,
        video: undefined,
        roomName: "",
        participantIdentity: "",
        participantName: "",
        reusable: false,
        state: undefined,
    };
}
exports.IngressInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ingressId !== undefined && message.ingressId !== "") {
            writer.uint32(10).string(message.ingressId);
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.streamKey !== undefined && message.streamKey !== "") {
            writer.uint32(26).string(message.streamKey);
        }
        if (message.url !== undefined && message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.inputType !== undefined && message.inputType !== 0) {
            writer.uint32(40).int32(message.inputType);
        }
        if (message.bypassTranscoding === true) {
            writer.uint32(104).bool(message.bypassTranscoding);
        }
        if (message.audio !== undefined) {
            exports.IngressAudioOptions.encode(message.audio, writer.uint32(50).fork()).ldelim();
        }
        if (message.video !== undefined) {
            exports.IngressVideoOptions.encode(message.video, writer.uint32(58).fork()).ldelim();
        }
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(66).string(message.roomName);
        }
        if (message.participantIdentity !== undefined && message.participantIdentity !== "") {
            writer.uint32(74).string(message.participantIdentity);
        }
        if (message.participantName !== undefined && message.participantName !== "") {
            writer.uint32(82).string(message.participantName);
        }
        if (message.reusable === true) {
            writer.uint32(88).bool(message.reusable);
        }
        if (message.state !== undefined) {
            exports.IngressState.encode(message.state, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ingressId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.streamKey = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.inputType = reader.int32();
                    break;
                case 13:
                    message.bypassTranscoding = reader.bool();
                    break;
                case 6:
                    message.audio = exports.IngressAudioOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.video = exports.IngressVideoOptions.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.roomName = reader.string();
                    break;
                case 9:
                    message.participantIdentity = reader.string();
                    break;
                case 10:
                    message.participantName = reader.string();
                    break;
                case 11:
                    message.reusable = reader.bool();
                    break;
                case 12:
                    message.state = exports.IngressState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            ingressId: isSet(object.ingressId) ? String(object.ingressId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            streamKey: isSet(object.streamKey) ? String(object.streamKey) : "",
            url: isSet(object.url) ? String(object.url) : "",
            inputType: isSet(object.inputType) ? ingressInputFromJSON(object.inputType) : 0,
            bypassTranscoding: isSet(object.bypassTranscoding) ? Boolean(object.bypassTranscoding) : false,
            audio: isSet(object.audio) ? exports.IngressAudioOptions.fromJSON(object.audio) : undefined,
            video: isSet(object.video) ? exports.IngressVideoOptions.fromJSON(object.video) : undefined,
            roomName: isSet(object.roomName) ? String(object.roomName) : "",
            participantIdentity: isSet(object.participantIdentity) ? String(object.participantIdentity) : "",
            participantName: isSet(object.participantName) ? String(object.participantName) : "",
            reusable: isSet(object.reusable) ? Boolean(object.reusable) : false,
            state: isSet(object.state) ? exports.IngressState.fromJSON(object.state) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ingressId !== undefined && (obj.ingressId = message.ingressId);
        message.name !== undefined && (obj.name = message.name);
        message.streamKey !== undefined && (obj.streamKey = message.streamKey);
        message.url !== undefined && (obj.url = message.url);
        message.inputType !== undefined && (obj.inputType = ingressInputToJSON(message.inputType));
        message.bypassTranscoding !== undefined && (obj.bypassTranscoding = message.bypassTranscoding);
        message.audio !== undefined && (obj.audio = message.audio ? exports.IngressAudioOptions.toJSON(message.audio) : undefined);
        message.video !== undefined && (obj.video = message.video ? exports.IngressVideoOptions.toJSON(message.video) : undefined);
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.participantIdentity !== undefined && (obj.participantIdentity = message.participantIdentity);
        message.participantName !== undefined && (obj.participantName = message.participantName);
        message.reusable !== undefined && (obj.reusable = message.reusable);
        message.state !== undefined && (obj.state = message.state ? exports.IngressState.toJSON(message.state) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseIngressInfo();
        message.ingressId = (_a = object.ingressId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.streamKey = (_c = object.streamKey) !== null && _c !== void 0 ? _c : "";
        message.url = (_d = object.url) !== null && _d !== void 0 ? _d : "";
        message.inputType = (_e = object.inputType) !== null && _e !== void 0 ? _e : 0;
        message.bypassTranscoding = (_f = object.bypassTranscoding) !== null && _f !== void 0 ? _f : false;
        message.audio = (object.audio !== undefined && object.audio !== null)
            ? exports.IngressAudioOptions.fromPartial(object.audio)
            : undefined;
        message.video = (object.video !== undefined && object.video !== null)
            ? exports.IngressVideoOptions.fromPartial(object.video)
            : undefined;
        message.roomName = (_g = object.roomName) !== null && _g !== void 0 ? _g : "";
        message.participantIdentity = (_h = object.participantIdentity) !== null && _h !== void 0 ? _h : "";
        message.participantName = (_j = object.participantName) !== null && _j !== void 0 ? _j : "";
        message.reusable = (_k = object.reusable) !== null && _k !== void 0 ? _k : false;
        message.state = (object.state !== undefined && object.state !== null)
            ? exports.IngressState.fromPartial(object.state)
            : undefined;
        return message;
    },
};
function createBaseIngressState() {
    return {
        status: 0,
        error: "",
        video: undefined,
        audio: undefined,
        roomId: "",
        startedAt: 0,
        endedAt: 0,
        resourceId: "",
        tracks: [],
    };
}
exports.IngressState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== undefined && message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.error !== undefined && message.error !== "") {
            writer.uint32(18).string(message.error);
        }
        if (message.video !== undefined) {
            exports.InputVideoState.encode(message.video, writer.uint32(26).fork()).ldelim();
        }
        if (message.audio !== undefined) {
            exports.InputAudioState.encode(message.audio, writer.uint32(34).fork()).ldelim();
        }
        if (message.roomId !== undefined && message.roomId !== "") {
            writer.uint32(42).string(message.roomId);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(56).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(64).int64(message.endedAt);
        }
        if (message.resourceId !== undefined && message.resourceId !== "") {
            writer.uint32(74).string(message.resourceId);
        }
        if (message.tracks !== undefined && message.tracks.length !== 0) {
            for (const v of message.tracks) {
                livekit_models_1.TrackInfo.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIngressState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.error = reader.string();
                    break;
                case 3:
                    message.video = exports.InputVideoState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.audio = exports.InputAudioState.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.roomId = reader.string();
                    break;
                case 7:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 8:
                    message.endedAt = longToNumber(reader.int64());
                    break;
                case 9:
                    message.resourceId = reader.string();
                    break;
                case 6:
                    message.tracks.push(livekit_models_1.TrackInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            status: isSet(object.status) ? ingressState_StatusFromJSON(object.status) : 0,
            error: isSet(object.error) ? String(object.error) : "",
            video: isSet(object.video) ? exports.InputVideoState.fromJSON(object.video) : undefined,
            audio: isSet(object.audio) ? exports.InputAudioState.fromJSON(object.audio) : undefined,
            roomId: isSet(object.roomId) ? String(object.roomId) : "",
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
            resourceId: isSet(object.resourceId) ? String(object.resourceId) : "",
            tracks: Array.isArray(object === null || object === void 0 ? void 0 : object.tracks) ? object.tracks.map((e) => livekit_models_1.TrackInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = ingressState_StatusToJSON(message.status));
        message.error !== undefined && (obj.error = message.error);
        message.video !== undefined && (obj.video = message.video ? exports.InputVideoState.toJSON(message.video) : undefined);
        message.audio !== undefined && (obj.audio = message.audio ? exports.InputAudioState.toJSON(message.audio) : undefined);
        message.roomId !== undefined && (obj.roomId = message.roomId);
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        message.resourceId !== undefined && (obj.resourceId = message.resourceId);
        if (message.tracks) {
            obj.tracks = message.tracks.map((e) => e ? livekit_models_1.TrackInfo.toJSON(e) : undefined);
        }
        else {
            obj.tracks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseIngressState();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : "";
        message.video = (object.video !== undefined && object.video !== null)
            ? exports.InputVideoState.fromPartial(object.video)
            : undefined;
        message.audio = (object.audio !== undefined && object.audio !== null)
            ? exports.InputAudioState.fromPartial(object.audio)
            : undefined;
        message.roomId = (_c = object.roomId) !== null && _c !== void 0 ? _c : "";
        message.startedAt = (_d = object.startedAt) !== null && _d !== void 0 ? _d : 0;
        message.endedAt = (_e = object.endedAt) !== null && _e !== void 0 ? _e : 0;
        message.resourceId = (_f = object.resourceId) !== null && _f !== void 0 ? _f : "";
        message.tracks = ((_g = object.tracks) === null || _g === void 0 ? void 0 : _g.map((e) => livekit_models_1.TrackInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInputVideoState() {
    return { mimeType: "", averageBitrate: 0, width: 0, height: 0, framerate: 0 };
}
exports.InputVideoState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mimeType !== undefined && message.mimeType !== "") {
            writer.uint32(10).string(message.mimeType);
        }
        if (message.averageBitrate !== undefined && message.averageBitrate !== 0) {
            writer.uint32(16).uint32(message.averageBitrate);
        }
        if (message.width !== undefined && message.width !== 0) {
            writer.uint32(24).uint32(message.width);
        }
        if (message.height !== undefined && message.height !== 0) {
            writer.uint32(32).uint32(message.height);
        }
        if (message.framerate !== undefined && message.framerate !== 0) {
            writer.uint32(41).double(message.framerate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInputVideoState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimeType = reader.string();
                    break;
                case 2:
                    message.averageBitrate = reader.uint32();
                    break;
                case 3:
                    message.width = reader.uint32();
                    break;
                case 4:
                    message.height = reader.uint32();
                    break;
                case 5:
                    message.framerate = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
            averageBitrate: isSet(object.averageBitrate) ? Number(object.averageBitrate) : 0,
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.averageBitrate !== undefined && (obj.averageBitrate = Math.round(message.averageBitrate));
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.framerate !== undefined && (obj.framerate = message.framerate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseInputVideoState();
        message.mimeType = (_a = object.mimeType) !== null && _a !== void 0 ? _a : "";
        message.averageBitrate = (_b = object.averageBitrate) !== null && _b !== void 0 ? _b : 0;
        message.width = (_c = object.width) !== null && _c !== void 0 ? _c : 0;
        message.height = (_d = object.height) !== null && _d !== void 0 ? _d : 0;
        message.framerate = (_e = object.framerate) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseInputAudioState() {
    return { mimeType: "", averageBitrate: 0, channels: 0, sampleRate: 0 };
}
exports.InputAudioState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mimeType !== undefined && message.mimeType !== "") {
            writer.uint32(10).string(message.mimeType);
        }
        if (message.averageBitrate !== undefined && message.averageBitrate !== 0) {
            writer.uint32(16).uint32(message.averageBitrate);
        }
        if (message.channels !== undefined && message.channels !== 0) {
            writer.uint32(24).uint32(message.channels);
        }
        if (message.sampleRate !== undefined && message.sampleRate !== 0) {
            writer.uint32(32).uint32(message.sampleRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInputAudioState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimeType = reader.string();
                    break;
                case 2:
                    message.averageBitrate = reader.uint32();
                    break;
                case 3:
                    message.channels = reader.uint32();
                    break;
                case 4:
                    message.sampleRate = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
            averageBitrate: isSet(object.averageBitrate) ? Number(object.averageBitrate) : 0,
            channels: isSet(object.channels) ? Number(object.channels) : 0,
            sampleRate: isSet(object.sampleRate) ? Number(object.sampleRate) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.averageBitrate !== undefined && (obj.averageBitrate = Math.round(message.averageBitrate));
        message.channels !== undefined && (obj.channels = Math.round(message.channels));
        message.sampleRate !== undefined && (obj.sampleRate = Math.round(message.sampleRate));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseInputAudioState();
        message.mimeType = (_a = object.mimeType) !== null && _a !== void 0 ? _a : "";
        message.averageBitrate = (_b = object.averageBitrate) !== null && _b !== void 0 ? _b : 0;
        message.channels = (_c = object.channels) !== null && _c !== void 0 ? _c : 0;
        message.sampleRate = (_d = object.sampleRate) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseUpdateIngressRequest() {
    return {
        ingressId: "",
        name: "",
        roomName: "",
        participantIdentity: "",
        participantName: "",
        bypassTranscoding: undefined,
        audio: undefined,
        video: undefined,
    };
}
exports.UpdateIngressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ingressId !== undefined && message.ingressId !== "") {
            writer.uint32(10).string(message.ingressId);
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(26).string(message.roomName);
        }
        if (message.participantIdentity !== undefined && message.participantIdentity !== "") {
            writer.uint32(34).string(message.participantIdentity);
        }
        if (message.participantName !== undefined && message.participantName !== "") {
            writer.uint32(42).string(message.participantName);
        }
        if (message.bypassTranscoding !== undefined) {
            writer.uint32(64).bool(message.bypassTranscoding);
        }
        if (message.audio !== undefined) {
            exports.IngressAudioOptions.encode(message.audio, writer.uint32(50).fork()).ldelim();
        }
        if (message.video !== undefined) {
            exports.IngressVideoOptions.encode(message.video, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIngressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ingressId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.roomName = reader.string();
                    break;
                case 4:
                    message.participantIdentity = reader.string();
                    break;
                case 5:
                    message.participantName = reader.string();
                    break;
                case 8:
                    message.bypassTranscoding = reader.bool();
                    break;
                case 6:
                    message.audio = exports.IngressAudioOptions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.video = exports.IngressVideoOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            ingressId: isSet(object.ingressId) ? String(object.ingressId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            roomName: isSet(object.roomName) ? String(object.roomName) : "",
            participantIdentity: isSet(object.participantIdentity) ? String(object.participantIdentity) : "",
            participantName: isSet(object.participantName) ? String(object.participantName) : "",
            bypassTranscoding: isSet(object.bypassTranscoding) ? Boolean(object.bypassTranscoding) : undefined,
            audio: isSet(object.audio) ? exports.IngressAudioOptions.fromJSON(object.audio) : undefined,
            video: isSet(object.video) ? exports.IngressVideoOptions.fromJSON(object.video) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.ingressId !== undefined && (obj.ingressId = message.ingressId);
        message.name !== undefined && (obj.name = message.name);
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.participantIdentity !== undefined && (obj.participantIdentity = message.participantIdentity);
        message.participantName !== undefined && (obj.participantName = message.participantName);
        message.bypassTranscoding !== undefined && (obj.bypassTranscoding = message.bypassTranscoding);
        message.audio !== undefined && (obj.audio = message.audio ? exports.IngressAudioOptions.toJSON(message.audio) : undefined);
        message.video !== undefined && (obj.video = message.video ? exports.IngressVideoOptions.toJSON(message.video) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseUpdateIngressRequest();
        message.ingressId = (_a = object.ingressId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.roomName = (_c = object.roomName) !== null && _c !== void 0 ? _c : "";
        message.participantIdentity = (_d = object.participantIdentity) !== null && _d !== void 0 ? _d : "";
        message.participantName = (_e = object.participantName) !== null && _e !== void 0 ? _e : "";
        message.bypassTranscoding = (_f = object.bypassTranscoding) !== null && _f !== void 0 ? _f : undefined;
        message.audio = (object.audio !== undefined && object.audio !== null)
            ? exports.IngressAudioOptions.fromPartial(object.audio)
            : undefined;
        message.video = (object.video !== undefined && object.video !== null)
            ? exports.IngressVideoOptions.fromPartial(object.video)
            : undefined;
        return message;
    },
};
function createBaseListIngressRequest() {
    return { roomName: "", ingressId: "" };
}
exports.ListIngressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.ingressId !== undefined && message.ingressId !== "") {
            writer.uint32(18).string(message.ingressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIngressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.ingressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            roomName: isSet(object.roomName) ? String(object.roomName) : "",
            ingressId: isSet(object.ingressId) ? String(object.ingressId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.ingressId !== undefined && (obj.ingressId = message.ingressId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListIngressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.ingressId = (_b = object.ingressId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListIngressResponse() {
    return { items: [] };
}
exports.ListIngressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.items !== undefined && message.items.length !== 0) {
            for (const v of message.items) {
                exports.IngressInfo.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListIngressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(exports.IngressInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map((e) => exports.IngressInfo.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.items) {
            obj.items = message.items.map((e) => e ? exports.IngressInfo.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListIngressResponse();
        message.items = ((_a = object.items) === null || _a === void 0 ? void 0 : _a.map((e) => exports.IngressInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeleteIngressRequest() {
    return { ingressId: "" };
}
exports.DeleteIngressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ingressId !== undefined && message.ingressId !== "") {
            writer.uint32(10).string(message.ingressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteIngressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ingressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { ingressId: isSet(object.ingressId) ? String(object.ingressId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.ingressId !== undefined && (obj.ingressId = message.ingressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteIngressRequest();
        message.ingressId = (_a = object.ingressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=livekit_ingress.js.map