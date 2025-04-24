import _m0 from "protobufjs/minimal";
import { AudioCodec, ImageCodec, VideoCodec } from "./livekit_models";
export declare const protobufPackage = "livekit";
export declare enum EncodedFileType {
    /** DEFAULT_FILETYPE - file type chosen based on codecs */
    DEFAULT_FILETYPE = 0,
    MP4 = 1,
    OGG = 2,
    UNRECOGNIZED = -1
}
export declare function encodedFileTypeFromJSON(object: any): EncodedFileType;
export declare function encodedFileTypeToJSON(object: EncodedFileType): string;
export declare enum SegmentedFileProtocol {
    DEFAULT_SEGMENTED_FILE_PROTOCOL = 0,
    HLS_PROTOCOL = 1,
    UNRECOGNIZED = -1
}
export declare function segmentedFileProtocolFromJSON(object: any): SegmentedFileProtocol;
export declare function segmentedFileProtocolToJSON(object: SegmentedFileProtocol): string;
export declare enum SegmentedFileSuffix {
    INDEX = 0,
    TIMESTAMP = 1,
    UNRECOGNIZED = -1
}
export declare function segmentedFileSuffixFromJSON(object: any): SegmentedFileSuffix;
export declare function segmentedFileSuffixToJSON(object: SegmentedFileSuffix): string;
export declare enum ImageFileSuffix {
    IMAGE_SUFFIX_INDEX = 0,
    IMAGE_SUFFIX_TIMESTAMP = 1,
    UNRECOGNIZED = -1
}
export declare function imageFileSuffixFromJSON(object: any): ImageFileSuffix;
export declare function imageFileSuffixToJSON(object: ImageFileSuffix): string;
export declare enum StreamProtocol {
    /** DEFAULT_PROTOCOL - protocol chosen based on urls */
    DEFAULT_PROTOCOL = 0,
    RTMP = 1,
    UNRECOGNIZED = -1
}
export declare function streamProtocolFromJSON(object: any): StreamProtocol;
export declare function streamProtocolToJSON(object: StreamProtocol): string;
export declare enum EncodingOptionsPreset {
    /** H264_720P_30 - 1280x720, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    H264_720P_30 = 0,
    /** H264_720P_60 - 1280x720, 60fps, 4500kbps, H.264_MAIN / OPUS */
    H264_720P_60 = 1,
    /** H264_1080P_30 - 1920x1080, 30fps, 4500kbps, H.264_MAIN / OPUS */
    H264_1080P_30 = 2,
    /** H264_1080P_60 - 1920x1080, 60fps, 6000kbps, H.264_MAIN / OPUS */
    H264_1080P_60 = 3,
    /** PORTRAIT_H264_720P_30 - 720x1280, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    PORTRAIT_H264_720P_30 = 4,
    /** PORTRAIT_H264_720P_60 - 720x1280, 60fps, 4500kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_720P_60 = 5,
    /** PORTRAIT_H264_1080P_30 - 1080x1920, 30fps, 4500kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_1080P_30 = 6,
    /** PORTRAIT_H264_1080P_60 - 1080x1920, 60fps, 6000kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_1080P_60 = 7,
    UNRECOGNIZED = -1
}
export declare function encodingOptionsPresetFromJSON(object: any): EncodingOptionsPreset;
export declare function encodingOptionsPresetToJSON(object: EncodingOptionsPreset): string;
export declare enum EgressStatus {
    EGRESS_STARTING = 0,
    EGRESS_ACTIVE = 1,
    EGRESS_ENDING = 2,
    EGRESS_COMPLETE = 3,
    EGRESS_FAILED = 4,
    EGRESS_ABORTED = 5,
    EGRESS_LIMIT_REACHED = 6,
    UNRECOGNIZED = -1
}
export declare function egressStatusFromJSON(object: any): EgressStatus;
export declare function egressStatusToJSON(object: EgressStatus): string;
/** composite using a web browser */
export interface RoomCompositeEgressRequest {
    /** required */
    roomName?: string;
    /** (optional) */
    layout?: string;
    /** (default false) */
    audioOnly?: boolean;
    /** (default false) */
    videoOnly?: boolean;
    /** template base url (default https://recorder.livekit.io) */
    customBaseUrl?: string;
    /** @deprecated */
    file?: EncodedFileOutput | undefined;
    /** @deprecated */
    stream?: StreamOutput | undefined;
    /** @deprecated */
    segments?: SegmentedFileOutput | undefined;
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
    fileOutputs?: EncodedFileOutput[];
    streamOutputs?: StreamOutput[];
    segmentOutputs?: SegmentedFileOutput[];
    imageOutputs?: ImageOutput[];
}
/** record any website */
export interface WebEgressRequest {
    url?: string;
    audioOnly?: boolean;
    videoOnly?: boolean;
    awaitStartSignal?: boolean;
    /** @deprecated */
    file?: EncodedFileOutput | undefined;
    /** @deprecated */
    stream?: StreamOutput | undefined;
    /** @deprecated */
    segments?: SegmentedFileOutput | undefined;
    preset?: EncodingOptionsPreset | undefined;
    advanced?: EncodingOptions | undefined;
    fileOutputs?: EncodedFileOutput[];
    streamOutputs?: StreamOutput[];
    segmentOutputs?: SegmentedFileOutput[];
    imageOutputs?: ImageOutput[];
}
/** record audio and video from a single participant */
export interface ParticipantEgressRequest {
    /** required */
    roomName?: string;
    /** required */
    identity?: string;
    /** (default false) */
    screenShare?: boolean;
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
    fileOutputs?: EncodedFileOutput[];
    streamOutputs?: StreamOutput[];
    segmentOutputs?: SegmentedFileOutput[];
    imageOutputs?: ImageOutput[];
}
/** containerize up to one audio and one video track */
export interface TrackCompositeEgressRequest {
    /** required */
    roomName?: string;
    /** (optional) */
    audioTrackId?: string;
    /** (optional) */
    videoTrackId?: string;
    /** @deprecated */
    file?: EncodedFileOutput | undefined;
    /** @deprecated */
    stream?: StreamOutput | undefined;
    /** @deprecated */
    segments?: SegmentedFileOutput | undefined;
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
    fileOutputs?: EncodedFileOutput[];
    streamOutputs?: StreamOutput[];
    segmentOutputs?: SegmentedFileOutput[];
    imageOutputs?: ImageOutput[];
}
/** record tracks individually, without transcoding */
export interface TrackEgressRequest {
    /** required */
    roomName?: string;
    /** required */
    trackId?: string;
    file?: DirectFileOutput | undefined;
    websocketUrl?: string | undefined;
}
export interface EncodedFileOutput {
    /** (optional) */
    fileType?: EncodedFileType;
    /** see egress docs for templating (default {room_name}-{time}) */
    filepath?: string;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
/** Used to generate HLS segments or other kind of segmented output */
export interface SegmentedFileOutput {
    /** (optional) */
    protocol?: SegmentedFileProtocol;
    /** (optional) */
    filenamePrefix?: string;
    /** (optional) */
    playlistName?: string;
    /** (optional, disabled if not provided). Path of a live playlist */
    livePlaylistName?: string;
    /** in seconds (optional) */
    segmentDuration?: number;
    /** (optional, default INDEX) */
    filenameSuffix?: SegmentedFileSuffix;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
export interface DirectFileOutput {
    /** see egress docs for templating (default {track_id}-{time}) */
    filepath?: string;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
export interface ImageOutput {
    /** in seconds (required) */
    captureInterval?: number;
    /** (optional, defaults to track width) */
    width?: number;
    /** (optional, defaults to track height) */
    height?: number;
    /** (optional) */
    filenamePrefix?: string;
    /** (optional, default INDEX) */
    filenameSuffix?: ImageFileSuffix;
    /** (optional) */
    imageCodec?: ImageCodec;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
export interface S3Upload {
    accessKey?: string;
    secret?: string;
    region?: string;
    endpoint?: string;
    bucket?: string;
    forcePathStyle?: boolean;
    metadata?: {
        [key: string]: string;
    };
    tagging?: string;
}
export interface S3Upload_MetadataEntry {
    key: string;
    value: string;
}
export interface GCPUpload {
    credentials?: string;
    bucket?: string;
}
export interface AzureBlobUpload {
    accountName?: string;
    accountKey?: string;
    containerName?: string;
}
export interface AliOSSUpload {
    accessKey?: string;
    secret?: string;
    region?: string;
    endpoint?: string;
    bucket?: string;
}
export interface StreamOutput {
    /** required */
    protocol?: StreamProtocol;
    /** required */
    urls?: string[];
}
export interface EncodingOptions {
    /** (default 1920) */
    width?: number;
    /** (default 1080) */
    height?: number;
    /** (default 24) */
    depth?: number;
    /** (default 30) */
    framerate?: number;
    /** (default OPUS) */
    audioCodec?: AudioCodec;
    /** (default 128) */
    audioBitrate?: number;
    /** (default 44100) */
    audioFrequency?: number;
    /** (default H264_MAIN) */
    videoCodec?: VideoCodec;
    /** (default 4500) */
    videoBitrate?: number;
    /** in seconds (default 4s for streaming, segment duration for segmented output, encoder default for files) */
    keyFrameInterval?: number;
}
export interface UpdateLayoutRequest {
    egressId?: string;
    layout?: string;
}
export interface UpdateStreamRequest {
    egressId?: string;
    addOutputUrls?: string[];
    removeOutputUrls?: string[];
}
export interface UpdateOutputsRequest {
    egressId?: string;
    addImageOutputs?: ImageOutput[];
    removeImageOutputs?: ImageOutput[];
}
export interface ListEgressRequest {
    /** (optional, filter by room name) */
    roomName?: string;
    /** (optional, filter by egress ID) */
    egressId?: string;
    /** (optional, list active egress only) */
    active?: boolean;
}
export interface ListEgressResponse {
    items?: EgressInfo[];
}
export interface StopEgressRequest {
    egressId?: string;
}
export interface EgressInfo {
    egressId?: string;
    roomId?: string;
    roomName?: string;
    status?: EgressStatus;
    startedAt?: number;
    endedAt?: number;
    updatedAt?: number;
    error?: string;
    roomComposite?: RoomCompositeEgressRequest | undefined;
    web?: WebEgressRequest | undefined;
    participant?: ParticipantEgressRequest | undefined;
    trackComposite?: TrackCompositeEgressRequest | undefined;
    track?: TrackEgressRequest | undefined;
    /** @deprecated */
    stream?: StreamInfoList | undefined;
    /** @deprecated */
    file?: FileInfo | undefined;
    /** @deprecated */
    segments?: SegmentsInfo | undefined;
    streamResults?: StreamInfo[];
    fileResults?: FileInfo[];
    segmentResults?: SegmentsInfo[];
    imageResults?: ImagesInfo[];
}
/** @deprecated */
export interface StreamInfoList {
    info?: StreamInfo[];
}
export interface StreamInfo {
    url?: string;
    startedAt?: number;
    endedAt?: number;
    duration?: number;
    status?: StreamInfo_Status;
    error?: string;
}
export declare enum StreamInfo_Status {
    ACTIVE = 0,
    FINISHED = 1,
    FAILED = 2,
    UNRECOGNIZED = -1
}
export declare function streamInfo_StatusFromJSON(object: any): StreamInfo_Status;
export declare function streamInfo_StatusToJSON(object: StreamInfo_Status): string;
export interface FileInfo {
    filename?: string;
    startedAt?: number;
    endedAt?: number;
    duration?: number;
    size?: number;
    location?: string;
}
export interface SegmentsInfo {
    playlistName?: string;
    livePlaylistName?: string;
    duration?: number;
    size?: number;
    playlistLocation?: string;
    livePlaylistLocation?: string;
    segmentCount?: number;
    startedAt?: number;
    endedAt?: number;
}
export interface ImagesInfo {
    imageCount?: number;
    startedAt?: number;
    endedAt?: number;
}
export interface AutoParticipantEgress {
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
    fileOutputs?: EncodedFileOutput[];
    segmentOutputs?: SegmentedFileOutput[];
}
export interface AutoTrackEgress {
    /** see docs for templating (default {track_id}-{time}) */
    filepath?: string;
    /** disables upload of json manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
}
export declare const RoomCompositeEgressRequest: {
    encode(message: RoomCompositeEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomCompositeEgressRequest;
    fromJSON(object: any): RoomCompositeEgressRequest;
    toJSON(message: RoomCompositeEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        layout?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        customBaseUrl?: string | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } | undefined;
        fileOutputs?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] | undefined;
        segmentOutputs?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        fileOutputs?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K_15 in Exclude<keyof I["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_16 in Exclude<keyof I["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_17 in Exclude<keyof I["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_18 in Exclude<keyof I["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_19 in Exclude<keyof I["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["fileOutputs"], number | keyof {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] & ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["streamOutputs"], number | keyof {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[]>]: never; }) | undefined;
        segmentOutputs?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_25 in Exclude<keyof I["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_26 in Exclude<keyof I["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_27 in Exclude<keyof I["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_28 in Exclude<keyof I["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_29 in Exclude<keyof I["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["segmentOutputs"], number | keyof {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K_32 in Exclude<keyof I["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_33 in Exclude<keyof I["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_34 in Exclude<keyof I["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_35 in Exclude<keyof I["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_36 in Exclude<keyof I["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_37 in Exclude<keyof I["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["imageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
    } & { [K_39 in Exclude<keyof I, keyof RoomCompositeEgressRequest>]: never; }>(object: I): RoomCompositeEgressRequest;
};
export declare const WebEgressRequest: {
    encode(message: WebEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebEgressRequest;
    fromJSON(object: any): WebEgressRequest;
    toJSON(message: WebEgressRequest): unknown;
    fromPartial<I extends {
        url?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        awaitStartSignal?: boolean | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } | undefined;
        fileOutputs?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] | undefined;
        segmentOutputs?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        url?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        awaitStartSignal?: boolean | undefined;
        file?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        fileOutputs?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K_15 in Exclude<keyof I["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_16 in Exclude<keyof I["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_17 in Exclude<keyof I["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_18 in Exclude<keyof I["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_19 in Exclude<keyof I["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["fileOutputs"], number | keyof {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] & ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["streamOutputs"], number | keyof {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[]>]: never; }) | undefined;
        segmentOutputs?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_25 in Exclude<keyof I["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_26 in Exclude<keyof I["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_27 in Exclude<keyof I["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_28 in Exclude<keyof I["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_29 in Exclude<keyof I["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["segmentOutputs"], number | keyof {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K_32 in Exclude<keyof I["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_33 in Exclude<keyof I["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_34 in Exclude<keyof I["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_35 in Exclude<keyof I["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_36 in Exclude<keyof I["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_37 in Exclude<keyof I["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["imageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
    } & { [K_39 in Exclude<keyof I, keyof WebEgressRequest>]: never; }>(object: I): WebEgressRequest;
};
export declare const ParticipantEgressRequest: {
    encode(message: ParticipantEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParticipantEgressRequest;
    fromJSON(object: any): ParticipantEgressRequest;
    toJSON(message: ParticipantEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        identity?: string | undefined;
        screenShare?: boolean | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } | undefined;
        fileOutputs?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] | undefined;
        segmentOutputs?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        identity?: string | undefined;
        screenShare?: boolean | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & { [K in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        fileOutputs?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K_1 in Exclude<keyof I["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_2 in Exclude<keyof I["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_3 in Exclude<keyof I["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_4 in Exclude<keyof I["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_5 in Exclude<keyof I["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_7 in Exclude<keyof I["fileOutputs"], number | keyof {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] & ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_8 in Exclude<keyof I["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_10 in Exclude<keyof I["streamOutputs"], number | keyof {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[]>]: never; }) | undefined;
        segmentOutputs?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_11 in Exclude<keyof I["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_12 in Exclude<keyof I["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_13 in Exclude<keyof I["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_14 in Exclude<keyof I["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_15 in Exclude<keyof I["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_17 in Exclude<keyof I["segmentOutputs"], number | keyof {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K_18 in Exclude<keyof I["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_19 in Exclude<keyof I["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_20 in Exclude<keyof I["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_21 in Exclude<keyof I["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_22 in Exclude<keyof I["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_24 in Exclude<keyof I["imageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
    } & { [K_25 in Exclude<keyof I, keyof ParticipantEgressRequest>]: never; }>(object: I): ParticipantEgressRequest;
};
export declare const TrackCompositeEgressRequest: {
    encode(message: TrackCompositeEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrackCompositeEgressRequest;
    fromJSON(object: any): TrackCompositeEgressRequest;
    toJSON(message: TrackCompositeEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        audioTrackId?: string | undefined;
        videoTrackId?: string | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } | undefined;
        fileOutputs?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] | undefined;
        segmentOutputs?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        audioTrackId?: string | undefined;
        videoTrackId?: string | undefined;
        file?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        fileOutputs?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K_15 in Exclude<keyof I["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_16 in Exclude<keyof I["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_17 in Exclude<keyof I["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_18 in Exclude<keyof I["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_19 in Exclude<keyof I["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["fileOutputs"], number | keyof {
            fileType?: EncodedFileType | undefined;
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
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[] & ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["streamOutputs"], number | keyof {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        }[]>]: never; }) | undefined;
        segmentOutputs?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_25 in Exclude<keyof I["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_26 in Exclude<keyof I["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_27 in Exclude<keyof I["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_28 in Exclude<keyof I["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_29 in Exclude<keyof I["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["segmentOutputs"], number | keyof {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K_32 in Exclude<keyof I["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_33 in Exclude<keyof I["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_34 in Exclude<keyof I["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_35 in Exclude<keyof I["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_36 in Exclude<keyof I["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_37 in Exclude<keyof I["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["imageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
    } & { [K_39 in Exclude<keyof I, keyof TrackCompositeEgressRequest>]: never; }>(object: I): TrackCompositeEgressRequest;
};
export declare const TrackEgressRequest: {
    encode(message: TrackEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrackEgressRequest;
    fromJSON(object: any): TrackEgressRequest;
    toJSON(message: TrackEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        trackId?: string | undefined;
        file?: {
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
        websocketUrl?: string | undefined;
    } & {
        roomName?: string | undefined;
        trackId?: string | undefined;
        file?: ({
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
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof DirectFileOutput>]: never; }) | undefined;
        websocketUrl?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof TrackEgressRequest>]: never; }>(object: I): TrackEgressRequest;
};
export declare const EncodedFileOutput: {
    encode(message: EncodedFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncodedFileOutput;
    fromJSON(object: any): EncodedFileOutput;
    toJSON(message: EncodedFileOutput): unknown;
    fromPartial<I extends {
        fileType?: EncodedFileType | undefined;
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
        fileType?: EncodedFileType | undefined;
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
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof EncodedFileOutput>]: never; }>(object: I): EncodedFileOutput;
};
export declare const SegmentedFileOutput: {
    encode(message: SegmentedFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentedFileOutput;
    fromJSON(object: any): SegmentedFileOutput;
    toJSON(message: SegmentedFileOutput): unknown;
    fromPartial<I extends {
        protocol?: SegmentedFileProtocol | undefined;
        filenamePrefix?: string | undefined;
        playlistName?: string | undefined;
        livePlaylistName?: string | undefined;
        segmentDuration?: number | undefined;
        filenameSuffix?: SegmentedFileSuffix | undefined;
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
        protocol?: SegmentedFileProtocol | undefined;
        filenamePrefix?: string | undefined;
        playlistName?: string | undefined;
        livePlaylistName?: string | undefined;
        segmentDuration?: number | undefined;
        filenameSuffix?: SegmentedFileSuffix | undefined;
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
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SegmentedFileOutput>]: never; }>(object: I): SegmentedFileOutput;
};
export declare const DirectFileOutput: {
    encode(message: DirectFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DirectFileOutput;
    fromJSON(object: any): DirectFileOutput;
    toJSON(message: DirectFileOutput): unknown;
    fromPartial<I extends {
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
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof DirectFileOutput>]: never; }>(object: I): DirectFileOutput;
};
export declare const ImageOutput: {
    encode(message: ImageOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageOutput;
    fromJSON(object: any): ImageOutput;
    toJSON(message: ImageOutput): unknown;
    fromPartial<I extends {
        captureInterval?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        filenamePrefix?: string | undefined;
        filenameSuffix?: ImageFileSuffix | undefined;
        imageCodec?: ImageCodec | undefined;
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
        filenameSuffix?: ImageFileSuffix | undefined;
        imageCodec?: ImageCodec | undefined;
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
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ImageOutput>]: never; }>(object: I): ImageOutput;
};
export declare const S3Upload: {
    encode(message: S3Upload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3Upload;
    fromJSON(object: any): S3Upload;
    toJSON(message: S3Upload): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["metadata"], string | number>]: never; }) | undefined;
        tagging?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof S3Upload>]: never; }>(object: I): S3Upload;
};
export declare const S3Upload_MetadataEntry: {
    encode(message: S3Upload_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3Upload_MetadataEntry;
    fromJSON(object: any): S3Upload_MetadataEntry;
    toJSON(message: S3Upload_MetadataEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof S3Upload_MetadataEntry>]: never; }>(object: I): S3Upload_MetadataEntry;
};
export declare const GCPUpload: {
    encode(message: GCPUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GCPUpload;
    fromJSON(object: any): GCPUpload;
    toJSON(message: GCPUpload): unknown;
    fromPartial<I extends {
        credentials?: string | undefined;
        bucket?: string | undefined;
    } & {
        credentials?: string | undefined;
        bucket?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GCPUpload>]: never; }>(object: I): GCPUpload;
};
export declare const AzureBlobUpload: {
    encode(message: AzureBlobUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AzureBlobUpload;
    fromJSON(object: any): AzureBlobUpload;
    toJSON(message: AzureBlobUpload): unknown;
    fromPartial<I extends {
        accountName?: string | undefined;
        accountKey?: string | undefined;
        containerName?: string | undefined;
    } & {
        accountName?: string | undefined;
        accountKey?: string | undefined;
        containerName?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AzureBlobUpload>]: never; }>(object: I): AzureBlobUpload;
};
export declare const AliOSSUpload: {
    encode(message: AliOSSUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AliOSSUpload;
    fromJSON(object: any): AliOSSUpload;
    toJSON(message: AliOSSUpload): unknown;
    fromPartial<I extends {
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
    } & { [K in Exclude<keyof I, keyof AliOSSUpload>]: never; }>(object: I): AliOSSUpload;
};
export declare const StreamOutput: {
    encode(message: StreamOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamOutput;
    fromJSON(object: any): StreamOutput;
    toJSON(message: StreamOutput): unknown;
    fromPartial<I extends {
        protocol?: StreamProtocol | undefined;
        urls?: string[] | undefined;
    } & {
        protocol?: StreamProtocol | undefined;
        urls?: (string[] & string[] & { [K in Exclude<keyof I["urls"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StreamOutput>]: never; }>(object: I): StreamOutput;
};
export declare const EncodingOptions: {
    encode(message: EncodingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncodingOptions;
    fromJSON(object: any): EncodingOptions;
    toJSON(message: EncodingOptions): unknown;
    fromPartial<I extends {
        width?: number | undefined;
        height?: number | undefined;
        depth?: number | undefined;
        framerate?: number | undefined;
        audioCodec?: AudioCodec | undefined;
        audioBitrate?: number | undefined;
        audioFrequency?: number | undefined;
        videoCodec?: VideoCodec | undefined;
        videoBitrate?: number | undefined;
        keyFrameInterval?: number | undefined;
    } & {
        width?: number | undefined;
        height?: number | undefined;
        depth?: number | undefined;
        framerate?: number | undefined;
        audioCodec?: AudioCodec | undefined;
        audioBitrate?: number | undefined;
        audioFrequency?: number | undefined;
        videoCodec?: VideoCodec | undefined;
        videoBitrate?: number | undefined;
        keyFrameInterval?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EncodingOptions>]: never; }>(object: I): EncodingOptions;
};
export declare const UpdateLayoutRequest: {
    encode(message: UpdateLayoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLayoutRequest;
    fromJSON(object: any): UpdateLayoutRequest;
    toJSON(message: UpdateLayoutRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        layout?: string | undefined;
    } & {
        egressId?: string | undefined;
        layout?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpdateLayoutRequest>]: never; }>(object: I): UpdateLayoutRequest;
};
export declare const UpdateStreamRequest: {
    encode(message: UpdateStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateStreamRequest;
    fromJSON(object: any): UpdateStreamRequest;
    toJSON(message: UpdateStreamRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        addOutputUrls?: string[] | undefined;
        removeOutputUrls?: string[] | undefined;
    } & {
        egressId?: string | undefined;
        addOutputUrls?: (string[] & string[] & { [K in Exclude<keyof I["addOutputUrls"], number | keyof string[]>]: never; }) | undefined;
        removeOutputUrls?: (string[] & string[] & { [K_1 in Exclude<keyof I["removeOutputUrls"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof UpdateStreamRequest>]: never; }>(object: I): UpdateStreamRequest;
};
export declare const UpdateOutputsRequest: {
    encode(message: UpdateOutputsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateOutputsRequest;
    fromJSON(object: any): UpdateOutputsRequest;
    toJSON(message: UpdateOutputsRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        addImageOutputs?: {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        removeImageOutputs?: {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        egressId?: string | undefined;
        addImageOutputs?: ({
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K in Exclude<keyof I["addImageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["addImageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["addImageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["addImageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_4 in Exclude<keyof I["addImageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["addImageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_6 in Exclude<keyof I["addImageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
        removeImageOutputs?: ({
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
                } & { [K_7 in Exclude<keyof I["removeImageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_8 in Exclude<keyof I["removeImageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_9 in Exclude<keyof I["removeImageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_10 in Exclude<keyof I["removeImageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I["removeImageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["removeImageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_13 in Exclude<keyof I["removeImageOutputs"], number | keyof {
            captureInterval?: number | undefined;
            width?: number | undefined;
            height?: number | undefined;
            filenamePrefix?: string | undefined;
            filenameSuffix?: ImageFileSuffix | undefined;
            imageCodec?: ImageCodec | undefined;
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
    } & { [K_14 in Exclude<keyof I, keyof UpdateOutputsRequest>]: never; }>(object: I): UpdateOutputsRequest;
};
export declare const ListEgressRequest: {
    encode(message: ListEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEgressRequest;
    fromJSON(object: any): ListEgressRequest;
    toJSON(message: ListEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        egressId?: string | undefined;
        active?: boolean | undefined;
    } & {
        roomName?: string | undefined;
        egressId?: string | undefined;
        active?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof ListEgressRequest>]: never; }>(object: I): ListEgressRequest;
};
export declare const ListEgressResponse: {
    encode(message: ListEgressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEgressResponse;
    fromJSON(object: any): ListEgressResponse;
    toJSON(message: ListEgressResponse): unknown;
    fromPartial<I extends {
        items?: {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            updatedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                roomName?: string | undefined;
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
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
                websocketUrl?: string | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
            streamResults?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
            fileResults?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[] | undefined;
            segmentResults?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
            imageResults?: {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        items?: ({
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            updatedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                roomName?: string | undefined;
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
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
                websocketUrl?: string | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
            streamResults?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
            fileResults?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[] | undefined;
            segmentResults?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
            imageResults?: {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
        }[] & ({
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            updatedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                roomName?: string | undefined;
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
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
                websocketUrl?: string | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
            streamResults?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
            fileResults?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[] | undefined;
            segmentResults?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
            imageResults?: {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
        } & {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            updatedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: ({
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K in Exclude<keyof I["items"][number]["roomComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_4 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["items"][number]["roomComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["items"][number]["roomComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["items"][number]["roomComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_8 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_9 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_11 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_12 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["items"][number]["roomComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_14 in Exclude<keyof I["items"][number]["roomComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_15 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_17 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_18 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_19 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["items"][number]["roomComposite"]["fileOutputs"], number | keyof {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] & ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["items"][number]["roomComposite"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["items"][number]["roomComposite"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["items"][number]["roomComposite"]["streamOutputs"], number | keyof {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_25 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_26 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_27 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_29 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_30 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["items"][number]["roomComposite"]["segmentOutputs"], number | keyof {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                        } & { [K_32 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_33 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_35 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_36 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["items"][number]["roomComposite"]["imageOutputs"], number | keyof {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            } & { [K_39 in Exclude<keyof I["items"][number]["roomComposite"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
            web?: ({
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_40 in Exclude<keyof I["items"][number]["web"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_41 in Exclude<keyof I["items"][number]["web"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_42 in Exclude<keyof I["items"][number]["web"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_43 in Exclude<keyof I["items"][number]["web"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_44 in Exclude<keyof I["items"][number]["web"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_45 in Exclude<keyof I["items"][number]["web"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_46 in Exclude<keyof I["items"][number]["web"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_47 in Exclude<keyof I["items"][number]["web"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_48 in Exclude<keyof I["items"][number]["web"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_49 in Exclude<keyof I["items"][number]["web"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_50 in Exclude<keyof I["items"][number]["web"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_51 in Exclude<keyof I["items"][number]["web"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_52 in Exclude<keyof I["items"][number]["web"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I["items"][number]["web"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_54 in Exclude<keyof I["items"][number]["web"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_55 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_56 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_57 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_58 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_59 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_60 in Exclude<keyof I["items"][number]["web"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_61 in Exclude<keyof I["items"][number]["web"]["fileOutputs"], number | keyof {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] & ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_62 in Exclude<keyof I["items"][number]["web"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_63 in Exclude<keyof I["items"][number]["web"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_64 in Exclude<keyof I["items"][number]["web"]["streamOutputs"], number | keyof {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_65 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_66 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_67 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_68 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_69 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_70 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_71 in Exclude<keyof I["items"][number]["web"]["segmentOutputs"], number | keyof {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                        } & { [K_72 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_73 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_74 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_75 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_76 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_77 in Exclude<keyof I["items"][number]["web"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_78 in Exclude<keyof I["items"][number]["web"]["imageOutputs"], number | keyof {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            } & { [K_79 in Exclude<keyof I["items"][number]["web"], keyof WebEgressRequest>]: never; }) | undefined;
            participant?: ({
                roomName?: string | undefined;
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_80 in Exclude<keyof I["items"][number]["participant"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_81 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_82 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_83 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_84 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_85 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_86 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_87 in Exclude<keyof I["items"][number]["participant"]["fileOutputs"], number | keyof {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] & ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_88 in Exclude<keyof I["items"][number]["participant"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_89 in Exclude<keyof I["items"][number]["participant"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_90 in Exclude<keyof I["items"][number]["participant"]["streamOutputs"], number | keyof {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_91 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_92 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_93 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_94 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_95 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_96 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_97 in Exclude<keyof I["items"][number]["participant"]["segmentOutputs"], number | keyof {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                        } & { [K_98 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_99 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_100 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_101 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_102 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_103 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_104 in Exclude<keyof I["items"][number]["participant"]["imageOutputs"], number | keyof {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            } & { [K_105 in Exclude<keyof I["items"][number]["participant"], keyof ParticipantEgressRequest>]: never; }) | undefined;
            trackComposite?: ({
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_106 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_107 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_108 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_109 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_110 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_111 in Exclude<keyof I["items"][number]["trackComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_112 in Exclude<keyof I["items"][number]["trackComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_113 in Exclude<keyof I["items"][number]["trackComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_114 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_115 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_116 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_117 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_118 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_119 in Exclude<keyof I["items"][number]["trackComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } & { [K_120 in Exclude<keyof I["items"][number]["trackComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
                fileOutputs?: ({
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                    fileType?: EncodedFileType | undefined;
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
                        } & { [K_121 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_122 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_123 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_124 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_125 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_126 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_127 in Exclude<keyof I["items"][number]["trackComposite"]["fileOutputs"], number | keyof {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] & ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_128 in Exclude<keyof I["items"][number]["trackComposite"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_129 in Exclude<keyof I["items"][number]["trackComposite"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_130 in Exclude<keyof I["items"][number]["trackComposite"]["streamOutputs"], number | keyof {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[]>]: never; }) | undefined;
                segmentOutputs?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                        } & { [K_131 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_132 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_133 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_134 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_135 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_136 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_137 in Exclude<keyof I["items"][number]["trackComposite"]["segmentOutputs"], number | keyof {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                        } & { [K_138 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_139 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_140 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_141 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_142 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_143 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_144 in Exclude<keyof I["items"][number]["trackComposite"]["imageOutputs"], number | keyof {
                    captureInterval?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    filenamePrefix?: string | undefined;
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            } & { [K_145 in Exclude<keyof I["items"][number]["trackComposite"], keyof TrackCompositeEgressRequest>]: never; }) | undefined;
            track?: ({
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
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
                websocketUrl?: string | undefined;
            } & {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: ({
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
                        } & { [K_146 in Exclude<keyof I["items"][number]["track"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_147 in Exclude<keyof I["items"][number]["track"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_148 in Exclude<keyof I["items"][number]["track"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_149 in Exclude<keyof I["items"][number]["track"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_150 in Exclude<keyof I["items"][number]["track"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_151 in Exclude<keyof I["items"][number]["track"]["file"], keyof DirectFileOutput>]: never; }) | undefined;
                websocketUrl?: string | undefined;
            } & { [K_152 in Exclude<keyof I["items"][number]["track"], keyof TrackEgressRequest>]: never; }) | undefined;
            stream?: ({
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] | undefined;
            } & {
                info?: ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] & ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                } & {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                } & { [K_153 in Exclude<keyof I["items"][number]["stream"]["info"][number], keyof StreamInfo>]: never; })[] & { [K_154 in Exclude<keyof I["items"][number]["stream"]["info"], number | keyof {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_155 in Exclude<keyof I["items"][number]["stream"], "info">]: never; }) | undefined;
            file?: ({
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & { [K_156 in Exclude<keyof I["items"][number]["file"], keyof FileInfo>]: never; }) | undefined;
            segments?: ({
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & { [K_157 in Exclude<keyof I["items"][number]["segments"], keyof SegmentsInfo>]: never; }) | undefined;
            streamResults?: ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] & ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            } & {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            } & { [K_158 in Exclude<keyof I["items"][number]["streamResults"][number], keyof StreamInfo>]: never; })[] & { [K_159 in Exclude<keyof I["items"][number]["streamResults"], number | keyof {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[]>]: never; }) | undefined;
            fileResults?: ({
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[] & ({
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & { [K_160 in Exclude<keyof I["items"][number]["fileResults"][number], keyof FileInfo>]: never; })[] & { [K_161 in Exclude<keyof I["items"][number]["fileResults"], number | keyof {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[]>]: never; }) | undefined;
            segmentResults?: ({
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] & ({
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & { [K_162 in Exclude<keyof I["items"][number]["segmentResults"][number], keyof SegmentsInfo>]: never; })[] & { [K_163 in Exclude<keyof I["items"][number]["segmentResults"], number | keyof {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[]>]: never; }) | undefined;
            imageResults?: ({
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] & ({
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & { [K_164 in Exclude<keyof I["items"][number]["imageResults"][number], keyof ImagesInfo>]: never; })[] & { [K_165 in Exclude<keyof I["items"][number]["imageResults"], number | keyof {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_166 in Exclude<keyof I["items"][number], keyof EgressInfo>]: never; })[] & { [K_167 in Exclude<keyof I["items"], number | keyof {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            updatedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                awaitStartSignal?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
                roomName?: string | undefined;
                identity?: string | undefined;
                screenShare?: boolean | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                    keyFrameInterval?: number | undefined;
                } | undefined;
                fileOutputs?: {
                    fileType?: EncodedFileType | undefined;
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
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                }[] | undefined;
                segmentOutputs?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    livePlaylistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    filenameSuffix?: ImageFileSuffix | undefined;
                    imageCodec?: ImageCodec | undefined;
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
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
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
                websocketUrl?: string | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                    error?: string | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
            streamResults?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
            fileResults?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            }[] | undefined;
            segmentResults?: {
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                livePlaylistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
            imageResults?: {
                imageCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_168 in Exclude<keyof I, "items">]: never; }>(object: I): ListEgressResponse;
};
export declare const StopEgressRequest: {
    encode(message: StopEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopEgressRequest;
    fromJSON(object: any): StopEgressRequest;
    toJSON(message: StopEgressRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
    } & {
        egressId?: string | undefined;
    } & { [K in Exclude<keyof I, "egressId">]: never; }>(object: I): StopEgressRequest;
};
export declare const EgressInfo: {
    encode(message: EgressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EgressInfo;
    fromJSON(object: any): EgressInfo;
    toJSON(message: EgressInfo): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        roomId?: string | undefined;
        roomName?: string | undefined;
        status?: EgressStatus | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        updatedAt?: number | undefined;
        error?: string | undefined;
        roomComposite?: {
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        web?: {
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            awaitStartSignal?: boolean | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
            roomName?: string | undefined;
            identity?: string | undefined;
            screenShare?: boolean | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        trackComposite?: {
            roomName?: string | undefined;
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        track?: {
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: {
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
            websocketUrl?: string | undefined;
        } | undefined;
        stream?: {
            info?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
        } | undefined;
        file?: {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } | undefined;
        segments?: {
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } | undefined;
        streamResults?: {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[] | undefined;
        fileResults?: {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        }[] | undefined;
        segmentResults?: {
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[] | undefined;
        imageResults?: {
            imageCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[] | undefined;
    } & {
        egressId?: string | undefined;
        roomId?: string | undefined;
        roomName?: string | undefined;
        status?: EgressStatus | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        updatedAt?: number | undefined;
        error?: string | undefined;
        roomComposite?: ({
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K in Exclude<keyof I["roomComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_1 in Exclude<keyof I["roomComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_2 in Exclude<keyof I["roomComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_3 in Exclude<keyof I["roomComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_4 in Exclude<keyof I["roomComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["roomComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["roomComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["roomComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_8 in Exclude<keyof I["roomComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_9 in Exclude<keyof I["roomComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_10 in Exclude<keyof I["roomComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_11 in Exclude<keyof I["roomComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_12 in Exclude<keyof I["roomComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["roomComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_14 in Exclude<keyof I["roomComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_15 in Exclude<keyof I["roomComposite"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_16 in Exclude<keyof I["roomComposite"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_17 in Exclude<keyof I["roomComposite"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_18 in Exclude<keyof I["roomComposite"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_19 in Exclude<keyof I["roomComposite"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["roomComposite"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_21 in Exclude<keyof I["roomComposite"]["fileOutputs"], number | keyof {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] & ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["roomComposite"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I["roomComposite"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_24 in Exclude<keyof I["roomComposite"]["streamOutputs"], number | keyof {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_25 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_26 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_27 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_28 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_29 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I["roomComposite"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_31 in Exclude<keyof I["roomComposite"]["segmentOutputs"], number | keyof {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                    } & { [K_32 in Exclude<keyof I["roomComposite"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_33 in Exclude<keyof I["roomComposite"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_34 in Exclude<keyof I["roomComposite"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_35 in Exclude<keyof I["roomComposite"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_36 in Exclude<keyof I["roomComposite"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["roomComposite"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_38 in Exclude<keyof I["roomComposite"]["imageOutputs"], number | keyof {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        } & { [K_39 in Exclude<keyof I["roomComposite"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
        web?: ({
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            awaitStartSignal?: boolean | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            awaitStartSignal?: boolean | undefined;
            file?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_40 in Exclude<keyof I["web"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_41 in Exclude<keyof I["web"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_42 in Exclude<keyof I["web"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_43 in Exclude<keyof I["web"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_44 in Exclude<keyof I["web"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I["web"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_46 in Exclude<keyof I["web"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I["web"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_48 in Exclude<keyof I["web"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_49 in Exclude<keyof I["web"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_50 in Exclude<keyof I["web"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_51 in Exclude<keyof I["web"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_52 in Exclude<keyof I["web"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_53 in Exclude<keyof I["web"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_54 in Exclude<keyof I["web"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_55 in Exclude<keyof I["web"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_56 in Exclude<keyof I["web"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_57 in Exclude<keyof I["web"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_58 in Exclude<keyof I["web"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_59 in Exclude<keyof I["web"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I["web"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_61 in Exclude<keyof I["web"]["fileOutputs"], number | keyof {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] & ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_62 in Exclude<keyof I["web"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_63 in Exclude<keyof I["web"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_64 in Exclude<keyof I["web"]["streamOutputs"], number | keyof {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_65 in Exclude<keyof I["web"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_66 in Exclude<keyof I["web"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_67 in Exclude<keyof I["web"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_68 in Exclude<keyof I["web"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_69 in Exclude<keyof I["web"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_70 in Exclude<keyof I["web"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_71 in Exclude<keyof I["web"]["segmentOutputs"], number | keyof {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                    } & { [K_72 in Exclude<keyof I["web"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_73 in Exclude<keyof I["web"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_74 in Exclude<keyof I["web"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_75 in Exclude<keyof I["web"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_76 in Exclude<keyof I["web"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_77 in Exclude<keyof I["web"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_78 in Exclude<keyof I["web"]["imageOutputs"], number | keyof {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        } & { [K_79 in Exclude<keyof I["web"], keyof WebEgressRequest>]: never; }) | undefined;
        participant?: ({
            roomName?: string | undefined;
            identity?: string | undefined;
            screenShare?: boolean | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
            identity?: string | undefined;
            screenShare?: boolean | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_80 in Exclude<keyof I["participant"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_81 in Exclude<keyof I["participant"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_82 in Exclude<keyof I["participant"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_83 in Exclude<keyof I["participant"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_84 in Exclude<keyof I["participant"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_85 in Exclude<keyof I["participant"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_86 in Exclude<keyof I["participant"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_87 in Exclude<keyof I["participant"]["fileOutputs"], number | keyof {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] & ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_88 in Exclude<keyof I["participant"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_89 in Exclude<keyof I["participant"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_90 in Exclude<keyof I["participant"]["streamOutputs"], number | keyof {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_91 in Exclude<keyof I["participant"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_92 in Exclude<keyof I["participant"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_93 in Exclude<keyof I["participant"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_94 in Exclude<keyof I["participant"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_95 in Exclude<keyof I["participant"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_96 in Exclude<keyof I["participant"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_97 in Exclude<keyof I["participant"]["segmentOutputs"], number | keyof {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                    } & { [K_98 in Exclude<keyof I["participant"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_99 in Exclude<keyof I["participant"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_100 in Exclude<keyof I["participant"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_101 in Exclude<keyof I["participant"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_102 in Exclude<keyof I["participant"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_103 in Exclude<keyof I["participant"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_104 in Exclude<keyof I["participant"]["imageOutputs"], number | keyof {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        } & { [K_105 in Exclude<keyof I["participant"], keyof ParticipantEgressRequest>]: never; }) | undefined;
        trackComposite?: ({
            roomName?: string | undefined;
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } | undefined;
            fileOutputs?: {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] | undefined;
            segmentOutputs?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_106 in Exclude<keyof I["trackComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_107 in Exclude<keyof I["trackComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_108 in Exclude<keyof I["trackComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_109 in Exclude<keyof I["trackComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_110 in Exclude<keyof I["trackComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_111 in Exclude<keyof I["trackComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_112 in Exclude<keyof I["trackComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_113 in Exclude<keyof I["trackComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_114 in Exclude<keyof I["trackComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_115 in Exclude<keyof I["trackComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_116 in Exclude<keyof I["trackComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_117 in Exclude<keyof I["trackComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_118 in Exclude<keyof I["trackComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_119 in Exclude<keyof I["trackComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
                keyFrameInterval?: number | undefined;
            } & { [K_120 in Exclude<keyof I["trackComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            fileOutputs?: ({
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                fileType?: EncodedFileType | undefined;
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
                    } & { [K_121 in Exclude<keyof I["trackComposite"]["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_122 in Exclude<keyof I["trackComposite"]["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_123 in Exclude<keyof I["trackComposite"]["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_124 in Exclude<keyof I["trackComposite"]["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_125 in Exclude<keyof I["trackComposite"]["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_126 in Exclude<keyof I["trackComposite"]["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_127 in Exclude<keyof I["trackComposite"]["fileOutputs"], number | keyof {
                fileType?: EncodedFileType | undefined;
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
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[] & ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_128 in Exclude<keyof I["trackComposite"]["streamOutputs"][number]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_129 in Exclude<keyof I["trackComposite"]["streamOutputs"][number], keyof StreamOutput>]: never; })[] & { [K_130 in Exclude<keyof I["trackComposite"]["streamOutputs"], number | keyof {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            }[]>]: never; }) | undefined;
            segmentOutputs?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                    } & { [K_131 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_132 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_133 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_134 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_135 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_136 in Exclude<keyof I["trackComposite"]["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_137 in Exclude<keyof I["trackComposite"]["segmentOutputs"], number | keyof {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                livePlaylistName?: string | undefined;
                segmentDuration?: number | undefined;
                filenameSuffix?: SegmentedFileSuffix | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
                    } & { [K_138 in Exclude<keyof I["trackComposite"]["imageOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_139 in Exclude<keyof I["trackComposite"]["imageOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_140 in Exclude<keyof I["trackComposite"]["imageOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_141 in Exclude<keyof I["trackComposite"]["imageOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_142 in Exclude<keyof I["trackComposite"]["imageOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_143 in Exclude<keyof I["trackComposite"]["imageOutputs"][number], keyof ImageOutput>]: never; })[] & { [K_144 in Exclude<keyof I["trackComposite"]["imageOutputs"], number | keyof {
                captureInterval?: number | undefined;
                width?: number | undefined;
                height?: number | undefined;
                filenamePrefix?: string | undefined;
                filenameSuffix?: ImageFileSuffix | undefined;
                imageCodec?: ImageCodec | undefined;
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
        } & { [K_145 in Exclude<keyof I["trackComposite"], keyof TrackCompositeEgressRequest>]: never; }) | undefined;
        track?: ({
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: {
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
            websocketUrl?: string | undefined;
        } & {
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: ({
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
                    } & { [K_146 in Exclude<keyof I["track"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_147 in Exclude<keyof I["track"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_148 in Exclude<keyof I["track"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_149 in Exclude<keyof I["track"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
                } & { [K_150 in Exclude<keyof I["track"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_151 in Exclude<keyof I["track"]["file"], keyof DirectFileOutput>]: never; }) | undefined;
            websocketUrl?: string | undefined;
        } & { [K_152 in Exclude<keyof I["track"], keyof TrackEgressRequest>]: never; }) | undefined;
        stream?: ({
            info?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] | undefined;
        } & {
            info?: ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[] & ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            } & {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            } & { [K_153 in Exclude<keyof I["stream"]["info"][number], keyof StreamInfo>]: never; })[] & { [K_154 in Exclude<keyof I["stream"]["info"], number | keyof {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
                error?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_155 in Exclude<keyof I["stream"], "info">]: never; }) | undefined;
        file?: ({
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & { [K_156 in Exclude<keyof I["file"], keyof FileInfo>]: never; }) | undefined;
        segments?: ({
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & {
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & { [K_157 in Exclude<keyof I["segments"], keyof SegmentsInfo>]: never; }) | undefined;
        streamResults?: ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[] & ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        } & {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        } & { [K_158 in Exclude<keyof I["streamResults"][number], keyof StreamInfo>]: never; })[] & { [K_159 in Exclude<keyof I["streamResults"], number | keyof {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[]>]: never; }) | undefined;
        fileResults?: ({
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        }[] & ({
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & { [K_160 in Exclude<keyof I["fileResults"][number], keyof FileInfo>]: never; })[] & { [K_161 in Exclude<keyof I["fileResults"], number | keyof {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        }[]>]: never; }) | undefined;
        segmentResults?: ({
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[] & ({
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & {
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & { [K_162 in Exclude<keyof I["segmentResults"][number], keyof SegmentsInfo>]: never; })[] & { [K_163 in Exclude<keyof I["segmentResults"], number | keyof {
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            livePlaylistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[]>]: never; }) | undefined;
        imageResults?: ({
            imageCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[] & ({
            imageCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & {
            imageCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & { [K_164 in Exclude<keyof I["imageResults"][number], keyof ImagesInfo>]: never; })[] & { [K_165 in Exclude<keyof I["imageResults"], number | keyof {
            imageCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_166 in Exclude<keyof I, keyof EgressInfo>]: never; }>(object: I): EgressInfo;
};
export declare const StreamInfoList: {
    encode(message: StreamInfoList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamInfoList;
    fromJSON(object: any): StreamInfoList;
    toJSON(message: StreamInfoList): unknown;
    fromPartial<I extends {
        info?: {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[] | undefined;
    } & {
        info?: ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[] & ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        } & {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        } & { [K in Exclude<keyof I["info"][number], keyof StreamInfo>]: never; })[] & { [K_1 in Exclude<keyof I["info"], number | keyof {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
            error?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "info">]: never; }>(object: I): StreamInfoList;
};
export declare const StreamInfo: {
    encode(message: StreamInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamInfo;
    fromJSON(object: any): StreamInfo;
    toJSON(message: StreamInfo): unknown;
    fromPartial<I extends {
        url?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        status?: StreamInfo_Status | undefined;
        error?: string | undefined;
    } & {
        url?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        status?: StreamInfo_Status | undefined;
        error?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StreamInfo>]: never; }>(object: I): StreamInfo;
};
export declare const FileInfo: {
    encode(message: FileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FileInfo;
    fromJSON(object: any): FileInfo;
    toJSON(message: FileInfo): unknown;
    fromPartial<I extends {
        filename?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        location?: string | undefined;
    } & {
        filename?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        location?: string | undefined;
    } & { [K in Exclude<keyof I, keyof FileInfo>]: never; }>(object: I): FileInfo;
};
export declare const SegmentsInfo: {
    encode(message: SegmentsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentsInfo;
    fromJSON(object: any): SegmentsInfo;
    toJSON(message: SegmentsInfo): unknown;
    fromPartial<I extends {
        playlistName?: string | undefined;
        livePlaylistName?: string | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        playlistLocation?: string | undefined;
        livePlaylistLocation?: string | undefined;
        segmentCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & {
        playlistName?: string | undefined;
        livePlaylistName?: string | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        playlistLocation?: string | undefined;
        livePlaylistLocation?: string | undefined;
        segmentCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SegmentsInfo>]: never; }>(object: I): SegmentsInfo;
};
export declare const ImagesInfo: {
    encode(message: ImagesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImagesInfo;
    fromJSON(object: any): ImagesInfo;
    toJSON(message: ImagesInfo): unknown;
    fromPartial<I extends {
        imageCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & {
        imageCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ImagesInfo>]: never; }>(object: I): ImagesInfo;
};
export declare const AutoParticipantEgress: {
    encode(message: AutoParticipantEgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoParticipantEgress;
    fromJSON(object: any): AutoParticipantEgress;
    toJSON(message: AutoParticipantEgress): unknown;
    fromPartial<I extends {
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } | undefined;
        fileOutputs?: {
            fileType?: EncodedFileType | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
            keyFrameInterval?: number | undefined;
        } & { [K in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        fileOutputs?: ({
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
            fileType?: EncodedFileType | undefined;
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
                } & { [K_1 in Exclude<keyof I["fileOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_2 in Exclude<keyof I["fileOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_3 in Exclude<keyof I["fileOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_4 in Exclude<keyof I["fileOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_5 in Exclude<keyof I["fileOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["fileOutputs"][number], keyof EncodedFileOutput>]: never; })[] & { [K_7 in Exclude<keyof I["fileOutputs"], number | keyof {
            fileType?: EncodedFileType | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
                } & { [K_8 in Exclude<keyof I["segmentOutputs"][number]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segmentOutputs"][number]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: string | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segmentOutputs"][number]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segmentOutputs"][number]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
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
            } & { [K_12 in Exclude<keyof I["segmentOutputs"][number]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segmentOutputs"][number], keyof SegmentedFileOutput>]: never; })[] & { [K_14 in Exclude<keyof I["segmentOutputs"], number | keyof {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            livePlaylistName?: string | undefined;
            segmentDuration?: number | undefined;
            filenameSuffix?: SegmentedFileSuffix | undefined;
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
    } & { [K_15 in Exclude<keyof I, keyof AutoParticipantEgress>]: never; }>(object: I): AutoParticipantEgress;
};
export declare const AutoTrackEgress: {
    encode(message: AutoTrackEgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoTrackEgress;
    fromJSON(object: any): AutoTrackEgress;
    toJSON(message: AutoTrackEgress): unknown;
    fromPartial<I extends {
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
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: string | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof AutoTrackEgress>]: never; }>(object: I): AutoTrackEgress;
};
export interface Egress {
    /** start recording or streaming a room, participant, or tracks */
    StartRoomCompositeEgress(request: RoomCompositeEgressRequest): Promise<EgressInfo>;
    StartWebEgress(request: WebEgressRequest): Promise<EgressInfo>;
    StartParticipantEgress(request: ParticipantEgressRequest): Promise<EgressInfo>;
    StartTrackCompositeEgress(request: TrackCompositeEgressRequest): Promise<EgressInfo>;
    StartTrackEgress(request: TrackEgressRequest): Promise<EgressInfo>;
    /** update web composite layout */
    UpdateLayout(request: UpdateLayoutRequest): Promise<EgressInfo>;
    /** add or remove stream endpoints */
    UpdateStream(request: UpdateStreamRequest): Promise<EgressInfo>;
    /** add or remove outputs */
    UpdateOutputs(request: UpdateOutputsRequest): Promise<EgressInfo>;
    /** list available egress */
    ListEgress(request: ListEgressRequest): Promise<ListEgressResponse>;
    /** stop a recording or stream */
    StopEgress(request: StopEgressRequest): Promise<EgressInfo>;
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
