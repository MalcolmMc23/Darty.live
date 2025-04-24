import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "livekit";
export declare enum AudioCodec {
    DEFAULT_AC = 0,
    OPUS = 1,
    AAC = 2,
    UNRECOGNIZED = -1
}
export declare function audioCodecFromJSON(object: any): AudioCodec;
export declare function audioCodecToJSON(object: AudioCodec): string;
export declare enum VideoCodec {
    DEFAULT_VC = 0,
    H264_BASELINE = 1,
    H264_MAIN = 2,
    H264_HIGH = 3,
    VP8 = 4,
    UNRECOGNIZED = -1
}
export declare function videoCodecFromJSON(object: any): VideoCodec;
export declare function videoCodecToJSON(object: VideoCodec): string;
export declare enum ImageCodec {
    IC_DEFAULT = 0,
    IC_JPEG = 1,
    UNRECOGNIZED = -1
}
export declare function imageCodecFromJSON(object: any): ImageCodec;
export declare function imageCodecToJSON(object: ImageCodec): string;
export declare enum TrackType {
    AUDIO = 0,
    VIDEO = 1,
    DATA = 2,
    UNRECOGNIZED = -1
}
export declare function trackTypeFromJSON(object: any): TrackType;
export declare function trackTypeToJSON(object: TrackType): string;
export declare enum TrackSource {
    UNKNOWN = 0,
    CAMERA = 1,
    MICROPHONE = 2,
    SCREEN_SHARE = 3,
    SCREEN_SHARE_AUDIO = 4,
    UNRECOGNIZED = -1
}
export declare function trackSourceFromJSON(object: any): TrackSource;
export declare function trackSourceToJSON(object: TrackSource): string;
export declare enum VideoQuality {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    OFF = 3,
    UNRECOGNIZED = -1
}
export declare function videoQualityFromJSON(object: any): VideoQuality;
export declare function videoQualityToJSON(object: VideoQuality): string;
export declare enum ConnectionQuality {
    POOR = 0,
    GOOD = 1,
    EXCELLENT = 2,
    UNRECOGNIZED = -1
}
export declare function connectionQualityFromJSON(object: any): ConnectionQuality;
export declare function connectionQualityToJSON(object: ConnectionQuality): string;
export declare enum ClientConfigSetting {
    UNSET = 0,
    DISABLED = 1,
    ENABLED = 2,
    UNRECOGNIZED = -1
}
export declare function clientConfigSettingFromJSON(object: any): ClientConfigSetting;
export declare function clientConfigSettingToJSON(object: ClientConfigSetting): string;
export declare enum DisconnectReason {
    UNKNOWN_REASON = 0,
    CLIENT_INITIATED = 1,
    DUPLICATE_IDENTITY = 2,
    SERVER_SHUTDOWN = 3,
    PARTICIPANT_REMOVED = 4,
    ROOM_DELETED = 5,
    STATE_MISMATCH = 6,
    JOIN_FAILURE = 7,
    UNRECOGNIZED = -1
}
export declare function disconnectReasonFromJSON(object: any): DisconnectReason;
export declare function disconnectReasonToJSON(object: DisconnectReason): string;
export declare enum ReconnectReason {
    RR_UNKNOWN = 0,
    RR_SIGNAL_DISCONNECTED = 1,
    RR_PUBLISHER_FAILED = 2,
    RR_SUBSCRIBER_FAILED = 3,
    RR_SWITCH_CANDIDATE = 4,
    UNRECOGNIZED = -1
}
export declare function reconnectReasonFromJSON(object: any): ReconnectReason;
export declare function reconnectReasonToJSON(object: ReconnectReason): string;
export declare enum SubscriptionError {
    SE_UNKNOWN = 0,
    SE_CODEC_UNSUPPORTED = 1,
    SE_TRACK_NOTFOUND = 2,
    UNRECOGNIZED = -1
}
export declare function subscriptionErrorFromJSON(object: any): SubscriptionError;
export declare function subscriptionErrorToJSON(object: SubscriptionError): string;
export interface Room {
    sid: string;
    name: string;
    emptyTimeout: number;
    maxParticipants: number;
    creationTime: number;
    turnPassword: string;
    enabledCodecs: Codec[];
    metadata: string;
    numParticipants: number;
    numPublishers: number;
    activeRecording: boolean;
}
export interface Codec {
    mime: string;
    fmtpLine: string;
}
export interface PlayoutDelay {
    enabled: boolean;
    min: number;
    max: number;
}
export interface ParticipantPermission {
    /** allow participant to subscribe to other tracks in the room */
    canSubscribe: boolean;
    /** allow participant to publish new tracks to room */
    canPublish: boolean;
    /** allow participant to publish data */
    canPublishData: boolean;
    /** sources that are allowed to be published */
    canPublishSources: TrackSource[];
    /** indicates that it's hidden to others */
    hidden: boolean;
    /** indicates it's a recorder instance */
    recorder: boolean;
    /** indicates that participant can update own metadata */
    canUpdateMetadata: boolean;
}
export interface ParticipantInfo {
    sid: string;
    identity: string;
    state: ParticipantInfo_State;
    tracks: TrackInfo[];
    metadata: string;
    /** timestamp when participant joined room, in seconds */
    joinedAt: number;
    name: string;
    version: number;
    permission?: ParticipantPermission;
    region: string;
    /**
     * indicates the participant has an active publisher connection
     * and can publish to the server
     */
    isPublisher: boolean;
}
export declare enum ParticipantInfo_State {
    /** JOINING - websocket' connected, but not offered yet */
    JOINING = 0,
    /** JOINED - server received client offer */
    JOINED = 1,
    /** ACTIVE - ICE connectivity established */
    ACTIVE = 2,
    /** DISCONNECTED - WS disconnected */
    DISCONNECTED = 3,
    UNRECOGNIZED = -1
}
export declare function participantInfo_StateFromJSON(object: any): ParticipantInfo_State;
export declare function participantInfo_StateToJSON(object: ParticipantInfo_State): string;
export interface Encryption {
}
export declare enum Encryption_Type {
    NONE = 0,
    GCM = 1,
    CUSTOM = 2,
    UNRECOGNIZED = -1
}
export declare function encryption_TypeFromJSON(object: any): Encryption_Type;
export declare function encryption_TypeToJSON(object: Encryption_Type): string;
export interface SimulcastCodecInfo {
    mimeType: string;
    mid: string;
    cid: string;
    layers: VideoLayer[];
}
export interface TrackInfo {
    sid: string;
    type: TrackType;
    name: string;
    muted: boolean;
    /**
     * original width of video (unset for audio)
     * clients may receive a lower resolution version with simulcast
     */
    width: number;
    /** original height of video (unset for audio) */
    height: number;
    /** true if track is simulcasted */
    simulcast: boolean;
    /** true if DTX (Discontinuous Transmission) is disabled for audio */
    disableDtx: boolean;
    /** source of media */
    source: TrackSource;
    layers: VideoLayer[];
    /** mime type of codec */
    mimeType: string;
    mid: string;
    codecs: SimulcastCodecInfo[];
    stereo: boolean;
    /** true if RED (Redundant Encoding) is disabled for audio */
    disableRed: boolean;
    encryption: Encryption_Type;
    stream: string;
}
/** provide information about available spatial layers */
export interface VideoLayer {
    /** for tracks with a single layer, this should be HIGH */
    quality: VideoQuality;
    width: number;
    height: number;
    /** target bitrate in bit per second (bps), server will measure actual */
    bitrate: number;
    ssrc: number;
}
/** new DataPacket API */
export interface DataPacket {
    kind: DataPacket_Kind;
    user?: UserPacket | undefined;
    speaker?: ActiveSpeakerUpdate | undefined;
}
export declare enum DataPacket_Kind {
    RELIABLE = 0,
    LOSSY = 1,
    UNRECOGNIZED = -1
}
export declare function dataPacket_KindFromJSON(object: any): DataPacket_Kind;
export declare function dataPacket_KindToJSON(object: DataPacket_Kind): string;
export interface ActiveSpeakerUpdate {
    speakers: SpeakerInfo[];
}
export interface SpeakerInfo {
    sid: string;
    /** audio level, 0-1.0, 1 is loudest */
    level: number;
    /** true if speaker is currently active */
    active: boolean;
}
export interface UserPacket {
    /** participant ID of user that sent the message */
    participantSid: string;
    participantIdentity: string;
    /** user defined payload */
    payload: Uint8Array;
    /** the ID of the participants who will receive the message (sent to all by default) */
    destinationSids: string[];
    /** identities of participants who will receive the message (sent to all by default) */
    destinationIdentities: string[];
    /** topic under which the message was published */
    topic?: string | undefined;
}
export interface ParticipantTracks {
    /** participant ID of participant to whom the tracks belong */
    participantSid: string;
    trackSids: string[];
}
/** details about the server */
export interface ServerInfo {
    edition: ServerInfo_Edition;
    version: string;
    protocol: number;
    region: string;
    nodeId: string;
    /** additional debugging information. sent only if server is in development mode */
    debugInfo: string;
}
export declare enum ServerInfo_Edition {
    Standard = 0,
    Cloud = 1,
    UNRECOGNIZED = -1
}
export declare function serverInfo_EditionFromJSON(object: any): ServerInfo_Edition;
export declare function serverInfo_EditionToJSON(object: ServerInfo_Edition): string;
/** details about the client */
export interface ClientInfo {
    sdk: ClientInfo_SDK;
    version: string;
    protocol: number;
    os: string;
    osVersion: string;
    deviceModel: string;
    browser: string;
    browserVersion: string;
    address: string;
    /** wifi, wired, cellular, vpn, empty if not known */
    network: string;
}
export declare enum ClientInfo_SDK {
    UNKNOWN = 0,
    JS = 1,
    SWIFT = 2,
    ANDROID = 3,
    FLUTTER = 4,
    GO = 5,
    UNITY = 6,
    REACT_NATIVE = 7,
    RUST = 8,
    PYTHON = 9,
    CPP = 10,
    UNRECOGNIZED = -1
}
export declare function clientInfo_SDKFromJSON(object: any): ClientInfo_SDK;
export declare function clientInfo_SDKToJSON(object: ClientInfo_SDK): string;
/** server provided client configuration */
export interface ClientConfiguration {
    video?: VideoConfiguration;
    screen?: VideoConfiguration;
    resumeConnection: ClientConfigSetting;
    disabledCodecs?: DisabledCodecs;
    forceRelay: ClientConfigSetting;
}
export interface VideoConfiguration {
    hardwareEncoder: ClientConfigSetting;
}
export interface DisabledCodecs {
    /** disabled for both publish and subscribe */
    codecs: Codec[];
    /** only disable for publish */
    publish: Codec[];
}
export interface RTPDrift {
    startTime?: Date;
    endTime?: Date;
    duration: number;
    startTimestamp: number;
    endTimestamp: number;
    rtpClockTicks: number;
    driftSamples: number;
    driftMs: number;
    clockRate: number;
}
export interface RTPStats {
    startTime?: Date;
    endTime?: Date;
    duration: number;
    packets: number;
    packetRate: number;
    bytes: number;
    headerBytes: number;
    bitrate: number;
    packetsLost: number;
    packetLossRate: number;
    packetLossPercentage: number;
    packetsDuplicate: number;
    packetDuplicateRate: number;
    bytesDuplicate: number;
    headerBytesDuplicate: number;
    bitrateDuplicate: number;
    packetsPadding: number;
    packetPaddingRate: number;
    bytesPadding: number;
    headerBytesPadding: number;
    bitratePadding: number;
    packetsOutOfOrder: number;
    frames: number;
    frameRate: number;
    jitterCurrent: number;
    jitterMax: number;
    gapHistogram: {
        [key: number]: number;
    };
    nacks: number;
    nackAcks: number;
    nackMisses: number;
    nackRepeated: number;
    plis: number;
    lastPli?: Date;
    firs: number;
    lastFir?: Date;
    rttCurrent: number;
    rttMax: number;
    keyFrames: number;
    lastKeyFrame?: Date;
    layerLockPlis: number;
    lastLayerLockPli?: Date;
    packetDrift?: RTPDrift;
    /** NEXT_ID: 46 */
    reportDrift?: RTPDrift;
}
export interface RTPStats_GapHistogramEntry {
    key: number;
    value: number;
}
export interface TimedVersion {
    unixMicro: number;
    ticks: number;
}
export declare const Room: {
    encode(message: Room, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Room;
    fromJSON(object: any): Room;
    toJSON(message: Room): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["enabledCodecs"][number], keyof Codec>]: never; })[] & { [K_1 in Exclude<keyof I["enabledCodecs"], number | keyof {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[]>]: never; }) | undefined;
        metadata?: string | undefined;
        numParticipants?: number | undefined;
        numPublishers?: number | undefined;
        activeRecording?: boolean | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Room>]: never; }>(object: I): Room;
};
export declare const Codec: {
    encode(message: Codec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Codec;
    fromJSON(object: any): Codec;
    toJSON(message: Codec): unknown;
    fromPartial<I extends {
        mime?: string | undefined;
        fmtpLine?: string | undefined;
    } & {
        mime?: string | undefined;
        fmtpLine?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Codec>]: never; }>(object: I): Codec;
};
export declare const PlayoutDelay: {
    encode(message: PlayoutDelay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlayoutDelay;
    fromJSON(object: any): PlayoutDelay;
    toJSON(message: PlayoutDelay): unknown;
    fromPartial<I extends {
        enabled?: boolean | undefined;
        min?: number | undefined;
        max?: number | undefined;
    } & {
        enabled?: boolean | undefined;
        min?: number | undefined;
        max?: number | undefined;
    } & { [K in Exclude<keyof I, keyof PlayoutDelay>]: never; }>(object: I): PlayoutDelay;
};
export declare const ParticipantPermission: {
    encode(message: ParticipantPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParticipantPermission;
    fromJSON(object: any): ParticipantPermission;
    toJSON(message: ParticipantPermission): unknown;
    fromPartial<I extends {
        canSubscribe?: boolean | undefined;
        canPublish?: boolean | undefined;
        canPublishData?: boolean | undefined;
        canPublishSources?: TrackSource[] | undefined;
        hidden?: boolean | undefined;
        recorder?: boolean | undefined;
        canUpdateMetadata?: boolean | undefined;
    } & {
        canSubscribe?: boolean | undefined;
        canPublish?: boolean | undefined;
        canPublishData?: boolean | undefined;
        canPublishSources?: (TrackSource[] & TrackSource[] & { [K in Exclude<keyof I["canPublishSources"], number | keyof TrackSource[]>]: never; }) | undefined;
        hidden?: boolean | undefined;
        recorder?: boolean | undefined;
        canUpdateMetadata?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ParticipantPermission>]: never; }>(object: I): ParticipantPermission;
};
export declare const ParticipantInfo: {
    encode(message: ParticipantInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParticipantInfo;
    fromJSON(object: any): ParticipantInfo;
    toJSON(message: ParticipantInfo): unknown;
    fromPartial<I extends {
        sid?: string | undefined;
        identity?: string | undefined;
        state?: ParticipantInfo_State | undefined;
        tracks?: {
            sid?: string | undefined;
            type?: TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
            layers?: {
                quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: Encryption_Type | undefined;
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
            canPublishSources?: TrackSource[] | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } | undefined;
        region?: string | undefined;
        isPublisher?: boolean | undefined;
    } & {
        sid?: string | undefined;
        identity?: string | undefined;
        state?: ParticipantInfo_State | undefined;
        tracks?: ({
            sid?: string | undefined;
            type?: TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
            layers?: {
                quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: Encryption_Type | undefined;
            stream?: string | undefined;
        }[] & ({
            sid?: string | undefined;
            type?: TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
            layers?: {
                quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: Encryption_Type | undefined;
            stream?: string | undefined;
        } & {
            sid?: string | undefined;
            type?: TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
            layers?: ({
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] & ({
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & {
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & { [K in Exclude<keyof I["tracks"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["tracks"][number]["layers"], number | keyof {
                quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K_2 in Exclude<keyof I["tracks"][number]["codecs"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["tracks"][number]["codecs"][number]["layers"], number | keyof {
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["tracks"][number]["codecs"][number], keyof SimulcastCodecInfo>]: never; })[] & { [K_5 in Exclude<keyof I["tracks"][number]["codecs"], number | keyof {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: Encryption_Type | undefined;
            stream?: string | undefined;
        } & { [K_6 in Exclude<keyof I["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_7 in Exclude<keyof I["tracks"], number | keyof {
            sid?: string | undefined;
            type?: TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
            layers?: {
                quality?: VideoQuality | undefined;
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
                    quality?: VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
            encryption?: Encryption_Type | undefined;
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
            canPublishSources?: TrackSource[] | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } & {
            canSubscribe?: boolean | undefined;
            canPublish?: boolean | undefined;
            canPublishData?: boolean | undefined;
            canPublishSources?: (TrackSource[] & TrackSource[] & { [K_8 in Exclude<keyof I["permission"]["canPublishSources"], number | keyof TrackSource[]>]: never; }) | undefined;
            hidden?: boolean | undefined;
            recorder?: boolean | undefined;
            canUpdateMetadata?: boolean | undefined;
        } & { [K_9 in Exclude<keyof I["permission"], keyof ParticipantPermission>]: never; }) | undefined;
        region?: string | undefined;
        isPublisher?: boolean | undefined;
    } & { [K_10 in Exclude<keyof I, keyof ParticipantInfo>]: never; }>(object: I): ParticipantInfo;
};
export declare const Encryption: {
    encode(_: Encryption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Encryption;
    fromJSON(_: any): Encryption;
    toJSON(_: Encryption): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): Encryption;
};
export declare const SimulcastCodecInfo: {
    encode(message: SimulcastCodecInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SimulcastCodecInfo;
    fromJSON(object: any): SimulcastCodecInfo;
    toJSON(message: SimulcastCodecInfo): unknown;
    fromPartial<I extends {
        mimeType?: string | undefined;
        mid?: string | undefined;
        cid?: string | undefined;
        layers?: {
            quality?: VideoQuality | undefined;
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
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        }[] & ({
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        } & {
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        } & { [K in Exclude<keyof I["layers"][number], keyof VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["layers"], number | keyof {
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SimulcastCodecInfo>]: never; }>(object: I): SimulcastCodecInfo;
};
export declare const TrackInfo: {
    encode(message: TrackInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrackInfo;
    fromJSON(object: any): TrackInfo;
    toJSON(message: TrackInfo): unknown;
    fromPartial<I extends {
        sid?: string | undefined;
        type?: TrackType | undefined;
        name?: string | undefined;
        muted?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
        simulcast?: boolean | undefined;
        disableDtx?: boolean | undefined;
        source?: TrackSource | undefined;
        layers?: {
            quality?: VideoQuality | undefined;
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
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        stereo?: boolean | undefined;
        disableRed?: boolean | undefined;
        encryption?: Encryption_Type | undefined;
        stream?: string | undefined;
    } & {
        sid?: string | undefined;
        type?: TrackType | undefined;
        name?: string | undefined;
        muted?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
        simulcast?: boolean | undefined;
        disableDtx?: boolean | undefined;
        source?: TrackSource | undefined;
        layers?: ({
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        }[] & ({
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        } & {
            quality?: VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        } & { [K in Exclude<keyof I["layers"][number], keyof VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["layers"], number | keyof {
            quality?: VideoQuality | undefined;
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
                quality?: VideoQuality | undefined;
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
                quality?: VideoQuality | undefined;
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
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] & ({
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & {
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & { [K_2 in Exclude<keyof I["codecs"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["codecs"][number]["layers"], number | keyof {
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["codecs"][number], keyof SimulcastCodecInfo>]: never; })[] & { [K_5 in Exclude<keyof I["codecs"], number | keyof {
            mimeType?: string | undefined;
            mid?: string | undefined;
            cid?: string | undefined;
            layers?: {
                quality?: VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        stereo?: boolean | undefined;
        disableRed?: boolean | undefined;
        encryption?: Encryption_Type | undefined;
        stream?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof TrackInfo>]: never; }>(object: I): TrackInfo;
};
export declare const VideoLayer: {
    encode(message: VideoLayer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VideoLayer;
    fromJSON(object: any): VideoLayer;
    toJSON(message: VideoLayer): unknown;
    fromPartial<I extends {
        quality?: VideoQuality | undefined;
        width?: number | undefined;
        height?: number | undefined;
        bitrate?: number | undefined;
        ssrc?: number | undefined;
    } & {
        quality?: VideoQuality | undefined;
        width?: number | undefined;
        height?: number | undefined;
        bitrate?: number | undefined;
        ssrc?: number | undefined;
    } & { [K in Exclude<keyof I, keyof VideoLayer>]: never; }>(object: I): VideoLayer;
};
export declare const DataPacket: {
    encode(message: DataPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DataPacket;
    fromJSON(object: any): DataPacket;
    toJSON(message: DataPacket): unknown;
    fromPartial<I extends {
        kind?: DataPacket_Kind | undefined;
        user?: {
            participantSid?: string | undefined;
            participantIdentity?: string | undefined;
            payload?: Uint8Array | undefined;
            destinationSids?: string[] | undefined;
            destinationIdentities?: string[] | undefined;
            topic?: string | undefined;
        } | undefined;
        speaker?: {
            speakers?: {
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        kind?: DataPacket_Kind | undefined;
        user?: ({
            participantSid?: string | undefined;
            participantIdentity?: string | undefined;
            payload?: Uint8Array | undefined;
            destinationSids?: string[] | undefined;
            destinationIdentities?: string[] | undefined;
            topic?: string | undefined;
        } & {
            participantSid?: string | undefined;
            participantIdentity?: string | undefined;
            payload?: Uint8Array | undefined;
            destinationSids?: (string[] & string[] & { [K in Exclude<keyof I["user"]["destinationSids"], number | keyof string[]>]: never; }) | undefined;
            destinationIdentities?: (string[] & string[] & { [K_1 in Exclude<keyof I["user"]["destinationIdentities"], number | keyof string[]>]: never; }) | undefined;
            topic?: string | undefined;
        } & { [K_2 in Exclude<keyof I["user"], keyof UserPacket>]: never; }) | undefined;
        speaker?: ({
            speakers?: {
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            }[] | undefined;
        } & {
            speakers?: ({
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            }[] & ({
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            } & {
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["speaker"]["speakers"][number], keyof SpeakerInfo>]: never; })[] & { [K_4 in Exclude<keyof I["speaker"]["speakers"], number | keyof {
                sid?: string | undefined;
                level?: number | undefined;
                active?: boolean | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["speaker"], "speakers">]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof DataPacket>]: never; }>(object: I): DataPacket;
};
export declare const ActiveSpeakerUpdate: {
    encode(message: ActiveSpeakerUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActiveSpeakerUpdate;
    fromJSON(object: any): ActiveSpeakerUpdate;
    toJSON(message: ActiveSpeakerUpdate): unknown;
    fromPartial<I extends {
        speakers?: {
            sid?: string | undefined;
            level?: number | undefined;
            active?: boolean | undefined;
        }[] | undefined;
    } & {
        speakers?: ({
            sid?: string | undefined;
            level?: number | undefined;
            active?: boolean | undefined;
        }[] & ({
            sid?: string | undefined;
            level?: number | undefined;
            active?: boolean | undefined;
        } & {
            sid?: string | undefined;
            level?: number | undefined;
            active?: boolean | undefined;
        } & { [K in Exclude<keyof I["speakers"][number], keyof SpeakerInfo>]: never; })[] & { [K_1 in Exclude<keyof I["speakers"], number | keyof {
            sid?: string | undefined;
            level?: number | undefined;
            active?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "speakers">]: never; }>(object: I): ActiveSpeakerUpdate;
};
export declare const SpeakerInfo: {
    encode(message: SpeakerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpeakerInfo;
    fromJSON(object: any): SpeakerInfo;
    toJSON(message: SpeakerInfo): unknown;
    fromPartial<I extends {
        sid?: string | undefined;
        level?: number | undefined;
        active?: boolean | undefined;
    } & {
        sid?: string | undefined;
        level?: number | undefined;
        active?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof SpeakerInfo>]: never; }>(object: I): SpeakerInfo;
};
export declare const UserPacket: {
    encode(message: UserPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserPacket;
    fromJSON(object: any): UserPacket;
    toJSON(message: UserPacket): unknown;
    fromPartial<I extends {
        participantSid?: string | undefined;
        participantIdentity?: string | undefined;
        payload?: Uint8Array | undefined;
        destinationSids?: string[] | undefined;
        destinationIdentities?: string[] | undefined;
        topic?: string | undefined;
    } & {
        participantSid?: string | undefined;
        participantIdentity?: string | undefined;
        payload?: Uint8Array | undefined;
        destinationSids?: (string[] & string[] & { [K in Exclude<keyof I["destinationSids"], number | keyof string[]>]: never; }) | undefined;
        destinationIdentities?: (string[] & string[] & { [K_1 in Exclude<keyof I["destinationIdentities"], number | keyof string[]>]: never; }) | undefined;
        topic?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof UserPacket>]: never; }>(object: I): UserPacket;
};
export declare const ParticipantTracks: {
    encode(message: ParticipantTracks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParticipantTracks;
    fromJSON(object: any): ParticipantTracks;
    toJSON(message: ParticipantTracks): unknown;
    fromPartial<I extends {
        participantSid?: string | undefined;
        trackSids?: string[] | undefined;
    } & {
        participantSid?: string | undefined;
        trackSids?: (string[] & string[] & { [K in Exclude<keyof I["trackSids"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ParticipantTracks>]: never; }>(object: I): ParticipantTracks;
};
export declare const ServerInfo: {
    encode(message: ServerInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ServerInfo;
    fromJSON(object: any): ServerInfo;
    toJSON(message: ServerInfo): unknown;
    fromPartial<I extends {
        edition?: ServerInfo_Edition | undefined;
        version?: string | undefined;
        protocol?: number | undefined;
        region?: string | undefined;
        nodeId?: string | undefined;
        debugInfo?: string | undefined;
    } & {
        edition?: ServerInfo_Edition | undefined;
        version?: string | undefined;
        protocol?: number | undefined;
        region?: string | undefined;
        nodeId?: string | undefined;
        debugInfo?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ServerInfo>]: never; }>(object: I): ServerInfo;
};
export declare const ClientInfo: {
    encode(message: ClientInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientInfo;
    fromJSON(object: any): ClientInfo;
    toJSON(message: ClientInfo): unknown;
    fromPartial<I extends {
        sdk?: ClientInfo_SDK | undefined;
        version?: string | undefined;
        protocol?: number | undefined;
        os?: string | undefined;
        osVersion?: string | undefined;
        deviceModel?: string | undefined;
        browser?: string | undefined;
        browserVersion?: string | undefined;
        address?: string | undefined;
        network?: string | undefined;
    } & {
        sdk?: ClientInfo_SDK | undefined;
        version?: string | undefined;
        protocol?: number | undefined;
        os?: string | undefined;
        osVersion?: string | undefined;
        deviceModel?: string | undefined;
        browser?: string | undefined;
        browserVersion?: string | undefined;
        address?: string | undefined;
        network?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ClientInfo>]: never; }>(object: I): ClientInfo;
};
export declare const ClientConfiguration: {
    encode(message: ClientConfiguration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientConfiguration;
    fromJSON(object: any): ClientConfiguration;
    toJSON(message: ClientConfiguration): unknown;
    fromPartial<I extends {
        video?: {
            hardwareEncoder?: ClientConfigSetting | undefined;
        } | undefined;
        screen?: {
            hardwareEncoder?: ClientConfigSetting | undefined;
        } | undefined;
        resumeConnection?: ClientConfigSetting | undefined;
        disabledCodecs?: {
            codecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            publish?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
        } | undefined;
        forceRelay?: ClientConfigSetting | undefined;
    } & {
        video?: ({
            hardwareEncoder?: ClientConfigSetting | undefined;
        } & {
            hardwareEncoder?: ClientConfigSetting | undefined;
        } & { [K in Exclude<keyof I["video"], "hardwareEncoder">]: never; }) | undefined;
        screen?: ({
            hardwareEncoder?: ClientConfigSetting | undefined;
        } & {
            hardwareEncoder?: ClientConfigSetting | undefined;
        } & { [K_1 in Exclude<keyof I["screen"], "hardwareEncoder">]: never; }) | undefined;
        resumeConnection?: ClientConfigSetting | undefined;
        disabledCodecs?: ({
            codecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            publish?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
        } & {
            codecs?: ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] & ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & { [K_2 in Exclude<keyof I["disabledCodecs"]["codecs"][number], keyof Codec>]: never; })[] & { [K_3 in Exclude<keyof I["disabledCodecs"]["codecs"], number | keyof {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[]>]: never; }) | undefined;
            publish?: ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] & ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & { [K_4 in Exclude<keyof I["disabledCodecs"]["publish"][number], keyof Codec>]: never; })[] & { [K_5 in Exclude<keyof I["disabledCodecs"]["publish"], number | keyof {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["disabledCodecs"], keyof DisabledCodecs>]: never; }) | undefined;
        forceRelay?: ClientConfigSetting | undefined;
    } & { [K_7 in Exclude<keyof I, keyof ClientConfiguration>]: never; }>(object: I): ClientConfiguration;
};
export declare const VideoConfiguration: {
    encode(message: VideoConfiguration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VideoConfiguration;
    fromJSON(object: any): VideoConfiguration;
    toJSON(message: VideoConfiguration): unknown;
    fromPartial<I extends {
        hardwareEncoder?: ClientConfigSetting | undefined;
    } & {
        hardwareEncoder?: ClientConfigSetting | undefined;
    } & { [K in Exclude<keyof I, "hardwareEncoder">]: never; }>(object: I): VideoConfiguration;
};
export declare const DisabledCodecs: {
    encode(message: DisabledCodecs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisabledCodecs;
    fromJSON(object: any): DisabledCodecs;
    toJSON(message: DisabledCodecs): unknown;
    fromPartial<I extends {
        codecs?: {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[] | undefined;
        publish?: {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[] | undefined;
    } & {
        codecs?: ({
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[] & ({
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        } & {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        } & { [K in Exclude<keyof I["codecs"][number], keyof Codec>]: never; })[] & { [K_1 in Exclude<keyof I["codecs"], number | keyof {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[]>]: never; }) | undefined;
        publish?: ({
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[] & ({
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        } & {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        } & { [K_2 in Exclude<keyof I["publish"][number], keyof Codec>]: never; })[] & { [K_3 in Exclude<keyof I["publish"], number | keyof {
            mime?: string | undefined;
            fmtpLine?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof DisabledCodecs>]: never; }>(object: I): DisabledCodecs;
};
export declare const RTPDrift: {
    encode(message: RTPDrift, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RTPDrift;
    fromJSON(object: any): RTPDrift;
    toJSON(message: RTPDrift): unknown;
    fromPartial<I extends {
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        duration?: number | undefined;
        startTimestamp?: number | undefined;
        endTimestamp?: number | undefined;
        rtpClockTicks?: number | undefined;
        driftSamples?: number | undefined;
        driftMs?: number | undefined;
        clockRate?: number | undefined;
    } & {
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        duration?: number | undefined;
        startTimestamp?: number | undefined;
        endTimestamp?: number | undefined;
        rtpClockTicks?: number | undefined;
        driftSamples?: number | undefined;
        driftMs?: number | undefined;
        clockRate?: number | undefined;
    } & { [K in Exclude<keyof I, keyof RTPDrift>]: never; }>(object: I): RTPDrift;
};
export declare const RTPStats: {
    encode(message: RTPStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RTPStats;
    fromJSON(object: any): RTPStats;
    toJSON(message: RTPStats): unknown;
    fromPartial<I extends {
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        duration?: number | undefined;
        packets?: number | undefined;
        packetRate?: number | undefined;
        bytes?: number | undefined;
        headerBytes?: number | undefined;
        bitrate?: number | undefined;
        packetsLost?: number | undefined;
        packetLossRate?: number | undefined;
        packetLossPercentage?: number | undefined;
        packetsDuplicate?: number | undefined;
        packetDuplicateRate?: number | undefined;
        bytesDuplicate?: number | undefined;
        headerBytesDuplicate?: number | undefined;
        bitrateDuplicate?: number | undefined;
        packetsPadding?: number | undefined;
        packetPaddingRate?: number | undefined;
        bytesPadding?: number | undefined;
        headerBytesPadding?: number | undefined;
        bitratePadding?: number | undefined;
        packetsOutOfOrder?: number | undefined;
        frames?: number | undefined;
        frameRate?: number | undefined;
        jitterCurrent?: number | undefined;
        jitterMax?: number | undefined;
        gapHistogram?: {
            [x: number]: number | undefined;
        } | undefined;
        nacks?: number | undefined;
        nackAcks?: number | undefined;
        nackMisses?: number | undefined;
        nackRepeated?: number | undefined;
        plis?: number | undefined;
        lastPli?: Date | undefined;
        firs?: number | undefined;
        lastFir?: Date | undefined;
        rttCurrent?: number | undefined;
        rttMax?: number | undefined;
        keyFrames?: number | undefined;
        lastKeyFrame?: Date | undefined;
        layerLockPlis?: number | undefined;
        lastLayerLockPli?: Date | undefined;
        packetDrift?: {
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } | undefined;
        reportDrift?: {
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } | undefined;
    } & {
        startTime?: Date | undefined;
        endTime?: Date | undefined;
        duration?: number | undefined;
        packets?: number | undefined;
        packetRate?: number | undefined;
        bytes?: number | undefined;
        headerBytes?: number | undefined;
        bitrate?: number | undefined;
        packetsLost?: number | undefined;
        packetLossRate?: number | undefined;
        packetLossPercentage?: number | undefined;
        packetsDuplicate?: number | undefined;
        packetDuplicateRate?: number | undefined;
        bytesDuplicate?: number | undefined;
        headerBytesDuplicate?: number | undefined;
        bitrateDuplicate?: number | undefined;
        packetsPadding?: number | undefined;
        packetPaddingRate?: number | undefined;
        bytesPadding?: number | undefined;
        headerBytesPadding?: number | undefined;
        bitratePadding?: number | undefined;
        packetsOutOfOrder?: number | undefined;
        frames?: number | undefined;
        frameRate?: number | undefined;
        jitterCurrent?: number | undefined;
        jitterMax?: number | undefined;
        gapHistogram?: ({
            [x: number]: number | undefined;
        } & {
            [x: number]: number | undefined;
        } & { [K in Exclude<keyof I["gapHistogram"], number>]: never; }) | undefined;
        nacks?: number | undefined;
        nackAcks?: number | undefined;
        nackMisses?: number | undefined;
        nackRepeated?: number | undefined;
        plis?: number | undefined;
        lastPli?: Date | undefined;
        firs?: number | undefined;
        lastFir?: Date | undefined;
        rttCurrent?: number | undefined;
        rttMax?: number | undefined;
        keyFrames?: number | undefined;
        lastKeyFrame?: Date | undefined;
        layerLockPlis?: number | undefined;
        lastLayerLockPli?: Date | undefined;
        packetDrift?: ({
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } & {
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } & { [K_1 in Exclude<keyof I["packetDrift"], keyof RTPDrift>]: never; }) | undefined;
        reportDrift?: ({
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } & {
            startTime?: Date | undefined;
            endTime?: Date | undefined;
            duration?: number | undefined;
            startTimestamp?: number | undefined;
            endTimestamp?: number | undefined;
            rtpClockTicks?: number | undefined;
            driftSamples?: number | undefined;
            driftMs?: number | undefined;
            clockRate?: number | undefined;
        } & { [K_2 in Exclude<keyof I["reportDrift"], keyof RTPDrift>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof RTPStats>]: never; }>(object: I): RTPStats;
};
export declare const RTPStats_GapHistogramEntry: {
    encode(message: RTPStats_GapHistogramEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RTPStats_GapHistogramEntry;
    fromJSON(object: any): RTPStats_GapHistogramEntry;
    toJSON(message: RTPStats_GapHistogramEntry): unknown;
    fromPartial<I extends {
        key?: number | undefined;
        value?: number | undefined;
    } & {
        key?: number | undefined;
        value?: number | undefined;
    } & { [K in Exclude<keyof I, keyof RTPStats_GapHistogramEntry>]: never; }>(object: I): RTPStats_GapHistogramEntry;
};
export declare const TimedVersion: {
    encode(message: TimedVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimedVersion;
    fromJSON(object: any): TimedVersion;
    toJSON(message: TimedVersion): unknown;
    fromPartial<I extends {
        unixMicro?: number | undefined;
        ticks?: number | undefined;
    } & {
        unixMicro?: number | undefined;
        ticks?: number | undefined;
    } & { [K in Exclude<keyof I, keyof TimedVersion>]: never; }>(object: I): TimedVersion;
};
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
