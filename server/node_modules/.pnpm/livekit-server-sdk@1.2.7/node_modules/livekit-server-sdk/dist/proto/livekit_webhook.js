"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEvent = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const livekit_egress_1 = require("./livekit_egress");
const livekit_ingress_1 = require("./livekit_ingress");
const livekit_models_1 = require("./livekit_models");
exports.protobufPackage = "livekit";
function createBaseWebhookEvent() {
    return {
        event: "",
        room: undefined,
        participant: undefined,
        egressInfo: undefined,
        ingressInfo: undefined,
        track: undefined,
        id: "",
        createdAt: 0,
        numDropped: 0,
    };
}
exports.WebhookEvent = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.event !== undefined && message.event !== "") {
            writer.uint32(10).string(message.event);
        }
        if (message.room !== undefined) {
            livekit_models_1.Room.encode(message.room, writer.uint32(18).fork()).ldelim();
        }
        if (message.participant !== undefined) {
            livekit_models_1.ParticipantInfo.encode(message.participant, writer.uint32(26).fork()).ldelim();
        }
        if (message.egressInfo !== undefined) {
            livekit_egress_1.EgressInfo.encode(message.egressInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.ingressInfo !== undefined) {
            livekit_ingress_1.IngressInfo.encode(message.ingressInfo, writer.uint32(82).fork()).ldelim();
        }
        if (message.track !== undefined) {
            livekit_models_1.TrackInfo.encode(message.track, writer.uint32(66).fork()).ldelim();
        }
        if (message.id !== undefined && message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        if (message.createdAt !== undefined && message.createdAt !== 0) {
            writer.uint32(56).int64(message.createdAt);
        }
        if (message.numDropped !== undefined && message.numDropped !== 0) {
            writer.uint32(88).int32(message.numDropped);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWebhookEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event = reader.string();
                    break;
                case 2:
                    message.room = livekit_models_1.Room.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.participant = livekit_models_1.ParticipantInfo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.egressInfo = livekit_egress_1.EgressInfo.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.ingressInfo = livekit_ingress_1.IngressInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.track = livekit_models_1.TrackInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.id = reader.string();
                    break;
                case 7:
                    message.createdAt = longToNumber(reader.int64());
                    break;
                case 11:
                    message.numDropped = reader.int32();
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
            event: isSet(object.event) ? String(object.event) : "",
            room: isSet(object.room) ? livekit_models_1.Room.fromJSON(object.room) : undefined,
            participant: isSet(object.participant) ? livekit_models_1.ParticipantInfo.fromJSON(object.participant) : undefined,
            egressInfo: isSet(object.egressInfo) ? livekit_egress_1.EgressInfo.fromJSON(object.egressInfo) : undefined,
            ingressInfo: isSet(object.ingressInfo) ? livekit_ingress_1.IngressInfo.fromJSON(object.ingressInfo) : undefined,
            track: isSet(object.track) ? livekit_models_1.TrackInfo.fromJSON(object.track) : undefined,
            id: isSet(object.id) ? String(object.id) : "",
            createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
            numDropped: isSet(object.numDropped) ? Number(object.numDropped) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.event !== undefined && (obj.event = message.event);
        message.room !== undefined && (obj.room = message.room ? livekit_models_1.Room.toJSON(message.room) : undefined);
        message.participant !== undefined &&
            (obj.participant = message.participant ? livekit_models_1.ParticipantInfo.toJSON(message.participant) : undefined);
        message.egressInfo !== undefined &&
            (obj.egressInfo = message.egressInfo ? livekit_egress_1.EgressInfo.toJSON(message.egressInfo) : undefined);
        message.ingressInfo !== undefined &&
            (obj.ingressInfo = message.ingressInfo ? livekit_ingress_1.IngressInfo.toJSON(message.ingressInfo) : undefined);
        message.track !== undefined && (obj.track = message.track ? livekit_models_1.TrackInfo.toJSON(message.track) : undefined);
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined && (obj.createdAt = Math.round(message.createdAt));
        message.numDropped !== undefined && (obj.numDropped = Math.round(message.numDropped));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWebhookEvent();
        message.event = (_a = object.event) !== null && _a !== void 0 ? _a : "";
        message.room = (object.room !== undefined && object.room !== null) ? livekit_models_1.Room.fromPartial(object.room) : undefined;
        message.participant = (object.participant !== undefined && object.participant !== null)
            ? livekit_models_1.ParticipantInfo.fromPartial(object.participant)
            : undefined;
        message.egressInfo = (object.egressInfo !== undefined && object.egressInfo !== null)
            ? livekit_egress_1.EgressInfo.fromPartial(object.egressInfo)
            : undefined;
        message.ingressInfo = (object.ingressInfo !== undefined && object.ingressInfo !== null)
            ? livekit_ingress_1.IngressInfo.fromPartial(object.ingressInfo)
            : undefined;
        message.track = (object.track !== undefined && object.track !== null)
            ? livekit_models_1.TrackInfo.fromPartial(object.track)
            : undefined;
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : 0;
        message.numDropped = (_d = object.numDropped) !== null && _d !== void 0 ? _d : 0;
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
//# sourceMappingURL=livekit_webhook.js.map