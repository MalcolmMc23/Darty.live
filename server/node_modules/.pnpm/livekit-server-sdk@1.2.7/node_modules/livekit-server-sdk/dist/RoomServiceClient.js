"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomServiceClient = void 0;
const livekit_models_1 = require("./proto/livekit_models");
const livekit_room_1 = require("./proto/livekit_room");
const ServiceBase_1 = __importDefault(require("./ServiceBase"));
const TwirpRPC_1 = require("./TwirpRPC");
const svc = 'RoomService';
/**
 * Client to access Room APIs
 */
class RoomServiceClient extends ServiceBase_1.default {
    /**
     *
     * @param host hostname including protocol. i.e. 'https://cluster.livekit.io'
     * @param apiKey API Key, can be set in env var LIVEKIT_API_KEY
     * @param secret API Secret, can be set in env var LIVEKIT_API_SECRET
     */
    constructor(host, apiKey, secret) {
        super(apiKey, secret);
        this.rpc = new TwirpRPC_1.TwirpRpc(host, TwirpRPC_1.livekitPackage);
    }
    /**
     * Creates a new room. Explicit room creation is not required, since rooms will
     * be automatically created when the first participant joins. This method can be
     * used to customize room settings.
     * @param options
     */
    createRoom(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'CreateRoom', livekit_room_1.CreateRoomRequest.toJSON(livekit_room_1.CreateRoomRequest.fromPartial(options)), this.authHeader({ roomCreate: true }));
            return livekit_models_1.Room.fromJSON(data);
        });
    }
    /**
     * List active rooms
     * @param names when undefined or empty, list all rooms.
     *              otherwise returns rooms with matching names
     * @returns
     */
    listRooms(names) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'ListRooms', livekit_room_1.ListRoomsRequest.toJSON({ names: names !== null && names !== void 0 ? names : [] }), this.authHeader({ roomList: true }));
            const res = livekit_room_1.ListRoomsResponse.fromJSON(data);
            return (_a = res.rooms) !== null && _a !== void 0 ? _a : [];
        });
    }
    deleteRoom(room) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rpc.request(svc, 'DeleteRoom', livekit_room_1.DeleteRoomRequest.toJSON({ room }), this.authHeader({ roomCreate: true }));
        });
    }
    /**
     * Update metadata of a room
     * @param room name of the room
     * @param metadata the new metadata for the room
     */
    updateRoomMetadata(room, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'UpdateRoomMetadata', livekit_room_1.UpdateRoomMetadataRequest.toJSON({ room, metadata }), this.authHeader({ roomAdmin: true, room }));
            return livekit_models_1.Room.fromJSON(data);
        });
    }
    /**
     * List participants in a room
     * @param room name of the room
     */
    listParticipants(room) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'ListParticipants', livekit_room_1.ListParticipantsRequest.toJSON({ room }), this.authHeader({ roomAdmin: true, room }));
            const res = livekit_room_1.ListParticipantsResponse.fromJSON(data);
            return (_a = res.participants) !== null && _a !== void 0 ? _a : [];
        });
    }
    /**
     * Get information on a specific participant, including the tracks that participant
     * has published
     * @param room name of the room
     * @param identity identity of the participant to return
     */
    getParticipant(room, identity) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'GetParticipant', livekit_room_1.RoomParticipantIdentity.toJSON({ room, identity }), this.authHeader({ roomAdmin: true, room }));
            return livekit_models_1.ParticipantInfo.fromJSON(data);
        });
    }
    /**
     * Removes a participant in the room. This will disconnect the participant
     * and will emit a Disconnected event for that participant.
     * Even after being removed, the participant can still re-join the room.
     * @param room
     * @param identity
     */
    removeParticipant(room, identity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rpc.request(svc, 'RemoveParticipant', livekit_room_1.RoomParticipantIdentity.toJSON({ room, identity }), this.authHeader({ roomAdmin: true, room }));
        });
    }
    /**
     * Mutes a track that the participant has published.
     * @param room
     * @param identity
     * @param trackSid sid of the track to be muted
     * @param muted true to mute, false to unmute
     */
    mutePublishedTrack(room, identity, trackSid, muted) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = livekit_room_1.MuteRoomTrackRequest.toJSON({
                room,
                identity,
                trackSid,
                muted,
            });
            const data = yield this.rpc.request(svc, 'MutePublishedTrack', req, this.authHeader({ roomAdmin: true, room }));
            const res = livekit_room_1.MuteRoomTrackResponse.fromJSON(data);
            return res.track;
        });
    }
    /**
     * Updates a participant's metadata or permissions
     * @param room
     * @param identity
     * @param metadata optional, metadata to update
     * @param permission optional, new permissions to assign to participant
     * @param name optional, new name for participant
     */
    updateParticipant(room, identity, metadata, permission, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = {
                room,
                identity,
                metadata: metadata || '',
                name: name || '',
            };
            if (permission) {
                req.permission = livekit_models_1.ParticipantPermission.fromPartial(permission);
            }
            const data = yield this.rpc.request(svc, 'UpdateParticipant', livekit_room_1.UpdateParticipantRequest.toJSON(req), this.authHeader({ roomAdmin: true, room }));
            return livekit_models_1.ParticipantInfo.fromJSON(data);
        });
    }
    /**
     * Updates a participant's subscription to tracks
     * @param room
     * @param identity
     * @param trackSids
     * @param subscribe true to subscribe, false to unsubscribe
     */
    updateSubscriptions(room, identity, trackSids, subscribe) {
        return __awaiter(this, void 0, void 0, function* () {
            const req = livekit_room_1.UpdateSubscriptionsRequest.toJSON({
                room,
                identity,
                trackSids,
                subscribe,
                participantTracks: [],
            });
            yield this.rpc.request(svc, 'UpdateSubscriptions', req, this.authHeader({ roomAdmin: true, room }));
        });
    }
    sendData(room, data, kind, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const destinationSids = Array.isArray(options) ? options : options.destinationSids;
            const topic = Array.isArray(options) ? undefined : options.topic;
            const req = {
                room,
                data,
                kind,
                destinationSids: destinationSids !== null && destinationSids !== void 0 ? destinationSids : [],
                topic,
            };
            if (!Array.isArray(options) && options.destinationIdentities) {
                req.destinationIdentities = options.destinationIdentities;
            }
            yield this.rpc.request(svc, 'SendData', livekit_room_1.SendDataRequest.toJSON(req), this.authHeader({ roomAdmin: true, room }));
        });
    }
}
exports.RoomServiceClient = RoomServiceClient;
//# sourceMappingURL=RoomServiceClient.js.map