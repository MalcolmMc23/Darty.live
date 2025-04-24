"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomMetadataRequest = exports.SendDataResponse = exports.SendDataRequest = exports.UpdateSubscriptionsResponse = exports.UpdateSubscriptionsRequest = exports.UpdateParticipantRequest = exports.MuteRoomTrackResponse = exports.MuteRoomTrackRequest = exports.RemoveParticipantResponse = exports.RoomParticipantIdentity = exports.ListParticipantsResponse = exports.ListParticipantsRequest = exports.DeleteRoomResponse = exports.DeleteRoomRequest = exports.ListRoomsResponse = exports.ListRoomsRequest = exports.RoomEgress = exports.CreateRoomRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const livekit_egress_1 = require("./livekit_egress");
const livekit_models_1 = require("./livekit_models");
exports.protobufPackage = "livekit";
function createBaseCreateRoomRequest() {
    return {
        name: "",
        emptyTimeout: 0,
        maxParticipants: 0,
        nodeId: "",
        metadata: "",
        egress: undefined,
        minPlayoutDelay: 0,
        maxPlayoutDelay: 0,
        syncStreams: false,
    };
}
exports.CreateRoomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.emptyTimeout !== undefined && message.emptyTimeout !== 0) {
            writer.uint32(16).uint32(message.emptyTimeout);
        }
        if (message.maxParticipants !== undefined && message.maxParticipants !== 0) {
            writer.uint32(24).uint32(message.maxParticipants);
        }
        if (message.nodeId !== undefined && message.nodeId !== "") {
            writer.uint32(34).string(message.nodeId);
        }
        if (message.metadata !== undefined && message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        if (message.egress !== undefined) {
            exports.RoomEgress.encode(message.egress, writer.uint32(50).fork()).ldelim();
        }
        if (message.minPlayoutDelay !== undefined && message.minPlayoutDelay !== 0) {
            writer.uint32(56).uint32(message.minPlayoutDelay);
        }
        if (message.maxPlayoutDelay !== undefined && message.maxPlayoutDelay !== 0) {
            writer.uint32(64).uint32(message.maxPlayoutDelay);
        }
        if (message.syncStreams === true) {
            writer.uint32(72).bool(message.syncStreams);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRoomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.emptyTimeout = reader.uint32();
                    break;
                case 3:
                    message.maxParticipants = reader.uint32();
                    break;
                case 4:
                    message.nodeId = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.egress = exports.RoomEgress.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.minPlayoutDelay = reader.uint32();
                    break;
                case 8:
                    message.maxPlayoutDelay = reader.uint32();
                    break;
                case 9:
                    message.syncStreams = reader.bool();
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
            emptyTimeout: isSet(object.emptyTimeout) ? Number(object.emptyTimeout) : 0,
            maxParticipants: isSet(object.maxParticipants) ? Number(object.maxParticipants) : 0,
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            egress: isSet(object.egress) ? exports.RoomEgress.fromJSON(object.egress) : undefined,
            minPlayoutDelay: isSet(object.minPlayoutDelay) ? Number(object.minPlayoutDelay) : 0,
            maxPlayoutDelay: isSet(object.maxPlayoutDelay) ? Number(object.maxPlayoutDelay) : 0,
            syncStreams: isSet(object.syncStreams) ? Boolean(object.syncStreams) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.emptyTimeout !== undefined && (obj.emptyTimeout = Math.round(message.emptyTimeout));
        message.maxParticipants !== undefined && (obj.maxParticipants = Math.round(message.maxParticipants));
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.egress !== undefined && (obj.egress = message.egress ? exports.RoomEgress.toJSON(message.egress) : undefined);
        message.minPlayoutDelay !== undefined && (obj.minPlayoutDelay = Math.round(message.minPlayoutDelay));
        message.maxPlayoutDelay !== undefined && (obj.maxPlayoutDelay = Math.round(message.maxPlayoutDelay));
        message.syncStreams !== undefined && (obj.syncStreams = message.syncStreams);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseCreateRoomRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.emptyTimeout = (_b = object.emptyTimeout) !== null && _b !== void 0 ? _b : 0;
        message.maxParticipants = (_c = object.maxParticipants) !== null && _c !== void 0 ? _c : 0;
        message.nodeId = (_d = object.nodeId) !== null && _d !== void 0 ? _d : "";
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : "";
        message.egress = (object.egress !== undefined && object.egress !== null)
            ? exports.RoomEgress.fromPartial(object.egress)
            : undefined;
        message.minPlayoutDelay = (_f = object.minPlayoutDelay) !== null && _f !== void 0 ? _f : 0;
        message.maxPlayoutDelay = (_g = object.maxPlayoutDelay) !== null && _g !== void 0 ? _g : 0;
        message.syncStreams = (_h = object.syncStreams) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
function createBaseRoomEgress() {
    return { room: undefined, participant: undefined, tracks: undefined };
}
exports.RoomEgress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined) {
            livekit_egress_1.RoomCompositeEgressRequest.encode(message.room, writer.uint32(10).fork()).ldelim();
        }
        if (message.participant !== undefined) {
            livekit_egress_1.AutoParticipantEgress.encode(message.participant, writer.uint32(26).fork()).ldelim();
        }
        if (message.tracks !== undefined) {
            livekit_egress_1.AutoTrackEgress.encode(message.tracks, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoomEgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = livekit_egress_1.RoomCompositeEgressRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.participant = livekit_egress_1.AutoParticipantEgress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tracks = livekit_egress_1.AutoTrackEgress.decode(reader, reader.uint32());
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
            room: isSet(object.room) ? livekit_egress_1.RoomCompositeEgressRequest.fromJSON(object.room) : undefined,
            participant: isSet(object.participant) ? livekit_egress_1.AutoParticipantEgress.fromJSON(object.participant) : undefined,
            tracks: isSet(object.tracks) ? livekit_egress_1.AutoTrackEgress.fromJSON(object.tracks) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined &&
            (obj.room = message.room ? livekit_egress_1.RoomCompositeEgressRequest.toJSON(message.room) : undefined);
        message.participant !== undefined &&
            (obj.participant = message.participant ? livekit_egress_1.AutoParticipantEgress.toJSON(message.participant) : undefined);
        message.tracks !== undefined && (obj.tracks = message.tracks ? livekit_egress_1.AutoTrackEgress.toJSON(message.tracks) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRoomEgress();
        message.room = (object.room !== undefined && object.room !== null)
            ? livekit_egress_1.RoomCompositeEgressRequest.fromPartial(object.room)
            : undefined;
        message.participant = (object.participant !== undefined && object.participant !== null)
            ? livekit_egress_1.AutoParticipantEgress.fromPartial(object.participant)
            : undefined;
        message.tracks = (object.tracks !== undefined && object.tracks !== null)
            ? livekit_egress_1.AutoTrackEgress.fromPartial(object.tracks)
            : undefined;
        return message;
    },
};
function createBaseListRoomsRequest() {
    return { names: [] };
}
exports.ListRoomsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.names !== undefined && message.names.length !== 0) {
            for (const v of message.names) {
                writer.uint32(10).string(v);
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRoomsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { names: Array.isArray(object === null || object === void 0 ? void 0 : object.names) ? object.names.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListRoomsRequest();
        message.names = ((_a = object.names) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseListRoomsResponse() {
    return { rooms: [] };
}
exports.ListRoomsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rooms !== undefined && message.rooms.length !== 0) {
            for (const v of message.rooms) {
                livekit_models_1.Room.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRoomsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rooms.push(livekit_models_1.Room.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { rooms: Array.isArray(object === null || object === void 0 ? void 0 : object.rooms) ? object.rooms.map((e) => livekit_models_1.Room.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.rooms) {
            obj.rooms = message.rooms.map((e) => e ? livekit_models_1.Room.toJSON(e) : undefined);
        }
        else {
            obj.rooms = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListRoomsResponse();
        message.rooms = ((_a = object.rooms) === null || _a === void 0 ? void 0 : _a.map((e) => livekit_models_1.Room.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeleteRoomRequest() {
    return { room: "" };
}
exports.DeleteRoomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRoomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { room: isSet(object.room) ? String(object.room) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteRoomRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteRoomResponse() {
    return {};
}
exports.DeleteRoomResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRoomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseDeleteRoomResponse();
        return message;
    },
};
function createBaseListParticipantsRequest() {
    return { room: "" };
}
exports.ListParticipantsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListParticipantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { room: isSet(object.room) ? String(object.room) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListParticipantsRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListParticipantsResponse() {
    return { participants: [] };
}
exports.ListParticipantsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.participants !== undefined && message.participants.length !== 0) {
            for (const v of message.participants) {
                livekit_models_1.ParticipantInfo.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListParticipantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participants.push(livekit_models_1.ParticipantInfo.decode(reader, reader.uint32()));
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
            participants: Array.isArray(object === null || object === void 0 ? void 0 : object.participants)
                ? object.participants.map((e) => livekit_models_1.ParticipantInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.participants) {
            obj.participants = message.participants.map((e) => e ? livekit_models_1.ParticipantInfo.toJSON(e) : undefined);
        }
        else {
            obj.participants = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListParticipantsResponse();
        message.participants = ((_a = object.participants) === null || _a === void 0 ? void 0 : _a.map((e) => livekit_models_1.ParticipantInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRoomParticipantIdentity() {
    return { room: "", identity: "" };
}
exports.RoomParticipantIdentity = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.identity !== undefined && message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoomParticipantIdentity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
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
            room: isSet(object.room) ? String(object.room) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.identity !== undefined && (obj.identity = message.identity);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRoomParticipantIdentity();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRemoveParticipantResponse() {
    return {};
}
exports.RemoveParticipantResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveParticipantResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseRemoveParticipantResponse();
        return message;
    },
};
function createBaseMuteRoomTrackRequest() {
    return { room: "", identity: "", trackSid: "", muted: false };
}
exports.MuteRoomTrackRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.identity !== undefined && message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.trackSid !== undefined && message.trackSid !== "") {
            writer.uint32(26).string(message.trackSid);
        }
        if (message.muted === true) {
            writer.uint32(32).bool(message.muted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMuteRoomTrackRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.trackSid = reader.string();
                    break;
                case 4:
                    message.muted = reader.bool();
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
            room: isSet(object.room) ? String(object.room) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            trackSid: isSet(object.trackSid) ? String(object.trackSid) : "",
            muted: isSet(object.muted) ? Boolean(object.muted) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.identity !== undefined && (obj.identity = message.identity);
        message.trackSid !== undefined && (obj.trackSid = message.trackSid);
        message.muted !== undefined && (obj.muted = message.muted);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMuteRoomTrackRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.trackSid = (_c = object.trackSid) !== null && _c !== void 0 ? _c : "";
        message.muted = (_d = object.muted) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseMuteRoomTrackResponse() {
    return { track: undefined };
}
exports.MuteRoomTrackResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.track !== undefined) {
            livekit_models_1.TrackInfo.encode(message.track, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMuteRoomTrackResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.track = livekit_models_1.TrackInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { track: isSet(object.track) ? livekit_models_1.TrackInfo.fromJSON(object.track) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.track !== undefined && (obj.track = message.track ? livekit_models_1.TrackInfo.toJSON(message.track) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMuteRoomTrackResponse();
        message.track = (object.track !== undefined && object.track !== null)
            ? livekit_models_1.TrackInfo.fromPartial(object.track)
            : undefined;
        return message;
    },
};
function createBaseUpdateParticipantRequest() {
    return { room: "", identity: "", metadata: "", permission: undefined, name: "" };
}
exports.UpdateParticipantRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.identity !== undefined && message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.metadata !== undefined && message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.permission !== undefined) {
            livekit_models_1.ParticipantPermission.encode(message.permission, writer.uint32(34).fork()).ldelim();
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateParticipantRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.permission = livekit_models_1.ParticipantPermission.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.name = reader.string();
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
            room: isSet(object.room) ? String(object.room) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            permission: isSet(object.permission) ? livekit_models_1.ParticipantPermission.fromJSON(object.permission) : undefined,
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.identity !== undefined && (obj.identity = message.identity);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.permission !== undefined &&
            (obj.permission = message.permission ? livekit_models_1.ParticipantPermission.toJSON(message.permission) : undefined);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateParticipantRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? livekit_models_1.ParticipantPermission.fromPartial(object.permission)
            : undefined;
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUpdateSubscriptionsRequest() {
    return { room: "", identity: "", trackSids: [], subscribe: false, participantTracks: [] };
}
exports.UpdateSubscriptionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.identity !== undefined && message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.trackSids !== undefined && message.trackSids.length !== 0) {
            for (const v of message.trackSids) {
                writer.uint32(26).string(v);
            }
        }
        if (message.subscribe === true) {
            writer.uint32(32).bool(message.subscribe);
        }
        if (message.participantTracks !== undefined && message.participantTracks.length !== 0) {
            for (const v of message.participantTracks) {
                livekit_models_1.ParticipantTracks.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSubscriptionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.trackSids.push(reader.string());
                    break;
                case 4:
                    message.subscribe = reader.bool();
                    break;
                case 5:
                    message.participantTracks.push(livekit_models_1.ParticipantTracks.decode(reader, reader.uint32()));
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
            room: isSet(object.room) ? String(object.room) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            trackSids: Array.isArray(object === null || object === void 0 ? void 0 : object.trackSids) ? object.trackSids.map((e) => String(e)) : [],
            subscribe: isSet(object.subscribe) ? Boolean(object.subscribe) : false,
            participantTracks: Array.isArray(object === null || object === void 0 ? void 0 : object.participantTracks)
                ? object.participantTracks.map((e) => livekit_models_1.ParticipantTracks.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.identity !== undefined && (obj.identity = message.identity);
        if (message.trackSids) {
            obj.trackSids = message.trackSids.map((e) => e);
        }
        else {
            obj.trackSids = [];
        }
        message.subscribe !== undefined && (obj.subscribe = message.subscribe);
        if (message.participantTracks) {
            obj.participantTracks = message.participantTracks.map((e) => e ? livekit_models_1.ParticipantTracks.toJSON(e) : undefined);
        }
        else {
            obj.participantTracks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseUpdateSubscriptionsRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.trackSids = ((_c = object.trackSids) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.subscribe = (_d = object.subscribe) !== null && _d !== void 0 ? _d : false;
        message.participantTracks = ((_e = object.participantTracks) === null || _e === void 0 ? void 0 : _e.map((e) => livekit_models_1.ParticipantTracks.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateSubscriptionsResponse() {
    return {};
}
exports.UpdateSubscriptionsResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSubscriptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseUpdateSubscriptionsResponse();
        return message;
    },
};
function createBaseSendDataRequest() {
    return {
        room: "",
        data: new Uint8Array(),
        kind: 0,
        destinationSids: [],
        destinationIdentities: [],
        topic: undefined,
    };
}
exports.SendDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.data !== undefined && message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.kind !== undefined && message.kind !== 0) {
            writer.uint32(24).int32(message.kind);
        }
        if (message.destinationSids !== undefined && message.destinationSids.length !== 0) {
            for (const v of message.destinationSids) {
                writer.uint32(34).string(v);
            }
        }
        if (message.destinationIdentities !== undefined && message.destinationIdentities.length !== 0) {
            for (const v of message.destinationIdentities) {
                writer.uint32(50).string(v);
            }
        }
        if (message.topic !== undefined) {
            writer.uint32(42).string(message.topic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.kind = reader.int32();
                    break;
                case 4:
                    message.destinationSids.push(reader.string());
                    break;
                case 6:
                    message.destinationIdentities.push(reader.string());
                    break;
                case 5:
                    message.topic = reader.string();
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
            room: isSet(object.room) ? String(object.room) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            kind: isSet(object.kind) ? livekit_models_1.dataPacket_KindFromJSON(object.kind) : 0,
            destinationSids: Array.isArray(object === null || object === void 0 ? void 0 : object.destinationSids) ? object.destinationSids.map((e) => String(e)) : [],
            destinationIdentities: Array.isArray(object === null || object === void 0 ? void 0 : object.destinationIdentities)
                ? object.destinationIdentities.map((e) => String(e))
                : [],
            topic: isSet(object.topic) ? String(object.topic) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.kind !== undefined && (obj.kind = livekit_models_1.dataPacket_KindToJSON(message.kind));
        if (message.destinationSids) {
            obj.destinationSids = message.destinationSids.map((e) => e);
        }
        else {
            obj.destinationSids = [];
        }
        if (message.destinationIdentities) {
            obj.destinationIdentities = message.destinationIdentities.map((e) => e);
        }
        else {
            obj.destinationIdentities = [];
        }
        message.topic !== undefined && (obj.topic = message.topic);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseSendDataRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.kind = (_c = object.kind) !== null && _c !== void 0 ? _c : 0;
        message.destinationSids = ((_d = object.destinationSids) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.destinationIdentities = ((_e = object.destinationIdentities) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.topic = (_f = object.topic) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseSendDataResponse() {
    return {};
}
exports.SendDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseSendDataResponse();
        return message;
    },
};
function createBaseUpdateRoomMetadataRequest() {
    return { room: "", metadata: "" };
}
exports.UpdateRoomMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.room !== undefined && message.room !== "") {
            writer.uint32(10).string(message.room);
        }
        if (message.metadata !== undefined && message.metadata !== "") {
            writer.uint32(18).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateRoomMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.room = reader.string();
                    break;
                case 2:
                    message.metadata = reader.string();
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
            room: isSet(object.room) ? String(object.room) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.room !== undefined && (obj.room = message.room);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateRoomMetadataRequest();
        message.room = (_a = object.room) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
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
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=livekit_room.js.map