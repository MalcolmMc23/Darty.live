"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = exports.clientInfo_SDKToJSON = exports.clientInfo_SDKFromJSON = exports.ClientInfo_SDK = exports.serverInfo_EditionToJSON = exports.serverInfo_EditionFromJSON = exports.ServerInfo_Edition = exports.dataPacket_KindToJSON = exports.dataPacket_KindFromJSON = exports.DataPacket_Kind = exports.encryption_TypeToJSON = exports.encryption_TypeFromJSON = exports.Encryption_Type = exports.participantInfo_StateToJSON = exports.participantInfo_StateFromJSON = exports.ParticipantInfo_State = exports.subscriptionErrorToJSON = exports.subscriptionErrorFromJSON = exports.SubscriptionError = exports.reconnectReasonToJSON = exports.reconnectReasonFromJSON = exports.ReconnectReason = exports.disconnectReasonToJSON = exports.disconnectReasonFromJSON = exports.DisconnectReason = exports.clientConfigSettingToJSON = exports.clientConfigSettingFromJSON = exports.ClientConfigSetting = exports.connectionQualityToJSON = exports.connectionQualityFromJSON = exports.ConnectionQuality = exports.videoQualityToJSON = exports.videoQualityFromJSON = exports.VideoQuality = exports.trackSourceToJSON = exports.trackSourceFromJSON = exports.TrackSource = exports.trackTypeToJSON = exports.trackTypeFromJSON = exports.TrackType = exports.imageCodecToJSON = exports.imageCodecFromJSON = exports.ImageCodec = exports.videoCodecToJSON = exports.videoCodecFromJSON = exports.VideoCodec = exports.audioCodecToJSON = exports.audioCodecFromJSON = exports.AudioCodec = exports.protobufPackage = void 0;
exports.TimedVersion = exports.RTPStats_GapHistogramEntry = exports.RTPStats = exports.RTPDrift = exports.DisabledCodecs = exports.VideoConfiguration = exports.ClientConfiguration = exports.ClientInfo = exports.ServerInfo = exports.ParticipantTracks = exports.UserPacket = exports.SpeakerInfo = exports.ActiveSpeakerUpdate = exports.DataPacket = exports.VideoLayer = exports.TrackInfo = exports.SimulcastCodecInfo = exports.Encryption = exports.ParticipantInfo = exports.ParticipantPermission = exports.PlayoutDelay = exports.Codec = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "livekit";
var AudioCodec;
(function (AudioCodec) {
    AudioCodec[AudioCodec["DEFAULT_AC"] = 0] = "DEFAULT_AC";
    AudioCodec[AudioCodec["OPUS"] = 1] = "OPUS";
    AudioCodec[AudioCodec["AAC"] = 2] = "AAC";
    AudioCodec[AudioCodec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AudioCodec = exports.AudioCodec || (exports.AudioCodec = {}));
function audioCodecFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_AC":
            return AudioCodec.DEFAULT_AC;
        case 1:
        case "OPUS":
            return AudioCodec.OPUS;
        case 2:
        case "AAC":
            return AudioCodec.AAC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AudioCodec.UNRECOGNIZED;
    }
}
exports.audioCodecFromJSON = audioCodecFromJSON;
function audioCodecToJSON(object) {
    switch (object) {
        case AudioCodec.DEFAULT_AC:
            return "DEFAULT_AC";
        case AudioCodec.OPUS:
            return "OPUS";
        case AudioCodec.AAC:
            return "AAC";
        case AudioCodec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.audioCodecToJSON = audioCodecToJSON;
var VideoCodec;
(function (VideoCodec) {
    VideoCodec[VideoCodec["DEFAULT_VC"] = 0] = "DEFAULT_VC";
    VideoCodec[VideoCodec["H264_BASELINE"] = 1] = "H264_BASELINE";
    VideoCodec[VideoCodec["H264_MAIN"] = 2] = "H264_MAIN";
    VideoCodec[VideoCodec["H264_HIGH"] = 3] = "H264_HIGH";
    VideoCodec[VideoCodec["VP8"] = 4] = "VP8";
    VideoCodec[VideoCodec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VideoCodec = exports.VideoCodec || (exports.VideoCodec = {}));
function videoCodecFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_VC":
            return VideoCodec.DEFAULT_VC;
        case 1:
        case "H264_BASELINE":
            return VideoCodec.H264_BASELINE;
        case 2:
        case "H264_MAIN":
            return VideoCodec.H264_MAIN;
        case 3:
        case "H264_HIGH":
            return VideoCodec.H264_HIGH;
        case 4:
        case "VP8":
            return VideoCodec.VP8;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VideoCodec.UNRECOGNIZED;
    }
}
exports.videoCodecFromJSON = videoCodecFromJSON;
function videoCodecToJSON(object) {
    switch (object) {
        case VideoCodec.DEFAULT_VC:
            return "DEFAULT_VC";
        case VideoCodec.H264_BASELINE:
            return "H264_BASELINE";
        case VideoCodec.H264_MAIN:
            return "H264_MAIN";
        case VideoCodec.H264_HIGH:
            return "H264_HIGH";
        case VideoCodec.VP8:
            return "VP8";
        case VideoCodec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.videoCodecToJSON = videoCodecToJSON;
var ImageCodec;
(function (ImageCodec) {
    ImageCodec[ImageCodec["IC_DEFAULT"] = 0] = "IC_DEFAULT";
    ImageCodec[ImageCodec["IC_JPEG"] = 1] = "IC_JPEG";
    ImageCodec[ImageCodec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ImageCodec = exports.ImageCodec || (exports.ImageCodec = {}));
function imageCodecFromJSON(object) {
    switch (object) {
        case 0:
        case "IC_DEFAULT":
            return ImageCodec.IC_DEFAULT;
        case 1:
        case "IC_JPEG":
            return ImageCodec.IC_JPEG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ImageCodec.UNRECOGNIZED;
    }
}
exports.imageCodecFromJSON = imageCodecFromJSON;
function imageCodecToJSON(object) {
    switch (object) {
        case ImageCodec.IC_DEFAULT:
            return "IC_DEFAULT";
        case ImageCodec.IC_JPEG:
            return "IC_JPEG";
        case ImageCodec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.imageCodecToJSON = imageCodecToJSON;
var TrackType;
(function (TrackType) {
    TrackType[TrackType["AUDIO"] = 0] = "AUDIO";
    TrackType[TrackType["VIDEO"] = 1] = "VIDEO";
    TrackType[TrackType["DATA"] = 2] = "DATA";
    TrackType[TrackType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TrackType = exports.TrackType || (exports.TrackType = {}));
function trackTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO":
            return TrackType.AUDIO;
        case 1:
        case "VIDEO":
            return TrackType.VIDEO;
        case 2:
        case "DATA":
            return TrackType.DATA;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TrackType.UNRECOGNIZED;
    }
}
exports.trackTypeFromJSON = trackTypeFromJSON;
function trackTypeToJSON(object) {
    switch (object) {
        case TrackType.AUDIO:
            return "AUDIO";
        case TrackType.VIDEO:
            return "VIDEO";
        case TrackType.DATA:
            return "DATA";
        case TrackType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.trackTypeToJSON = trackTypeToJSON;
var TrackSource;
(function (TrackSource) {
    TrackSource[TrackSource["UNKNOWN"] = 0] = "UNKNOWN";
    TrackSource[TrackSource["CAMERA"] = 1] = "CAMERA";
    TrackSource[TrackSource["MICROPHONE"] = 2] = "MICROPHONE";
    TrackSource[TrackSource["SCREEN_SHARE"] = 3] = "SCREEN_SHARE";
    TrackSource[TrackSource["SCREEN_SHARE_AUDIO"] = 4] = "SCREEN_SHARE_AUDIO";
    TrackSource[TrackSource["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TrackSource = exports.TrackSource || (exports.TrackSource = {}));
function trackSourceFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return TrackSource.UNKNOWN;
        case 1:
        case "CAMERA":
            return TrackSource.CAMERA;
        case 2:
        case "MICROPHONE":
            return TrackSource.MICROPHONE;
        case 3:
        case "SCREEN_SHARE":
            return TrackSource.SCREEN_SHARE;
        case 4:
        case "SCREEN_SHARE_AUDIO":
            return TrackSource.SCREEN_SHARE_AUDIO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TrackSource.UNRECOGNIZED;
    }
}
exports.trackSourceFromJSON = trackSourceFromJSON;
function trackSourceToJSON(object) {
    switch (object) {
        case TrackSource.UNKNOWN:
            return "UNKNOWN";
        case TrackSource.CAMERA:
            return "CAMERA";
        case TrackSource.MICROPHONE:
            return "MICROPHONE";
        case TrackSource.SCREEN_SHARE:
            return "SCREEN_SHARE";
        case TrackSource.SCREEN_SHARE_AUDIO:
            return "SCREEN_SHARE_AUDIO";
        case TrackSource.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.trackSourceToJSON = trackSourceToJSON;
var VideoQuality;
(function (VideoQuality) {
    VideoQuality[VideoQuality["LOW"] = 0] = "LOW";
    VideoQuality[VideoQuality["MEDIUM"] = 1] = "MEDIUM";
    VideoQuality[VideoQuality["HIGH"] = 2] = "HIGH";
    VideoQuality[VideoQuality["OFF"] = 3] = "OFF";
    VideoQuality[VideoQuality["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VideoQuality = exports.VideoQuality || (exports.VideoQuality = {}));
function videoQualityFromJSON(object) {
    switch (object) {
        case 0:
        case "LOW":
            return VideoQuality.LOW;
        case 1:
        case "MEDIUM":
            return VideoQuality.MEDIUM;
        case 2:
        case "HIGH":
            return VideoQuality.HIGH;
        case 3:
        case "OFF":
            return VideoQuality.OFF;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VideoQuality.UNRECOGNIZED;
    }
}
exports.videoQualityFromJSON = videoQualityFromJSON;
function videoQualityToJSON(object) {
    switch (object) {
        case VideoQuality.LOW:
            return "LOW";
        case VideoQuality.MEDIUM:
            return "MEDIUM";
        case VideoQuality.HIGH:
            return "HIGH";
        case VideoQuality.OFF:
            return "OFF";
        case VideoQuality.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.videoQualityToJSON = videoQualityToJSON;
var ConnectionQuality;
(function (ConnectionQuality) {
    ConnectionQuality[ConnectionQuality["POOR"] = 0] = "POOR";
    ConnectionQuality[ConnectionQuality["GOOD"] = 1] = "GOOD";
    ConnectionQuality[ConnectionQuality["EXCELLENT"] = 2] = "EXCELLENT";
    ConnectionQuality[ConnectionQuality["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ConnectionQuality = exports.ConnectionQuality || (exports.ConnectionQuality = {}));
function connectionQualityFromJSON(object) {
    switch (object) {
        case 0:
        case "POOR":
            return ConnectionQuality.POOR;
        case 1:
        case "GOOD":
            return ConnectionQuality.GOOD;
        case 2:
        case "EXCELLENT":
            return ConnectionQuality.EXCELLENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ConnectionQuality.UNRECOGNIZED;
    }
}
exports.connectionQualityFromJSON = connectionQualityFromJSON;
function connectionQualityToJSON(object) {
    switch (object) {
        case ConnectionQuality.POOR:
            return "POOR";
        case ConnectionQuality.GOOD:
            return "GOOD";
        case ConnectionQuality.EXCELLENT:
            return "EXCELLENT";
        case ConnectionQuality.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.connectionQualityToJSON = connectionQualityToJSON;
var ClientConfigSetting;
(function (ClientConfigSetting) {
    ClientConfigSetting[ClientConfigSetting["UNSET"] = 0] = "UNSET";
    ClientConfigSetting[ClientConfigSetting["DISABLED"] = 1] = "DISABLED";
    ClientConfigSetting[ClientConfigSetting["ENABLED"] = 2] = "ENABLED";
    ClientConfigSetting[ClientConfigSetting["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClientConfigSetting = exports.ClientConfigSetting || (exports.ClientConfigSetting = {}));
function clientConfigSettingFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSET":
            return ClientConfigSetting.UNSET;
        case 1:
        case "DISABLED":
            return ClientConfigSetting.DISABLED;
        case 2:
        case "ENABLED":
            return ClientConfigSetting.ENABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClientConfigSetting.UNRECOGNIZED;
    }
}
exports.clientConfigSettingFromJSON = clientConfigSettingFromJSON;
function clientConfigSettingToJSON(object) {
    switch (object) {
        case ClientConfigSetting.UNSET:
            return "UNSET";
        case ClientConfigSetting.DISABLED:
            return "DISABLED";
        case ClientConfigSetting.ENABLED:
            return "ENABLED";
        case ClientConfigSetting.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clientConfigSettingToJSON = clientConfigSettingToJSON;
var DisconnectReason;
(function (DisconnectReason) {
    DisconnectReason[DisconnectReason["UNKNOWN_REASON"] = 0] = "UNKNOWN_REASON";
    DisconnectReason[DisconnectReason["CLIENT_INITIATED"] = 1] = "CLIENT_INITIATED";
    DisconnectReason[DisconnectReason["DUPLICATE_IDENTITY"] = 2] = "DUPLICATE_IDENTITY";
    DisconnectReason[DisconnectReason["SERVER_SHUTDOWN"] = 3] = "SERVER_SHUTDOWN";
    DisconnectReason[DisconnectReason["PARTICIPANT_REMOVED"] = 4] = "PARTICIPANT_REMOVED";
    DisconnectReason[DisconnectReason["ROOM_DELETED"] = 5] = "ROOM_DELETED";
    DisconnectReason[DisconnectReason["STATE_MISMATCH"] = 6] = "STATE_MISMATCH";
    DisconnectReason[DisconnectReason["JOIN_FAILURE"] = 7] = "JOIN_FAILURE";
    DisconnectReason[DisconnectReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DisconnectReason = exports.DisconnectReason || (exports.DisconnectReason = {}));
function disconnectReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_REASON":
            return DisconnectReason.UNKNOWN_REASON;
        case 1:
        case "CLIENT_INITIATED":
            return DisconnectReason.CLIENT_INITIATED;
        case 2:
        case "DUPLICATE_IDENTITY":
            return DisconnectReason.DUPLICATE_IDENTITY;
        case 3:
        case "SERVER_SHUTDOWN":
            return DisconnectReason.SERVER_SHUTDOWN;
        case 4:
        case "PARTICIPANT_REMOVED":
            return DisconnectReason.PARTICIPANT_REMOVED;
        case 5:
        case "ROOM_DELETED":
            return DisconnectReason.ROOM_DELETED;
        case 6:
        case "STATE_MISMATCH":
            return DisconnectReason.STATE_MISMATCH;
        case 7:
        case "JOIN_FAILURE":
            return DisconnectReason.JOIN_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DisconnectReason.UNRECOGNIZED;
    }
}
exports.disconnectReasonFromJSON = disconnectReasonFromJSON;
function disconnectReasonToJSON(object) {
    switch (object) {
        case DisconnectReason.UNKNOWN_REASON:
            return "UNKNOWN_REASON";
        case DisconnectReason.CLIENT_INITIATED:
            return "CLIENT_INITIATED";
        case DisconnectReason.DUPLICATE_IDENTITY:
            return "DUPLICATE_IDENTITY";
        case DisconnectReason.SERVER_SHUTDOWN:
            return "SERVER_SHUTDOWN";
        case DisconnectReason.PARTICIPANT_REMOVED:
            return "PARTICIPANT_REMOVED";
        case DisconnectReason.ROOM_DELETED:
            return "ROOM_DELETED";
        case DisconnectReason.STATE_MISMATCH:
            return "STATE_MISMATCH";
        case DisconnectReason.JOIN_FAILURE:
            return "JOIN_FAILURE";
        case DisconnectReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.disconnectReasonToJSON = disconnectReasonToJSON;
var ReconnectReason;
(function (ReconnectReason) {
    ReconnectReason[ReconnectReason["RR_UNKNOWN"] = 0] = "RR_UNKNOWN";
    ReconnectReason[ReconnectReason["RR_SIGNAL_DISCONNECTED"] = 1] = "RR_SIGNAL_DISCONNECTED";
    ReconnectReason[ReconnectReason["RR_PUBLISHER_FAILED"] = 2] = "RR_PUBLISHER_FAILED";
    ReconnectReason[ReconnectReason["RR_SUBSCRIBER_FAILED"] = 3] = "RR_SUBSCRIBER_FAILED";
    ReconnectReason[ReconnectReason["RR_SWITCH_CANDIDATE"] = 4] = "RR_SWITCH_CANDIDATE";
    ReconnectReason[ReconnectReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ReconnectReason = exports.ReconnectReason || (exports.ReconnectReason = {}));
function reconnectReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "RR_UNKNOWN":
            return ReconnectReason.RR_UNKNOWN;
        case 1:
        case "RR_SIGNAL_DISCONNECTED":
            return ReconnectReason.RR_SIGNAL_DISCONNECTED;
        case 2:
        case "RR_PUBLISHER_FAILED":
            return ReconnectReason.RR_PUBLISHER_FAILED;
        case 3:
        case "RR_SUBSCRIBER_FAILED":
            return ReconnectReason.RR_SUBSCRIBER_FAILED;
        case 4:
        case "RR_SWITCH_CANDIDATE":
            return ReconnectReason.RR_SWITCH_CANDIDATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ReconnectReason.UNRECOGNIZED;
    }
}
exports.reconnectReasonFromJSON = reconnectReasonFromJSON;
function reconnectReasonToJSON(object) {
    switch (object) {
        case ReconnectReason.RR_UNKNOWN:
            return "RR_UNKNOWN";
        case ReconnectReason.RR_SIGNAL_DISCONNECTED:
            return "RR_SIGNAL_DISCONNECTED";
        case ReconnectReason.RR_PUBLISHER_FAILED:
            return "RR_PUBLISHER_FAILED";
        case ReconnectReason.RR_SUBSCRIBER_FAILED:
            return "RR_SUBSCRIBER_FAILED";
        case ReconnectReason.RR_SWITCH_CANDIDATE:
            return "RR_SWITCH_CANDIDATE";
        case ReconnectReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.reconnectReasonToJSON = reconnectReasonToJSON;
var SubscriptionError;
(function (SubscriptionError) {
    SubscriptionError[SubscriptionError["SE_UNKNOWN"] = 0] = "SE_UNKNOWN";
    SubscriptionError[SubscriptionError["SE_CODEC_UNSUPPORTED"] = 1] = "SE_CODEC_UNSUPPORTED";
    SubscriptionError[SubscriptionError["SE_TRACK_NOTFOUND"] = 2] = "SE_TRACK_NOTFOUND";
    SubscriptionError[SubscriptionError["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SubscriptionError = exports.SubscriptionError || (exports.SubscriptionError = {}));
function subscriptionErrorFromJSON(object) {
    switch (object) {
        case 0:
        case "SE_UNKNOWN":
            return SubscriptionError.SE_UNKNOWN;
        case 1:
        case "SE_CODEC_UNSUPPORTED":
            return SubscriptionError.SE_CODEC_UNSUPPORTED;
        case 2:
        case "SE_TRACK_NOTFOUND":
            return SubscriptionError.SE_TRACK_NOTFOUND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SubscriptionError.UNRECOGNIZED;
    }
}
exports.subscriptionErrorFromJSON = subscriptionErrorFromJSON;
function subscriptionErrorToJSON(object) {
    switch (object) {
        case SubscriptionError.SE_UNKNOWN:
            return "SE_UNKNOWN";
        case SubscriptionError.SE_CODEC_UNSUPPORTED:
            return "SE_CODEC_UNSUPPORTED";
        case SubscriptionError.SE_TRACK_NOTFOUND:
            return "SE_TRACK_NOTFOUND";
        case SubscriptionError.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.subscriptionErrorToJSON = subscriptionErrorToJSON;
var ParticipantInfo_State;
(function (ParticipantInfo_State) {
    /** JOINING - websocket' connected, but not offered yet */
    ParticipantInfo_State[ParticipantInfo_State["JOINING"] = 0] = "JOINING";
    /** JOINED - server received client offer */
    ParticipantInfo_State[ParticipantInfo_State["JOINED"] = 1] = "JOINED";
    /** ACTIVE - ICE connectivity established */
    ParticipantInfo_State[ParticipantInfo_State["ACTIVE"] = 2] = "ACTIVE";
    /** DISCONNECTED - WS disconnected */
    ParticipantInfo_State[ParticipantInfo_State["DISCONNECTED"] = 3] = "DISCONNECTED";
    ParticipantInfo_State[ParticipantInfo_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ParticipantInfo_State = exports.ParticipantInfo_State || (exports.ParticipantInfo_State = {}));
function participantInfo_StateFromJSON(object) {
    switch (object) {
        case 0:
        case "JOINING":
            return ParticipantInfo_State.JOINING;
        case 1:
        case "JOINED":
            return ParticipantInfo_State.JOINED;
        case 2:
        case "ACTIVE":
            return ParticipantInfo_State.ACTIVE;
        case 3:
        case "DISCONNECTED":
            return ParticipantInfo_State.DISCONNECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ParticipantInfo_State.UNRECOGNIZED;
    }
}
exports.participantInfo_StateFromJSON = participantInfo_StateFromJSON;
function participantInfo_StateToJSON(object) {
    switch (object) {
        case ParticipantInfo_State.JOINING:
            return "JOINING";
        case ParticipantInfo_State.JOINED:
            return "JOINED";
        case ParticipantInfo_State.ACTIVE:
            return "ACTIVE";
        case ParticipantInfo_State.DISCONNECTED:
            return "DISCONNECTED";
        case ParticipantInfo_State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.participantInfo_StateToJSON = participantInfo_StateToJSON;
var Encryption_Type;
(function (Encryption_Type) {
    Encryption_Type[Encryption_Type["NONE"] = 0] = "NONE";
    Encryption_Type[Encryption_Type["GCM"] = 1] = "GCM";
    Encryption_Type[Encryption_Type["CUSTOM"] = 2] = "CUSTOM";
    Encryption_Type[Encryption_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Encryption_Type = exports.Encryption_Type || (exports.Encryption_Type = {}));
function encryption_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NONE":
            return Encryption_Type.NONE;
        case 1:
        case "GCM":
            return Encryption_Type.GCM;
        case 2:
        case "CUSTOM":
            return Encryption_Type.CUSTOM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Encryption_Type.UNRECOGNIZED;
    }
}
exports.encryption_TypeFromJSON = encryption_TypeFromJSON;
function encryption_TypeToJSON(object) {
    switch (object) {
        case Encryption_Type.NONE:
            return "NONE";
        case Encryption_Type.GCM:
            return "GCM";
        case Encryption_Type.CUSTOM:
            return "CUSTOM";
        case Encryption_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.encryption_TypeToJSON = encryption_TypeToJSON;
var DataPacket_Kind;
(function (DataPacket_Kind) {
    DataPacket_Kind[DataPacket_Kind["RELIABLE"] = 0] = "RELIABLE";
    DataPacket_Kind[DataPacket_Kind["LOSSY"] = 1] = "LOSSY";
    DataPacket_Kind[DataPacket_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataPacket_Kind = exports.DataPacket_Kind || (exports.DataPacket_Kind = {}));
function dataPacket_KindFromJSON(object) {
    switch (object) {
        case 0:
        case "RELIABLE":
            return DataPacket_Kind.RELIABLE;
        case 1:
        case "LOSSY":
            return DataPacket_Kind.LOSSY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataPacket_Kind.UNRECOGNIZED;
    }
}
exports.dataPacket_KindFromJSON = dataPacket_KindFromJSON;
function dataPacket_KindToJSON(object) {
    switch (object) {
        case DataPacket_Kind.RELIABLE:
            return "RELIABLE";
        case DataPacket_Kind.LOSSY:
            return "LOSSY";
        case DataPacket_Kind.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.dataPacket_KindToJSON = dataPacket_KindToJSON;
var ServerInfo_Edition;
(function (ServerInfo_Edition) {
    ServerInfo_Edition[ServerInfo_Edition["Standard"] = 0] = "Standard";
    ServerInfo_Edition[ServerInfo_Edition["Cloud"] = 1] = "Cloud";
    ServerInfo_Edition[ServerInfo_Edition["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ServerInfo_Edition = exports.ServerInfo_Edition || (exports.ServerInfo_Edition = {}));
function serverInfo_EditionFromJSON(object) {
    switch (object) {
        case 0:
        case "Standard":
            return ServerInfo_Edition.Standard;
        case 1:
        case "Cloud":
            return ServerInfo_Edition.Cloud;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ServerInfo_Edition.UNRECOGNIZED;
    }
}
exports.serverInfo_EditionFromJSON = serverInfo_EditionFromJSON;
function serverInfo_EditionToJSON(object) {
    switch (object) {
        case ServerInfo_Edition.Standard:
            return "Standard";
        case ServerInfo_Edition.Cloud:
            return "Cloud";
        case ServerInfo_Edition.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.serverInfo_EditionToJSON = serverInfo_EditionToJSON;
var ClientInfo_SDK;
(function (ClientInfo_SDK) {
    ClientInfo_SDK[ClientInfo_SDK["UNKNOWN"] = 0] = "UNKNOWN";
    ClientInfo_SDK[ClientInfo_SDK["JS"] = 1] = "JS";
    ClientInfo_SDK[ClientInfo_SDK["SWIFT"] = 2] = "SWIFT";
    ClientInfo_SDK[ClientInfo_SDK["ANDROID"] = 3] = "ANDROID";
    ClientInfo_SDK[ClientInfo_SDK["FLUTTER"] = 4] = "FLUTTER";
    ClientInfo_SDK[ClientInfo_SDK["GO"] = 5] = "GO";
    ClientInfo_SDK[ClientInfo_SDK["UNITY"] = 6] = "UNITY";
    ClientInfo_SDK[ClientInfo_SDK["REACT_NATIVE"] = 7] = "REACT_NATIVE";
    ClientInfo_SDK[ClientInfo_SDK["RUST"] = 8] = "RUST";
    ClientInfo_SDK[ClientInfo_SDK["PYTHON"] = 9] = "PYTHON";
    ClientInfo_SDK[ClientInfo_SDK["CPP"] = 10] = "CPP";
    ClientInfo_SDK[ClientInfo_SDK["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClientInfo_SDK = exports.ClientInfo_SDK || (exports.ClientInfo_SDK = {}));
function clientInfo_SDKFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ClientInfo_SDK.UNKNOWN;
        case 1:
        case "JS":
            return ClientInfo_SDK.JS;
        case 2:
        case "SWIFT":
            return ClientInfo_SDK.SWIFT;
        case 3:
        case "ANDROID":
            return ClientInfo_SDK.ANDROID;
        case 4:
        case "FLUTTER":
            return ClientInfo_SDK.FLUTTER;
        case 5:
        case "GO":
            return ClientInfo_SDK.GO;
        case 6:
        case "UNITY":
            return ClientInfo_SDK.UNITY;
        case 7:
        case "REACT_NATIVE":
            return ClientInfo_SDK.REACT_NATIVE;
        case 8:
        case "RUST":
            return ClientInfo_SDK.RUST;
        case 9:
        case "PYTHON":
            return ClientInfo_SDK.PYTHON;
        case 10:
        case "CPP":
            return ClientInfo_SDK.CPP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClientInfo_SDK.UNRECOGNIZED;
    }
}
exports.clientInfo_SDKFromJSON = clientInfo_SDKFromJSON;
function clientInfo_SDKToJSON(object) {
    switch (object) {
        case ClientInfo_SDK.UNKNOWN:
            return "UNKNOWN";
        case ClientInfo_SDK.JS:
            return "JS";
        case ClientInfo_SDK.SWIFT:
            return "SWIFT";
        case ClientInfo_SDK.ANDROID:
            return "ANDROID";
        case ClientInfo_SDK.FLUTTER:
            return "FLUTTER";
        case ClientInfo_SDK.GO:
            return "GO";
        case ClientInfo_SDK.UNITY:
            return "UNITY";
        case ClientInfo_SDK.REACT_NATIVE:
            return "REACT_NATIVE";
        case ClientInfo_SDK.RUST:
            return "RUST";
        case ClientInfo_SDK.PYTHON:
            return "PYTHON";
        case ClientInfo_SDK.CPP:
            return "CPP";
        case ClientInfo_SDK.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clientInfo_SDKToJSON = clientInfo_SDKToJSON;
function createBaseRoom() {
    return {
        sid: "",
        name: "",
        emptyTimeout: 0,
        maxParticipants: 0,
        creationTime: 0,
        turnPassword: "",
        enabledCodecs: [],
        metadata: "",
        numParticipants: 0,
        numPublishers: 0,
        activeRecording: false,
    };
}
exports.Room = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.emptyTimeout !== 0) {
            writer.uint32(24).uint32(message.emptyTimeout);
        }
        if (message.maxParticipants !== 0) {
            writer.uint32(32).uint32(message.maxParticipants);
        }
        if (message.creationTime !== 0) {
            writer.uint32(40).int64(message.creationTime);
        }
        if (message.turnPassword !== "") {
            writer.uint32(50).string(message.turnPassword);
        }
        for (const v of message.enabledCodecs) {
            exports.Codec.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(66).string(message.metadata);
        }
        if (message.numParticipants !== 0) {
            writer.uint32(72).uint32(message.numParticipants);
        }
        if (message.numPublishers !== 0) {
            writer.uint32(88).uint32(message.numPublishers);
        }
        if (message.activeRecording === true) {
            writer.uint32(80).bool(message.activeRecording);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.emptyTimeout = reader.uint32();
                    break;
                case 4:
                    message.maxParticipants = reader.uint32();
                    break;
                case 5:
                    message.creationTime = longToNumber(reader.int64());
                    break;
                case 6:
                    message.turnPassword = reader.string();
                    break;
                case 7:
                    message.enabledCodecs.push(exports.Codec.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.metadata = reader.string();
                    break;
                case 9:
                    message.numParticipants = reader.uint32();
                    break;
                case 11:
                    message.numPublishers = reader.uint32();
                    break;
                case 10:
                    message.activeRecording = reader.bool();
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
            sid: isSet(object.sid) ? String(object.sid) : "",
            name: isSet(object.name) ? String(object.name) : "",
            emptyTimeout: isSet(object.emptyTimeout) ? Number(object.emptyTimeout) : 0,
            maxParticipants: isSet(object.maxParticipants) ? Number(object.maxParticipants) : 0,
            creationTime: isSet(object.creationTime) ? Number(object.creationTime) : 0,
            turnPassword: isSet(object.turnPassword) ? String(object.turnPassword) : "",
            enabledCodecs: Array.isArray(object === null || object === void 0 ? void 0 : object.enabledCodecs)
                ? object.enabledCodecs.map((e) => exports.Codec.fromJSON(e))
                : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            numParticipants: isSet(object.numParticipants) ? Number(object.numParticipants) : 0,
            numPublishers: isSet(object.numPublishers) ? Number(object.numPublishers) : 0,
            activeRecording: isSet(object.activeRecording) ? Boolean(object.activeRecording) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sid !== undefined && (obj.sid = message.sid);
        message.name !== undefined && (obj.name = message.name);
        message.emptyTimeout !== undefined && (obj.emptyTimeout = Math.round(message.emptyTimeout));
        message.maxParticipants !== undefined && (obj.maxParticipants = Math.round(message.maxParticipants));
        message.creationTime !== undefined && (obj.creationTime = Math.round(message.creationTime));
        message.turnPassword !== undefined && (obj.turnPassword = message.turnPassword);
        if (message.enabledCodecs) {
            obj.enabledCodecs = message.enabledCodecs.map((e) => e ? exports.Codec.toJSON(e) : undefined);
        }
        else {
            obj.enabledCodecs = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.numParticipants !== undefined && (obj.numParticipants = Math.round(message.numParticipants));
        message.numPublishers !== undefined && (obj.numPublishers = Math.round(message.numPublishers));
        message.activeRecording !== undefined && (obj.activeRecording = message.activeRecording);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseRoom();
        message.sid = (_a = object.sid) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.emptyTimeout = (_c = object.emptyTimeout) !== null && _c !== void 0 ? _c : 0;
        message.maxParticipants = (_d = object.maxParticipants) !== null && _d !== void 0 ? _d : 0;
        message.creationTime = (_e = object.creationTime) !== null && _e !== void 0 ? _e : 0;
        message.turnPassword = (_f = object.turnPassword) !== null && _f !== void 0 ? _f : "";
        message.enabledCodecs = ((_g = object.enabledCodecs) === null || _g === void 0 ? void 0 : _g.map((e) => exports.Codec.fromPartial(e))) || [];
        message.metadata = (_h = object.metadata) !== null && _h !== void 0 ? _h : "";
        message.numParticipants = (_j = object.numParticipants) !== null && _j !== void 0 ? _j : 0;
        message.numPublishers = (_k = object.numPublishers) !== null && _k !== void 0 ? _k : 0;
        message.activeRecording = (_l = object.activeRecording) !== null && _l !== void 0 ? _l : false;
        return message;
    },
};
function createBaseCodec() {
    return { mime: "", fmtpLine: "" };
}
exports.Codec = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mime !== "") {
            writer.uint32(10).string(message.mime);
        }
        if (message.fmtpLine !== "") {
            writer.uint32(18).string(message.fmtpLine);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mime = reader.string();
                    break;
                case 2:
                    message.fmtpLine = reader.string();
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
            mime: isSet(object.mime) ? String(object.mime) : "",
            fmtpLine: isSet(object.fmtpLine) ? String(object.fmtpLine) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.mime !== undefined && (obj.mime = message.mime);
        message.fmtpLine !== undefined && (obj.fmtpLine = message.fmtpLine);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCodec();
        message.mime = (_a = object.mime) !== null && _a !== void 0 ? _a : "";
        message.fmtpLine = (_b = object.fmtpLine) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePlayoutDelay() {
    return { enabled: false, min: 0, max: 0 };
}
exports.PlayoutDelay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.enabled === true) {
            writer.uint32(8).bool(message.enabled);
        }
        if (message.min !== 0) {
            writer.uint32(16).uint32(message.min);
        }
        if (message.max !== 0) {
            writer.uint32(24).uint32(message.max);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayoutDelay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.min = reader.uint32();
                    break;
                case 3:
                    message.max = reader.uint32();
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
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
            min: isSet(object.min) ? Number(object.min) : 0,
            max: isSet(object.max) ? Number(object.max) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.min !== undefined && (obj.min = Math.round(message.min));
        message.max !== undefined && (obj.max = Math.round(message.max));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePlayoutDelay();
        message.enabled = (_a = object.enabled) !== null && _a !== void 0 ? _a : false;
        message.min = (_b = object.min) !== null && _b !== void 0 ? _b : 0;
        message.max = (_c = object.max) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseParticipantPermission() {
    return {
        canSubscribe: false,
        canPublish: false,
        canPublishData: false,
        canPublishSources: [],
        hidden: false,
        recorder: false,
        canUpdateMetadata: false,
    };
}
exports.ParticipantPermission = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.canSubscribe === true) {
            writer.uint32(8).bool(message.canSubscribe);
        }
        if (message.canPublish === true) {
            writer.uint32(16).bool(message.canPublish);
        }
        if (message.canPublishData === true) {
            writer.uint32(24).bool(message.canPublishData);
        }
        writer.uint32(74).fork();
        for (const v of message.canPublishSources) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.hidden === true) {
            writer.uint32(56).bool(message.hidden);
        }
        if (message.recorder === true) {
            writer.uint32(64).bool(message.recorder);
        }
        if (message.canUpdateMetadata === true) {
            writer.uint32(80).bool(message.canUpdateMetadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParticipantPermission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.canSubscribe = reader.bool();
                    break;
                case 2:
                    message.canPublish = reader.bool();
                    break;
                case 3:
                    message.canPublishData = reader.bool();
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.canPublishSources.push(reader.int32());
                        }
                    }
                    else {
                        message.canPublishSources.push(reader.int32());
                    }
                    break;
                case 7:
                    message.hidden = reader.bool();
                    break;
                case 8:
                    message.recorder = reader.bool();
                    break;
                case 10:
                    message.canUpdateMetadata = reader.bool();
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
            canSubscribe: isSet(object.canSubscribe) ? Boolean(object.canSubscribe) : false,
            canPublish: isSet(object.canPublish) ? Boolean(object.canPublish) : false,
            canPublishData: isSet(object.canPublishData) ? Boolean(object.canPublishData) : false,
            canPublishSources: Array.isArray(object === null || object === void 0 ? void 0 : object.canPublishSources)
                ? object.canPublishSources.map((e) => trackSourceFromJSON(e))
                : [],
            hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
            recorder: isSet(object.recorder) ? Boolean(object.recorder) : false,
            canUpdateMetadata: isSet(object.canUpdateMetadata) ? Boolean(object.canUpdateMetadata) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.canSubscribe !== undefined && (obj.canSubscribe = message.canSubscribe);
        message.canPublish !== undefined && (obj.canPublish = message.canPublish);
        message.canPublishData !== undefined && (obj.canPublishData = message.canPublishData);
        if (message.canPublishSources) {
            obj.canPublishSources = message.canPublishSources.map((e) => trackSourceToJSON(e));
        }
        else {
            obj.canPublishSources = [];
        }
        message.hidden !== undefined && (obj.hidden = message.hidden);
        message.recorder !== undefined && (obj.recorder = message.recorder);
        message.canUpdateMetadata !== undefined && (obj.canUpdateMetadata = message.canUpdateMetadata);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseParticipantPermission();
        message.canSubscribe = (_a = object.canSubscribe) !== null && _a !== void 0 ? _a : false;
        message.canPublish = (_b = object.canPublish) !== null && _b !== void 0 ? _b : false;
        message.canPublishData = (_c = object.canPublishData) !== null && _c !== void 0 ? _c : false;
        message.canPublishSources = ((_d = object.canPublishSources) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.hidden = (_e = object.hidden) !== null && _e !== void 0 ? _e : false;
        message.recorder = (_f = object.recorder) !== null && _f !== void 0 ? _f : false;
        message.canUpdateMetadata = (_g = object.canUpdateMetadata) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseParticipantInfo() {
    return {
        sid: "",
        identity: "",
        state: 0,
        tracks: [],
        metadata: "",
        joinedAt: 0,
        name: "",
        version: 0,
        permission: undefined,
        region: "",
        isPublisher: false,
    };
}
exports.ParticipantInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        for (const v of message.tracks) {
            exports.TrackInfo.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        if (message.joinedAt !== 0) {
            writer.uint32(48).int64(message.joinedAt);
        }
        if (message.name !== "") {
            writer.uint32(74).string(message.name);
        }
        if (message.version !== 0) {
            writer.uint32(80).uint32(message.version);
        }
        if (message.permission !== undefined) {
            exports.ParticipantPermission.encode(message.permission, writer.uint32(90).fork()).ldelim();
        }
        if (message.region !== "") {
            writer.uint32(98).string(message.region);
        }
        if (message.isPublisher === true) {
            writer.uint32(104).bool(message.isPublisher);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParticipantInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.tracks.push(exports.TrackInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.joinedAt = longToNumber(reader.int64());
                    break;
                case 9:
                    message.name = reader.string();
                    break;
                case 10:
                    message.version = reader.uint32();
                    break;
                case 11:
                    message.permission = exports.ParticipantPermission.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.region = reader.string();
                    break;
                case 13:
                    message.isPublisher = reader.bool();
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
            sid: isSet(object.sid) ? String(object.sid) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            state: isSet(object.state) ? participantInfo_StateFromJSON(object.state) : 0,
            tracks: Array.isArray(object === null || object === void 0 ? void 0 : object.tracks) ? object.tracks.map((e) => exports.TrackInfo.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            joinedAt: isSet(object.joinedAt) ? Number(object.joinedAt) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? Number(object.version) : 0,
            permission: isSet(object.permission) ? exports.ParticipantPermission.fromJSON(object.permission) : undefined,
            region: isSet(object.region) ? String(object.region) : "",
            isPublisher: isSet(object.isPublisher) ? Boolean(object.isPublisher) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sid !== undefined && (obj.sid = message.sid);
        message.identity !== undefined && (obj.identity = message.identity);
        message.state !== undefined && (obj.state = participantInfo_StateToJSON(message.state));
        if (message.tracks) {
            obj.tracks = message.tracks.map((e) => e ? exports.TrackInfo.toJSON(e) : undefined);
        }
        else {
            obj.tracks = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.joinedAt !== undefined && (obj.joinedAt = Math.round(message.joinedAt));
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = Math.round(message.version));
        message.permission !== undefined &&
            (obj.permission = message.permission ? exports.ParticipantPermission.toJSON(message.permission) : undefined);
        message.region !== undefined && (obj.region = message.region);
        message.isPublisher !== undefined && (obj.isPublisher = message.isPublisher);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseParticipantInfo();
        message.sid = (_a = object.sid) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        message.tracks = ((_d = object.tracks) === null || _d === void 0 ? void 0 : _d.map((e) => exports.TrackInfo.fromPartial(e))) || [];
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : "";
        message.joinedAt = (_f = object.joinedAt) !== null && _f !== void 0 ? _f : 0;
        message.name = (_g = object.name) !== null && _g !== void 0 ? _g : "";
        message.version = (_h = object.version) !== null && _h !== void 0 ? _h : 0;
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.ParticipantPermission.fromPartial(object.permission)
            : undefined;
        message.region = (_j = object.region) !== null && _j !== void 0 ? _j : "";
        message.isPublisher = (_k = object.isPublisher) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
function createBaseEncryption() {
    return {};
}
exports.Encryption = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncryption();
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
        const message = createBaseEncryption();
        return message;
    },
};
function createBaseSimulcastCodecInfo() {
    return { mimeType: "", mid: "", cid: "", layers: [] };
}
exports.SimulcastCodecInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.mimeType !== "") {
            writer.uint32(10).string(message.mimeType);
        }
        if (message.mid !== "") {
            writer.uint32(18).string(message.mid);
        }
        if (message.cid !== "") {
            writer.uint32(26).string(message.cid);
        }
        for (const v of message.layers) {
            exports.VideoLayer.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulcastCodecInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimeType = reader.string();
                    break;
                case 2:
                    message.mid = reader.string();
                    break;
                case 3:
                    message.cid = reader.string();
                    break;
                case 4:
                    message.layers.push(exports.VideoLayer.decode(reader, reader.uint32()));
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
            mid: isSet(object.mid) ? String(object.mid) : "",
            cid: isSet(object.cid) ? String(object.cid) : "",
            layers: Array.isArray(object === null || object === void 0 ? void 0 : object.layers) ? object.layers.map((e) => exports.VideoLayer.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.mid !== undefined && (obj.mid = message.mid);
        message.cid !== undefined && (obj.cid = message.cid);
        if (message.layers) {
            obj.layers = message.layers.map((e) => e ? exports.VideoLayer.toJSON(e) : undefined);
        }
        else {
            obj.layers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSimulcastCodecInfo();
        message.mimeType = (_a = object.mimeType) !== null && _a !== void 0 ? _a : "";
        message.mid = (_b = object.mid) !== null && _b !== void 0 ? _b : "";
        message.cid = (_c = object.cid) !== null && _c !== void 0 ? _c : "";
        message.layers = ((_d = object.layers) === null || _d === void 0 ? void 0 : _d.map((e) => exports.VideoLayer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTrackInfo() {
    return {
        sid: "",
        type: 0,
        name: "",
        muted: false,
        width: 0,
        height: 0,
        simulcast: false,
        disableDtx: false,
        source: 0,
        layers: [],
        mimeType: "",
        mid: "",
        codecs: [],
        stereo: false,
        disableRed: false,
        encryption: 0,
        stream: "",
    };
}
exports.TrackInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.muted === true) {
            writer.uint32(32).bool(message.muted);
        }
        if (message.width !== 0) {
            writer.uint32(40).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(48).uint32(message.height);
        }
        if (message.simulcast === true) {
            writer.uint32(56).bool(message.simulcast);
        }
        if (message.disableDtx === true) {
            writer.uint32(64).bool(message.disableDtx);
        }
        if (message.source !== 0) {
            writer.uint32(72).int32(message.source);
        }
        for (const v of message.layers) {
            exports.VideoLayer.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.mimeType !== "") {
            writer.uint32(90).string(message.mimeType);
        }
        if (message.mid !== "") {
            writer.uint32(98).string(message.mid);
        }
        for (const v of message.codecs) {
            exports.SimulcastCodecInfo.encode(v, writer.uint32(106).fork()).ldelim();
        }
        if (message.stereo === true) {
            writer.uint32(112).bool(message.stereo);
        }
        if (message.disableRed === true) {
            writer.uint32(120).bool(message.disableRed);
        }
        if (message.encryption !== 0) {
            writer.uint32(128).int32(message.encryption);
        }
        if (message.stream !== "") {
            writer.uint32(138).string(message.stream);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrackInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.muted = reader.bool();
                    break;
                case 5:
                    message.width = reader.uint32();
                    break;
                case 6:
                    message.height = reader.uint32();
                    break;
                case 7:
                    message.simulcast = reader.bool();
                    break;
                case 8:
                    message.disableDtx = reader.bool();
                    break;
                case 9:
                    message.source = reader.int32();
                    break;
                case 10:
                    message.layers.push(exports.VideoLayer.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.mimeType = reader.string();
                    break;
                case 12:
                    message.mid = reader.string();
                    break;
                case 13:
                    message.codecs.push(exports.SimulcastCodecInfo.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.stereo = reader.bool();
                    break;
                case 15:
                    message.disableRed = reader.bool();
                    break;
                case 16:
                    message.encryption = reader.int32();
                    break;
                case 17:
                    message.stream = reader.string();
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
            sid: isSet(object.sid) ? String(object.sid) : "",
            type: isSet(object.type) ? trackTypeFromJSON(object.type) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            muted: isSet(object.muted) ? Boolean(object.muted) : false,
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            simulcast: isSet(object.simulcast) ? Boolean(object.simulcast) : false,
            disableDtx: isSet(object.disableDtx) ? Boolean(object.disableDtx) : false,
            source: isSet(object.source) ? trackSourceFromJSON(object.source) : 0,
            layers: Array.isArray(object === null || object === void 0 ? void 0 : object.layers) ? object.layers.map((e) => exports.VideoLayer.fromJSON(e)) : [],
            mimeType: isSet(object.mimeType) ? String(object.mimeType) : "",
            mid: isSet(object.mid) ? String(object.mid) : "",
            codecs: Array.isArray(object === null || object === void 0 ? void 0 : object.codecs) ? object.codecs.map((e) => exports.SimulcastCodecInfo.fromJSON(e)) : [],
            stereo: isSet(object.stereo) ? Boolean(object.stereo) : false,
            disableRed: isSet(object.disableRed) ? Boolean(object.disableRed) : false,
            encryption: isSet(object.encryption) ? encryption_TypeFromJSON(object.encryption) : 0,
            stream: isSet(object.stream) ? String(object.stream) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sid !== undefined && (obj.sid = message.sid);
        message.type !== undefined && (obj.type = trackTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        message.muted !== undefined && (obj.muted = message.muted);
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.simulcast !== undefined && (obj.simulcast = message.simulcast);
        message.disableDtx !== undefined && (obj.disableDtx = message.disableDtx);
        message.source !== undefined && (obj.source = trackSourceToJSON(message.source));
        if (message.layers) {
            obj.layers = message.layers.map((e) => e ? exports.VideoLayer.toJSON(e) : undefined);
        }
        else {
            obj.layers = [];
        }
        message.mimeType !== undefined && (obj.mimeType = message.mimeType);
        message.mid !== undefined && (obj.mid = message.mid);
        if (message.codecs) {
            obj.codecs = message.codecs.map((e) => e ? exports.SimulcastCodecInfo.toJSON(e) : undefined);
        }
        else {
            obj.codecs = [];
        }
        message.stereo !== undefined && (obj.stereo = message.stereo);
        message.disableRed !== undefined && (obj.disableRed = message.disableRed);
        message.encryption !== undefined && (obj.encryption = encryption_TypeToJSON(message.encryption));
        message.stream !== undefined && (obj.stream = message.stream);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const message = createBaseTrackInfo();
        message.sid = (_a = object.sid) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.muted = (_d = object.muted) !== null && _d !== void 0 ? _d : false;
        message.width = (_e = object.width) !== null && _e !== void 0 ? _e : 0;
        message.height = (_f = object.height) !== null && _f !== void 0 ? _f : 0;
        message.simulcast = (_g = object.simulcast) !== null && _g !== void 0 ? _g : false;
        message.disableDtx = (_h = object.disableDtx) !== null && _h !== void 0 ? _h : false;
        message.source = (_j = object.source) !== null && _j !== void 0 ? _j : 0;
        message.layers = ((_k = object.layers) === null || _k === void 0 ? void 0 : _k.map((e) => exports.VideoLayer.fromPartial(e))) || [];
        message.mimeType = (_l = object.mimeType) !== null && _l !== void 0 ? _l : "";
        message.mid = (_m = object.mid) !== null && _m !== void 0 ? _m : "";
        message.codecs = ((_o = object.codecs) === null || _o === void 0 ? void 0 : _o.map((e) => exports.SimulcastCodecInfo.fromPartial(e))) || [];
        message.stereo = (_p = object.stereo) !== null && _p !== void 0 ? _p : false;
        message.disableRed = (_q = object.disableRed) !== null && _q !== void 0 ? _q : false;
        message.encryption = (_r = object.encryption) !== null && _r !== void 0 ? _r : 0;
        message.stream = (_s = object.stream) !== null && _s !== void 0 ? _s : "";
        return message;
    },
};
function createBaseVideoLayer() {
    return { quality: 0, width: 0, height: 0, bitrate: 0, ssrc: 0 };
}
exports.VideoLayer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.quality !== 0) {
            writer.uint32(8).int32(message.quality);
        }
        if (message.width !== 0) {
            writer.uint32(16).uint32(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint32(message.height);
        }
        if (message.bitrate !== 0) {
            writer.uint32(32).uint32(message.bitrate);
        }
        if (message.ssrc !== 0) {
            writer.uint32(40).uint32(message.ssrc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoLayer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quality = reader.int32();
                    break;
                case 2:
                    message.width = reader.uint32();
                    break;
                case 3:
                    message.height = reader.uint32();
                    break;
                case 4:
                    message.bitrate = reader.uint32();
                    break;
                case 5:
                    message.ssrc = reader.uint32();
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
            quality: isSet(object.quality) ? videoQualityFromJSON(object.quality) : 0,
            width: isSet(object.width) ? Number(object.width) : 0,
            height: isSet(object.height) ? Number(object.height) : 0,
            bitrate: isSet(object.bitrate) ? Number(object.bitrate) : 0,
            ssrc: isSet(object.ssrc) ? Number(object.ssrc) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.quality !== undefined && (obj.quality = videoQualityToJSON(message.quality));
        message.width !== undefined && (obj.width = Math.round(message.width));
        message.height !== undefined && (obj.height = Math.round(message.height));
        message.bitrate !== undefined && (obj.bitrate = Math.round(message.bitrate));
        message.ssrc !== undefined && (obj.ssrc = Math.round(message.ssrc));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseVideoLayer();
        message.quality = (_a = object.quality) !== null && _a !== void 0 ? _a : 0;
        message.width = (_b = object.width) !== null && _b !== void 0 ? _b : 0;
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : 0;
        message.bitrate = (_d = object.bitrate) !== null && _d !== void 0 ? _d : 0;
        message.ssrc = (_e = object.ssrc) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseDataPacket() {
    return { kind: 0, user: undefined, speaker: undefined };
}
exports.DataPacket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        if (message.user !== undefined) {
            exports.UserPacket.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        if (message.speaker !== undefined) {
            exports.ActiveSpeakerUpdate.encode(message.speaker, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.int32();
                    break;
                case 2:
                    message.user = exports.UserPacket.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.speaker = exports.ActiveSpeakerUpdate.decode(reader, reader.uint32());
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
            kind: isSet(object.kind) ? dataPacket_KindFromJSON(object.kind) : 0,
            user: isSet(object.user) ? exports.UserPacket.fromJSON(object.user) : undefined,
            speaker: isSet(object.speaker) ? exports.ActiveSpeakerUpdate.fromJSON(object.speaker) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined && (obj.kind = dataPacket_KindToJSON(message.kind));
        message.user !== undefined && (obj.user = message.user ? exports.UserPacket.toJSON(message.user) : undefined);
        message.speaker !== undefined &&
            (obj.speaker = message.speaker ? exports.ActiveSpeakerUpdate.toJSON(message.speaker) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDataPacket();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : 0;
        message.user = (object.user !== undefined && object.user !== null)
            ? exports.UserPacket.fromPartial(object.user)
            : undefined;
        message.speaker = (object.speaker !== undefined && object.speaker !== null)
            ? exports.ActiveSpeakerUpdate.fromPartial(object.speaker)
            : undefined;
        return message;
    },
};
function createBaseActiveSpeakerUpdate() {
    return { speakers: [] };
}
exports.ActiveSpeakerUpdate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.speakers) {
            exports.SpeakerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveSpeakerUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.speakers.push(exports.SpeakerInfo.decode(reader, reader.uint32()));
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
            speakers: Array.isArray(object === null || object === void 0 ? void 0 : object.speakers) ? object.speakers.map((e) => exports.SpeakerInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.speakers) {
            obj.speakers = message.speakers.map((e) => e ? exports.SpeakerInfo.toJSON(e) : undefined);
        }
        else {
            obj.speakers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActiveSpeakerUpdate();
        message.speakers = ((_a = object.speakers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SpeakerInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSpeakerInfo() {
    return { sid: "", level: 0, active: false };
}
exports.SpeakerInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sid !== "") {
            writer.uint32(10).string(message.sid);
        }
        if (message.level !== 0) {
            writer.uint32(21).float(message.level);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSpeakerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.level = reader.float();
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
            sid: isSet(object.sid) ? String(object.sid) : "",
            level: isSet(object.level) ? Number(object.level) : 0,
            active: isSet(object.active) ? Boolean(object.active) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sid !== undefined && (obj.sid = message.sid);
        message.level !== undefined && (obj.level = message.level);
        message.active !== undefined && (obj.active = message.active);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSpeakerInfo();
        message.sid = (_a = object.sid) !== null && _a !== void 0 ? _a : "";
        message.level = (_b = object.level) !== null && _b !== void 0 ? _b : 0;
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseUserPacket() {
    return {
        participantSid: "",
        participantIdentity: "",
        payload: new Uint8Array(),
        destinationSids: [],
        destinationIdentities: [],
        topic: undefined,
    };
}
exports.UserPacket = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.participantSid !== "") {
            writer.uint32(10).string(message.participantSid);
        }
        if (message.participantIdentity !== "") {
            writer.uint32(42).string(message.participantIdentity);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        for (const v of message.destinationSids) {
            writer.uint32(26).string(v);
        }
        for (const v of message.destinationIdentities) {
            writer.uint32(50).string(v);
        }
        if (message.topic !== undefined) {
            writer.uint32(34).string(message.topic);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participantSid = reader.string();
                    break;
                case 5:
                    message.participantIdentity = reader.string();
                    break;
                case 2:
                    message.payload = reader.bytes();
                    break;
                case 3:
                    message.destinationSids.push(reader.string());
                    break;
                case 6:
                    message.destinationIdentities.push(reader.string());
                    break;
                case 4:
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
            participantSid: isSet(object.participantSid) ? String(object.participantSid) : "",
            participantIdentity: isSet(object.participantIdentity) ? String(object.participantIdentity) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            destinationSids: Array.isArray(object === null || object === void 0 ? void 0 : object.destinationSids) ? object.destinationSids.map((e) => String(e)) : [],
            destinationIdentities: Array.isArray(object === null || object === void 0 ? void 0 : object.destinationIdentities)
                ? object.destinationIdentities.map((e) => String(e))
                : [],
            topic: isSet(object.topic) ? String(object.topic) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.participantSid !== undefined && (obj.participantSid = message.participantSid);
        message.participantIdentity !== undefined && (obj.participantIdentity = message.participantIdentity);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
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
        const message = createBaseUserPacket();
        message.participantSid = (_a = object.participantSid) !== null && _a !== void 0 ? _a : "";
        message.participantIdentity = (_b = object.participantIdentity) !== null && _b !== void 0 ? _b : "";
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.destinationSids = ((_d = object.destinationSids) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.destinationIdentities = ((_e = object.destinationIdentities) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.topic = (_f = object.topic) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseParticipantTracks() {
    return { participantSid: "", trackSids: [] };
}
exports.ParticipantTracks = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.participantSid !== "") {
            writer.uint32(10).string(message.participantSid);
        }
        for (const v of message.trackSids) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParticipantTracks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.participantSid = reader.string();
                    break;
                case 2:
                    message.trackSids.push(reader.string());
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
            participantSid: isSet(object.participantSid) ? String(object.participantSid) : "",
            trackSids: Array.isArray(object === null || object === void 0 ? void 0 : object.trackSids) ? object.trackSids.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.participantSid !== undefined && (obj.participantSid = message.participantSid);
        if (message.trackSids) {
            obj.trackSids = message.trackSids.map((e) => e);
        }
        else {
            obj.trackSids = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParticipantTracks();
        message.participantSid = (_a = object.participantSid) !== null && _a !== void 0 ? _a : "";
        message.trackSids = ((_b = object.trackSids) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseServerInfo() {
    return { edition: 0, version: "", protocol: 0, region: "", nodeId: "", debugInfo: "" };
}
exports.ServerInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.edition !== 0) {
            writer.uint32(8).int32(message.edition);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.protocol !== 0) {
            writer.uint32(24).int32(message.protocol);
        }
        if (message.region !== "") {
            writer.uint32(34).string(message.region);
        }
        if (message.nodeId !== "") {
            writer.uint32(42).string(message.nodeId);
        }
        if (message.debugInfo !== "") {
            writer.uint32(50).string(message.debugInfo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.edition = reader.int32();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.protocol = reader.int32();
                    break;
                case 4:
                    message.region = reader.string();
                    break;
                case 5:
                    message.nodeId = reader.string();
                    break;
                case 6:
                    message.debugInfo = reader.string();
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
            edition: isSet(object.edition) ? serverInfo_EditionFromJSON(object.edition) : 0,
            version: isSet(object.version) ? String(object.version) : "",
            protocol: isSet(object.protocol) ? Number(object.protocol) : 0,
            region: isSet(object.region) ? String(object.region) : "",
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            debugInfo: isSet(object.debugInfo) ? String(object.debugInfo) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.edition !== undefined && (obj.edition = serverInfo_EditionToJSON(message.edition));
        message.version !== undefined && (obj.version = message.version);
        message.protocol !== undefined && (obj.protocol = Math.round(message.protocol));
        message.region !== undefined && (obj.region = message.region);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.debugInfo !== undefined && (obj.debugInfo = message.debugInfo);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseServerInfo();
        message.edition = (_a = object.edition) !== null && _a !== void 0 ? _a : 0;
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.protocol = (_c = object.protocol) !== null && _c !== void 0 ? _c : 0;
        message.region = (_d = object.region) !== null && _d !== void 0 ? _d : "";
        message.nodeId = (_e = object.nodeId) !== null && _e !== void 0 ? _e : "";
        message.debugInfo = (_f = object.debugInfo) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseClientInfo() {
    return {
        sdk: 0,
        version: "",
        protocol: 0,
        os: "",
        osVersion: "",
        deviceModel: "",
        browser: "",
        browserVersion: "",
        address: "",
        network: "",
    };
}
exports.ClientInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sdk !== 0) {
            writer.uint32(8).int32(message.sdk);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.protocol !== 0) {
            writer.uint32(24).int32(message.protocol);
        }
        if (message.os !== "") {
            writer.uint32(34).string(message.os);
        }
        if (message.osVersion !== "") {
            writer.uint32(42).string(message.osVersion);
        }
        if (message.deviceModel !== "") {
            writer.uint32(50).string(message.deviceModel);
        }
        if (message.browser !== "") {
            writer.uint32(58).string(message.browser);
        }
        if (message.browserVersion !== "") {
            writer.uint32(66).string(message.browserVersion);
        }
        if (message.address !== "") {
            writer.uint32(74).string(message.address);
        }
        if (message.network !== "") {
            writer.uint32(82).string(message.network);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sdk = reader.int32();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.protocol = reader.int32();
                    break;
                case 4:
                    message.os = reader.string();
                    break;
                case 5:
                    message.osVersion = reader.string();
                    break;
                case 6:
                    message.deviceModel = reader.string();
                    break;
                case 7:
                    message.browser = reader.string();
                    break;
                case 8:
                    message.browserVersion = reader.string();
                    break;
                case 9:
                    message.address = reader.string();
                    break;
                case 10:
                    message.network = reader.string();
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
            sdk: isSet(object.sdk) ? clientInfo_SDKFromJSON(object.sdk) : 0,
            version: isSet(object.version) ? String(object.version) : "",
            protocol: isSet(object.protocol) ? Number(object.protocol) : 0,
            os: isSet(object.os) ? String(object.os) : "",
            osVersion: isSet(object.osVersion) ? String(object.osVersion) : "",
            deviceModel: isSet(object.deviceModel) ? String(object.deviceModel) : "",
            browser: isSet(object.browser) ? String(object.browser) : "",
            browserVersion: isSet(object.browserVersion) ? String(object.browserVersion) : "",
            address: isSet(object.address) ? String(object.address) : "",
            network: isSet(object.network) ? String(object.network) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sdk !== undefined && (obj.sdk = clientInfo_SDKToJSON(message.sdk));
        message.version !== undefined && (obj.version = message.version);
        message.protocol !== undefined && (obj.protocol = Math.round(message.protocol));
        message.os !== undefined && (obj.os = message.os);
        message.osVersion !== undefined && (obj.osVersion = message.osVersion);
        message.deviceModel !== undefined && (obj.deviceModel = message.deviceModel);
        message.browser !== undefined && (obj.browser = message.browser);
        message.browserVersion !== undefined && (obj.browserVersion = message.browserVersion);
        message.address !== undefined && (obj.address = message.address);
        message.network !== undefined && (obj.network = message.network);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = createBaseClientInfo();
        message.sdk = (_a = object.sdk) !== null && _a !== void 0 ? _a : 0;
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.protocol = (_c = object.protocol) !== null && _c !== void 0 ? _c : 0;
        message.os = (_d = object.os) !== null && _d !== void 0 ? _d : "";
        message.osVersion = (_e = object.osVersion) !== null && _e !== void 0 ? _e : "";
        message.deviceModel = (_f = object.deviceModel) !== null && _f !== void 0 ? _f : "";
        message.browser = (_g = object.browser) !== null && _g !== void 0 ? _g : "";
        message.browserVersion = (_h = object.browserVersion) !== null && _h !== void 0 ? _h : "";
        message.address = (_j = object.address) !== null && _j !== void 0 ? _j : "";
        message.network = (_k = object.network) !== null && _k !== void 0 ? _k : "";
        return message;
    },
};
function createBaseClientConfiguration() {
    return { video: undefined, screen: undefined, resumeConnection: 0, disabledCodecs: undefined, forceRelay: 0 };
}
exports.ClientConfiguration = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.video !== undefined) {
            exports.VideoConfiguration.encode(message.video, writer.uint32(10).fork()).ldelim();
        }
        if (message.screen !== undefined) {
            exports.VideoConfiguration.encode(message.screen, writer.uint32(18).fork()).ldelim();
        }
        if (message.resumeConnection !== 0) {
            writer.uint32(24).int32(message.resumeConnection);
        }
        if (message.disabledCodecs !== undefined) {
            exports.DisabledCodecs.encode(message.disabledCodecs, writer.uint32(34).fork()).ldelim();
        }
        if (message.forceRelay !== 0) {
            writer.uint32(40).int32(message.forceRelay);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.video = exports.VideoConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.screen = exports.VideoConfiguration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resumeConnection = reader.int32();
                    break;
                case 4:
                    message.disabledCodecs = exports.DisabledCodecs.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.forceRelay = reader.int32();
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
            video: isSet(object.video) ? exports.VideoConfiguration.fromJSON(object.video) : undefined,
            screen: isSet(object.screen) ? exports.VideoConfiguration.fromJSON(object.screen) : undefined,
            resumeConnection: isSet(object.resumeConnection) ? clientConfigSettingFromJSON(object.resumeConnection) : 0,
            disabledCodecs: isSet(object.disabledCodecs) ? exports.DisabledCodecs.fromJSON(object.disabledCodecs) : undefined,
            forceRelay: isSet(object.forceRelay) ? clientConfigSettingFromJSON(object.forceRelay) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.video !== undefined && (obj.video = message.video ? exports.VideoConfiguration.toJSON(message.video) : undefined);
        message.screen !== undefined &&
            (obj.screen = message.screen ? exports.VideoConfiguration.toJSON(message.screen) : undefined);
        message.resumeConnection !== undefined &&
            (obj.resumeConnection = clientConfigSettingToJSON(message.resumeConnection));
        message.disabledCodecs !== undefined &&
            (obj.disabledCodecs = message.disabledCodecs ? exports.DisabledCodecs.toJSON(message.disabledCodecs) : undefined);
        message.forceRelay !== undefined && (obj.forceRelay = clientConfigSettingToJSON(message.forceRelay));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseClientConfiguration();
        message.video = (object.video !== undefined && object.video !== null)
            ? exports.VideoConfiguration.fromPartial(object.video)
            : undefined;
        message.screen = (object.screen !== undefined && object.screen !== null)
            ? exports.VideoConfiguration.fromPartial(object.screen)
            : undefined;
        message.resumeConnection = (_a = object.resumeConnection) !== null && _a !== void 0 ? _a : 0;
        message.disabledCodecs = (object.disabledCodecs !== undefined && object.disabledCodecs !== null)
            ? exports.DisabledCodecs.fromPartial(object.disabledCodecs)
            : undefined;
        message.forceRelay = (_b = object.forceRelay) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseVideoConfiguration() {
    return { hardwareEncoder: 0 };
}
exports.VideoConfiguration = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hardwareEncoder !== 0) {
            writer.uint32(8).int32(message.hardwareEncoder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hardwareEncoder = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { hardwareEncoder: isSet(object.hardwareEncoder) ? clientConfigSettingFromJSON(object.hardwareEncoder) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.hardwareEncoder !== undefined && (obj.hardwareEncoder = clientConfigSettingToJSON(message.hardwareEncoder));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVideoConfiguration();
        message.hardwareEncoder = (_a = object.hardwareEncoder) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseDisabledCodecs() {
    return { codecs: [], publish: [] };
}
exports.DisabledCodecs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.codecs) {
            exports.Codec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.publish) {
            exports.Codec.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisabledCodecs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codecs.push(exports.Codec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.publish.push(exports.Codec.decode(reader, reader.uint32()));
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
            codecs: Array.isArray(object === null || object === void 0 ? void 0 : object.codecs) ? object.codecs.map((e) => exports.Codec.fromJSON(e)) : [],
            publish: Array.isArray(object === null || object === void 0 ? void 0 : object.publish) ? object.publish.map((e) => exports.Codec.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codecs) {
            obj.codecs = message.codecs.map((e) => e ? exports.Codec.toJSON(e) : undefined);
        }
        else {
            obj.codecs = [];
        }
        if (message.publish) {
            obj.publish = message.publish.map((e) => e ? exports.Codec.toJSON(e) : undefined);
        }
        else {
            obj.publish = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDisabledCodecs();
        message.codecs = ((_a = object.codecs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Codec.fromPartial(e))) || [];
        message.publish = ((_b = object.publish) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Codec.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRTPDrift() {
    return {
        startTime: undefined,
        endTime: undefined,
        duration: 0,
        startTimestamp: 0,
        endTimestamp: 0,
        rtpClockTicks: 0,
        driftSamples: 0,
        driftMs: 0,
        clockRate: 0,
    };
}
exports.RTPDrift = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== 0) {
            writer.uint32(25).double(message.duration);
        }
        if (message.startTimestamp !== 0) {
            writer.uint32(32).uint64(message.startTimestamp);
        }
        if (message.endTimestamp !== 0) {
            writer.uint32(40).uint64(message.endTimestamp);
        }
        if (message.rtpClockTicks !== 0) {
            writer.uint32(48).uint64(message.rtpClockTicks);
        }
        if (message.driftSamples !== 0) {
            writer.uint32(56).int64(message.driftSamples);
        }
        if (message.driftMs !== 0) {
            writer.uint32(65).double(message.driftMs);
        }
        if (message.clockRate !== 0) {
            writer.uint32(73).double(message.clockRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRTPDrift();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = reader.double();
                    break;
                case 4:
                    message.startTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.endTimestamp = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.rtpClockTicks = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.driftSamples = longToNumber(reader.int64());
                    break;
                case 8:
                    message.driftMs = reader.double();
                    break;
                case 9:
                    message.clockRate = reader.double();
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
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            startTimestamp: isSet(object.startTimestamp) ? Number(object.startTimestamp) : 0,
            endTimestamp: isSet(object.endTimestamp) ? Number(object.endTimestamp) : 0,
            rtpClockTicks: isSet(object.rtpClockTicks) ? Number(object.rtpClockTicks) : 0,
            driftSamples: isSet(object.driftSamples) ? Number(object.driftSamples) : 0,
            driftMs: isSet(object.driftMs) ? Number(object.driftMs) : 0,
            clockRate: isSet(object.clockRate) ? Number(object.clockRate) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        message.duration !== undefined && (obj.duration = message.duration);
        message.startTimestamp !== undefined && (obj.startTimestamp = Math.round(message.startTimestamp));
        message.endTimestamp !== undefined && (obj.endTimestamp = Math.round(message.endTimestamp));
        message.rtpClockTicks !== undefined && (obj.rtpClockTicks = Math.round(message.rtpClockTicks));
        message.driftSamples !== undefined && (obj.driftSamples = Math.round(message.driftSamples));
        message.driftMs !== undefined && (obj.driftMs = message.driftMs);
        message.clockRate !== undefined && (obj.clockRate = message.clockRate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseRTPDrift();
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : undefined;
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : undefined;
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : 0;
        message.startTimestamp = (_d = object.startTimestamp) !== null && _d !== void 0 ? _d : 0;
        message.endTimestamp = (_e = object.endTimestamp) !== null && _e !== void 0 ? _e : 0;
        message.rtpClockTicks = (_f = object.rtpClockTicks) !== null && _f !== void 0 ? _f : 0;
        message.driftSamples = (_g = object.driftSamples) !== null && _g !== void 0 ? _g : 0;
        message.driftMs = (_h = object.driftMs) !== null && _h !== void 0 ? _h : 0;
        message.clockRate = (_j = object.clockRate) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseRTPStats() {
    return {
        startTime: undefined,
        endTime: undefined,
        duration: 0,
        packets: 0,
        packetRate: 0,
        bytes: 0,
        headerBytes: 0,
        bitrate: 0,
        packetsLost: 0,
        packetLossRate: 0,
        packetLossPercentage: 0,
        packetsDuplicate: 0,
        packetDuplicateRate: 0,
        bytesDuplicate: 0,
        headerBytesDuplicate: 0,
        bitrateDuplicate: 0,
        packetsPadding: 0,
        packetPaddingRate: 0,
        bytesPadding: 0,
        headerBytesPadding: 0,
        bitratePadding: 0,
        packetsOutOfOrder: 0,
        frames: 0,
        frameRate: 0,
        jitterCurrent: 0,
        jitterMax: 0,
        gapHistogram: {},
        nacks: 0,
        nackAcks: 0,
        nackMisses: 0,
        nackRepeated: 0,
        plis: 0,
        lastPli: undefined,
        firs: 0,
        lastFir: undefined,
        rttCurrent: 0,
        rttMax: 0,
        keyFrames: 0,
        lastKeyFrame: undefined,
        layerLockPlis: 0,
        lastLayerLockPli: undefined,
        packetDrift: undefined,
        reportDrift: undefined,
    };
}
exports.RTPStats = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== 0) {
            writer.uint32(25).double(message.duration);
        }
        if (message.packets !== 0) {
            writer.uint32(32).uint32(message.packets);
        }
        if (message.packetRate !== 0) {
            writer.uint32(41).double(message.packetRate);
        }
        if (message.bytes !== 0) {
            writer.uint32(48).uint64(message.bytes);
        }
        if (message.headerBytes !== 0) {
            writer.uint32(312).uint64(message.headerBytes);
        }
        if (message.bitrate !== 0) {
            writer.uint32(57).double(message.bitrate);
        }
        if (message.packetsLost !== 0) {
            writer.uint32(64).uint32(message.packetsLost);
        }
        if (message.packetLossRate !== 0) {
            writer.uint32(73).double(message.packetLossRate);
        }
        if (message.packetLossPercentage !== 0) {
            writer.uint32(85).float(message.packetLossPercentage);
        }
        if (message.packetsDuplicate !== 0) {
            writer.uint32(88).uint32(message.packetsDuplicate);
        }
        if (message.packetDuplicateRate !== 0) {
            writer.uint32(97).double(message.packetDuplicateRate);
        }
        if (message.bytesDuplicate !== 0) {
            writer.uint32(104).uint64(message.bytesDuplicate);
        }
        if (message.headerBytesDuplicate !== 0) {
            writer.uint32(320).uint64(message.headerBytesDuplicate);
        }
        if (message.bitrateDuplicate !== 0) {
            writer.uint32(113).double(message.bitrateDuplicate);
        }
        if (message.packetsPadding !== 0) {
            writer.uint32(120).uint32(message.packetsPadding);
        }
        if (message.packetPaddingRate !== 0) {
            writer.uint32(129).double(message.packetPaddingRate);
        }
        if (message.bytesPadding !== 0) {
            writer.uint32(136).uint64(message.bytesPadding);
        }
        if (message.headerBytesPadding !== 0) {
            writer.uint32(328).uint64(message.headerBytesPadding);
        }
        if (message.bitratePadding !== 0) {
            writer.uint32(145).double(message.bitratePadding);
        }
        if (message.packetsOutOfOrder !== 0) {
            writer.uint32(152).uint32(message.packetsOutOfOrder);
        }
        if (message.frames !== 0) {
            writer.uint32(160).uint32(message.frames);
        }
        if (message.frameRate !== 0) {
            writer.uint32(169).double(message.frameRate);
        }
        if (message.jitterCurrent !== 0) {
            writer.uint32(177).double(message.jitterCurrent);
        }
        if (message.jitterMax !== 0) {
            writer.uint32(185).double(message.jitterMax);
        }
        Object.entries(message.gapHistogram).forEach(([key, value]) => {
            exports.RTPStats_GapHistogramEntry.encode({ key: key, value }, writer.uint32(194).fork()).ldelim();
        });
        if (message.nacks !== 0) {
            writer.uint32(200).uint32(message.nacks);
        }
        if (message.nackAcks !== 0) {
            writer.uint32(296).uint32(message.nackAcks);
        }
        if (message.nackMisses !== 0) {
            writer.uint32(208).uint32(message.nackMisses);
        }
        if (message.nackRepeated !== 0) {
            writer.uint32(304).uint32(message.nackRepeated);
        }
        if (message.plis !== 0) {
            writer.uint32(216).uint32(message.plis);
        }
        if (message.lastPli !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastPli), writer.uint32(226).fork()).ldelim();
        }
        if (message.firs !== 0) {
            writer.uint32(232).uint32(message.firs);
        }
        if (message.lastFir !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastFir), writer.uint32(242).fork()).ldelim();
        }
        if (message.rttCurrent !== 0) {
            writer.uint32(248).uint32(message.rttCurrent);
        }
        if (message.rttMax !== 0) {
            writer.uint32(256).uint32(message.rttMax);
        }
        if (message.keyFrames !== 0) {
            writer.uint32(264).uint32(message.keyFrames);
        }
        if (message.lastKeyFrame !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastKeyFrame), writer.uint32(274).fork()).ldelim();
        }
        if (message.layerLockPlis !== 0) {
            writer.uint32(280).uint32(message.layerLockPlis);
        }
        if (message.lastLayerLockPli !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastLayerLockPli), writer.uint32(290).fork()).ldelim();
        }
        if (message.packetDrift !== undefined) {
            exports.RTPDrift.encode(message.packetDrift, writer.uint32(354).fork()).ldelim();
        }
        if (message.reportDrift !== undefined) {
            exports.RTPDrift.encode(message.reportDrift, writer.uint32(362).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRTPStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = reader.double();
                    break;
                case 4:
                    message.packets = reader.uint32();
                    break;
                case 5:
                    message.packetRate = reader.double();
                    break;
                case 6:
                    message.bytes = longToNumber(reader.uint64());
                    break;
                case 39:
                    message.headerBytes = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.bitrate = reader.double();
                    break;
                case 8:
                    message.packetsLost = reader.uint32();
                    break;
                case 9:
                    message.packetLossRate = reader.double();
                    break;
                case 10:
                    message.packetLossPercentage = reader.float();
                    break;
                case 11:
                    message.packetsDuplicate = reader.uint32();
                    break;
                case 12:
                    message.packetDuplicateRate = reader.double();
                    break;
                case 13:
                    message.bytesDuplicate = longToNumber(reader.uint64());
                    break;
                case 40:
                    message.headerBytesDuplicate = longToNumber(reader.uint64());
                    break;
                case 14:
                    message.bitrateDuplicate = reader.double();
                    break;
                case 15:
                    message.packetsPadding = reader.uint32();
                    break;
                case 16:
                    message.packetPaddingRate = reader.double();
                    break;
                case 17:
                    message.bytesPadding = longToNumber(reader.uint64());
                    break;
                case 41:
                    message.headerBytesPadding = longToNumber(reader.uint64());
                    break;
                case 18:
                    message.bitratePadding = reader.double();
                    break;
                case 19:
                    message.packetsOutOfOrder = reader.uint32();
                    break;
                case 20:
                    message.frames = reader.uint32();
                    break;
                case 21:
                    message.frameRate = reader.double();
                    break;
                case 22:
                    message.jitterCurrent = reader.double();
                    break;
                case 23:
                    message.jitterMax = reader.double();
                    break;
                case 24:
                    const entry24 = exports.RTPStats_GapHistogramEntry.decode(reader, reader.uint32());
                    if (entry24.value !== undefined) {
                        message.gapHistogram[entry24.key] = entry24.value;
                    }
                    break;
                case 25:
                    message.nacks = reader.uint32();
                    break;
                case 37:
                    message.nackAcks = reader.uint32();
                    break;
                case 26:
                    message.nackMisses = reader.uint32();
                    break;
                case 38:
                    message.nackRepeated = reader.uint32();
                    break;
                case 27:
                    message.plis = reader.uint32();
                    break;
                case 28:
                    message.lastPli = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 29:
                    message.firs = reader.uint32();
                    break;
                case 30:
                    message.lastFir = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 31:
                    message.rttCurrent = reader.uint32();
                    break;
                case 32:
                    message.rttMax = reader.uint32();
                    break;
                case 33:
                    message.keyFrames = reader.uint32();
                    break;
                case 34:
                    message.lastKeyFrame = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 35:
                    message.layerLockPlis = reader.uint32();
                    break;
                case 36:
                    message.lastLayerLockPli = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 44:
                    message.packetDrift = exports.RTPDrift.decode(reader, reader.uint32());
                    break;
                case 45:
                    message.reportDrift = exports.RTPDrift.decode(reader, reader.uint32());
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
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
            duration: isSet(object.duration) ? Number(object.duration) : 0,
            packets: isSet(object.packets) ? Number(object.packets) : 0,
            packetRate: isSet(object.packetRate) ? Number(object.packetRate) : 0,
            bytes: isSet(object.bytes) ? Number(object.bytes) : 0,
            headerBytes: isSet(object.headerBytes) ? Number(object.headerBytes) : 0,
            bitrate: isSet(object.bitrate) ? Number(object.bitrate) : 0,
            packetsLost: isSet(object.packetsLost) ? Number(object.packetsLost) : 0,
            packetLossRate: isSet(object.packetLossRate) ? Number(object.packetLossRate) : 0,
            packetLossPercentage: isSet(object.packetLossPercentage) ? Number(object.packetLossPercentage) : 0,
            packetsDuplicate: isSet(object.packetsDuplicate) ? Number(object.packetsDuplicate) : 0,
            packetDuplicateRate: isSet(object.packetDuplicateRate) ? Number(object.packetDuplicateRate) : 0,
            bytesDuplicate: isSet(object.bytesDuplicate) ? Number(object.bytesDuplicate) : 0,
            headerBytesDuplicate: isSet(object.headerBytesDuplicate) ? Number(object.headerBytesDuplicate) : 0,
            bitrateDuplicate: isSet(object.bitrateDuplicate) ? Number(object.bitrateDuplicate) : 0,
            packetsPadding: isSet(object.packetsPadding) ? Number(object.packetsPadding) : 0,
            packetPaddingRate: isSet(object.packetPaddingRate) ? Number(object.packetPaddingRate) : 0,
            bytesPadding: isSet(object.bytesPadding) ? Number(object.bytesPadding) : 0,
            headerBytesPadding: isSet(object.headerBytesPadding) ? Number(object.headerBytesPadding) : 0,
            bitratePadding: isSet(object.bitratePadding) ? Number(object.bitratePadding) : 0,
            packetsOutOfOrder: isSet(object.packetsOutOfOrder) ? Number(object.packetsOutOfOrder) : 0,
            frames: isSet(object.frames) ? Number(object.frames) : 0,
            frameRate: isSet(object.frameRate) ? Number(object.frameRate) : 0,
            jitterCurrent: isSet(object.jitterCurrent) ? Number(object.jitterCurrent) : 0,
            jitterMax: isSet(object.jitterMax) ? Number(object.jitterMax) : 0,
            gapHistogram: isObject(object.gapHistogram)
                ? Object.entries(object.gapHistogram).reduce((acc, [key, value]) => {
                    acc[Number(key)] = Number(value);
                    return acc;
                }, {})
                : {},
            nacks: isSet(object.nacks) ? Number(object.nacks) : 0,
            nackAcks: isSet(object.nackAcks) ? Number(object.nackAcks) : 0,
            nackMisses: isSet(object.nackMisses) ? Number(object.nackMisses) : 0,
            nackRepeated: isSet(object.nackRepeated) ? Number(object.nackRepeated) : 0,
            plis: isSet(object.plis) ? Number(object.plis) : 0,
            lastPli: isSet(object.lastPli) ? fromJsonTimestamp(object.lastPli) : undefined,
            firs: isSet(object.firs) ? Number(object.firs) : 0,
            lastFir: isSet(object.lastFir) ? fromJsonTimestamp(object.lastFir) : undefined,
            rttCurrent: isSet(object.rttCurrent) ? Number(object.rttCurrent) : 0,
            rttMax: isSet(object.rttMax) ? Number(object.rttMax) : 0,
            keyFrames: isSet(object.keyFrames) ? Number(object.keyFrames) : 0,
            lastKeyFrame: isSet(object.lastKeyFrame) ? fromJsonTimestamp(object.lastKeyFrame) : undefined,
            layerLockPlis: isSet(object.layerLockPlis) ? Number(object.layerLockPlis) : 0,
            lastLayerLockPli: isSet(object.lastLayerLockPli) ? fromJsonTimestamp(object.lastLayerLockPli) : undefined,
            packetDrift: isSet(object.packetDrift) ? exports.RTPDrift.fromJSON(object.packetDrift) : undefined,
            reportDrift: isSet(object.reportDrift) ? exports.RTPDrift.fromJSON(object.reportDrift) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
        message.duration !== undefined && (obj.duration = message.duration);
        message.packets !== undefined && (obj.packets = Math.round(message.packets));
        message.packetRate !== undefined && (obj.packetRate = message.packetRate);
        message.bytes !== undefined && (obj.bytes = Math.round(message.bytes));
        message.headerBytes !== undefined && (obj.headerBytes = Math.round(message.headerBytes));
        message.bitrate !== undefined && (obj.bitrate = message.bitrate);
        message.packetsLost !== undefined && (obj.packetsLost = Math.round(message.packetsLost));
        message.packetLossRate !== undefined && (obj.packetLossRate = message.packetLossRate);
        message.packetLossPercentage !== undefined && (obj.packetLossPercentage = message.packetLossPercentage);
        message.packetsDuplicate !== undefined && (obj.packetsDuplicate = Math.round(message.packetsDuplicate));
        message.packetDuplicateRate !== undefined && (obj.packetDuplicateRate = message.packetDuplicateRate);
        message.bytesDuplicate !== undefined && (obj.bytesDuplicate = Math.round(message.bytesDuplicate));
        message.headerBytesDuplicate !== undefined && (obj.headerBytesDuplicate = Math.round(message.headerBytesDuplicate));
        message.bitrateDuplicate !== undefined && (obj.bitrateDuplicate = message.bitrateDuplicate);
        message.packetsPadding !== undefined && (obj.packetsPadding = Math.round(message.packetsPadding));
        message.packetPaddingRate !== undefined && (obj.packetPaddingRate = message.packetPaddingRate);
        message.bytesPadding !== undefined && (obj.bytesPadding = Math.round(message.bytesPadding));
        message.headerBytesPadding !== undefined && (obj.headerBytesPadding = Math.round(message.headerBytesPadding));
        message.bitratePadding !== undefined && (obj.bitratePadding = message.bitratePadding);
        message.packetsOutOfOrder !== undefined && (obj.packetsOutOfOrder = Math.round(message.packetsOutOfOrder));
        message.frames !== undefined && (obj.frames = Math.round(message.frames));
        message.frameRate !== undefined && (obj.frameRate = message.frameRate);
        message.jitterCurrent !== undefined && (obj.jitterCurrent = message.jitterCurrent);
        message.jitterMax !== undefined && (obj.jitterMax = message.jitterMax);
        obj.gapHistogram = {};
        if (message.gapHistogram) {
            Object.entries(message.gapHistogram).forEach(([k, v]) => {
                obj.gapHistogram[k] = Math.round(v);
            });
        }
        message.nacks !== undefined && (obj.nacks = Math.round(message.nacks));
        message.nackAcks !== undefined && (obj.nackAcks = Math.round(message.nackAcks));
        message.nackMisses !== undefined && (obj.nackMisses = Math.round(message.nackMisses));
        message.nackRepeated !== undefined && (obj.nackRepeated = Math.round(message.nackRepeated));
        message.plis !== undefined && (obj.plis = Math.round(message.plis));
        message.lastPli !== undefined && (obj.lastPli = message.lastPli.toISOString());
        message.firs !== undefined && (obj.firs = Math.round(message.firs));
        message.lastFir !== undefined && (obj.lastFir = message.lastFir.toISOString());
        message.rttCurrent !== undefined && (obj.rttCurrent = Math.round(message.rttCurrent));
        message.rttMax !== undefined && (obj.rttMax = Math.round(message.rttMax));
        message.keyFrames !== undefined && (obj.keyFrames = Math.round(message.keyFrames));
        message.lastKeyFrame !== undefined && (obj.lastKeyFrame = message.lastKeyFrame.toISOString());
        message.layerLockPlis !== undefined && (obj.layerLockPlis = Math.round(message.layerLockPlis));
        message.lastLayerLockPli !== undefined && (obj.lastLayerLockPli = message.lastLayerLockPli.toISOString());
        message.packetDrift !== undefined &&
            (obj.packetDrift = message.packetDrift ? exports.RTPDrift.toJSON(message.packetDrift) : undefined);
        message.reportDrift !== undefined &&
            (obj.reportDrift = message.reportDrift ? exports.RTPDrift.toJSON(message.reportDrift) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16;
        const message = createBaseRTPStats();
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : undefined;
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : undefined;
        message.duration = (_c = object.duration) !== null && _c !== void 0 ? _c : 0;
        message.packets = (_d = object.packets) !== null && _d !== void 0 ? _d : 0;
        message.packetRate = (_e = object.packetRate) !== null && _e !== void 0 ? _e : 0;
        message.bytes = (_f = object.bytes) !== null && _f !== void 0 ? _f : 0;
        message.headerBytes = (_g = object.headerBytes) !== null && _g !== void 0 ? _g : 0;
        message.bitrate = (_h = object.bitrate) !== null && _h !== void 0 ? _h : 0;
        message.packetsLost = (_j = object.packetsLost) !== null && _j !== void 0 ? _j : 0;
        message.packetLossRate = (_k = object.packetLossRate) !== null && _k !== void 0 ? _k : 0;
        message.packetLossPercentage = (_l = object.packetLossPercentage) !== null && _l !== void 0 ? _l : 0;
        message.packetsDuplicate = (_m = object.packetsDuplicate) !== null && _m !== void 0 ? _m : 0;
        message.packetDuplicateRate = (_o = object.packetDuplicateRate) !== null && _o !== void 0 ? _o : 0;
        message.bytesDuplicate = (_p = object.bytesDuplicate) !== null && _p !== void 0 ? _p : 0;
        message.headerBytesDuplicate = (_q = object.headerBytesDuplicate) !== null && _q !== void 0 ? _q : 0;
        message.bitrateDuplicate = (_r = object.bitrateDuplicate) !== null && _r !== void 0 ? _r : 0;
        message.packetsPadding = (_s = object.packetsPadding) !== null && _s !== void 0 ? _s : 0;
        message.packetPaddingRate = (_t = object.packetPaddingRate) !== null && _t !== void 0 ? _t : 0;
        message.bytesPadding = (_u = object.bytesPadding) !== null && _u !== void 0 ? _u : 0;
        message.headerBytesPadding = (_v = object.headerBytesPadding) !== null && _v !== void 0 ? _v : 0;
        message.bitratePadding = (_w = object.bitratePadding) !== null && _w !== void 0 ? _w : 0;
        message.packetsOutOfOrder = (_x = object.packetsOutOfOrder) !== null && _x !== void 0 ? _x : 0;
        message.frames = (_y = object.frames) !== null && _y !== void 0 ? _y : 0;
        message.frameRate = (_z = object.frameRate) !== null && _z !== void 0 ? _z : 0;
        message.jitterCurrent = (_0 = object.jitterCurrent) !== null && _0 !== void 0 ? _0 : 0;
        message.jitterMax = (_1 = object.jitterMax) !== null && _1 !== void 0 ? _1 : 0;
        message.gapHistogram = Object.entries((_2 = object.gapHistogram) !== null && _2 !== void 0 ? _2 : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = Number(value);
            }
            return acc;
        }, {});
        message.nacks = (_3 = object.nacks) !== null && _3 !== void 0 ? _3 : 0;
        message.nackAcks = (_4 = object.nackAcks) !== null && _4 !== void 0 ? _4 : 0;
        message.nackMisses = (_5 = object.nackMisses) !== null && _5 !== void 0 ? _5 : 0;
        message.nackRepeated = (_6 = object.nackRepeated) !== null && _6 !== void 0 ? _6 : 0;
        message.plis = (_7 = object.plis) !== null && _7 !== void 0 ? _7 : 0;
        message.lastPli = (_8 = object.lastPli) !== null && _8 !== void 0 ? _8 : undefined;
        message.firs = (_9 = object.firs) !== null && _9 !== void 0 ? _9 : 0;
        message.lastFir = (_10 = object.lastFir) !== null && _10 !== void 0 ? _10 : undefined;
        message.rttCurrent = (_11 = object.rttCurrent) !== null && _11 !== void 0 ? _11 : 0;
        message.rttMax = (_12 = object.rttMax) !== null && _12 !== void 0 ? _12 : 0;
        message.keyFrames = (_13 = object.keyFrames) !== null && _13 !== void 0 ? _13 : 0;
        message.lastKeyFrame = (_14 = object.lastKeyFrame) !== null && _14 !== void 0 ? _14 : undefined;
        message.layerLockPlis = (_15 = object.layerLockPlis) !== null && _15 !== void 0 ? _15 : 0;
        message.lastLayerLockPli = (_16 = object.lastLayerLockPli) !== null && _16 !== void 0 ? _16 : undefined;
        message.packetDrift = (object.packetDrift !== undefined && object.packetDrift !== null)
            ? exports.RTPDrift.fromPartial(object.packetDrift)
            : undefined;
        message.reportDrift = (object.reportDrift !== undefined && object.reportDrift !== null)
            ? exports.RTPDrift.fromPartial(object.reportDrift)
            : undefined;
        return message;
    },
};
function createBaseRTPStats_GapHistogramEntry() {
    return { key: 0, value: 0 };
}
exports.RTPStats_GapHistogramEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).int32(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).uint32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRTPStats_GapHistogramEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.int32();
                    break;
                case 2:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? Number(object.value) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRTPStats_GapHistogramEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseTimedVersion() {
    return { unixMicro: 0, ticks: 0 };
}
exports.TimedVersion = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unixMicro !== 0) {
            writer.uint32(8).int64(message.unixMicro);
        }
        if (message.ticks !== 0) {
            writer.uint32(16).int32(message.ticks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimedVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unixMicro = longToNumber(reader.int64());
                    break;
                case 2:
                    message.ticks = reader.int32();
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
            unixMicro: isSet(object.unixMicro) ? Number(object.unixMicro) : 0,
            ticks: isSet(object.ticks) ? Number(object.ticks) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.unixMicro !== undefined && (obj.unixMicro = Math.round(message.unixMicro));
        message.ticks !== undefined && (obj.ticks = Math.round(message.ticks));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTimedVersion();
        message.unixMicro = (_a = object.unixMicro) !== null && _a !== void 0 ? _a : 0;
        message.ticks = (_b = object.ticks) !== null && _b !== void 0 ? _b : 0;
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
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
//# sourceMappingURL=livekit_models.js.map