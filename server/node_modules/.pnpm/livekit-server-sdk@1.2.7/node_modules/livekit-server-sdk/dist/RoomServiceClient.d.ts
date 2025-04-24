import type { DataPacket_Kind, DeepPartial, TrackInfo } from './proto/livekit_models';
import { ParticipantInfo, ParticipantPermission, Room } from './proto/livekit_models';
import { RoomEgress } from './proto/livekit_room';
import ServiceBase from './ServiceBase';
/**
 * Options for when creating a room
 */
export interface CreateOptions {
    /**
     * name of the room. required
     */
    name: string;
    /**
     * number of seconds the room should clean up after being empty
     */
    emptyTimeout?: number;
    /**
     * limit to the number of participants in a room at a time
     */
    maxParticipants?: number;
    /**
     * initial room metadata
     */
    metadata?: string;
    /**
     * add egress options
     */
    egress?: RoomEgress;
    /**
     * minimum playout delay in milliseconds
     */
    minPlayoutDelay?: number;
    /**
     * maximum playout delay in milliseconds
     */
    maxPlayoutDelay?: number;
    /**
     * improves A/V sync when min_playout_delay set to a value larger than 200ms.
     * It will disables transceiver re-use -- this option is not recommended
     * for rooms with frequent subscription changes
     */
    syncStreams?: boolean;
    /**
     * override the node room is allocated to, for debugging
     * does not work with Cloud
     */
    nodeId?: string;
}
export declare type SendDataOptions = {
    /** If set, only deliver to listed participant identities */
    destinationIdentities?: string[];
    destinationSids?: string[];
    topic?: string;
};
/**
 * Client to access Room APIs
 */
export declare class RoomServiceClient extends ServiceBase {
    private readonly rpc;
    /**
     *
     * @param host hostname including protocol. i.e. 'https://cluster.livekit.io'
     * @param apiKey API Key, can be set in env var LIVEKIT_API_KEY
     * @param secret API Secret, can be set in env var LIVEKIT_API_SECRET
     */
    constructor(host: string, apiKey?: string, secret?: string);
    /**
     * Creates a new room. Explicit room creation is not required, since rooms will
     * be automatically created when the first participant joins. This method can be
     * used to customize room settings.
     * @param options
     */
    createRoom(options: CreateOptions): Promise<Room>;
    /**
     * List active rooms
     * @param names when undefined or empty, list all rooms.
     *              otherwise returns rooms with matching names
     * @returns
     */
    listRooms(names?: string[]): Promise<Room[]>;
    deleteRoom(room: string): Promise<void>;
    /**
     * Update metadata of a room
     * @param room name of the room
     * @param metadata the new metadata for the room
     */
    updateRoomMetadata(room: string, metadata: string): Promise<Room>;
    /**
     * List participants in a room
     * @param room name of the room
     */
    listParticipants(room: string): Promise<ParticipantInfo[]>;
    /**
     * Get information on a specific participant, including the tracks that participant
     * has published
     * @param room name of the room
     * @param identity identity of the participant to return
     */
    getParticipant(room: string, identity: string): Promise<ParticipantInfo>;
    /**
     * Removes a participant in the room. This will disconnect the participant
     * and will emit a Disconnected event for that participant.
     * Even after being removed, the participant can still re-join the room.
     * @param room
     * @param identity
     */
    removeParticipant(room: string, identity: string): Promise<void>;
    /**
     * Mutes a track that the participant has published.
     * @param room
     * @param identity
     * @param trackSid sid of the track to be muted
     * @param muted true to mute, false to unmute
     */
    mutePublishedTrack(room: string, identity: string, trackSid: string, muted: boolean): Promise<TrackInfo>;
    /**
     * Updates a participant's metadata or permissions
     * @param room
     * @param identity
     * @param metadata optional, metadata to update
     * @param permission optional, new permissions to assign to participant
     * @param name optional, new name for participant
     */
    updateParticipant(room: string, identity: string, metadata?: string, permission?: DeepPartial<ParticipantPermission>, name?: string): Promise<ParticipantInfo>;
    /**
     * Updates a participant's subscription to tracks
     * @param room
     * @param identity
     * @param trackSids
     * @param subscribe true to subscribe, false to unsubscribe
     */
    updateSubscriptions(room: string, identity: string, trackSids: string[], subscribe: boolean): Promise<void>;
    /**
     * Sends data message to participants in the room
     * @param room
     * @param data opaque payload to send
     * @param kind delivery reliability
     * @param options optionally specify a topic and destinationSids (when destinationSids is empty, message is sent to everyone)
     */
    sendData(room: string, data: Uint8Array, kind: DataPacket_Kind, options: SendDataOptions): Promise<void>;
    /**
     * Sends data message to participants in the room
     * @deprecated use sendData(room, data, kind, options) instead
     * @param room
     * @param data opaque payload to send
     * @param kind delivery reliability
     * @param destinationSids optional. when empty, message is sent to everyone
     */
    sendData(room: string, data: Uint8Array, kind: DataPacket_Kind, destinationSids?: string[]): Promise<void>;
}
