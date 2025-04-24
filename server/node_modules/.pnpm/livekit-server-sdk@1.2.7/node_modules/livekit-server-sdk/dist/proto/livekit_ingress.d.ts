import _m0 from "protobufjs/minimal";
import { AudioCodec, TrackInfo, TrackSource, VideoCodec, VideoLayer } from "./livekit_models";
export declare const protobufPackage = "livekit";
export declare enum IngressInput {
    RTMP_INPUT = 0,
    WHIP_INPUT = 1,
    /** URL_INPUT - Pull from the provided URL. Only HTTP url are supported, serving either a single media file or a HLS stream */
    URL_INPUT = 2,
    UNRECOGNIZED = -1
}
export declare function ingressInputFromJSON(object: any): IngressInput;
export declare function ingressInputToJSON(object: IngressInput): string;
export declare enum IngressAudioEncodingPreset {
    /** OPUS_STEREO_96KBPS - OPUS, 2 channels, 96kbps */
    OPUS_STEREO_96KBPS = 0,
    /** OPUS_MONO_64KBS - OPUS, 1 channel, 64kbps */
    OPUS_MONO_64KBS = 1,
    UNRECOGNIZED = -1
}
export declare function ingressAudioEncodingPresetFromJSON(object: any): IngressAudioEncodingPreset;
export declare function ingressAudioEncodingPresetToJSON(object: IngressAudioEncodingPreset): string;
export declare enum IngressVideoEncodingPreset {
    /** H264_720P_30FPS_3_LAYERS - 1280x720,  30fps, 1900kbps main layer, 3 layers total */
    H264_720P_30FPS_3_LAYERS = 0,
    /** H264_1080P_30FPS_3_LAYERS - 1980x1080, 30fps, 3500kbps main layer, 3 layers total */
    H264_1080P_30FPS_3_LAYERS = 1,
    /** H264_540P_25FPS_2_LAYERS - 960x540,  25fps, 1000kbps  main layer, 2 layers total */
    H264_540P_25FPS_2_LAYERS = 2,
    /** H264_720P_30FPS_1_LAYER - 1280x720,  30fps, 1900kbps, no simulcast */
    H264_720P_30FPS_1_LAYER = 3,
    /** H264_1080P_30FPS_1_LAYER - 1980x1080, 30fps, 3500kbps, no simulcast */
    H264_1080P_30FPS_1_LAYER = 4,
    /** H264_720P_30FPS_3_LAYERS_HIGH_MOTION - 1280x720,  30fps, 2500kbps main layer, 3 layers total, higher bitrate for high motion, harder to encode content */
    H264_720P_30FPS_3_LAYERS_HIGH_MOTION = 5,
    /** H264_1080P_30FPS_3_LAYERS_HIGH_MOTION - 1980x1080, 30fps, 4500kbps main layer, 3 layers total, higher bitrate for high motion, harder to encode content */
    H264_1080P_30FPS_3_LAYERS_HIGH_MOTION = 6,
    /** H264_540P_25FPS_2_LAYERS_HIGH_MOTION - 960x540,  25fps, 1300kbps  main layer, 2 layers total, higher bitrate for high motion, harder to encode content */
    H264_540P_25FPS_2_LAYERS_HIGH_MOTION = 7,
    /** H264_720P_30FPS_1_LAYER_HIGH_MOTION - 1280x720,  30fps, 2500kbps, no simulcast, higher bitrate for high motion, harder to encode content */
    H264_720P_30FPS_1_LAYER_HIGH_MOTION = 8,
    /** H264_1080P_30FPS_1_LAYER_HIGH_MOTION - 1980x1080, 30fps, 4500kbps, no simulcast, higher bitrate for high motion, harder to encode content */
    H264_1080P_30FPS_1_LAYER_HIGH_MOTION = 9,
    UNRECOGNIZED = -1
}
export declare function ingressVideoEncodingPresetFromJSON(object: any): IngressVideoEncodingPreset;
export declare function ingressVideoEncodingPresetToJSON(object: IngressVideoEncodingPreset): string;
export interface CreateIngressRequest {
    inputType?: IngressInput;
    /** Where to pull media from, only for URL input type */
    url?: string;
    /** User provided identifier for the ingress */
    name?: string;
    /** room to publish to */
    roomName?: string;
    /** publish as participant */
    participantIdentity?: string;
    /** name of publishing participant (used for display only) */
    participantName?: string;
    /** whether to pass through the incoming media without transcoding, only compatible with some input types */
    bypassTranscoding?: boolean;
    audio?: IngressAudioOptions;
    video?: IngressVideoOptions;
}
export interface IngressAudioOptions {
    name?: string;
    source?: TrackSource;
    preset?: IngressAudioEncodingPreset | undefined;
    options?: IngressAudioEncodingOptions | undefined;
}
export interface IngressVideoOptions {
    name?: string;
    source?: TrackSource;
    preset?: IngressVideoEncodingPreset | undefined;
    options?: IngressVideoEncodingOptions | undefined;
}
export interface IngressAudioEncodingOptions {
    /** desired audio codec to publish to room */
    audioCodec?: AudioCodec;
    bitrate?: number;
    disableDtx?: boolean;
    channels?: number;
}
export interface IngressVideoEncodingOptions {
    /** desired codec to publish to room */
    videoCodec?: VideoCodec;
    frameRate?: number;
    /** simulcast layers to publish, when empty, should usually be set to layers at 1/2 and 1/4 of the dimensions */
    layers?: VideoLayer[];
}
export interface IngressInfo {
    ingressId?: string;
    name?: string;
    streamKey?: string;
    /** URL to point the encoder to for push (RTMP, WHIP), or location to pull media from for pull (URL) */
    url?: string;
    /**
     * for RTMP input, it'll be a rtmp:// URL
     * for FILE input, it'll be a http:// URL
     * for SRT input, it'll be a srt:// URL
     */
    inputType?: IngressInput;
    bypassTranscoding?: boolean;
    audio?: IngressAudioOptions;
    video?: IngressVideoOptions;
    roomName?: string;
    participantIdentity?: string;
    participantName?: string;
    reusable?: boolean;
    /** Description of error/stream non compliance and debug info for publisher otherwise (received bitrate, resolution, bandwidth) */
    state?: IngressState;
}
export interface IngressState {
    status?: IngressState_Status;
    /** Error/non compliance description if any */
    error?: string;
    video?: InputVideoState;
    audio?: InputAudioState;
    /** ID of the current/previous room published to */
    roomId?: string;
    startedAt?: number;
    endedAt?: number;
    resourceId?: string;
    tracks?: TrackInfo[];
}
export declare enum IngressState_Status {
    ENDPOINT_INACTIVE = 0,
    ENDPOINT_BUFFERING = 1,
    ENDPOINT_PUBLISHING = 2,
    ENDPOINT_ERROR = 3,
    ENDPOINT_COMPLETE = 4,
    UNRECOGNIZED = -1
}
export declare function ingressState_StatusFromJSON(object: any): IngressState_Status;
export declare function ingressState_StatusToJSON(object: IngressState_Status): string;
export interface InputVideoState {
    mimeType?: string;
    averageBitrate?: number;
    width?: number;
    height?: number;
    framerate?: number;
}
export interface InputAudioState {
    mimeType?: string;
    averageBitrate?: number;
    channels?: number;
    sampleRate?: number;
}
export interface UpdateIngressRequest {
    ingressId?: string;
    name?: string;
    roomName?: string;
    participantIdentity?: string;
    participantName?: string;
    bypassTranscoding?: boolean | undefined;
    audio?: IngressAudioOptions;
    video?: IngressVideoOptions;
}
export interface ListIngressRequest {
    /** when blank, lists all ingress endpoints */
    roomName?: string;
    /** (optional, filter by ingress ID) */
    ingressId?: string;
}
export interface ListIngressResponse {
    items?: IngressInfo[];
}
export interface DeleteIngressRequest {
    ingressId?: string;
}
export declare const CreateIngressRequest: {
    encode(message: CreateIngressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateIngressRequest;
    fromJSON(object: any): CreateIngressRequest;
    toJSON(message: CreateIngressRequest): unknown;
    fromPartial<I extends {
        inputType?: IngressInput | undefined;
        url?: string | undefined;
        name?: string | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } | undefined;
        video?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        inputType?: IngressInput | undefined;
        url?: string | undefined;
        name?: string | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: ({
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & { [K in Exclude<keyof I["audio"]["options"], keyof IngressAudioEncodingOptions>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["audio"], keyof IngressAudioOptions>]: never; }) | undefined;
        video?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: ({
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["video"]["options"]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["video"]["options"]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["video"]["options"], keyof IngressVideoEncodingOptions>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["video"], keyof IngressVideoOptions>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof CreateIngressRequest>]: never; }>(object: I): CreateIngressRequest;
};
export declare const IngressAudioOptions: {
    encode(message: IngressAudioOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressAudioOptions;
    fromJSON(object: any): IngressAudioOptions;
    toJSON(message: IngressAudioOptions): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        source?: TrackSource | undefined;
        preset?: IngressAudioEncodingPreset | undefined;
        options?: {
            audioCodec?: AudioCodec | undefined;
            bitrate?: number | undefined;
            disableDtx?: boolean | undefined;
            channels?: number | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        source?: TrackSource | undefined;
        preset?: IngressAudioEncodingPreset | undefined;
        options?: ({
            audioCodec?: AudioCodec | undefined;
            bitrate?: number | undefined;
            disableDtx?: boolean | undefined;
            channels?: number | undefined;
        } & {
            audioCodec?: AudioCodec | undefined;
            bitrate?: number | undefined;
            disableDtx?: boolean | undefined;
            channels?: number | undefined;
        } & { [K in Exclude<keyof I["options"], keyof IngressAudioEncodingOptions>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof IngressAudioOptions>]: never; }>(object: I): IngressAudioOptions;
};
export declare const IngressVideoOptions: {
    encode(message: IngressVideoOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressVideoOptions;
    fromJSON(object: any): IngressVideoOptions;
    toJSON(message: IngressVideoOptions): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        source?: TrackSource | undefined;
        preset?: IngressVideoEncodingPreset | undefined;
        options?: {
            videoCodec?: VideoCodec | undefined;
            frameRate?: number | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        source?: TrackSource | undefined;
        preset?: IngressVideoEncodingPreset | undefined;
        options?: ({
            videoCodec?: VideoCodec | undefined;
            frameRate?: number | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
        } & {
            videoCodec?: VideoCodec | undefined;
            frameRate?: number | undefined;
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
            } & { [K in Exclude<keyof I["options"]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["options"]["layers"], number | keyof {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["options"], keyof IngressVideoEncodingOptions>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof IngressVideoOptions>]: never; }>(object: I): IngressVideoOptions;
};
export declare const IngressAudioEncodingOptions: {
    encode(message: IngressAudioEncodingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressAudioEncodingOptions;
    fromJSON(object: any): IngressAudioEncodingOptions;
    toJSON(message: IngressAudioEncodingOptions): unknown;
    fromPartial<I extends {
        audioCodec?: AudioCodec | undefined;
        bitrate?: number | undefined;
        disableDtx?: boolean | undefined;
        channels?: number | undefined;
    } & {
        audioCodec?: AudioCodec | undefined;
        bitrate?: number | undefined;
        disableDtx?: boolean | undefined;
        channels?: number | undefined;
    } & { [K in Exclude<keyof I, keyof IngressAudioEncodingOptions>]: never; }>(object: I): IngressAudioEncodingOptions;
};
export declare const IngressVideoEncodingOptions: {
    encode(message: IngressVideoEncodingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressVideoEncodingOptions;
    fromJSON(object: any): IngressVideoEncodingOptions;
    toJSON(message: IngressVideoEncodingOptions): unknown;
    fromPartial<I extends {
        videoCodec?: VideoCodec | undefined;
        frameRate?: number | undefined;
        layers?: {
            quality?: import("./livekit_models").VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        }[] | undefined;
    } & {
        videoCodec?: VideoCodec | undefined;
        frameRate?: number | undefined;
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
        } & { [K in Exclude<keyof I["layers"][number], keyof VideoLayer>]: never; })[] & { [K_1 in Exclude<keyof I["layers"], number | keyof {
            quality?: import("./livekit_models").VideoQuality | undefined;
            width?: number | undefined;
            height?: number | undefined;
            bitrate?: number | undefined;
            ssrc?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof IngressVideoEncodingOptions>]: never; }>(object: I): IngressVideoEncodingOptions;
};
export declare const IngressInfo: {
    encode(message: IngressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressInfo;
    fromJSON(object: any): IngressInfo;
    toJSON(message: IngressInfo): unknown;
    fromPartial<I extends {
        ingressId?: string | undefined;
        name?: string | undefined;
        streamKey?: string | undefined;
        url?: string | undefined;
        inputType?: IngressInput | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } | undefined;
        video?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        reusable?: boolean | undefined;
        state?: {
            status?: IngressState_Status | undefined;
            error?: string | undefined;
            video?: {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                framerate?: number | undefined;
            } | undefined;
            audio?: {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                channels?: number | undefined;
                sampleRate?: number | undefined;
            } | undefined;
            roomId?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            resourceId?: string | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: TrackSource | undefined;
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
        } | undefined;
    } & {
        ingressId?: string | undefined;
        name?: string | undefined;
        streamKey?: string | undefined;
        url?: string | undefined;
        inputType?: IngressInput | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: ({
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & { [K in Exclude<keyof I["audio"]["options"], keyof IngressAudioEncodingOptions>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["audio"], keyof IngressAudioOptions>]: never; }) | undefined;
        video?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: ({
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["video"]["options"]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["video"]["options"]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["video"]["options"], keyof IngressVideoEncodingOptions>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["video"], keyof IngressVideoOptions>]: never; }) | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        reusable?: boolean | undefined;
        state?: ({
            status?: IngressState_Status | undefined;
            error?: string | undefined;
            video?: {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                framerate?: number | undefined;
            } | undefined;
            audio?: {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                channels?: number | undefined;
                sampleRate?: number | undefined;
            } | undefined;
            roomId?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            resourceId?: string | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: TrackSource | undefined;
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
        } & {
            status?: IngressState_Status | undefined;
            error?: string | undefined;
            video?: ({
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                framerate?: number | undefined;
            } & {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                framerate?: number | undefined;
            } & { [K_6 in Exclude<keyof I["state"]["video"], keyof InputVideoState>]: never; }) | undefined;
            audio?: ({
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                channels?: number | undefined;
                sampleRate?: number | undefined;
            } & {
                mimeType?: string | undefined;
                averageBitrate?: number | undefined;
                channels?: number | undefined;
                sampleRate?: number | undefined;
            } & { [K_7 in Exclude<keyof I["state"]["audio"], keyof InputAudioState>]: never; }) | undefined;
            roomId?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            resourceId?: string | undefined;
            tracks?: ({
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: TrackSource | undefined;
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
                source?: TrackSource | undefined;
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
                source?: TrackSource | undefined;
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
                } & { [K_8 in Exclude<keyof I["state"]["tracks"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_9 in Exclude<keyof I["state"]["tracks"][number]["layers"], number | keyof {
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
                    } & { [K_10 in Exclude<keyof I["state"]["tracks"][number]["codecs"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_11 in Exclude<keyof I["state"]["tracks"][number]["codecs"][number]["layers"], number | keyof {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I["state"]["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_13 in Exclude<keyof I["state"]["tracks"][number]["codecs"], number | keyof {
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
            } & { [K_14 in Exclude<keyof I["state"]["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_15 in Exclude<keyof I["state"]["tracks"], number | keyof {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: TrackSource | undefined;
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
        } & { [K_16 in Exclude<keyof I["state"], keyof IngressState>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof IngressInfo>]: never; }>(object: I): IngressInfo;
};
export declare const IngressState: {
    encode(message: IngressState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IngressState;
    fromJSON(object: any): IngressState;
    toJSON(message: IngressState): unknown;
    fromPartial<I extends {
        status?: IngressState_Status | undefined;
        error?: string | undefined;
        video?: {
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            framerate?: number | undefined;
        } | undefined;
        audio?: {
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            channels?: number | undefined;
            sampleRate?: number | undefined;
        } | undefined;
        roomId?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        resourceId?: string | undefined;
        tracks?: {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
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
    } & {
        status?: IngressState_Status | undefined;
        error?: string | undefined;
        video?: ({
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            framerate?: number | undefined;
        } & {
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            framerate?: number | undefined;
        } & { [K in Exclude<keyof I["video"], keyof InputVideoState>]: never; }) | undefined;
        audio?: ({
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            channels?: number | undefined;
            sampleRate?: number | undefined;
        } & {
            mimeType?: string | undefined;
            averageBitrate?: number | undefined;
            channels?: number | undefined;
            sampleRate?: number | undefined;
        } & { [K_1 in Exclude<keyof I["audio"], keyof InputAudioState>]: never; }) | undefined;
        roomId?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        resourceId?: string | undefined;
        tracks?: ({
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
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
            source?: TrackSource | undefined;
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
            source?: TrackSource | undefined;
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
            } & { [K_2 in Exclude<keyof I["tracks"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["tracks"][number]["layers"], number | keyof {
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
                } & { [K_4 in Exclude<keyof I["tracks"][number]["codecs"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_5 in Exclude<keyof I["tracks"][number]["codecs"][number]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_7 in Exclude<keyof I["tracks"][number]["codecs"], number | keyof {
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
        } & { [K_8 in Exclude<keyof I["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_9 in Exclude<keyof I["tracks"], number | keyof {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: TrackSource | undefined;
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
    } & { [K_10 in Exclude<keyof I, keyof IngressState>]: never; }>(object: I): IngressState;
};
export declare const InputVideoState: {
    encode(message: InputVideoState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InputVideoState;
    fromJSON(object: any): InputVideoState;
    toJSON(message: InputVideoState): unknown;
    fromPartial<I extends {
        mimeType?: string | undefined;
        averageBitrate?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        framerate?: number | undefined;
    } & {
        mimeType?: string | undefined;
        averageBitrate?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        framerate?: number | undefined;
    } & { [K in Exclude<keyof I, keyof InputVideoState>]: never; }>(object: I): InputVideoState;
};
export declare const InputAudioState: {
    encode(message: InputAudioState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InputAudioState;
    fromJSON(object: any): InputAudioState;
    toJSON(message: InputAudioState): unknown;
    fromPartial<I extends {
        mimeType?: string | undefined;
        averageBitrate?: number | undefined;
        channels?: number | undefined;
        sampleRate?: number | undefined;
    } & {
        mimeType?: string | undefined;
        averageBitrate?: number | undefined;
        channels?: number | undefined;
        sampleRate?: number | undefined;
    } & { [K in Exclude<keyof I, keyof InputAudioState>]: never; }>(object: I): InputAudioState;
};
export declare const UpdateIngressRequest: {
    encode(message: UpdateIngressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateIngressRequest;
    fromJSON(object: any): UpdateIngressRequest;
    toJSON(message: UpdateIngressRequest): unknown;
    fromPartial<I extends {
        ingressId?: string | undefined;
        name?: string | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } | undefined;
        video?: {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        ingressId?: string | undefined;
        name?: string | undefined;
        roomName?: string | undefined;
        participantIdentity?: string | undefined;
        participantName?: string | undefined;
        bypassTranscoding?: boolean | undefined;
        audio?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressAudioEncodingPreset | undefined;
            options?: ({
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & {
                audioCodec?: AudioCodec | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & { [K in Exclude<keyof I["audio"]["options"], keyof IngressAudioEncodingOptions>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["audio"], keyof IngressAudioOptions>]: never; }) | undefined;
        video?: ({
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            source?: TrackSource | undefined;
            preset?: IngressVideoEncodingPreset | undefined;
            options?: ({
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                videoCodec?: VideoCodec | undefined;
                frameRate?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["video"]["options"]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["video"]["options"]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["video"]["options"], keyof IngressVideoEncodingOptions>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["video"], keyof IngressVideoOptions>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof UpdateIngressRequest>]: never; }>(object: I): UpdateIngressRequest;
};
export declare const ListIngressRequest: {
    encode(message: ListIngressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIngressRequest;
    fromJSON(object: any): ListIngressRequest;
    toJSON(message: ListIngressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        ingressId?: string | undefined;
    } & {
        roomName?: string | undefined;
        ingressId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ListIngressRequest>]: never; }>(object: I): ListIngressRequest;
};
export declare const ListIngressResponse: {
    encode(message: ListIngressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListIngressResponse;
    fromJSON(object: any): ListIngressResponse;
    toJSON(message: ListIngressResponse): unknown;
    fromPartial<I extends {
        items?: {
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: IngressInput | undefined;
            bypassTranscoding?: boolean | undefined;
            audio?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } | undefined;
        }[] | undefined;
    } & {
        items?: ({
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: IngressInput | undefined;
            bypassTranscoding?: boolean | undefined;
            audio?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } | undefined;
        }[] & ({
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: IngressInput | undefined;
            bypassTranscoding?: boolean | undefined;
            audio?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } | undefined;
        } & {
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: IngressInput | undefined;
            bypassTranscoding?: boolean | undefined;
            audio?: ({
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: ({
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } & {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } & { [K in Exclude<keyof I["items"][number]["audio"]["options"], keyof IngressAudioEncodingOptions>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["items"][number]["audio"], keyof IngressAudioOptions>]: never; }) | undefined;
            video?: ({
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: ({
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } & {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
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
                    } & { [K_2 in Exclude<keyof I["items"][number]["video"]["options"]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_3 in Exclude<keyof I["items"][number]["video"]["options"]["layers"], number | keyof {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["items"][number]["video"]["options"], keyof IngressVideoEncodingOptions>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["items"][number]["video"], keyof IngressVideoOptions>]: never; }) | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: ({
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } & {
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: ({
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } & {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } & { [K_6 in Exclude<keyof I["items"][number]["state"]["video"], keyof InputVideoState>]: never; }) | undefined;
                audio?: ({
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } & {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } & { [K_7 in Exclude<keyof I["items"][number]["state"]["audio"], keyof InputAudioState>]: never; }) | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: ({
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
                    source?: TrackSource | undefined;
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
                    source?: TrackSource | undefined;
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
                    } & { [K_8 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_9 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["layers"], number | keyof {
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
                        } & { [K_10 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["codecs"][number]["layers"][number], keyof VideoLayer>]: never; })[] & { [K_11 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["codecs"][number]["layers"], number | keyof {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_12 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_13 in Exclude<keyof I["items"][number]["state"]["tracks"][number]["codecs"], number | keyof {
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
                } & { [K_14 in Exclude<keyof I["items"][number]["state"]["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_15 in Exclude<keyof I["items"][number]["state"]["tracks"], number | keyof {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } & { [K_16 in Exclude<keyof I["items"][number]["state"], keyof IngressState>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["items"][number], keyof IngressInfo>]: never; })[] & { [K_18 in Exclude<keyof I["items"], number | keyof {
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: IngressInput | undefined;
            bypassTranscoding?: boolean | undefined;
            audio?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressAudioEncodingPreset | undefined;
                options?: {
                    audioCodec?: AudioCodec | undefined;
                    bitrate?: number | undefined;
                    disableDtx?: boolean | undefined;
                    channels?: number | undefined;
                } | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: TrackSource | undefined;
                preset?: IngressVideoEncodingPreset | undefined;
                options?: {
                    videoCodec?: VideoCodec | undefined;
                    frameRate?: number | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: string | undefined;
                    averageBitrate?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                resourceId?: string | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: TrackSource | undefined;
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
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I, "items">]: never; }>(object: I): ListIngressResponse;
};
export declare const DeleteIngressRequest: {
    encode(message: DeleteIngressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteIngressRequest;
    fromJSON(object: any): DeleteIngressRequest;
    toJSON(message: DeleteIngressRequest): unknown;
    fromPartial<I extends {
        ingressId?: string | undefined;
    } & {
        ingressId?: string | undefined;
    } & { [K in Exclude<keyof I, "ingressId">]: never; }>(object: I): DeleteIngressRequest;
};
export interface Ingress {
    /** Create a new Ingress */
    CreateIngress(request: CreateIngressRequest): Promise<IngressInfo>;
    /** Update an existing Ingress. Ingress can only be updated when it's in ENDPOINT_WAITING state. */
    UpdateIngress(request: UpdateIngressRequest): Promise<IngressInfo>;
    ListIngress(request: ListIngressRequest): Promise<ListIngressResponse>;
    DeleteIngress(request: DeleteIngressRequest): Promise<IngressInfo>;
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
