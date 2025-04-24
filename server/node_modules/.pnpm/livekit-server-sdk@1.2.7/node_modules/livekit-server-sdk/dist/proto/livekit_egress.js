"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamInfo = exports.StreamInfoList = exports.EgressInfo = exports.StopEgressRequest = exports.ListEgressResponse = exports.ListEgressRequest = exports.UpdateOutputsRequest = exports.UpdateStreamRequest = exports.UpdateLayoutRequest = exports.EncodingOptions = exports.StreamOutput = exports.AliOSSUpload = exports.AzureBlobUpload = exports.GCPUpload = exports.S3Upload_MetadataEntry = exports.S3Upload = exports.ImageOutput = exports.DirectFileOutput = exports.SegmentedFileOutput = exports.EncodedFileOutput = exports.TrackEgressRequest = exports.TrackCompositeEgressRequest = exports.ParticipantEgressRequest = exports.WebEgressRequest = exports.RoomCompositeEgressRequest = exports.streamInfo_StatusToJSON = exports.streamInfo_StatusFromJSON = exports.StreamInfo_Status = exports.egressStatusToJSON = exports.egressStatusFromJSON = exports.EgressStatus = exports.encodingOptionsPresetToJSON = exports.encodingOptionsPresetFromJSON = exports.EncodingOptionsPreset = exports.streamProtocolToJSON = exports.streamProtocolFromJSON = exports.StreamProtocol = exports.imageFileSuffixToJSON = exports.imageFileSuffixFromJSON = exports.ImageFileSuffix = exports.segmentedFileSuffixToJSON = exports.segmentedFileSuffixFromJSON = exports.SegmentedFileSuffix = exports.segmentedFileProtocolToJSON = exports.segmentedFileProtocolFromJSON = exports.SegmentedFileProtocol = exports.encodedFileTypeToJSON = exports.encodedFileTypeFromJSON = exports.EncodedFileType = exports.protobufPackage = void 0;
exports.AutoTrackEgress = exports.AutoParticipantEgress = exports.ImagesInfo = exports.SegmentsInfo = exports.FileInfo = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const livekit_models_1 = require("./livekit_models");
exports.protobufPackage = "livekit";
var EncodedFileType;
(function (EncodedFileType) {
    /** DEFAULT_FILETYPE - file type chosen based on codecs */
    EncodedFileType[EncodedFileType["DEFAULT_FILETYPE"] = 0] = "DEFAULT_FILETYPE";
    EncodedFileType[EncodedFileType["MP4"] = 1] = "MP4";
    EncodedFileType[EncodedFileType["OGG"] = 2] = "OGG";
    EncodedFileType[EncodedFileType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EncodedFileType = exports.EncodedFileType || (exports.EncodedFileType = {}));
function encodedFileTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_FILETYPE":
            return EncodedFileType.DEFAULT_FILETYPE;
        case 1:
        case "MP4":
            return EncodedFileType.MP4;
        case 2:
        case "OGG":
            return EncodedFileType.OGG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EncodedFileType.UNRECOGNIZED;
    }
}
exports.encodedFileTypeFromJSON = encodedFileTypeFromJSON;
function encodedFileTypeToJSON(object) {
    switch (object) {
        case EncodedFileType.DEFAULT_FILETYPE:
            return "DEFAULT_FILETYPE";
        case EncodedFileType.MP4:
            return "MP4";
        case EncodedFileType.OGG:
            return "OGG";
        case EncodedFileType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.encodedFileTypeToJSON = encodedFileTypeToJSON;
var SegmentedFileProtocol;
(function (SegmentedFileProtocol) {
    SegmentedFileProtocol[SegmentedFileProtocol["DEFAULT_SEGMENTED_FILE_PROTOCOL"] = 0] = "DEFAULT_SEGMENTED_FILE_PROTOCOL";
    SegmentedFileProtocol[SegmentedFileProtocol["HLS_PROTOCOL"] = 1] = "HLS_PROTOCOL";
    SegmentedFileProtocol[SegmentedFileProtocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SegmentedFileProtocol = exports.SegmentedFileProtocol || (exports.SegmentedFileProtocol = {}));
function segmentedFileProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SEGMENTED_FILE_PROTOCOL":
            return SegmentedFileProtocol.DEFAULT_SEGMENTED_FILE_PROTOCOL;
        case 1:
        case "HLS_PROTOCOL":
            return SegmentedFileProtocol.HLS_PROTOCOL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SegmentedFileProtocol.UNRECOGNIZED;
    }
}
exports.segmentedFileProtocolFromJSON = segmentedFileProtocolFromJSON;
function segmentedFileProtocolToJSON(object) {
    switch (object) {
        case SegmentedFileProtocol.DEFAULT_SEGMENTED_FILE_PROTOCOL:
            return "DEFAULT_SEGMENTED_FILE_PROTOCOL";
        case SegmentedFileProtocol.HLS_PROTOCOL:
            return "HLS_PROTOCOL";
        case SegmentedFileProtocol.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.segmentedFileProtocolToJSON = segmentedFileProtocolToJSON;
var SegmentedFileSuffix;
(function (SegmentedFileSuffix) {
    SegmentedFileSuffix[SegmentedFileSuffix["INDEX"] = 0] = "INDEX";
    SegmentedFileSuffix[SegmentedFileSuffix["TIMESTAMP"] = 1] = "TIMESTAMP";
    SegmentedFileSuffix[SegmentedFileSuffix["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SegmentedFileSuffix = exports.SegmentedFileSuffix || (exports.SegmentedFileSuffix = {}));
function segmentedFileSuffixFromJSON(object) {
    switch (object) {
        case 0:
        case "INDEX":
            return SegmentedFileSuffix.INDEX;
        case 1:
        case "TIMESTAMP":
            return SegmentedFileSuffix.TIMESTAMP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SegmentedFileSuffix.UNRECOGNIZED;
    }
}
exports.segmentedFileSuffixFromJSON = segmentedFileSuffixFromJSON;
function segmentedFileSuffixToJSON(object) {
    switch (object) {
        case SegmentedFileSuffix.INDEX:
            return "INDEX";
        case SegmentedFileSuffix.TIMESTAMP:
            return "TIMESTAMP";
        case SegmentedFileSuffix.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.segmentedFileSuffixToJSON = segmentedFileSuffixToJSON;
var ImageFileSuffix;
(function (ImageFileSuffix) {
    ImageFileSuffix[ImageFileSuffix["IMAGE_SUFFIX_INDEX"] = 0] = "IMAGE_SUFFIX_INDEX";
    ImageFileSuffix[ImageFileSuffix["IMAGE_SUFFIX_TIMESTAMP"] = 1] = "IMAGE_SUFFIX_TIMESTAMP";
    ImageFileSuffix[ImageFileSuffix["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ImageFileSuffix = exports.ImageFileSuffix || (exports.ImageFileSuffix = {}));
function imageFileSuffixFromJSON(object) {
    switch (object) {
        case 0:
        case "IMAGE_SUFFIX_INDEX":
            return ImageFileSuffix.IMAGE_SUFFIX_INDEX;
        case 1:
        case "IMAGE_SUFFIX_TIMESTAMP":
            return ImageFileSuffix.IMAGE_SUFFIX_TIMESTAMP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ImageFileSuffix.UNRECOGNIZED;
    }
}
exports.imageFileSuffixFromJSON = imageFileSuffixFromJSON;
function imageFileSuffixToJSON(object) {
    switch (object) {
        case ImageFileSuffix.IMAGE_SUFFIX_INDEX:
            return "IMAGE_SUFFIX_INDEX";
        case ImageFileSuffix.IMAGE_SUFFIX_TIMESTAMP:
            return "IMAGE_SUFFIX_TIMESTAMP";
        case ImageFileSuffix.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.imageFileSuffixToJSON = imageFileSuffixToJSON;
var StreamProtocol;
(function (StreamProtocol) {
    /** DEFAULT_PROTOCOL - protocol chosen based on urls */
    StreamProtocol[StreamProtocol["DEFAULT_PROTOCOL"] = 0] = "DEFAULT_PROTOCOL";
    StreamProtocol[StreamProtocol["RTMP"] = 1] = "RTMP";
    StreamProtocol[StreamProtocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamProtocol = exports.StreamProtocol || (exports.StreamProtocol = {}));
function streamProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_PROTOCOL":
            return StreamProtocol.DEFAULT_PROTOCOL;
        case 1:
        case "RTMP":
            return StreamProtocol.RTMP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamProtocol.UNRECOGNIZED;
    }
}
exports.streamProtocolFromJSON = streamProtocolFromJSON;
function streamProtocolToJSON(object) {
    switch (object) {
        case StreamProtocol.DEFAULT_PROTOCOL:
            return "DEFAULT_PROTOCOL";
        case StreamProtocol.RTMP:
            return "RTMP";
        case StreamProtocol.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.streamProtocolToJSON = streamProtocolToJSON;
var EncodingOptionsPreset;
(function (EncodingOptionsPreset) {
    /** H264_720P_30 - 1280x720, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["H264_720P_30"] = 0] = "H264_720P_30";
    /** H264_720P_60 - 1280x720, 60fps, 4500kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["H264_720P_60"] = 1] = "H264_720P_60";
    /** H264_1080P_30 - 1920x1080, 30fps, 4500kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["H264_1080P_30"] = 2] = "H264_1080P_30";
    /** H264_1080P_60 - 1920x1080, 60fps, 6000kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["H264_1080P_60"] = 3] = "H264_1080P_60";
    /** PORTRAIT_H264_720P_30 - 720x1280, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["PORTRAIT_H264_720P_30"] = 4] = "PORTRAIT_H264_720P_30";
    /** PORTRAIT_H264_720P_60 - 720x1280, 60fps, 4500kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["PORTRAIT_H264_720P_60"] = 5] = "PORTRAIT_H264_720P_60";
    /** PORTRAIT_H264_1080P_30 - 1080x1920, 30fps, 4500kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["PORTRAIT_H264_1080P_30"] = 6] = "PORTRAIT_H264_1080P_30";
    /** PORTRAIT_H264_1080P_60 - 1080x1920, 60fps, 6000kbps, H.264_MAIN / OPUS */
    EncodingOptionsPreset[EncodingOptionsPreset["PORTRAIT_H264_1080P_60"] = 7] = "PORTRAIT_H264_1080P_60";
    EncodingOptionsPreset[EncodingOptionsPreset["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EncodingOptionsPreset = exports.EncodingOptionsPreset || (exports.EncodingOptionsPreset = {}));
function encodingOptionsPresetFromJSON(object) {
    switch (object) {
        case 0:
        case "H264_720P_30":
            return EncodingOptionsPreset.H264_720P_30;
        case 1:
        case "H264_720P_60":
            return EncodingOptionsPreset.H264_720P_60;
        case 2:
        case "H264_1080P_30":
            return EncodingOptionsPreset.H264_1080P_30;
        case 3:
        case "H264_1080P_60":
            return EncodingOptionsPreset.H264_1080P_60;
        case 4:
        case "PORTRAIT_H264_720P_30":
            return EncodingOptionsPreset.PORTRAIT_H264_720P_30;
        case 5:
        case "PORTRAIT_H264_720P_60":
            return EncodingOptionsPreset.PORTRAIT_H264_720P_60;
        case 6:
        case "PORTRAIT_H264_1080P_30":
            return EncodingOptionsPreset.PORTRAIT_H264_1080P_30;
        case 7:
        case "PORTRAIT_H264_1080P_60":
            return EncodingOptionsPreset.PORTRAIT_H264_1080P_60;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EncodingOptionsPreset.UNRECOGNIZED;
    }
}
exports.encodingOptionsPresetFromJSON = encodingOptionsPresetFromJSON;
function encodingOptionsPresetToJSON(object) {
    switch (object) {
        case EncodingOptionsPreset.H264_720P_30:
            return "H264_720P_30";
        case EncodingOptionsPreset.H264_720P_60:
            return "H264_720P_60";
        case EncodingOptionsPreset.H264_1080P_30:
            return "H264_1080P_30";
        case EncodingOptionsPreset.H264_1080P_60:
            return "H264_1080P_60";
        case EncodingOptionsPreset.PORTRAIT_H264_720P_30:
            return "PORTRAIT_H264_720P_30";
        case EncodingOptionsPreset.PORTRAIT_H264_720P_60:
            return "PORTRAIT_H264_720P_60";
        case EncodingOptionsPreset.PORTRAIT_H264_1080P_30:
            return "PORTRAIT_H264_1080P_30";
        case EncodingOptionsPreset.PORTRAIT_H264_1080P_60:
            return "PORTRAIT_H264_1080P_60";
        case EncodingOptionsPreset.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.encodingOptionsPresetToJSON = encodingOptionsPresetToJSON;
var EgressStatus;
(function (EgressStatus) {
    EgressStatus[EgressStatus["EGRESS_STARTING"] = 0] = "EGRESS_STARTING";
    EgressStatus[EgressStatus["EGRESS_ACTIVE"] = 1] = "EGRESS_ACTIVE";
    EgressStatus[EgressStatus["EGRESS_ENDING"] = 2] = "EGRESS_ENDING";
    EgressStatus[EgressStatus["EGRESS_COMPLETE"] = 3] = "EGRESS_COMPLETE";
    EgressStatus[EgressStatus["EGRESS_FAILED"] = 4] = "EGRESS_FAILED";
    EgressStatus[EgressStatus["EGRESS_ABORTED"] = 5] = "EGRESS_ABORTED";
    EgressStatus[EgressStatus["EGRESS_LIMIT_REACHED"] = 6] = "EGRESS_LIMIT_REACHED";
    EgressStatus[EgressStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EgressStatus = exports.EgressStatus || (exports.EgressStatus = {}));
function egressStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "EGRESS_STARTING":
            return EgressStatus.EGRESS_STARTING;
        case 1:
        case "EGRESS_ACTIVE":
            return EgressStatus.EGRESS_ACTIVE;
        case 2:
        case "EGRESS_ENDING":
            return EgressStatus.EGRESS_ENDING;
        case 3:
        case "EGRESS_COMPLETE":
            return EgressStatus.EGRESS_COMPLETE;
        case 4:
        case "EGRESS_FAILED":
            return EgressStatus.EGRESS_FAILED;
        case 5:
        case "EGRESS_ABORTED":
            return EgressStatus.EGRESS_ABORTED;
        case 6:
        case "EGRESS_LIMIT_REACHED":
            return EgressStatus.EGRESS_LIMIT_REACHED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return EgressStatus.UNRECOGNIZED;
    }
}
exports.egressStatusFromJSON = egressStatusFromJSON;
function egressStatusToJSON(object) {
    switch (object) {
        case EgressStatus.EGRESS_STARTING:
            return "EGRESS_STARTING";
        case EgressStatus.EGRESS_ACTIVE:
            return "EGRESS_ACTIVE";
        case EgressStatus.EGRESS_ENDING:
            return "EGRESS_ENDING";
        case EgressStatus.EGRESS_COMPLETE:
            return "EGRESS_COMPLETE";
        case EgressStatus.EGRESS_FAILED:
            return "EGRESS_FAILED";
        case EgressStatus.EGRESS_ABORTED:
            return "EGRESS_ABORTED";
        case EgressStatus.EGRESS_LIMIT_REACHED:
            return "EGRESS_LIMIT_REACHED";
        case EgressStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.egressStatusToJSON = egressStatusToJSON;
var StreamInfo_Status;
(function (StreamInfo_Status) {
    StreamInfo_Status[StreamInfo_Status["ACTIVE"] = 0] = "ACTIVE";
    StreamInfo_Status[StreamInfo_Status["FINISHED"] = 1] = "FINISHED";
    StreamInfo_Status[StreamInfo_Status["FAILED"] = 2] = "FAILED";
    StreamInfo_Status[StreamInfo_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamInfo_Status = exports.StreamInfo_Status || (exports.StreamInfo_Status = {}));
function streamInfo_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTIVE":
            return StreamInfo_Status.ACTIVE;
        case 1:
        case "FINISHED":
            return StreamInfo_Status.FINISHED;
        case 2:
        case "FAILED":
            return StreamInfo_Status.FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamInfo_Status.UNRECOGNIZED;
    }
}
exports.streamInfo_StatusFromJSON = streamInfo_StatusFromJSON;
function streamInfo_StatusToJSON(object) {
    switch (object) {
        case StreamInfo_Status.ACTIVE:
            return "ACTIVE";
        case StreamInfo_Status.FINISHED:
            return "FINISHED";
        case StreamInfo_Status.FAILED:
            return "FAILED";
        case StreamInfo_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.streamInfo_StatusToJSON = streamInfo_StatusToJSON;
function createBaseRoomCompositeEgressRequest() {
    return {
        roomName: "",
        layout: "",
        audioOnly: false,
        videoOnly: false,
        customBaseUrl: "",
        file: undefined,
        stream: undefined,
        segments: undefined,
        preset: undefined,
        advanced: undefined,
        fileOutputs: [],
        streamOutputs: [],
        segmentOutputs: [],
        imageOutputs: [],
    };
}
exports.RoomCompositeEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.layout !== undefined && message.layout !== "") {
            writer.uint32(18).string(message.layout);
        }
        if (message.audioOnly === true) {
            writer.uint32(24).bool(message.audioOnly);
        }
        if (message.videoOnly === true) {
            writer.uint32(32).bool(message.videoOnly);
        }
        if (message.customBaseUrl !== undefined && message.customBaseUrl !== "") {
            writer.uint32(42).string(message.customBaseUrl);
        }
        if (message.file !== undefined) {
            exports.EncodedFileOutput.encode(message.file, writer.uint32(50).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamOutput.encode(message.stream, writer.uint32(58).fork()).ldelim();
        }
        if (message.segments !== undefined) {
            exports.SegmentedFileOutput.encode(message.segments, writer.uint32(82).fork()).ldelim();
        }
        if (message.preset !== undefined) {
            writer.uint32(64).int32(message.preset);
        }
        if (message.advanced !== undefined) {
            exports.EncodingOptions.encode(message.advanced, writer.uint32(74).fork()).ldelim();
        }
        if (message.fileOutputs !== undefined && message.fileOutputs.length !== 0) {
            for (const v of message.fileOutputs) {
                exports.EncodedFileOutput.encode(v, writer.uint32(90).fork()).ldelim();
            }
        }
        if (message.streamOutputs !== undefined && message.streamOutputs.length !== 0) {
            for (const v of message.streamOutputs) {
                exports.StreamOutput.encode(v, writer.uint32(98).fork()).ldelim();
            }
        }
        if (message.segmentOutputs !== undefined && message.segmentOutputs.length !== 0) {
            for (const v of message.segmentOutputs) {
                exports.SegmentedFileOutput.encode(v, writer.uint32(106).fork()).ldelim();
            }
        }
        if (message.imageOutputs !== undefined && message.imageOutputs.length !== 0) {
            for (const v of message.imageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(114).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoomCompositeEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.layout = reader.string();
                    break;
                case 3:
                    message.audioOnly = reader.bool();
                    break;
                case 4:
                    message.videoOnly = reader.bool();
                    break;
                case 5:
                    message.customBaseUrl = reader.string();
                    break;
                case 6:
                    message.file = exports.EncodedFileOutput.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.stream = exports.StreamOutput.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.segments = exports.SegmentedFileOutput.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.preset = reader.int32();
                    break;
                case 9:
                    message.advanced = exports.EncodingOptions.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.fileOutputs.push(exports.EncodedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.streamOutputs.push(exports.StreamOutput.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.segmentOutputs.push(exports.SegmentedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.imageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
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
            layout: isSet(object.layout) ? String(object.layout) : "",
            audioOnly: isSet(object.audioOnly) ? Boolean(object.audioOnly) : false,
            videoOnly: isSet(object.videoOnly) ? Boolean(object.videoOnly) : false,
            customBaseUrl: isSet(object.customBaseUrl) ? String(object.customBaseUrl) : "",
            file: isSet(object.file) ? exports.EncodedFileOutput.fromJSON(object.file) : undefined,
            stream: isSet(object.stream) ? exports.StreamOutput.fromJSON(object.stream) : undefined,
            segments: isSet(object.segments) ? exports.SegmentedFileOutput.fromJSON(object.segments) : undefined,
            preset: isSet(object.preset) ? encodingOptionsPresetFromJSON(object.preset) : undefined,
            advanced: isSet(object.advanced) ? exports.EncodingOptions.fromJSON(object.advanced) : undefined,
            fileOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.fileOutputs)
                ? object.fileOutputs.map((e) => exports.EncodedFileOutput.fromJSON(e))
                : [],
            streamOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.streamOutputs)
                ? object.streamOutputs.map((e) => exports.StreamOutput.fromJSON(e))
                : [],
            segmentOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentOutputs)
                ? object.segmentOutputs.map((e) => exports.SegmentedFileOutput.fromJSON(e))
                : [],
            imageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.imageOutputs)
                ? object.imageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.layout !== undefined && (obj.layout = message.layout);
        message.audioOnly !== undefined && (obj.audioOnly = message.audioOnly);
        message.videoOnly !== undefined && (obj.videoOnly = message.videoOnly);
        message.customBaseUrl !== undefined && (obj.customBaseUrl = message.customBaseUrl);
        message.file !== undefined && (obj.file = message.file ? exports.EncodedFileOutput.toJSON(message.file) : undefined);
        message.stream !== undefined && (obj.stream = message.stream ? exports.StreamOutput.toJSON(message.stream) : undefined);
        message.segments !== undefined &&
            (obj.segments = message.segments ? exports.SegmentedFileOutput.toJSON(message.segments) : undefined);
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? encodingOptionsPresetToJSON(message.preset) : undefined);
        message.advanced !== undefined &&
            (obj.advanced = message.advanced ? exports.EncodingOptions.toJSON(message.advanced) : undefined);
        if (message.fileOutputs) {
            obj.fileOutputs = message.fileOutputs.map((e) => e ? exports.EncodedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.fileOutputs = [];
        }
        if (message.streamOutputs) {
            obj.streamOutputs = message.streamOutputs.map((e) => e ? exports.StreamOutput.toJSON(e) : undefined);
        }
        else {
            obj.streamOutputs = [];
        }
        if (message.segmentOutputs) {
            obj.segmentOutputs = message.segmentOutputs.map((e) => e ? exports.SegmentedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.segmentOutputs = [];
        }
        if (message.imageOutputs) {
            obj.imageOutputs = message.imageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.imageOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseRoomCompositeEgressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.layout = (_b = object.layout) !== null && _b !== void 0 ? _b : "";
        message.audioOnly = (_c = object.audioOnly) !== null && _c !== void 0 ? _c : false;
        message.videoOnly = (_d = object.videoOnly) !== null && _d !== void 0 ? _d : false;
        message.customBaseUrl = (_e = object.customBaseUrl) !== null && _e !== void 0 ? _e : "";
        message.file = (object.file !== undefined && object.file !== null)
            ? exports.EncodedFileOutput.fromPartial(object.file)
            : undefined;
        message.stream = (object.stream !== undefined && object.stream !== null)
            ? exports.StreamOutput.fromPartial(object.stream)
            : undefined;
        message.segments = (object.segments !== undefined && object.segments !== null)
            ? exports.SegmentedFileOutput.fromPartial(object.segments)
            : undefined;
        message.preset = (_f = object.preset) !== null && _f !== void 0 ? _f : undefined;
        message.advanced = (object.advanced !== undefined && object.advanced !== null)
            ? exports.EncodingOptions.fromPartial(object.advanced)
            : undefined;
        message.fileOutputs = ((_g = object.fileOutputs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.EncodedFileOutput.fromPartial(e))) || [];
        message.streamOutputs = ((_h = object.streamOutputs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.StreamOutput.fromPartial(e))) || [];
        message.segmentOutputs = ((_j = object.segmentOutputs) === null || _j === void 0 ? void 0 : _j.map((e) => exports.SegmentedFileOutput.fromPartial(e))) || [];
        message.imageOutputs = ((_k = object.imageOutputs) === null || _k === void 0 ? void 0 : _k.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWebEgressRequest() {
    return {
        url: "",
        audioOnly: false,
        videoOnly: false,
        awaitStartSignal: false,
        file: undefined,
        stream: undefined,
        segments: undefined,
        preset: undefined,
        advanced: undefined,
        fileOutputs: [],
        streamOutputs: [],
        segmentOutputs: [],
        imageOutputs: [],
    };
}
exports.WebEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.url !== undefined && message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.audioOnly === true) {
            writer.uint32(16).bool(message.audioOnly);
        }
        if (message.videoOnly === true) {
            writer.uint32(24).bool(message.videoOnly);
        }
        if (message.awaitStartSignal === true) {
            writer.uint32(96).bool(message.awaitStartSignal);
        }
        if (message.file !== undefined) {
            exports.EncodedFileOutput.encode(message.file, writer.uint32(34).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamOutput.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        if (message.segments !== undefined) {
            exports.SegmentedFileOutput.encode(message.segments, writer.uint32(50).fork()).ldelim();
        }
        if (message.preset !== undefined) {
            writer.uint32(56).int32(message.preset);
        }
        if (message.advanced !== undefined) {
            exports.EncodingOptions.encode(message.advanced, writer.uint32(66).fork()).ldelim();
        }
        if (message.fileOutputs !== undefined && message.fileOutputs.length !== 0) {
            for (const v of message.fileOutputs) {
                exports.EncodedFileOutput.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        if (message.streamOutputs !== undefined && message.streamOutputs.length !== 0) {
            for (const v of message.streamOutputs) {
                exports.StreamOutput.encode(v, writer.uint32(82).fork()).ldelim();
            }
        }
        if (message.segmentOutputs !== undefined && message.segmentOutputs.length !== 0) {
            for (const v of message.segmentOutputs) {
                exports.SegmentedFileOutput.encode(v, writer.uint32(90).fork()).ldelim();
            }
        }
        if (message.imageOutputs !== undefined && message.imageOutputs.length !== 0) {
            for (const v of message.imageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(106).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.audioOnly = reader.bool();
                    break;
                case 3:
                    message.videoOnly = reader.bool();
                    break;
                case 12:
                    message.awaitStartSignal = reader.bool();
                    break;
                case 4:
                    message.file = exports.EncodedFileOutput.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = exports.StreamOutput.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.segments = exports.SegmentedFileOutput.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.preset = reader.int32();
                    break;
                case 8:
                    message.advanced = exports.EncodingOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.fileOutputs.push(exports.EncodedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.streamOutputs.push(exports.StreamOutput.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.segmentOutputs.push(exports.SegmentedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.imageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
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
            url: isSet(object.url) ? String(object.url) : "",
            audioOnly: isSet(object.audioOnly) ? Boolean(object.audioOnly) : false,
            videoOnly: isSet(object.videoOnly) ? Boolean(object.videoOnly) : false,
            awaitStartSignal: isSet(object.awaitStartSignal) ? Boolean(object.awaitStartSignal) : false,
            file: isSet(object.file) ? exports.EncodedFileOutput.fromJSON(object.file) : undefined,
            stream: isSet(object.stream) ? exports.StreamOutput.fromJSON(object.stream) : undefined,
            segments: isSet(object.segments) ? exports.SegmentedFileOutput.fromJSON(object.segments) : undefined,
            preset: isSet(object.preset) ? encodingOptionsPresetFromJSON(object.preset) : undefined,
            advanced: isSet(object.advanced) ? exports.EncodingOptions.fromJSON(object.advanced) : undefined,
            fileOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.fileOutputs)
                ? object.fileOutputs.map((e) => exports.EncodedFileOutput.fromJSON(e))
                : [],
            streamOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.streamOutputs)
                ? object.streamOutputs.map((e) => exports.StreamOutput.fromJSON(e))
                : [],
            segmentOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentOutputs)
                ? object.segmentOutputs.map((e) => exports.SegmentedFileOutput.fromJSON(e))
                : [],
            imageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.imageOutputs)
                ? object.imageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.audioOnly !== undefined && (obj.audioOnly = message.audioOnly);
        message.videoOnly !== undefined && (obj.videoOnly = message.videoOnly);
        message.awaitStartSignal !== undefined && (obj.awaitStartSignal = message.awaitStartSignal);
        message.file !== undefined && (obj.file = message.file ? exports.EncodedFileOutput.toJSON(message.file) : undefined);
        message.stream !== undefined && (obj.stream = message.stream ? exports.StreamOutput.toJSON(message.stream) : undefined);
        message.segments !== undefined &&
            (obj.segments = message.segments ? exports.SegmentedFileOutput.toJSON(message.segments) : undefined);
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? encodingOptionsPresetToJSON(message.preset) : undefined);
        message.advanced !== undefined &&
            (obj.advanced = message.advanced ? exports.EncodingOptions.toJSON(message.advanced) : undefined);
        if (message.fileOutputs) {
            obj.fileOutputs = message.fileOutputs.map((e) => e ? exports.EncodedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.fileOutputs = [];
        }
        if (message.streamOutputs) {
            obj.streamOutputs = message.streamOutputs.map((e) => e ? exports.StreamOutput.toJSON(e) : undefined);
        }
        else {
            obj.streamOutputs = [];
        }
        if (message.segmentOutputs) {
            obj.segmentOutputs = message.segmentOutputs.map((e) => e ? exports.SegmentedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.segmentOutputs = [];
        }
        if (message.imageOutputs) {
            obj.imageOutputs = message.imageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.imageOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseWebEgressRequest();
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        message.audioOnly = (_b = object.audioOnly) !== null && _b !== void 0 ? _b : false;
        message.videoOnly = (_c = object.videoOnly) !== null && _c !== void 0 ? _c : false;
        message.awaitStartSignal = (_d = object.awaitStartSignal) !== null && _d !== void 0 ? _d : false;
        message.file = (object.file !== undefined && object.file !== null)
            ? exports.EncodedFileOutput.fromPartial(object.file)
            : undefined;
        message.stream = (object.stream !== undefined && object.stream !== null)
            ? exports.StreamOutput.fromPartial(object.stream)
            : undefined;
        message.segments = (object.segments !== undefined && object.segments !== null)
            ? exports.SegmentedFileOutput.fromPartial(object.segments)
            : undefined;
        message.preset = (_e = object.preset) !== null && _e !== void 0 ? _e : undefined;
        message.advanced = (object.advanced !== undefined && object.advanced !== null)
            ? exports.EncodingOptions.fromPartial(object.advanced)
            : undefined;
        message.fileOutputs = ((_f = object.fileOutputs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.EncodedFileOutput.fromPartial(e))) || [];
        message.streamOutputs = ((_g = object.streamOutputs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.StreamOutput.fromPartial(e))) || [];
        message.segmentOutputs = ((_h = object.segmentOutputs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.SegmentedFileOutput.fromPartial(e))) || [];
        message.imageOutputs = ((_j = object.imageOutputs) === null || _j === void 0 ? void 0 : _j.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseParticipantEgressRequest() {
    return {
        roomName: "",
        identity: "",
        screenShare: false,
        preset: undefined,
        advanced: undefined,
        fileOutputs: [],
        streamOutputs: [],
        segmentOutputs: [],
        imageOutputs: [],
    };
}
exports.ParticipantEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.identity !== undefined && message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.screenShare === true) {
            writer.uint32(24).bool(message.screenShare);
        }
        if (message.preset !== undefined) {
            writer.uint32(32).int32(message.preset);
        }
        if (message.advanced !== undefined) {
            exports.EncodingOptions.encode(message.advanced, writer.uint32(42).fork()).ldelim();
        }
        if (message.fileOutputs !== undefined && message.fileOutputs.length !== 0) {
            for (const v of message.fileOutputs) {
                exports.EncodedFileOutput.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.streamOutputs !== undefined && message.streamOutputs.length !== 0) {
            for (const v of message.streamOutputs) {
                exports.StreamOutput.encode(v, writer.uint32(58).fork()).ldelim();
            }
        }
        if (message.segmentOutputs !== undefined && message.segmentOutputs.length !== 0) {
            for (const v of message.segmentOutputs) {
                exports.SegmentedFileOutput.encode(v, writer.uint32(66).fork()).ldelim();
            }
        }
        if (message.imageOutputs !== undefined && message.imageOutputs.length !== 0) {
            for (const v of message.imageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParticipantEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.screenShare = reader.bool();
                    break;
                case 4:
                    message.preset = reader.int32();
                    break;
                case 5:
                    message.advanced = exports.EncodingOptions.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.fileOutputs.push(exports.EncodedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.streamOutputs.push(exports.StreamOutput.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.segmentOutputs.push(exports.SegmentedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.imageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
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
            identity: isSet(object.identity) ? String(object.identity) : "",
            screenShare: isSet(object.screenShare) ? Boolean(object.screenShare) : false,
            preset: isSet(object.preset) ? encodingOptionsPresetFromJSON(object.preset) : undefined,
            advanced: isSet(object.advanced) ? exports.EncodingOptions.fromJSON(object.advanced) : undefined,
            fileOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.fileOutputs)
                ? object.fileOutputs.map((e) => exports.EncodedFileOutput.fromJSON(e))
                : [],
            streamOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.streamOutputs)
                ? object.streamOutputs.map((e) => exports.StreamOutput.fromJSON(e))
                : [],
            segmentOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentOutputs)
                ? object.segmentOutputs.map((e) => exports.SegmentedFileOutput.fromJSON(e))
                : [],
            imageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.imageOutputs)
                ? object.imageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.identity !== undefined && (obj.identity = message.identity);
        message.screenShare !== undefined && (obj.screenShare = message.screenShare);
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? encodingOptionsPresetToJSON(message.preset) : undefined);
        message.advanced !== undefined &&
            (obj.advanced = message.advanced ? exports.EncodingOptions.toJSON(message.advanced) : undefined);
        if (message.fileOutputs) {
            obj.fileOutputs = message.fileOutputs.map((e) => e ? exports.EncodedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.fileOutputs = [];
        }
        if (message.streamOutputs) {
            obj.streamOutputs = message.streamOutputs.map((e) => e ? exports.StreamOutput.toJSON(e) : undefined);
        }
        else {
            obj.streamOutputs = [];
        }
        if (message.segmentOutputs) {
            obj.segmentOutputs = message.segmentOutputs.map((e) => e ? exports.SegmentedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.segmentOutputs = [];
        }
        if (message.imageOutputs) {
            obj.imageOutputs = message.imageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.imageOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseParticipantEgressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.screenShare = (_c = object.screenShare) !== null && _c !== void 0 ? _c : false;
        message.preset = (_d = object.preset) !== null && _d !== void 0 ? _d : undefined;
        message.advanced = (object.advanced !== undefined && object.advanced !== null)
            ? exports.EncodingOptions.fromPartial(object.advanced)
            : undefined;
        message.fileOutputs = ((_e = object.fileOutputs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EncodedFileOutput.fromPartial(e))) || [];
        message.streamOutputs = ((_f = object.streamOutputs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.StreamOutput.fromPartial(e))) || [];
        message.segmentOutputs = ((_g = object.segmentOutputs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.SegmentedFileOutput.fromPartial(e))) || [];
        message.imageOutputs = ((_h = object.imageOutputs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTrackCompositeEgressRequest() {
    return {
        roomName: "",
        audioTrackId: "",
        videoTrackId: "",
        file: undefined,
        stream: undefined,
        segments: undefined,
        preset: undefined,
        advanced: undefined,
        fileOutputs: [],
        streamOutputs: [],
        segmentOutputs: [],
        imageOutputs: [],
    };
}
exports.TrackCompositeEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.audioTrackId !== undefined && message.audioTrackId !== "") {
            writer.uint32(18).string(message.audioTrackId);
        }
        if (message.videoTrackId !== undefined && message.videoTrackId !== "") {
            writer.uint32(26).string(message.videoTrackId);
        }
        if (message.file !== undefined) {
            exports.EncodedFileOutput.encode(message.file, writer.uint32(34).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamOutput.encode(message.stream, writer.uint32(42).fork()).ldelim();
        }
        if (message.segments !== undefined) {
            exports.SegmentedFileOutput.encode(message.segments, writer.uint32(66).fork()).ldelim();
        }
        if (message.preset !== undefined) {
            writer.uint32(48).int32(message.preset);
        }
        if (message.advanced !== undefined) {
            exports.EncodingOptions.encode(message.advanced, writer.uint32(58).fork()).ldelim();
        }
        if (message.fileOutputs !== undefined && message.fileOutputs.length !== 0) {
            for (const v of message.fileOutputs) {
                exports.EncodedFileOutput.encode(v, writer.uint32(90).fork()).ldelim();
            }
        }
        if (message.streamOutputs !== undefined && message.streamOutputs.length !== 0) {
            for (const v of message.streamOutputs) {
                exports.StreamOutput.encode(v, writer.uint32(98).fork()).ldelim();
            }
        }
        if (message.segmentOutputs !== undefined && message.segmentOutputs.length !== 0) {
            for (const v of message.segmentOutputs) {
                exports.SegmentedFileOutput.encode(v, writer.uint32(106).fork()).ldelim();
            }
        }
        if (message.imageOutputs !== undefined && message.imageOutputs.length !== 0) {
            for (const v of message.imageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(114).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrackCompositeEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.audioTrackId = reader.string();
                    break;
                case 3:
                    message.videoTrackId = reader.string();
                    break;
                case 4:
                    message.file = exports.EncodedFileOutput.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.stream = exports.StreamOutput.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.segments = exports.SegmentedFileOutput.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.preset = reader.int32();
                    break;
                case 7:
                    message.advanced = exports.EncodingOptions.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.fileOutputs.push(exports.EncodedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.streamOutputs.push(exports.StreamOutput.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.segmentOutputs.push(exports.SegmentedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.imageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
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
            audioTrackId: isSet(object.audioTrackId) ? String(object.audioTrackId) : "",
            videoTrackId: isSet(object.videoTrackId) ? String(object.videoTrackId) : "",
            file: isSet(object.file) ? exports.EncodedFileOutput.fromJSON(object.file) : undefined,
            stream: isSet(object.stream) ? exports.StreamOutput.fromJSON(object.stream) : undefined,
            segments: isSet(object.segments) ? exports.SegmentedFileOutput.fromJSON(object.segments) : undefined,
            preset: isSet(object.preset) ? encodingOptionsPresetFromJSON(object.preset) : undefined,
            advanced: isSet(object.advanced) ? exports.EncodingOptions.fromJSON(object.advanced) : undefined,
            fileOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.fileOutputs)
                ? object.fileOutputs.map((e) => exports.EncodedFileOutput.fromJSON(e))
                : [],
            streamOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.streamOutputs)
                ? object.streamOutputs.map((e) => exports.StreamOutput.fromJSON(e))
                : [],
            segmentOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentOutputs)
                ? object.segmentOutputs.map((e) => exports.SegmentedFileOutput.fromJSON(e))
                : [],
            imageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.imageOutputs)
                ? object.imageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.audioTrackId !== undefined && (obj.audioTrackId = message.audioTrackId);
        message.videoTrackId !== undefined && (obj.videoTrackId = message.videoTrackId);
        message.file !== undefined && (obj.file = message.file ? exports.EncodedFileOutput.toJSON(message.file) : undefined);
        message.stream !== undefined && (obj.stream = message.stream ? exports.StreamOutput.toJSON(message.stream) : undefined);
        message.segments !== undefined &&
            (obj.segments = message.segments ? exports.SegmentedFileOutput.toJSON(message.segments) : undefined);
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? encodingOptionsPresetToJSON(message.preset) : undefined);
        message.advanced !== undefined &&
            (obj.advanced = message.advanced ? exports.EncodingOptions.toJSON(message.advanced) : undefined);
        if (message.fileOutputs) {
            obj.fileOutputs = message.fileOutputs.map((e) => e ? exports.EncodedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.fileOutputs = [];
        }
        if (message.streamOutputs) {
            obj.streamOutputs = message.streamOutputs.map((e) => e ? exports.StreamOutput.toJSON(e) : undefined);
        }
        else {
            obj.streamOutputs = [];
        }
        if (message.segmentOutputs) {
            obj.segmentOutputs = message.segmentOutputs.map((e) => e ? exports.SegmentedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.segmentOutputs = [];
        }
        if (message.imageOutputs) {
            obj.imageOutputs = message.imageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.imageOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseTrackCompositeEgressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.audioTrackId = (_b = object.audioTrackId) !== null && _b !== void 0 ? _b : "";
        message.videoTrackId = (_c = object.videoTrackId) !== null && _c !== void 0 ? _c : "";
        message.file = (object.file !== undefined && object.file !== null)
            ? exports.EncodedFileOutput.fromPartial(object.file)
            : undefined;
        message.stream = (object.stream !== undefined && object.stream !== null)
            ? exports.StreamOutput.fromPartial(object.stream)
            : undefined;
        message.segments = (object.segments !== undefined && object.segments !== null)
            ? exports.SegmentedFileOutput.fromPartial(object.segments)
            : undefined;
        message.preset = (_d = object.preset) !== null && _d !== void 0 ? _d : undefined;
        message.advanced = (object.advanced !== undefined && object.advanced !== null)
            ? exports.EncodingOptions.fromPartial(object.advanced)
            : undefined;
        message.fileOutputs = ((_e = object.fileOutputs) === null || _e === void 0 ? void 0 : _e.map((e) => exports.EncodedFileOutput.fromPartial(e))) || [];
        message.streamOutputs = ((_f = object.streamOutputs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.StreamOutput.fromPartial(e))) || [];
        message.segmentOutputs = ((_g = object.segmentOutputs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.SegmentedFileOutput.fromPartial(e))) || [];
        message.imageOutputs = ((_h = object.imageOutputs) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTrackEgressRequest() {
    return { roomName: "", trackId: "", file: undefined, websocketUrl: undefined };
}
exports.TrackEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.trackId !== undefined && message.trackId !== "") {
            writer.uint32(18).string(message.trackId);
        }
        if (message.file !== undefined) {
            exports.DirectFileOutput.encode(message.file, writer.uint32(26).fork()).ldelim();
        }
        if (message.websocketUrl !== undefined) {
            writer.uint32(34).string(message.websocketUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrackEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.trackId = reader.string();
                    break;
                case 3:
                    message.file = exports.DirectFileOutput.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.websocketUrl = reader.string();
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
            trackId: isSet(object.trackId) ? String(object.trackId) : "",
            file: isSet(object.file) ? exports.DirectFileOutput.fromJSON(object.file) : undefined,
            websocketUrl: isSet(object.websocketUrl) ? String(object.websocketUrl) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.trackId !== undefined && (obj.trackId = message.trackId);
        message.file !== undefined && (obj.file = message.file ? exports.DirectFileOutput.toJSON(message.file) : undefined);
        message.websocketUrl !== undefined && (obj.websocketUrl = message.websocketUrl);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTrackEgressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.trackId = (_b = object.trackId) !== null && _b !== void 0 ? _b : "";
        message.file = (object.file !== undefined && object.file !== null)
            ? exports.DirectFileOutput.fromPartial(object.file)
            : undefined;
        message.websocketUrl = (_c = object.websocketUrl) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseEncodedFileOutput() {
    return {
        fileType: 0,
        filepath: "",
        disableManifest: false,
        s3: undefined,
        gcp: undefined,
        azure: undefined,
        aliOSS: undefined,
    };
}
exports.EncodedFileOutput = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fileType !== undefined && message.fileType !== 0) {
            writer.uint32(8).int32(message.fileType);
        }
        if (message.filepath !== undefined && message.filepath !== "") {
            writer.uint32(18).string(message.filepath);
        }
        if (message.disableManifest === true) {
            writer.uint32(48).bool(message.disableManifest);
        }
        if (message.s3 !== undefined) {
            exports.S3Upload.encode(message.s3, writer.uint32(26).fork()).ldelim();
        }
        if (message.gcp !== undefined) {
            exports.GCPUpload.encode(message.gcp, writer.uint32(34).fork()).ldelim();
        }
        if (message.azure !== undefined) {
            exports.AzureBlobUpload.encode(message.azure, writer.uint32(42).fork()).ldelim();
        }
        if (message.aliOSS !== undefined) {
            exports.AliOSSUpload.encode(message.aliOSS, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncodedFileOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileType = reader.int32();
                    break;
                case 2:
                    message.filepath = reader.string();
                    break;
                case 6:
                    message.disableManifest = reader.bool();
                    break;
                case 3:
                    message.s3 = exports.S3Upload.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.gcp = exports.GCPUpload.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.azure = exports.AzureBlobUpload.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.aliOSS = exports.AliOSSUpload.decode(reader, reader.uint32());
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
            fileType: isSet(object.fileType) ? encodedFileTypeFromJSON(object.fileType) : 0,
            filepath: isSet(object.filepath) ? String(object.filepath) : "",
            disableManifest: isSet(object.disableManifest) ? Boolean(object.disableManifest) : false,
            s3: isSet(object.s3) ? exports.S3Upload.fromJSON(object.s3) : undefined,
            gcp: isSet(object.gcp) ? exports.GCPUpload.fromJSON(object.gcp) : undefined,
            azure: isSet(object.azure) ? exports.AzureBlobUpload.fromJSON(object.azure) : undefined,
            aliOSS: isSet(object.aliOSS) ? exports.AliOSSUpload.fromJSON(object.aliOSS) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fileType !== undefined && (obj.fileType = encodedFileTypeToJSON(message.fileType));
        message.filepath !== undefined && (obj.filepath = message.filepath);
        message.disableManifest !== undefined && (obj.disableManifest = message.disableManifest);
        message.s3 !== undefined && (obj.s3 = message.s3 ? exports.S3Upload.toJSON(message.s3) : undefined);
        message.gcp !== undefined && (obj.gcp = message.gcp ? exports.GCPUpload.toJSON(message.gcp) : undefined);
        message.azure !== undefined && (obj.azure = message.azure ? exports.AzureBlobUpload.toJSON(message.azure) : undefined);
        message.aliOSS !== undefined && (obj.aliOSS = message.aliOSS ? exports.AliOSSUpload.toJSON(message.aliOSS) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEncodedFileOutput();
        message.fileType = (_a = object.fileType) !== null && _a !== void 0 ? _a : 0;
        message.filepath = (_b = object.filepath) !== null && _b !== void 0 ? _b : "";
        message.disableManifest = (_c = object.disableManifest) !== null && _c !== void 0 ? _c : false;
        message.s3 = (object.s3 !== undefined && object.s3 !== null) ? exports.S3Upload.fromPartial(object.s3) : undefined;
        message.gcp = (object.gcp !== undefined && object.gcp !== null) ? exports.GCPUpload.fromPartial(object.gcp) : undefined;
        message.azure = (object.azure !== undefined && object.azure !== null)
            ? exports.AzureBlobUpload.fromPartial(object.azure)
            : undefined;
        message.aliOSS = (object.aliOSS !== undefined && object.aliOSS !== null)
            ? exports.AliOSSUpload.fromPartial(object.aliOSS)
            : undefined;
        return message;
    },
};
function createBaseSegmentedFileOutput() {
    return {
        protocol: 0,
        filenamePrefix: "",
        playlistName: "",
        livePlaylistName: "",
        segmentDuration: 0,
        filenameSuffix: 0,
        disableManifest: false,
        s3: undefined,
        gcp: undefined,
        azure: undefined,
        aliOSS: undefined,
    };
}
exports.SegmentedFileOutput = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.protocol !== undefined && message.protocol !== 0) {
            writer.uint32(8).int32(message.protocol);
        }
        if (message.filenamePrefix !== undefined && message.filenamePrefix !== "") {
            writer.uint32(18).string(message.filenamePrefix);
        }
        if (message.playlistName !== undefined && message.playlistName !== "") {
            writer.uint32(26).string(message.playlistName);
        }
        if (message.livePlaylistName !== undefined && message.livePlaylistName !== "") {
            writer.uint32(90).string(message.livePlaylistName);
        }
        if (message.segmentDuration !== undefined && message.segmentDuration !== 0) {
            writer.uint32(32).uint32(message.segmentDuration);
        }
        if (message.filenameSuffix !== undefined && message.filenameSuffix !== 0) {
            writer.uint32(80).int32(message.filenameSuffix);
        }
        if (message.disableManifest === true) {
            writer.uint32(64).bool(message.disableManifest);
        }
        if (message.s3 !== undefined) {
            exports.S3Upload.encode(message.s3, writer.uint32(42).fork()).ldelim();
        }
        if (message.gcp !== undefined) {
            exports.GCPUpload.encode(message.gcp, writer.uint32(50).fork()).ldelim();
        }
        if (message.azure !== undefined) {
            exports.AzureBlobUpload.encode(message.azure, writer.uint32(58).fork()).ldelim();
        }
        if (message.aliOSS !== undefined) {
            exports.AliOSSUpload.encode(message.aliOSS, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSegmentedFileOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.int32();
                    break;
                case 2:
                    message.filenamePrefix = reader.string();
                    break;
                case 3:
                    message.playlistName = reader.string();
                    break;
                case 11:
                    message.livePlaylistName = reader.string();
                    break;
                case 4:
                    message.segmentDuration = reader.uint32();
                    break;
                case 10:
                    message.filenameSuffix = reader.int32();
                    break;
                case 8:
                    message.disableManifest = reader.bool();
                    break;
                case 5:
                    message.s3 = exports.S3Upload.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.gcp = exports.GCPUpload.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.azure = exports.AzureBlobUpload.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.aliOSS = exports.AliOSSUpload.decode(reader, reader.uint32());
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
            protocol: isSet(object.protocol) ? segmentedFileProtocolFromJSON(object.protocol) : 0,
            filenamePrefix: isSet(object.filenamePrefix) ? String(object.filenamePrefix) : "",
            playlistName: isSet(object.playlistName) ? String(object.playlistName) : "",
            livePlaylistName: isSet(object.livePlaylistName) ? String(object.livePlaylistName) : "",
            segmentDuration: isSet(object.segmentDuration) ? Number(object.segmentDuration) : 0,
            filenameSuffix: isSet(object.filenameSuffix) ? segmentedFileSuffixFromJSON(object.filenameSuffix) : 0,
            disableManifest: isSet(object.disableManifest) ? Boolean(object.disableManifest) : false,
            s3: isSet(object.s3) ? exports.S3Upload.fromJSON(object.s3) : undefined,
            gcp: isSet(object.gcp) ? exports.GCPUpload.fromJSON(object.gcp) : undefined,
            azure: isSet(object.azure) ? exports.AzureBlobUpload.fromJSON(object.azure) : undefined,
            aliOSS: isSet(object.aliOSS) ? exports.AliOSSUpload.fromJSON(object.aliOSS) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined && (obj.protocol = segmentedFileProtocolToJSON(message.protocol));
        message.filenamePrefix !== undefined && (obj.filenamePrefix = message.filenamePrefix);
        message.playlistName !== undefined && (obj.playlistName = message.playlistName);
        message.livePlaylistName !== undefined && (obj.livePlaylistName = message.livePlaylistName);
        message.segmentDuration !== undefined && (obj.segmentDuration = Math.round(message.segmentDuration));
        message.filenameSuffix !== undefined && (obj.filenameSuffix = segmentedFileSuffixToJSON(message.filenameSuffix));
        message.disableManifest !== undefined && (obj.disableManifest = message.disableManifest);
        message.s3 !== undefined && (obj.s3 = message.s3 ? exports.S3Upload.toJSON(message.s3) : undefined);
        message.gcp !== undefined && (obj.gcp = message.gcp ? exports.GCPUpload.toJSON(message.gcp) : undefined);
        message.azure !== undefined && (obj.azure = message.azure ? exports.AzureBlobUpload.toJSON(message.azure) : undefined);
        message.aliOSS !== undefined && (obj.aliOSS = message.aliOSS ? exports.AliOSSUpload.toJSON(message.aliOSS) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseSegmentedFileOutput();
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : 0;
        message.filenamePrefix = (_b = object.filenamePrefix) !== null && _b !== void 0 ? _b : "";
        message.playlistName = (_c = object.playlistName) !== null && _c !== void 0 ? _c : "";
        message.livePlaylistName = (_d = object.livePlaylistName) !== null && _d !== void 0 ? _d : "";
        message.segmentDuration = (_e = object.segmentDuration) !== null && _e !== void 0 ? _e : 0;
        message.filenameSuffix = (_f = object.filenameSuffix) !== null && _f !== void 0 ? _f : 0;
        message.disableManifest = (_g = object.disableManifest) !== null && _g !== void 0 ? _g : false;
        message.s3 = (object.s3 !== undefined && object.s3 !== null) ? exports.S3Upload.fromPartial(object.s3) : undefined;
        message.gcp = (object.gcp !== undefined && object.gcp !== null) ? exports.GCPUpload.fromPartial(object.gcp) : undefined;
        message.azure = (object.azure !== undefined && object.azure !== null)
            ? exports.AzureBlobUpload.fromPartial(object.azure)
            : undefined;
        message.aliOSS = (object.aliOSS !== undefined && object.aliOSS !== null)
            ? exports.AliOSSUpload.fromPartial(object.aliOSS)
            : undefined;
        return message;
    },
};
function createBaseDirectFileOutput() {
    return { filepath: "", disableManifest: false, s3: undefined, gcp: undefined, azure: undefined, aliOSS: undefined };
}
exports.DirectFileOutput = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filepath !== undefined && message.filepath !== "") {
            writer.uint32(10).string(message.filepath);
        }
        if (message.disableManifest === true) {
            writer.uint32(40).bool(message.disableManifest);
        }
        if (message.s3 !== undefined) {
            exports.S3Upload.encode(message.s3, writer.uint32(18).fork()).ldelim();
        }
        if (message.gcp !== undefined) {
            exports.GCPUpload.encode(message.gcp, writer.uint32(26).fork()).ldelim();
        }
        if (message.azure !== undefined) {
            exports.AzureBlobUpload.encode(message.azure, writer.uint32(34).fork()).ldelim();
        }
        if (message.aliOSS !== undefined) {
            exports.AliOSSUpload.encode(message.aliOSS, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDirectFileOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filepath = reader.string();
                    break;
                case 5:
                    message.disableManifest = reader.bool();
                    break;
                case 2:
                    message.s3 = exports.S3Upload.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gcp = exports.GCPUpload.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.azure = exports.AzureBlobUpload.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.aliOSS = exports.AliOSSUpload.decode(reader, reader.uint32());
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
            filepath: isSet(object.filepath) ? String(object.filepath) : "",
            disableManifest: isSet(object.disableManifest) ? Boolean(object.disableManifest) : false,
            s3: isSet(object.s3) ? exports.S3Upload.fromJSON(object.s3) : undefined,
            gcp: isSet(object.gcp) ? exports.GCPUpload.fromJSON(object.gcp) : undefined,
            azure: isSet(object.azure) ? exports.AzureBlobUpload.fromJSON(object.azure) : undefined,
            aliOSS: isSet(object.aliOSS) ? exports.AliOSSUpload.fromJSON(object.aliOSS) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.filepath !== undefined && (obj.filepath = message.filepath);
        message.disableManifest !== undefined && (obj.disableManifest = message.disableManifest);
        message.s3 !== undefined && (obj.s3 = message.s3 ? exports.S3Upload.toJSON(message.s3) : undefined);
        message.gcp !== undefined && (obj.gcp = message.gcp ? exports.GCPUpload.toJSON(message.gcp) : undefined);
        message.azure !== undefined && (obj.azure = message.azure ? exports.AzureBlobUpload.toJSON(message.azure) : undefined);
        message.aliOSS !== undefined && (obj.aliOSS = message.aliOSS ? exports.AliOSSUpload.toJSON(message.aliOSS) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDirectFileOutput();
        message.filepath = (_a = object.filepath) !== null && _a !== void 0 ? _a : "";
        message.disableManifest = (_b = object.disableManifest) !== null && _b !== void 0 ? _b : false;
        message.s3 = (object.s3 !== undefined && object.s3 !== null) ? exports.S3Upload.fromPartial(object.s3) : undefined;
        message.gcp = (object.gcp !== undefined && object.gcp !== null) ? exports.GCPUpload.fromPartial(object.gcp) : undefined;
        message.azure = (object.azure !== undefined && object.azure !== null)
            ? exports.AzureBlobUpload.fromPartial(object.azure)
            : undefined;
        message.aliOSS = (object.aliOSS !== undefined && object.aliOSS !== null)
            ? exports.AliOSSUpload.fromPartial(object.aliOSS)
            : undefined;
        return message;
    },
};
function createBaseImageOutput() {
    return {
        captureInterval: 0,
        width: 0,
        height: 0,
        filenamePrefix: "",
        filenameSuffix: 0,
        imageCodec: 0,
        disableManifest: false,
        s3: undefined,
        gcp: undefined,
        azure: undefined,
        aliOSS: undefined,
    };
}
exports.ImageOutput = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.captureInterval !== undefined && message.captureInterval !== 0) {
            writer.uint32(8).uint32(message.captureInterval);
        }
        if (message.width !== undefined && message.width !== 0) {
            writer.uint32(16).int32(message.width);
        }
        if (message.height !== undefined && message.height !== 0) {
            writer.uint32(24).int32(message.height);
        }
        if (message.filenamePrefix !== undefined && message.filenamePrefix !== "") {
            writer.uint32(34).string(message.filenamePrefix);
        }
        if (message.filenameSuffix !== undefined && message.filenameSuffix !== 0) {
            writer.uint32(40).int32(message.filenameSuffix);
        }
        if (message.imageCodec !== undefined && message.imageCodec !== 0) {
            writer.uint32(48).int32(message.imageCodec);
        }
        if (message.disableManifest === true) {
            writer.uint32(56).bool(message.disableManifest);
        }
        if (message.s3 !== undefined) {
            exports.S3Upload.encode(message.s3, writer.uint32(66).fork()).ldelim();
        }
        if (message.gcp !== undefined) {
            exports.GCPUpload.encode(message.gcp, writer.uint32(74).fork()).ldelim();
        }
        if (message.azure !== undefined) {
            exports.AzureBlobUpload.encode(message.azure, writer.uint32(82).fork()).ldelim();
        }
        if (message.aliOSS !== undefined) {
            exports.AliOSSUpload.encode(message.aliOSS, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseImageOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.captureInterval = reader.uint32();
                    break;
                case 2:
                    message.width = reader.int32();
                    break;
                case 3:
                    message.height = reader.int32();
                    break;
                case 4:
                    message.filenamePrefix = reader.string();
                    break;
                case 5:
                    message.filenameSuffix = reader.int32();
                    break;
                case 6:
                    message.imageCodec = reader.int32();
                    break;
                case 7:
                    message.disableManifest = reader.bool();
                    break;
                case 8:
                    message.s3 = exports.S3Upload.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.gcp = exports.GCPUpload.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.azure = exports.AzureBlobUpload.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.aliOSS = exports.AliOSSUpload.decode(reader, reader.uint32());
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
            captureInterval: isSet(object.captureInterval) ? Number(object.captureInterval) : 0,
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            filenamePrefix: isSet(object.filenamePrefix) ? String(object.filenamePrefix) : "",
            filenameSuffix: isSet(object.filenameSuffix) ? imageFileSuffixFromJSON(object.filenameSuffix) : 0,
            imageCodec: isSet(object.imageCodec) ? livekit_models_1.imageCodecFromJSON(object.imageCodec) : 0,
            disableManifest: isSet(object.disableManifest) ? Boolean(object.disableManifest) : false,
            s3: isSet(object.s3) ? exports.S3Upload.fromJSON(object.s3) : undefined,
            gcp: isSet(object.gcp) ? exports.GCPUpload.fromJSON(object.gcp) : undefined,
            azure: isSet(object.azure) ? exports.AzureBlobUpload.fromJSON(object.azure) : undefined,
            aliOSS: isSet(object.aliOSS) ? exports.AliOSSUpload.fromJSON(object.aliOSS) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.captureInterval !== undefined && (obj.captureInterval = Math.round(message.captureInterval));
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.filenamePrefix !== undefined && (obj.filenamePrefix = message.filenamePrefix);
        message.filenameSuffix !== undefined && (obj.filenameSuffix = imageFileSuffixToJSON(message.filenameSuffix));
        message.imageCodec !== undefined && (obj.imageCodec = livekit_models_1.imageCodecToJSON(message.imageCodec));
        message.disableManifest !== undefined && (obj.disableManifest = message.disableManifest);
        message.s3 !== undefined && (obj.s3 = message.s3 ? exports.S3Upload.toJSON(message.s3) : undefined);
        message.gcp !== undefined && (obj.gcp = message.gcp ? exports.GCPUpload.toJSON(message.gcp) : undefined);
        message.azure !== undefined && (obj.azure = message.azure ? exports.AzureBlobUpload.toJSON(message.azure) : undefined);
        message.aliOSS !== undefined && (obj.aliOSS = message.aliOSS ? exports.AliOSSUpload.toJSON(message.aliOSS) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseImageOutput();
        message.captureInterval = (_a = object.captureInterval) !== null && _a !== void 0 ? _a : 0;
        message.width = (_b = object.width) !== null && _b !== void 0 ? _b : 0;
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : 0;
        message.filenamePrefix = (_d = object.filenamePrefix) !== null && _d !== void 0 ? _d : "";
        message.filenameSuffix = (_e = object.filenameSuffix) !== null && _e !== void 0 ? _e : 0;
        message.imageCodec = (_f = object.imageCodec) !== null && _f !== void 0 ? _f : 0;
        message.disableManifest = (_g = object.disableManifest) !== null && _g !== void 0 ? _g : false;
        message.s3 = (object.s3 !== undefined && object.s3 !== null) ? exports.S3Upload.fromPartial(object.s3) : undefined;
        message.gcp = (object.gcp !== undefined && object.gcp !== null) ? exports.GCPUpload.fromPartial(object.gcp) : undefined;
        message.azure = (object.azure !== undefined && object.azure !== null)
            ? exports.AzureBlobUpload.fromPartial(object.azure)
            : undefined;
        message.aliOSS = (object.aliOSS !== undefined && object.aliOSS !== null)
            ? exports.AliOSSUpload.fromPartial(object.aliOSS)
            : undefined;
        return message;
    },
};
function createBaseS3Upload() {
    return {
        accessKey: "",
        secret: "",
        region: "",
        endpoint: "",
        bucket: "",
        forcePathStyle: false,
        metadata: {},
        tagging: "",
    };
}
exports.S3Upload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKey !== undefined && message.accessKey !== "") {
            writer.uint32(10).string(message.accessKey);
        }
        if (message.secret !== undefined && message.secret !== "") {
            writer.uint32(18).string(message.secret);
        }
        if (message.region !== undefined && message.region !== "") {
            writer.uint32(26).string(message.region);
        }
        if (message.endpoint !== undefined && message.endpoint !== "") {
            writer.uint32(34).string(message.endpoint);
        }
        if (message.bucket !== undefined && message.bucket !== "") {
            writer.uint32(42).string(message.bucket);
        }
        if (message.forcePathStyle === true) {
            writer.uint32(48).bool(message.forcePathStyle);
        }
        Object.entries(message.metadata || {}).forEach(([key, value]) => {
            exports.S3Upload_MetadataEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
        });
        if (message.tagging !== undefined && message.tagging !== "") {
            writer.uint32(66).string(message.tagging);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseS3Upload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = reader.string();
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                case 3:
                    message.region = reader.string();
                    break;
                case 4:
                    message.endpoint = reader.string();
                    break;
                case 5:
                    message.bucket = reader.string();
                    break;
                case 6:
                    message.forcePathStyle = reader.bool();
                    break;
                case 7:
                    const entry7 = exports.S3Upload_MetadataEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.metadata[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.tagging = reader.string();
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
            accessKey: isSet(object.accessKey) ? String(object.accessKey) : "",
            secret: isSet(object.secret) ? String(object.secret) : "",
            region: isSet(object.region) ? String(object.region) : "",
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            bucket: isSet(object.bucket) ? String(object.bucket) : "",
            forcePathStyle: isSet(object.forcePathStyle) ? Boolean(object.forcePathStyle) : false,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            tagging: isSet(object.tagging) ? String(object.tagging) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessKey !== undefined && (obj.accessKey = message.accessKey);
        message.secret !== undefined && (obj.secret = message.secret);
        message.region !== undefined && (obj.region = message.region);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        message.forcePathStyle !== undefined && (obj.forcePathStyle = message.forcePathStyle);
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(([k, v]) => {
                obj.metadata[k] = v;
            });
        }
        message.tagging !== undefined && (obj.tagging = message.tagging);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseS3Upload();
        message.accessKey = (_a = object.accessKey) !== null && _a !== void 0 ? _a : "";
        message.secret = (_b = object.secret) !== null && _b !== void 0 ? _b : "";
        message.region = (_c = object.region) !== null && _c !== void 0 ? _c : "";
        message.endpoint = (_d = object.endpoint) !== null && _d !== void 0 ? _d : "";
        message.bucket = (_e = object.bucket) !== null && _e !== void 0 ? _e : "";
        message.forcePathStyle = (_f = object.forcePathStyle) !== null && _f !== void 0 ? _f : false;
        message.metadata = Object.entries((_g = object.metadata) !== null && _g !== void 0 ? _g : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.tagging = (_h = object.tagging) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseS3Upload_MetadataEntry() {
    return { key: "", value: "" };
}
exports.S3Upload_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseS3Upload_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseS3Upload_MetadataEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGCPUpload() {
    return { credentials: "", bucket: "" };
}
exports.GCPUpload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.credentials !== undefined && message.credentials !== "") {
            writer.uint32(10).string(message.credentials);
        }
        if (message.bucket !== undefined && message.bucket !== "") {
            writer.uint32(18).string(message.bucket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGCPUpload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.credentials = reader.string();
                    break;
                case 2:
                    message.bucket = reader.string();
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
            credentials: isSet(object.credentials) ? String(object.credentials) : "",
            bucket: isSet(object.bucket) ? String(object.bucket) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.credentials !== undefined && (obj.credentials = message.credentials);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGCPUpload();
        message.credentials = (_a = object.credentials) !== null && _a !== void 0 ? _a : "";
        message.bucket = (_b = object.bucket) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAzureBlobUpload() {
    return { accountName: "", accountKey: "", containerName: "" };
}
exports.AzureBlobUpload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accountName !== undefined && message.accountName !== "") {
            writer.uint32(10).string(message.accountName);
        }
        if (message.accountKey !== undefined && message.accountKey !== "") {
            writer.uint32(18).string(message.accountKey);
        }
        if (message.containerName !== undefined && message.containerName !== "") {
            writer.uint32(26).string(message.containerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAzureBlobUpload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountName = reader.string();
                    break;
                case 2:
                    message.accountKey = reader.string();
                    break;
                case 3:
                    message.containerName = reader.string();
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
            accountName: isSet(object.accountName) ? String(object.accountName) : "",
            accountKey: isSet(object.accountKey) ? String(object.accountKey) : "",
            containerName: isSet(object.containerName) ? String(object.containerName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountName !== undefined && (obj.accountName = message.accountName);
        message.accountKey !== undefined && (obj.accountKey = message.accountKey);
        message.containerName !== undefined && (obj.containerName = message.containerName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAzureBlobUpload();
        message.accountName = (_a = object.accountName) !== null && _a !== void 0 ? _a : "";
        message.accountKey = (_b = object.accountKey) !== null && _b !== void 0 ? _b : "";
        message.containerName = (_c = object.containerName) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseAliOSSUpload() {
    return { accessKey: "", secret: "", region: "", endpoint: "", bucket: "" };
}
exports.AliOSSUpload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.accessKey !== undefined && message.accessKey !== "") {
            writer.uint32(10).string(message.accessKey);
        }
        if (message.secret !== undefined && message.secret !== "") {
            writer.uint32(18).string(message.secret);
        }
        if (message.region !== undefined && message.region !== "") {
            writer.uint32(26).string(message.region);
        }
        if (message.endpoint !== undefined && message.endpoint !== "") {
            writer.uint32(34).string(message.endpoint);
        }
        if (message.bucket !== undefined && message.bucket !== "") {
            writer.uint32(42).string(message.bucket);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAliOSSUpload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accessKey = reader.string();
                    break;
                case 2:
                    message.secret = reader.string();
                    break;
                case 3:
                    message.region = reader.string();
                    break;
                case 4:
                    message.endpoint = reader.string();
                    break;
                case 5:
                    message.bucket = reader.string();
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
            accessKey: isSet(object.accessKey) ? String(object.accessKey) : "",
            secret: isSet(object.secret) ? String(object.secret) : "",
            region: isSet(object.region) ? String(object.region) : "",
            endpoint: isSet(object.endpoint) ? String(object.endpoint) : "",
            bucket: isSet(object.bucket) ? String(object.bucket) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accessKey !== undefined && (obj.accessKey = message.accessKey);
        message.secret !== undefined && (obj.secret = message.secret);
        message.region !== undefined && (obj.region = message.region);
        message.endpoint !== undefined && (obj.endpoint = message.endpoint);
        message.bucket !== undefined && (obj.bucket = message.bucket);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAliOSSUpload();
        message.accessKey = (_a = object.accessKey) !== null && _a !== void 0 ? _a : "";
        message.secret = (_b = object.secret) !== null && _b !== void 0 ? _b : "";
        message.region = (_c = object.region) !== null && _c !== void 0 ? _c : "";
        message.endpoint = (_d = object.endpoint) !== null && _d !== void 0 ? _d : "";
        message.bucket = (_e = object.bucket) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseStreamOutput() {
    return { protocol: 0, urls: [] };
}
exports.StreamOutput = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.protocol !== undefined && message.protocol !== 0) {
            writer.uint32(8).int32(message.protocol);
        }
        if (message.urls !== undefined && message.urls.length !== 0) {
            for (const v of message.urls) {
                writer.uint32(18).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamOutput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol = reader.int32();
                    break;
                case 2:
                    message.urls.push(reader.string());
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
            protocol: isSet(object.protocol) ? streamProtocolFromJSON(object.protocol) : 0,
            urls: Array.isArray(object === null || object === void 0 ? void 0 : object.urls) ? object.urls.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol !== undefined && (obj.protocol = streamProtocolToJSON(message.protocol));
        if (message.urls) {
            obj.urls = message.urls.map((e) => e);
        }
        else {
            obj.urls = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStreamOutput();
        message.protocol = (_a = object.protocol) !== null && _a !== void 0 ? _a : 0;
        message.urls = ((_b = object.urls) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseEncodingOptions() {
    return {
        width: 0,
        height: 0,
        depth: 0,
        framerate: 0,
        audioCodec: 0,
        audioBitrate: 0,
        audioFrequency: 0,
        videoCodec: 0,
        videoBitrate: 0,
        keyFrameInterval: 0,
    };
}
exports.EncodingOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.width !== undefined && message.width !== 0) {
            writer.uint32(8).int32(message.width);
        }
        if (message.height !== undefined && message.height !== 0) {
            writer.uint32(16).int32(message.height);
        }
        if (message.depth !== undefined && message.depth !== 0) {
            writer.uint32(24).int32(message.depth);
        }
        if (message.framerate !== undefined && message.framerate !== 0) {
            writer.uint32(32).int32(message.framerate);
        }
        if (message.audioCodec !== undefined && message.audioCodec !== 0) {
            writer.uint32(40).int32(message.audioCodec);
        }
        if (message.audioBitrate !== undefined && message.audioBitrate !== 0) {
            writer.uint32(48).int32(message.audioBitrate);
        }
        if (message.audioFrequency !== undefined && message.audioFrequency !== 0) {
            writer.uint32(56).int32(message.audioFrequency);
        }
        if (message.videoCodec !== undefined && message.videoCodec !== 0) {
            writer.uint32(64).int32(message.videoCodec);
        }
        if (message.videoBitrate !== undefined && message.videoBitrate !== 0) {
            writer.uint32(72).int32(message.videoBitrate);
        }
        if (message.keyFrameInterval !== undefined && message.keyFrameInterval !== 0) {
            writer.uint32(81).double(message.keyFrameInterval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncodingOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.width = reader.int32();
                    break;
                case 2:
                    message.height = reader.int32();
                    break;
                case 3:
                    message.depth = reader.int32();
                    break;
                case 4:
                    message.framerate = reader.int32();
                    break;
                case 5:
                    message.audioCodec = reader.int32();
                    break;
                case 6:
                    message.audioBitrate = reader.int32();
                    break;
                case 7:
                    message.audioFrequency = reader.int32();
                    break;
                case 8:
                    message.videoCodec = reader.int32();
                    break;
                case 9:
                    message.videoBitrate = reader.int32();
                    break;
                case 10:
                    message.keyFrameInterval = reader.double();
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
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            depth: isSet(object.depth) ? Number(object.depth) : 0,
            framerate: isSet(object.framerate) ? Number(object.framerate) : 0,
            audioCodec: isSet(object.audioCodec) ? livekit_models_1.audioCodecFromJSON(object.audioCodec) : 0,
            audioBitrate: isSet(object.audioBitrate) ? Number(object.audioBitrate) : 0,
            audioFrequency: isSet(object.audioFrequency) ? Number(object.audioFrequency) : 0,
            videoCodec: isSet(object.videoCodec) ? livekit_models_1.videoCodecFromJSON(object.videoCodec) : 0,
            videoBitrate: isSet(object.videoBitrate) ? Number(object.videoBitrate) : 0,
            keyFrameInterval: isSet(object.keyFrameInterval) ? Number(object.keyFrameInterval) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.depth !== undefined && (obj.depth = Math.round(message.depth));
        message.framerate !== undefined && (obj.framerate = Math.round(message.framerate));
        message.audioCodec !== undefined && (obj.audioCodec = livekit_models_1.audioCodecToJSON(message.audioCodec));
        message.audioBitrate !== undefined && (obj.audioBitrate = Math.round(message.audioBitrate));
        message.audioFrequency !== undefined && (obj.audioFrequency = Math.round(message.audioFrequency));
        message.videoCodec !== undefined && (obj.videoCodec = livekit_models_1.videoCodecToJSON(message.videoCodec));
        message.videoBitrate !== undefined && (obj.videoBitrate = Math.round(message.videoBitrate));
        message.keyFrameInterval !== undefined && (obj.keyFrameInterval = message.keyFrameInterval);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseEncodingOptions();
        message.width = (_a = object.width) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : 0;
        message.depth = (_c = object.depth) !== null && _c !== void 0 ? _c : 0;
        message.framerate = (_d = object.framerate) !== null && _d !== void 0 ? _d : 0;
        message.audioCodec = (_e = object.audioCodec) !== null && _e !== void 0 ? _e : 0;
        message.audioBitrate = (_f = object.audioBitrate) !== null && _f !== void 0 ? _f : 0;
        message.audioFrequency = (_g = object.audioFrequency) !== null && _g !== void 0 ? _g : 0;
        message.videoCodec = (_h = object.videoCodec) !== null && _h !== void 0 ? _h : 0;
        message.videoBitrate = (_j = object.videoBitrate) !== null && _j !== void 0 ? _j : 0;
        message.keyFrameInterval = (_k = object.keyFrameInterval) !== null && _k !== void 0 ? _k : 0;
        return message;
    },
};
function createBaseUpdateLayoutRequest() {
    return { egressId: "", layout: "" };
}
exports.UpdateLayoutRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(10).string(message.egressId);
        }
        if (message.layout !== undefined && message.layout !== "") {
            writer.uint32(18).string(message.layout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLayoutRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.egressId = reader.string();
                    break;
                case 2:
                    message.layout = reader.string();
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
            egressId: isSet(object.egressId) ? String(object.egressId) : "",
            layout: isSet(object.layout) ? String(object.layout) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.egressId !== undefined && (obj.egressId = message.egressId);
        message.layout !== undefined && (obj.layout = message.layout);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateLayoutRequest();
        message.egressId = (_a = object.egressId) !== null && _a !== void 0 ? _a : "";
        message.layout = (_b = object.layout) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateStreamRequest() {
    return { egressId: "", addOutputUrls: [], removeOutputUrls: [] };
}
exports.UpdateStreamRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(10).string(message.egressId);
        }
        if (message.addOutputUrls !== undefined && message.addOutputUrls.length !== 0) {
            for (const v of message.addOutputUrls) {
                writer.uint32(18).string(v);
            }
        }
        if (message.removeOutputUrls !== undefined && message.removeOutputUrls.length !== 0) {
            for (const v of message.removeOutputUrls) {
                writer.uint32(26).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateStreamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.egressId = reader.string();
                    break;
                case 2:
                    message.addOutputUrls.push(reader.string());
                    break;
                case 3:
                    message.removeOutputUrls.push(reader.string());
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
            egressId: isSet(object.egressId) ? String(object.egressId) : "",
            addOutputUrls: Array.isArray(object === null || object === void 0 ? void 0 : object.addOutputUrls) ? object.addOutputUrls.map((e) => String(e)) : [],
            removeOutputUrls: Array.isArray(object === null || object === void 0 ? void 0 : object.removeOutputUrls)
                ? object.removeOutputUrls.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.egressId !== undefined && (obj.egressId = message.egressId);
        if (message.addOutputUrls) {
            obj.addOutputUrls = message.addOutputUrls.map((e) => e);
        }
        else {
            obj.addOutputUrls = [];
        }
        if (message.removeOutputUrls) {
            obj.removeOutputUrls = message.removeOutputUrls.map((e) => e);
        }
        else {
            obj.removeOutputUrls = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateStreamRequest();
        message.egressId = (_a = object.egressId) !== null && _a !== void 0 ? _a : "";
        message.addOutputUrls = ((_b = object.addOutputUrls) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.removeOutputUrls = ((_c = object.removeOutputUrls) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseUpdateOutputsRequest() {
    return { egressId: "", addImageOutputs: [], removeImageOutputs: [] };
}
exports.UpdateOutputsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(10).string(message.egressId);
        }
        if (message.addImageOutputs !== undefined && message.addImageOutputs.length !== 0) {
            for (const v of message.addImageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.removeImageOutputs !== undefined && message.removeImageOutputs.length !== 0) {
            for (const v of message.removeImageOutputs) {
                exports.ImageOutput.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateOutputsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.egressId = reader.string();
                    break;
                case 2:
                    message.addImageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.removeImageOutputs.push(exports.ImageOutput.decode(reader, reader.uint32()));
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
            egressId: isSet(object.egressId) ? String(object.egressId) : "",
            addImageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.addImageOutputs)
                ? object.addImageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
            removeImageOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.removeImageOutputs)
                ? object.removeImageOutputs.map((e) => exports.ImageOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.egressId !== undefined && (obj.egressId = message.egressId);
        if (message.addImageOutputs) {
            obj.addImageOutputs = message.addImageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.addImageOutputs = [];
        }
        if (message.removeImageOutputs) {
            obj.removeImageOutputs = message.removeImageOutputs.map((e) => e ? exports.ImageOutput.toJSON(e) : undefined);
        }
        else {
            obj.removeImageOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateOutputsRequest();
        message.egressId = (_a = object.egressId) !== null && _a !== void 0 ? _a : "";
        message.addImageOutputs = ((_b = object.addImageOutputs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        message.removeImageOutputs = ((_c = object.removeImageOutputs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ImageOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListEgressRequest() {
    return { roomName: "", egressId: "", active: false };
}
exports.ListEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(10).string(message.roomName);
        }
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(18).string(message.egressId);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    message.egressId = reader.string();
                    break;
                case 3:
                    message.active = reader.bool();
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
            egressId: isSet(object.egressId) ? String(object.egressId) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.egressId !== undefined && (obj.egressId = message.egressId);
        message.active !== undefined && (obj.active = message.active);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseListEgressRequest();
        message.roomName = (_a = object.roomName) !== null && _a !== void 0 ? _a : "";
        message.egressId = (_b = object.egressId) !== null && _b !== void 0 ? _b : "";
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseListEgressResponse() {
    return { items: [] };
}
exports.ListEgressResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.items !== undefined && message.items.length !== 0) {
            for (const v of message.items) {
                exports.EgressInfo.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListEgressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.items.push(exports.EgressInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { items: Array.isArray(object === null || object === void 0 ? void 0 : object.items) ? object.items.map((e) => exports.EgressInfo.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.items) {
            obj.items = message.items.map((e) => e ? exports.EgressInfo.toJSON(e) : undefined);
        }
        else {
            obj.items = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListEgressResponse();
        message.items = ((_a = object.items) === null || _a === void 0 ? void 0 : _a.map((e) => exports.EgressInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStopEgressRequest() {
    return { egressId: "" };
}
exports.StopEgressRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(10).string(message.egressId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopEgressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.egressId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { egressId: isSet(object.egressId) ? String(object.egressId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.egressId !== undefined && (obj.egressId = message.egressId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStopEgressRequest();
        message.egressId = (_a = object.egressId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEgressInfo() {
    return {
        egressId: "",
        roomId: "",
        roomName: "",
        status: 0,
        startedAt: 0,
        endedAt: 0,
        updatedAt: 0,
        error: "",
        roomComposite: undefined,
        web: undefined,
        participant: undefined,
        trackComposite: undefined,
        track: undefined,
        stream: undefined,
        file: undefined,
        segments: undefined,
        streamResults: [],
        fileResults: [],
        segmentResults: [],
        imageResults: [],
    };
}
exports.EgressInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.egressId !== undefined && message.egressId !== "") {
            writer.uint32(10).string(message.egressId);
        }
        if (message.roomId !== undefined && message.roomId !== "") {
            writer.uint32(18).string(message.roomId);
        }
        if (message.roomName !== undefined && message.roomName !== "") {
            writer.uint32(106).string(message.roomName);
        }
        if (message.status !== undefined && message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(80).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(88).int64(message.endedAt);
        }
        if (message.updatedAt !== undefined && message.updatedAt !== 0) {
            writer.uint32(144).int64(message.updatedAt);
        }
        if (message.error !== undefined && message.error !== "") {
            writer.uint32(74).string(message.error);
        }
        if (message.roomComposite !== undefined) {
            exports.RoomCompositeEgressRequest.encode(message.roomComposite, writer.uint32(34).fork()).ldelim();
        }
        if (message.web !== undefined) {
            exports.WebEgressRequest.encode(message.web, writer.uint32(114).fork()).ldelim();
        }
        if (message.participant !== undefined) {
            exports.ParticipantEgressRequest.encode(message.participant, writer.uint32(154).fork()).ldelim();
        }
        if (message.trackComposite !== undefined) {
            exports.TrackCompositeEgressRequest.encode(message.trackComposite, writer.uint32(42).fork()).ldelim();
        }
        if (message.track !== undefined) {
            exports.TrackEgressRequest.encode(message.track, writer.uint32(50).fork()).ldelim();
        }
        if (message.stream !== undefined) {
            exports.StreamInfoList.encode(message.stream, writer.uint32(58).fork()).ldelim();
        }
        if (message.file !== undefined) {
            exports.FileInfo.encode(message.file, writer.uint32(66).fork()).ldelim();
        }
        if (message.segments !== undefined) {
            exports.SegmentsInfo.encode(message.segments, writer.uint32(98).fork()).ldelim();
        }
        if (message.streamResults !== undefined && message.streamResults.length !== 0) {
            for (const v of message.streamResults) {
                exports.StreamInfo.encode(v, writer.uint32(122).fork()).ldelim();
            }
        }
        if (message.fileResults !== undefined && message.fileResults.length !== 0) {
            for (const v of message.fileResults) {
                exports.FileInfo.encode(v, writer.uint32(130).fork()).ldelim();
            }
        }
        if (message.segmentResults !== undefined && message.segmentResults.length !== 0) {
            for (const v of message.segmentResults) {
                exports.SegmentsInfo.encode(v, writer.uint32(138).fork()).ldelim();
            }
        }
        if (message.imageResults !== undefined && message.imageResults.length !== 0) {
            for (const v of message.imageResults) {
                exports.ImagesInfo.encode(v, writer.uint32(162).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEgressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.egressId = reader.string();
                    break;
                case 2:
                    message.roomId = reader.string();
                    break;
                case 13:
                    message.roomName = reader.string();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 10:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 11:
                    message.endedAt = longToNumber(reader.int64());
                    break;
                case 18:
                    message.updatedAt = longToNumber(reader.int64());
                    break;
                case 9:
                    message.error = reader.string();
                    break;
                case 4:
                    message.roomComposite = exports.RoomCompositeEgressRequest.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.web = exports.WebEgressRequest.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.participant = exports.ParticipantEgressRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.trackComposite = exports.TrackCompositeEgressRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.track = exports.TrackEgressRequest.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.stream = exports.StreamInfoList.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.file = exports.FileInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.segments = exports.SegmentsInfo.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.streamResults.push(exports.StreamInfo.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.fileResults.push(exports.FileInfo.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.segmentResults.push(exports.SegmentsInfo.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.imageResults.push(exports.ImagesInfo.decode(reader, reader.uint32()));
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
            egressId: isSet(object.egressId) ? String(object.egressId) : "",
            roomId: isSet(object.roomId) ? String(object.roomId) : "",
            roomName: isSet(object.roomName) ? String(object.roomName) : "",
            status: isSet(object.status) ? egressStatusFromJSON(object.status) : 0,
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
            updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
            error: isSet(object.error) ? String(object.error) : "",
            roomComposite: isSet(object.roomComposite)
                ? exports.RoomCompositeEgressRequest.fromJSON(object.roomComposite)
                : undefined,
            web: isSet(object.web) ? exports.WebEgressRequest.fromJSON(object.web) : undefined,
            participant: isSet(object.participant) ? exports.ParticipantEgressRequest.fromJSON(object.participant) : undefined,
            trackComposite: isSet(object.trackComposite)
                ? exports.TrackCompositeEgressRequest.fromJSON(object.trackComposite)
                : undefined,
            track: isSet(object.track) ? exports.TrackEgressRequest.fromJSON(object.track) : undefined,
            stream: isSet(object.stream) ? exports.StreamInfoList.fromJSON(object.stream) : undefined,
            file: isSet(object.file) ? exports.FileInfo.fromJSON(object.file) : undefined,
            segments: isSet(object.segments) ? exports.SegmentsInfo.fromJSON(object.segments) : undefined,
            streamResults: Array.isArray(object === null || object === void 0 ? void 0 : object.streamResults)
                ? object.streamResults.map((e) => exports.StreamInfo.fromJSON(e))
                : [],
            fileResults: Array.isArray(object === null || object === void 0 ? void 0 : object.fileResults) ? object.fileResults.map((e) => exports.FileInfo.fromJSON(e)) : [],
            segmentResults: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentResults)
                ? object.segmentResults.map((e) => exports.SegmentsInfo.fromJSON(e))
                : [],
            imageResults: Array.isArray(object === null || object === void 0 ? void 0 : object.imageResults)
                ? object.imageResults.map((e) => exports.ImagesInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.egressId !== undefined && (obj.egressId = message.egressId);
        message.roomId !== undefined && (obj.roomId = message.roomId);
        message.roomName !== undefined && (obj.roomName = message.roomName);
        message.status !== undefined && (obj.status = egressStatusToJSON(message.status));
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        message.updatedAt !== undefined && (obj.updatedAt = Math.round(message.updatedAt));
        message.error !== undefined && (obj.error = message.error);
        message.roomComposite !== undefined &&
            (obj.roomComposite = message.roomComposite
                ? exports.RoomCompositeEgressRequest.toJSON(message.roomComposite)
                : undefined);
        message.web !== undefined && (obj.web = message.web ? exports.WebEgressRequest.toJSON(message.web) : undefined);
        message.participant !== undefined &&
            (obj.participant = message.participant ? exports.ParticipantEgressRequest.toJSON(message.participant) : undefined);
        message.trackComposite !== undefined && (obj.trackComposite = message.trackComposite
            ? exports.TrackCompositeEgressRequest.toJSON(message.trackComposite)
            : undefined);
        message.track !== undefined && (obj.track = message.track ? exports.TrackEgressRequest.toJSON(message.track) : undefined);
        message.stream !== undefined && (obj.stream = message.stream ? exports.StreamInfoList.toJSON(message.stream) : undefined);
        message.file !== undefined && (obj.file = message.file ? exports.FileInfo.toJSON(message.file) : undefined);
        message.segments !== undefined &&
            (obj.segments = message.segments ? exports.SegmentsInfo.toJSON(message.segments) : undefined);
        if (message.streamResults) {
            obj.streamResults = message.streamResults.map((e) => e ? exports.StreamInfo.toJSON(e) : undefined);
        }
        else {
            obj.streamResults = [];
        }
        if (message.fileResults) {
            obj.fileResults = message.fileResults.map((e) => e ? exports.FileInfo.toJSON(e) : undefined);
        }
        else {
            obj.fileResults = [];
        }
        if (message.segmentResults) {
            obj.segmentResults = message.segmentResults.map((e) => e ? exports.SegmentsInfo.toJSON(e) : undefined);
        }
        else {
            obj.segmentResults = [];
        }
        if (message.imageResults) {
            obj.imageResults = message.imageResults.map((e) => e ? exports.ImagesInfo.toJSON(e) : undefined);
        }
        else {
            obj.imageResults = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseEgressInfo();
        message.egressId = (_a = object.egressId) !== null && _a !== void 0 ? _a : "";
        message.roomId = (_b = object.roomId) !== null && _b !== void 0 ? _b : "";
        message.roomName = (_c = object.roomName) !== null && _c !== void 0 ? _c : "";
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.startedAt = (_e = object.startedAt) !== null && _e !== void 0 ? _e : 0;
        message.endedAt = (_f = object.endedAt) !== null && _f !== void 0 ? _f : 0;
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : 0;
        message.error = (_h = object.error) !== null && _h !== void 0 ? _h : "";
        message.roomComposite = (object.roomComposite !== undefined && object.roomComposite !== null)
            ? exports.RoomCompositeEgressRequest.fromPartial(object.roomComposite)
            : undefined;
        message.web = (object.web !== undefined && object.web !== null)
            ? exports.WebEgressRequest.fromPartial(object.web)
            : undefined;
        message.participant = (object.participant !== undefined && object.participant !== null)
            ? exports.ParticipantEgressRequest.fromPartial(object.participant)
            : undefined;
        message.trackComposite = (object.trackComposite !== undefined && object.trackComposite !== null)
            ? exports.TrackCompositeEgressRequest.fromPartial(object.trackComposite)
            : undefined;
        message.track = (object.track !== undefined && object.track !== null)
            ? exports.TrackEgressRequest.fromPartial(object.track)
            : undefined;
        message.stream = (object.stream !== undefined && object.stream !== null)
            ? exports.StreamInfoList.fromPartial(object.stream)
            : undefined;
        message.file = (object.file !== undefined && object.file !== null) ? exports.FileInfo.fromPartial(object.file) : undefined;
        message.segments = (object.segments !== undefined && object.segments !== null)
            ? exports.SegmentsInfo.fromPartial(object.segments)
            : undefined;
        message.streamResults = ((_j = object.streamResults) === null || _j === void 0 ? void 0 : _j.map((e) => exports.StreamInfo.fromPartial(e))) || [];
        message.fileResults = ((_k = object.fileResults) === null || _k === void 0 ? void 0 : _k.map((e) => exports.FileInfo.fromPartial(e))) || [];
        message.segmentResults = ((_l = object.segmentResults) === null || _l === void 0 ? void 0 : _l.map((e) => exports.SegmentsInfo.fromPartial(e))) || [];
        message.imageResults = ((_m = object.imageResults) === null || _m === void 0 ? void 0 : _m.map((e) => exports.ImagesInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStreamInfoList() {
    return { info: [] };
}
exports.StreamInfoList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.info !== undefined && message.info.length !== 0) {
            for (const v of message.info) {
                exports.StreamInfo.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamInfoList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(exports.StreamInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { info: Array.isArray(object === null || object === void 0 ? void 0 : object.info) ? object.info.map((e) => exports.StreamInfo.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map((e) => e ? exports.StreamInfo.toJSON(e) : undefined);
        }
        else {
            obj.info = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStreamInfoList();
        message.info = ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => exports.StreamInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStreamInfo() {
    return { url: "", startedAt: 0, endedAt: 0, duration: 0, status: 0, error: "" };
}
exports.StreamInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.url !== undefined && message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(16).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(24).int64(message.endedAt);
        }
        if (message.duration !== undefined && message.duration !== 0) {
            writer.uint32(32).int64(message.duration);
        }
        if (message.status !== undefined && message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.error !== undefined && message.error !== "") {
            writer.uint32(50).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 3:
                    message.endedAt = longToNumber(reader.int64());
                    break;
                case 4:
                    message.duration = longToNumber(reader.int64());
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.error = reader.string();
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
            url: isSet(object.url) ? String(object.url) : "",
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            status: isSet(object.status) ? streamInfo_StatusFromJSON(object.status) : 0,
            error: isSet(object.error) ? String(object.error) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.status !== undefined && (obj.status = streamInfo_StatusToJSON(message.status));
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseStreamInfo();
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        message.startedAt = (_b = object.startedAt) !== null && _b !== void 0 ? _b : 0;
        message.endedAt = (_c = object.endedAt) !== null && _c !== void 0 ? _c : 0;
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.error = (_f = object.error) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseFileInfo() {
    return { filename: "", startedAt: 0, endedAt: 0, duration: 0, size: 0, location: "" };
}
exports.FileInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filename !== undefined && message.filename !== "") {
            writer.uint32(10).string(message.filename);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(16).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(24).int64(message.endedAt);
        }
        if (message.duration !== undefined && message.duration !== 0) {
            writer.uint32(48).int64(message.duration);
        }
        if (message.size !== undefined && message.size !== 0) {
            writer.uint32(32).int64(message.size);
        }
        if (message.location !== undefined && message.location !== "") {
            writer.uint32(42).string(message.location);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 2:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 3:
                    message.endedAt = longToNumber(reader.int64());
                    break;
                case 6:
                    message.duration = longToNumber(reader.int64());
                    break;
                case 4:
                    message.size = longToNumber(reader.int64());
                    break;
                case 5:
                    message.location = reader.string();
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            size: isSet(object.size) ? Number(object.size) : 0,
            location: isSet(object.location) ? String(object.location) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.filename !== undefined && (obj.filename = message.filename);
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.location !== undefined && (obj.location = message.location);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseFileInfo();
        message.filename = (_a = object.filename) !== null && _a !== void 0 ? _a : "";
        message.startedAt = (_b = object.startedAt) !== null && _b !== void 0 ? _b : 0;
        message.endedAt = (_c = object.endedAt) !== null && _c !== void 0 ? _c : 0;
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : 0;
        message.size = (_e = object.size) !== null && _e !== void 0 ? _e : 0;
        message.location = (_f = object.location) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseSegmentsInfo() {
    return {
        playlistName: "",
        livePlaylistName: "",
        duration: 0,
        size: 0,
        playlistLocation: "",
        livePlaylistLocation: "",
        segmentCount: 0,
        startedAt: 0,
        endedAt: 0,
    };
}
exports.SegmentsInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playlistName !== undefined && message.playlistName !== "") {
            writer.uint32(10).string(message.playlistName);
        }
        if (message.livePlaylistName !== undefined && message.livePlaylistName !== "") {
            writer.uint32(66).string(message.livePlaylistName);
        }
        if (message.duration !== undefined && message.duration !== 0) {
            writer.uint32(16).int64(message.duration);
        }
        if (message.size !== undefined && message.size !== 0) {
            writer.uint32(24).int64(message.size);
        }
        if (message.playlistLocation !== undefined && message.playlistLocation !== "") {
            writer.uint32(34).string(message.playlistLocation);
        }
        if (message.livePlaylistLocation !== undefined && message.livePlaylistLocation !== "") {
            writer.uint32(74).string(message.livePlaylistLocation);
        }
        if (message.segmentCount !== undefined && message.segmentCount !== 0) {
            writer.uint32(40).int64(message.segmentCount);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(48).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(56).int64(message.endedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSegmentsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.playlistName = reader.string();
                    break;
                case 8:
                    message.livePlaylistName = reader.string();
                    break;
                case 2:
                    message.duration = longToNumber(reader.int64());
                    break;
                case 3:
                    message.size = longToNumber(reader.int64());
                    break;
                case 4:
                    message.playlistLocation = reader.string();
                    break;
                case 9:
                    message.livePlaylistLocation = reader.string();
                    break;
                case 5:
                    message.segmentCount = longToNumber(reader.int64());
                    break;
                case 6:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 7:
                    message.endedAt = longToNumber(reader.int64());
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
            playlistName: isSet(object.playlistName) ? String(object.playlistName) : "",
            livePlaylistName: isSet(object.livePlaylistName) ? String(object.livePlaylistName) : "",
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            size: isSet(object.size) ? Number(object.size) : 0,
            playlistLocation: isSet(object.playlistLocation) ? String(object.playlistLocation) : "",
            livePlaylistLocation: isSet(object.livePlaylistLocation) ? String(object.livePlaylistLocation) : "",
            segmentCount: isSet(object.segmentCount) ? Number(object.segmentCount) : 0,
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.playlistName !== undefined && (obj.playlistName = message.playlistName);
        message.livePlaylistName !== undefined && (obj.livePlaylistName = message.livePlaylistName);
        message.duration !== undefined && (obj.duration = Math.round(message.duration));
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.playlistLocation !== undefined && (obj.playlistLocation = message.playlistLocation);
        message.livePlaylistLocation !== undefined && (obj.livePlaylistLocation = message.livePlaylistLocation);
        message.segmentCount !== undefined && (obj.segmentCount = Math.round(message.segmentCount));
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSegmentsInfo();
        message.playlistName = (_a = object.playlistName) !== null && _a !== void 0 ? _a : "";
        message.livePlaylistName = (_b = object.livePlaylistName) !== null && _b !== void 0 ? _b : "";
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : 0;
        message.size = (_d = object.size) !== null && _d !== void 0 ? _d : 0;
        message.playlistLocation = (_e = object.playlistLocation) !== null && _e !== void 0 ? _e : "";
        message.livePlaylistLocation = (_f = object.livePlaylistLocation) !== null && _f !== void 0 ? _f : "";
        message.segmentCount = (_g = object.segmentCount) !== null && _g !== void 0 ? _g : 0;
        message.startedAt = (_h = object.startedAt) !== null && _h !== void 0 ? _h : 0;
        message.endedAt = (_j = object.endedAt) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseImagesInfo() {
    return { imageCount: 0, startedAt: 0, endedAt: 0 };
}
exports.ImagesInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.imageCount !== undefined && message.imageCount !== 0) {
            writer.uint32(8).int64(message.imageCount);
        }
        if (message.startedAt !== undefined && message.startedAt !== 0) {
            writer.uint32(16).int64(message.startedAt);
        }
        if (message.endedAt !== undefined && message.endedAt !== 0) {
            writer.uint32(24).int64(message.endedAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseImagesInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.imageCount = longToNumber(reader.int64());
                    break;
                case 2:
                    message.startedAt = longToNumber(reader.int64());
                    break;
                case 3:
                    message.endedAt = longToNumber(reader.int64());
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
            imageCount: isSet(object.imageCount) ? Number(object.imageCount) : 0,
            startedAt: isSet(object.startedAt) ? Number(object.startedAt) : 0,
            endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.imageCount !== undefined && (obj.imageCount = Math.round(message.imageCount));
        message.startedAt !== undefined && (obj.startedAt = Math.round(message.startedAt));
        message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseImagesInfo();
        message.imageCount = (_a = object.imageCount) !== null && _a !== void 0 ? _a : 0;
        message.startedAt = (_b = object.startedAt) !== null && _b !== void 0 ? _b : 0;
        message.endedAt = (_c = object.endedAt) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseAutoParticipantEgress() {
    return { preset: undefined, advanced: undefined, fileOutputs: [], segmentOutputs: [] };
}
exports.AutoParticipantEgress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.preset !== undefined) {
            writer.uint32(8).int32(message.preset);
        }
        if (message.advanced !== undefined) {
            exports.EncodingOptions.encode(message.advanced, writer.uint32(18).fork()).ldelim();
        }
        if (message.fileOutputs !== undefined && message.fileOutputs.length !== 0) {
            for (const v of message.fileOutputs) {
                exports.EncodedFileOutput.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.segmentOutputs !== undefined && message.segmentOutputs.length !== 0) {
            for (const v of message.segmentOutputs) {
                exports.SegmentedFileOutput.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoParticipantEgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preset = reader.int32();
                    break;
                case 2:
                    message.advanced = exports.EncodingOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fileOutputs.push(exports.EncodedFileOutput.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.segmentOutputs.push(exports.SegmentedFileOutput.decode(reader, reader.uint32()));
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
            preset: isSet(object.preset) ? encodingOptionsPresetFromJSON(object.preset) : undefined,
            advanced: isSet(object.advanced) ? exports.EncodingOptions.fromJSON(object.advanced) : undefined,
            fileOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.fileOutputs)
                ? object.fileOutputs.map((e) => exports.EncodedFileOutput.fromJSON(e))
                : [],
            segmentOutputs: Array.isArray(object === null || object === void 0 ? void 0 : object.segmentOutputs)
                ? object.segmentOutputs.map((e) => exports.SegmentedFileOutput.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.preset !== undefined &&
            (obj.preset = message.preset !== undefined ? encodingOptionsPresetToJSON(message.preset) : undefined);
        message.advanced !== undefined &&
            (obj.advanced = message.advanced ? exports.EncodingOptions.toJSON(message.advanced) : undefined);
        if (message.fileOutputs) {
            obj.fileOutputs = message.fileOutputs.map((e) => e ? exports.EncodedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.fileOutputs = [];
        }
        if (message.segmentOutputs) {
            obj.segmentOutputs = message.segmentOutputs.map((e) => e ? exports.SegmentedFileOutput.toJSON(e) : undefined);
        }
        else {
            obj.segmentOutputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAutoParticipantEgress();
        message.preset = (_a = object.preset) !== null && _a !== void 0 ? _a : undefined;
        message.advanced = (object.advanced !== undefined && object.advanced !== null)
            ? exports.EncodingOptions.fromPartial(object.advanced)
            : undefined;
        message.fileOutputs = ((_b = object.fileOutputs) === null || _b === void 0 ? void 0 : _b.map((e) => exports.EncodedFileOutput.fromPartial(e))) || [];
        message.segmentOutputs = ((_c = object.segmentOutputs) === null || _c === void 0 ? void 0 : _c.map((e) => exports.SegmentedFileOutput.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAutoTrackEgress() {
    return { filepath: "", disableManifest: false, s3: undefined, gcp: undefined, azure: undefined };
}
exports.AutoTrackEgress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.filepath !== undefined && message.filepath !== "") {
            writer.uint32(10).string(message.filepath);
        }
        if (message.disableManifest === true) {
            writer.uint32(40).bool(message.disableManifest);
        }
        if (message.s3 !== undefined) {
            exports.S3Upload.encode(message.s3, writer.uint32(18).fork()).ldelim();
        }
        if (message.gcp !== undefined) {
            exports.GCPUpload.encode(message.gcp, writer.uint32(26).fork()).ldelim();
        }
        if (message.azure !== undefined) {
            exports.AzureBlobUpload.encode(message.azure, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoTrackEgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filepath = reader.string();
                    break;
                case 5:
                    message.disableManifest = reader.bool();
                    break;
                case 2:
                    message.s3 = exports.S3Upload.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gcp = exports.GCPUpload.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.azure = exports.AzureBlobUpload.decode(reader, reader.uint32());
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
            filepath: isSet(object.filepath) ? String(object.filepath) : "",
            disableManifest: isSet(object.disableManifest) ? Boolean(object.disableManifest) : false,
            s3: isSet(object.s3) ? exports.S3Upload.fromJSON(object.s3) : undefined,
            gcp: isSet(object.gcp) ? exports.GCPUpload.fromJSON(object.gcp) : undefined,
            azure: isSet(object.azure) ? exports.AzureBlobUpload.fromJSON(object.azure) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.filepath !== undefined && (obj.filepath = message.filepath);
        message.disableManifest !== undefined && (obj.disableManifest = message.disableManifest);
        message.s3 !== undefined && (obj.s3 = message.s3 ? exports.S3Upload.toJSON(message.s3) : undefined);
        message.gcp !== undefined && (obj.gcp = message.gcp ? exports.GCPUpload.toJSON(message.gcp) : undefined);
        message.azure !== undefined && (obj.azure = message.azure ? exports.AzureBlobUpload.toJSON(message.azure) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAutoTrackEgress();
        message.filepath = (_a = object.filepath) !== null && _a !== void 0 ? _a : "";
        message.disableManifest = (_b = object.disableManifest) !== null && _b !== void 0 ? _b : false;
        message.s3 = (object.s3 !== undefined && object.s3 !== null) ? exports.S3Upload.fromPartial(object.s3) : undefined;
        message.gcp = (object.gcp !== undefined && object.gcp !== null) ? exports.GCPUpload.fromPartial(object.gcp) : undefined;
        message.azure = (object.azure !== undefined && object.azure !== null)
            ? exports.AzureBlobUpload.fromPartial(object.azure)
            : undefined;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=livekit_egress.js.map