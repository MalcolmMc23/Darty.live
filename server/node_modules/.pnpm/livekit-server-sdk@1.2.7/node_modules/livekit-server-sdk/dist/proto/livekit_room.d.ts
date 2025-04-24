import _m0 from "protobufjs/minimal";
import { AutoParticipantEgress, AutoTrackEgress, RoomCompositeEgressRequest } from "./livekit_egress";
import { DataPacket_Kind, ParticipantInfo, ParticipantPermission, ParticipantTracks, Room, TrackInfo } from "./livekit_models";
export declare const protobufPackage = "livekit";
export interface CreateRoomRequest {
    /** name of the room */
    name?: string;
    /** number of seconds to keep the room open if no one joins */
    emptyTimeout?: number;
    /** limit number of participants that can be in a room */
    maxParticipants?: number;
    /** override the node room is allocated to, for debugging */
    nodeId?: string;
    /** metadata of room */
    metadata?: string;
    /** egress */
    egress?: RoomEgress;
    /** playout delay of subscriber */
    minPlayoutDelay?: number;
    maxPlayoutDelay?: number;
    /**
     * improves A/V sync when playout_delay set to a value larger than 200ms. It will disables transceiver re-use
     * so not recommended for rooms with frequent subscription changes
     */
    syncStreams?: boolean;
}
export interface RoomEgress {
    room?: RoomCompositeEgressRequest;
    participant?: AutoParticipantEgress;
    tracks?: AutoTrackEgress;
}
export interface ListRoomsRequest {
    /** when set, will only return rooms with name match */
    names?: string[];
}
export interface ListRoomsResponse {
    rooms?: Room[];
}
export interface DeleteRoomRequest {
    /** name of the room */
    room?: string;
}
export interface DeleteRoomResponse {
}
export interface ListParticipantsRequest {
    /** name of the room */
    room?: string;
}
export interface ListParticipantsResponse {
    participants?: ParticipantInfo[];
}
export interface RoomParticipantIdentity {
    /** name of the room */
    room?: string;
    /** identity of the participant */
    identity?: string;
}
export interface RemoveParticipantResponse {
}
export interface MuteRoomTrackRequest {
    /** name of the room */
    room?: string;
    identity?: string;
    /** sid of the track to mute */
    trackSid?: string;
    /** set to true to mute, false to unmute */
    muted?: boolean;
}
export interface MuteRoomTrackResponse {
    track?: TrackInfo;
}
export interface UpdateParticipantRequest {
    room?: string;
    identity?: string;
    /** metadata to update. skipping updates if left empty */
    metadata?: string;
    /** set to update the participant's permissions */
    permission?: ParticipantPermission;
    /** display name to update */
    name?: string;
}
export interface UpdateSubscriptionsRequest {
    room?: string;
    identity?: string;
    /** list of sids of tracks */
    trackSids?: string[];
    /** set to true to subscribe, false to unsubscribe from tracks */
    subscribe?: boolean;
    /** list of participants and their tracks */
    participantTracks?: ParticipantTracks[];
}
/** empty for now */
export interface UpdateSubscriptionsResponse {
}
export interface SendDataRequest {
    room?: string;
    data?: Uint8Array;
    kind?: DataPacket_Kind;
    /**
     * mark deprecated
     *
     * @deprecated
     */
    destinationSids?: string[];
    /** when set, only forward to these identities */
    destinationIdentities?: string[];
    topic?: string | undefined;
}
/**  */
export interface SendDataResponse {
}
export interface UpdateRoomMetadataRequest {
    room?: string;
    /** metadata to update. skipping updates if left empty */
    metadata?: string;
}
export declare const CreateRoomRequest: {
    encode(message: CreateRoomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateRoomRequest;
    fromJSON(object: any): CreateRoomRequest;
    toJSON(message: CreateRoomRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        emptyTimeout?: number | undefined;
        maxParticipants?: number | undefined;
        nodeId?: string | undefined;
        metadata?: string | undefined;
        egress?: {
            room?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                streamOutputs?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                imageOutputs?: {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            participant?: {
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            tracks?: {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        minPlayoutDelay?: number | undefined;
        maxPlayoutDelay?: number | undefined;
        syncStreams?: boolean | undefined;
    } & {
        name?: string | undefined;
        emptyTimeout?: number | undefined;
        maxParticipants?: number | undefined;
        nodeId?: string | undefined;
        metadata?: string | undefined;
        egress?: ({
            room?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                streamOutputs?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                imageOutputs?: {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            participant?: {
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            tracks?: {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            room?: ({
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                streamOutputs?: {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                imageOutputs?: {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K in Exclude<keyof I["egress"]["room"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["egress"]["room"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["egress"]["room"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["egress"]["room"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["egress"]["room"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["egress"]["room"]["file"], keyof import("./livekit_egress").EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["egress"]["room"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["egress"]["room"]["stream"], keyof import("./livekit_egress").StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_8 in Exclude<keyof I["egress"]["room"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_9 in Exclude<keyof I["egress"]["room"]["segments"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["egress"]["room"]["segments"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_11 in Exclude<keyof I["egress"]["room"]["segments"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_12 in Exclude<keyof I["egress"]["room"]["segments"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["egress"]["room"]["segments"], keyof import("./livekit_egress").SegmentedFileOutput>]: never; }) | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_14 in Exclude<keyof I["egress"]["room"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] & ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_15 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_17 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_18 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_19 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["egress"]["room"]["fileOutputs"][number], keyof import("./livekit_egress").EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["egress"]["room"]["fileOutputs"], number | keyof {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                streamOutputs?: ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] & ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["egress"]["room"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["egress"]["room"]["streamOutputs"][number], keyof import("./livekit_egress").StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["egress"]["room"]["streamOutputs"], number | keyof {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] & ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_25 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_26 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_27 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_29 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_30 in Exclude<keyof I["egress"]["room"]["segmentOutputs"][number], keyof import("./livekit_egress").SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["egress"]["room"]["segmentOutputs"], number | keyof {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                imageOutputs?: ({
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] & ({
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_32 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_33 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_35 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_36 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I["egress"]["room"]["imageOutputs"][number], keyof import("./livekit_egress").ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["egress"]["room"]["imageOutputs"], number | keyof {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                    imageCodec?: import("./livekit_models").ImageCodec | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I["egress"]["room"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
            participant?: ({
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_models").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_models").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_40 in Exclude<keyof I["egress"]["participant"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] & ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_41 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_42 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_43 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_44 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_45 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I["egress"]["participant"]["fileOutputs"][number], keyof import("./livekit_egress").EncodedFileOutput>]: never; })[] & { [K_47 in Exclude<keyof I["egress"]["participant"]["fileOutputs"], number | keyof {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[] & ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_48 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_49 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_50 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_51 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_52 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"][number], keyof import("./livekit_egress").SegmentedFileOutput>]: never; })[] & { [K_54 in Exclude<keyof I["egress"]["participant"]["segmentOutputs"], number | keyof {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I["egress"]["participant"], keyof AutoParticipantEgress>]: never; }) | undefined;
            tracks?: ({
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
            } & {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_56 in Exclude<keyof I["egress"]["tracks"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_57 in Exclude<keyof I["egress"]["tracks"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_58 in Exclude<keyof I["egress"]["tracks"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_59 in Exclude<keyof I["egress"]["tracks"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I["egress"]["tracks"], keyof AutoTrackEgress>]: never; }) | undefined;
        } & { [K_61 in Exclude<keyof I["egress"], keyof RoomEgress>]: never; }) | undefined;
        minPlayoutDelay?: number | undefined;
        maxPlayoutDelay?: number | undefined;
        syncStreams?: boolean | undefined;
    } & { [K_62 in Exclude<keyof I, keyof CreateRoomRequest>]: never; }>(object: I): CreateRoomRequest;
};
export declare const RoomEgress: {
    encode(message: RoomEgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomEgress;
    fromJSON(object: any): RoomEgress;
    toJSON(message: RoomEgress): unknown;
    fromPartial<I extends {
        room?: {
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            streamOutputs?: {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            imageOutputs?: {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        participant?: {
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        tracks?: {
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        room?: ({
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            streamOutputs?: {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            imageOutputs?: {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: ({
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K in Exclude<keyof I["room"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_1 in Exclude<keyof I["room"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_2 in Exclude<keyof I["room"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_3 in Exclude<keyof I["room"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_4 in Exclude<keyof I["room"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["room"]["file"], keyof import("./livekit_egress").EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["room"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["room"]["stream"], keyof import("./livekit_egress").StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_8 in Exclude<keyof I["room"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_9 in Exclude<keyof I["room"]["segments"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_10 in Exclude<keyof I["room"]["segments"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_11 in Exclude<keyof I["room"]["segments"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_12 in Exclude<keyof I["room"]["segments"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["room"]["segments"], keyof import("./livekit_egress").SegmentedFileOutput>]: never; }) | undefined;
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_14 in Exclude<keyof I["room"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] & ({
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_15 in Exclude<keyof I["room"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_16 in Exclude<keyof I["room"]["fileOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_17 in Exclude<keyof I["room"]["fileOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_18 in Exclude<keyof I["room"]["fileOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_19 in Exclude<keyof I["room"]["fileOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["room"]["fileOutputs"][number], keyof import("./livekit_egress").EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["room"]["fileOutputs"], number | keyof {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            streamOutputs?: ({
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] & ({
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["room"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I["room"]["streamOutputs"][number], keyof import("./livekit_egress").StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["room"]["streamOutputs"], number | keyof {
                protocol?: import("./livekit_egress").StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] & ({
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_25 in Exclude<keyof I["room"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_26 in Exclude<keyof I["room"]["segmentOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_27 in Exclude<keyof I["room"]["segmentOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_28 in Exclude<keyof I["room"]["segmentOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_29 in Exclude<keyof I["room"]["segmentOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I["room"]["segmentOutputs"][number], keyof import("./livekit_egress").SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["room"]["segmentOutputs"], number | keyof {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            imageOutputs?: ({
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] & ({
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_32 in Exclude<keyof I["room"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_33 in Exclude<keyof I["room"]["imageOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_34 in Exclude<keyof I["room"]["imageOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_35 in Exclude<keyof I["room"]["imageOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_36 in Exclude<keyof I["room"]["imageOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["room"]["imageOutputs"][number], keyof import("./livekit_egress").ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["room"]["imageOutputs"], number | keyof {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: import("./livekit_egress").ImageFileSuffix | undefined;
                imageCodec?: import("./livekit_models").ImageCodec | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["room"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
        participant?: ({
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: import("./livekit_models").AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: import("./livekit_models").VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_40 in Exclude<keyof I["participant"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] & ({
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_41 in Exclude<keyof I["participant"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_42 in Exclude<keyof I["participant"]["fileOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_43 in Exclude<keyof I["participant"]["fileOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_44 in Exclude<keyof I["participant"]["fileOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_45 in Exclude<keyof I["participant"]["fileOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I["participant"]["fileOutputs"][number], keyof import("./livekit_egress").EncodedFileOutput>]: never; })[] & { [K_47 in Exclude<keyof I["participant"]["fileOutputs"], number | keyof {
                fileType?: import("./livekit_egress").EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[] & ({
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_48 in Exclude<keyof I["participant"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_49 in Exclude<keyof I["participant"]["segmentOutputs"][number]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_50 in Exclude<keyof I["participant"]["segmentOutputs"][number]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_51 in Exclude<keyof I["participant"]["segmentOutputs"][number]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_52 in Exclude<keyof I["participant"]["segmentOutputs"][number]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
            } & { [K_53 in Exclude<keyof I["participant"]["segmentOutputs"][number], keyof import("./livekit_egress").SegmentedFileOutput>]: never; })[] & { [K_54 in Exclude<keyof I["participant"]["segmentOutputs"], number | keyof {
                protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: import("./livekit_egress").SegmentedFileSuffix | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_55 in Exclude<keyof I["participant"], keyof AutoParticipantEgress>]: never; }) | undefined;
        tracks?: ({
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
        } & {
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K_56 in Exclude<keyof I["tracks"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_57 in Exclude<keyof I["tracks"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_58 in Exclude<keyof I["tracks"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_59 in Exclude<keyof I["tracks"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
        } & { [K_60 in Exclude<keyof I["tracks"], keyof AutoTrackEgress>]: never; }) | undefined;
    } & { [K_61 in Exclude<keyof I, keyof RoomEgress>]: never; }>(object: I): RoomEgress;
};
export declare const ListRoomsRequest: {
    encode(message: ListRoomsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRoomsRequest;
    fromJSON(object: any): ListRoomsRequest;
    toJSON(message: ListRoomsRequest): unknown;
    fromPartial<I extends {
        names?: string[] | undefined;
    } & {
        names?: (string[] & string[] & { [K in Exclude<keyof I["names"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "names">]: never; }>(object: I): ListRoomsRequest;
};
export declare const ListRoomsResponse: {
    encode(message: ListRoomsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListRoomsResponse;
    fromJSON(object: any): ListRoomsResponse;
    toJSON(message: ListRoomsResponse): unknown;
    fromPartial<I extends {
        rooms?: {
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            numPublishers?: number | undefined;
            activeRecording?: boolean | undefined;
        }[] | undefined;
    } & {
        rooms?: ({
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            numPublishers?: number | undefined;
            activeRecording?: boolean | undefined;
        }[] & ({
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            numPublishers?: number | undefined;
            activeRecording?: boolean | undefined;
        } & {
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] & ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & { [K in Exclude<keyof I["rooms"][number]["enabledCodecs"][number], keyof import("./livekit_models").Codec>]: never; })[] & { [K_1 in Exclude<keyof I["rooms"][number]["enabledCodecs"], number | keyof {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[]>]: never; }) | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            numPublishers?: number | undefined;
            activeRecording?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["rooms"][number], keyof Room>]: never; })[] & { [K_3 in Exclude<keyof I["rooms"], number | keyof {
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            numPublishers?: number | undefined;
            activeRecording?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "rooms">]: never; }>(object: I): ListRoomsResponse;
};
export declare const DeleteRoomRequest: {
    encode(message: DeleteRoomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRoomRequest;
    fromJSON(object: any): DeleteRoomRequest;
    toJSON(message: DeleteRoomRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
    } & {
        room?: string | undefined;
    } & { [K in Exclude<keyof I, "room">]: never; }>(object: I): DeleteRoomRequest;
};
export declare const DeleteRoomResponse: {
    encode(_: DeleteRoomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteRoomResponse;
    fromJSON(_: any): DeleteRoomResponse;
    toJSON(_: DeleteRoomResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteRoomResponse;
};
export declare const ListParticipantsRequest: {
    encode(message: ListParticipantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListParticipantsRequest;
    fromJSON(object: any): ListParticipantsRequest;
    toJSON(message: ListParticipantsRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
    } & {
        room?: string | undefined;
    } & { [K in Exclude<keyof I, "room">]: never; }>(object: I): ListParticipantsRequest;
};
export declare const ListParticipantsResponse: {
    encode(message: ListParticipantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListParticipantsResponse;
    fromJSON(object: any): ListParticipantsResponse;
    toJSON(message: ListParticipantsResponse): unknown;
    fromPartial<I extends {
        participants?: {
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        }[] | undefined;
    } & {
        participants?: ({
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        }[] & ({
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        } & {
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: ({
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[] & ({
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            } & {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K in Exclude<keyof I["participants"][number]["tracks"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["participants"][number]["tracks"][number]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: ({
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } & {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] & ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & { [K_2 in Exclude<keyof I["participants"][number]["tracks"][number]["codecs"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["participants"][number]["tracks"][number]["codecs"][number]["layers"], number | keyof {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["participants"][number]["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_5 in Exclude<keyof I["participants"][number]["tracks"][number]["codecs"], number | keyof {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            } & { [K_6 in Exclude<keyof I["participants"][number]["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_7 in Exclude<keyof I["participants"][number]["tracks"], number | keyof {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[]>]: never; }) | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: ({
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } & {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: (import("./livekit_models").TrackSource[] & import("./livekit_models").TrackSource[] & { [K_8 in Exclude<keyof I["participants"][number]["permission"]["canPublishSources"], number | keyof import("./livekit_models").TrackSource[]>]: never; }) | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I["participants"][number]["permission"], keyof ParticipantPermission>]: never; }) | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        } & { [K_10 in Exclude<keyof I["participants"][number], keyof ParticipantInfo>]: never; })[] & { [K_11 in Exclude<keyof I["participants"], number | keyof {
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
                encryption?: import("./livekit_models").Encryption_Type | undefined;
                stream?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
                canUpdateMetadata?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "participants">]: never; }>(object: I): ListParticipantsResponse;
};
export declare const RoomParticipantIdentity: {
    encode(message: RoomParticipantIdentity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomParticipantIdentity;
    fromJSON(object: any): RoomParticipantIdentity;
    toJSON(message: RoomParticipantIdentity): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        identity?: string | undefined;
    } & {
        room?: string | undefined;
        identity?: string | undefined;
    } & { [K in Exclude<keyof I, keyof RoomParticipantIdentity>]: never; }>(object: I): RoomParticipantIdentity;
};
export declare const RemoveParticipantResponse: {
    encode(_: RemoveParticipantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveParticipantResponse;
    fromJSON(_: any): RemoveParticipantResponse;
    toJSON(_: RemoveParticipantResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): RemoveParticipantResponse;
};
export declare const MuteRoomTrackRequest: {
    encode(message: MuteRoomTrackRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MuteRoomTrackRequest;
    fromJSON(object: any): MuteRoomTrackRequest;
    toJSON(message: MuteRoomTrackRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        identity?: string | undefined;
        trackSid?: string | undefined;
        muted?: boolean | undefined;
    } & {
        room?: string | undefined;
        identity?: string | undefined;
        trackSid?: string | undefined;
        muted?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof MuteRoomTrackRequest>]: never; }>(object: I): MuteRoomTrackRequest;
};
export declare const MuteRoomTrackResponse: {
    encode(message: MuteRoomTrackResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MuteRoomTrackResponse;
    fromJSON(object: any): MuteRoomTrackResponse;
    toJSON(message: MuteRoomTrackResponse): unknown;
    fromPartial<I extends {
        track?: {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: import("./livekit_models").Encryption_Type | undefined;
            stream?: string | undefined;
        } | undefined;
    } & {
        track?: ({
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: import("./livekit_models").Encryption_Type | undefined;
            stream?: string | undefined;
        } & {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: ({
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] & ({
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & { [K in Exclude<keyof I["track"]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["track"]["layers"], number | keyof {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[]>]: never; }) | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: ({
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] & ({
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K_2 in Exclude<keyof I["track"]["codecs"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["track"]["codecs"][number]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["track"]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_5 in Exclude<keyof I["track"]["codecs"], number | keyof {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: import("./livekit_models").Encryption_Type | undefined;
            stream?: string | undefined;
        } & { [K_6 in Exclude<keyof I["track"], keyof TrackInfo>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "track">]: never; }>(object: I): MuteRoomTrackResponse;
};
export declare const UpdateParticipantRequest: {
    encode(message: UpdateParticipantRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParticipantRequest;
    fromJSON(object: any): UpdateParticipantRequest;
    toJSON(message: UpdateParticipantRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        identity?: string | undefined;
        metadata?: string | undefined;
        permission?: {
            canSubscribe?: boolean | undefined;
            canPublish?: boolean | undefined;
            canPublishData?: boolean | undefined;
            canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } | undefined;
        name?: string | undefined;
    } & {
        room?: string | undefined;
        identity?: string | undefined;
        metadata?: string | undefined;
        permission?: ({
            canSubscribe?: boolean | undefined;
            canPublish?: boolean | undefined;
            canPublishData?: boolean | undefined;
            canPublishSources?: import("./livekit_models").TrackSource[] | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } & {
            canSubscribe?: boolean | undefined;
            canPublish?: boolean | undefined;
            canPublishData?: boolean | undefined;
            canPublishSources?: (import("./livekit_models").TrackSource[] & import("./livekit_models").TrackSource[] & { [K in Exclude<keyof I["permission"]["canPublishSources"], number | keyof import("./livekit_models").TrackSource[]>]: never; }) | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["permission"], keyof ParticipantPermission>]: never; }) | undefined;
        name?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof UpdateParticipantRequest>]: never; }>(object: I): UpdateParticipantRequest;
};
export declare const UpdateSubscriptionsRequest: {
    encode(message: UpdateSubscriptionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubscriptionsRequest;
    fromJSON(object: any): UpdateSubscriptionsRequest;
    toJSON(message: UpdateSubscriptionsRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        identity?: string | undefined;
        trackSids?: string[] | undefined;
        subscribe?: boolean | undefined;
        participantTracks?: {
            participantSid?: string | undefined;
            trackSids?: string[] | undefined;
        }[] | undefined;
    } & {
        room?: string | undefined;
        identity?: string | undefined;
        trackSids?: (string[] & string[] & { [K in Exclude<keyof I["trackSids"], number | keyof string[]>]: never; }) | undefined;
        subscribe?: boolean | undefined;
        participantTracks?: ({
            participantSid?: string | undefined;
            trackSids?: string[] | undefined;
        }[] & ({
            participantSid?: string | undefined;
            trackSids?: string[] | undefined;
        } & {
            participantSid?: string | undefined;
            trackSids?: (string[] & string[] & { [K_1 in Exclude<keyof I["participantTracks"][number]["trackSids"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["participantTracks"][number], keyof ParticipantTracks>]: never; })[] & { [K_3 in Exclude<keyof I["participantTracks"], number | keyof {
            participantSid?: string | undefined;
            trackSids?: string[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof UpdateSubscriptionsRequest>]: never; }>(object: I): UpdateSubscriptionsRequest;
};
export declare const UpdateSubscriptionsResponse: {
    encode(_: UpdateSubscriptionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateSubscriptionsResponse;
    fromJSON(_: any): UpdateSubscriptionsResponse;
    toJSON(_: UpdateSubscriptionsResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): UpdateSubscriptionsResponse;
};
export declare const SendDataRequest: {
    encode(message: SendDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendDataRequest;
    fromJSON(object: any): SendDataRequest;
    toJSON(message: SendDataRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        data?: Uint8Array | undefined;
        kind?: DataPacket_Kind | undefined;
        destinationSids?: string[] | undefined;
        destinationIdentities?: string[] | undefined;
        topic?: string | undefined;
    } & {
        room?: string | undefined;
        data?: Uint8Array | undefined;
        kind?: DataPacket_Kind | undefined;
        destinationSids?: (string[] & string[] & { [K in Exclude<keyof I["destinationSids"], number | keyof string[]>]: never; }) | undefined;
        destinationIdentities?: (string[] & string[] & { [K_1 in Exclude<keyof I["destinationIdentities"], number | keyof string[]>]: never; }) | undefined;
        topic?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SendDataRequest>]: never; }>(object: I): SendDataRequest;
};
export declare const SendDataResponse: {
    encode(_: SendDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendDataResponse;
    fromJSON(_: any): SendDataResponse;
    toJSON(_: SendDataResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): SendDataResponse;
};
export declare const UpdateRoomMetadataRequest: {
    encode(message: UpdateRoomMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateRoomMetadataRequest;
    fromJSON(object: any): UpdateRoomMetadataRequest;
    toJSON(message: UpdateRoomMetadataRequest): unknown;
    fromPartial<I extends {
        room?: string | undefined;
        metadata?: string | undefined;
    } & {
        room?: string | undefined;
        metadata?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpdateRoomMetadataRequest>]: never; }>(object: I): UpdateRoomMetadataRequest;
};
/**
 * Room service that can be performed on any node
 * they are Twirp-based HTTP req/responses
 */
export interface RoomService {
    /**
     * Creates a room with settings. Requires `roomCreate` permission.
     * This method is optional; rooms are automatically created when clients connect to them for the first time.
     */
    CreateRoom(request: CreateRoomRequest): Promise<Room>;
    /** List rooms that are active on the server. Requires `roomList` permission. */
    ListRooms(request: ListRoomsRequest): Promise<ListRoomsResponse>;
    /**
     * Deletes an existing room by name or id. Requires `roomCreate` permission.
     * DeleteRoom will disconnect all participants that are currently in the room.
     */
    DeleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse>;
    /** Lists participants in a room, Requires `roomAdmin` */
    ListParticipants(request: ListParticipantsRequest): Promise<ListParticipantsResponse>;
    /** Get information on a specific participant, Requires `roomAdmin` */
    GetParticipant(request: RoomParticipantIdentity): Promise<ParticipantInfo>;
    /** Removes a participant from room. Requires `roomAdmin` */
    RemoveParticipant(request: RoomParticipantIdentity): Promise<RemoveParticipantResponse>;
    /** Mute/unmute a participant's track, Requires `roomAdmin` */
    MutePublishedTrack(request: MuteRoomTrackRequest): Promise<MuteRoomTrackResponse>;
    /** Update participant metadata, will cause updates to be broadcasted to everyone in the room. Requires `roomAdmin` */
    UpdateParticipant(request: UpdateParticipantRequest): Promise<ParticipantInfo>;
    /** Subscribes or unsubscribe a participant from tracks. Requires `roomAdmin` */
    UpdateSubscriptions(request: UpdateSubscriptionsRequest): Promise<UpdateSubscriptionsResponse>;
    /** Send data over data channel to participants in a room, Requires `roomAdmin` */
    SendData(request: SendDataRequest): Promise<SendDataResponse>;
    /** Update room metadata, will cause updates to be broadcasted to everyone in the room, Requires `roomAdmin` */
    UpdateRoomMetadata(request: UpdateRoomMetadataRequest): Promise<Room>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
