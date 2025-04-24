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
exports.EgressClient = void 0;
const livekit_egress_1 = require("./proto/livekit_egress");
const ServiceBase_1 = __importDefault(require("./ServiceBase"));
const TwirpRPC_1 = require("./TwirpRPC");
const svc = 'Egress';
/**
 * Client to access Egress APIs
 */
class EgressClient extends ServiceBase_1.default {
    /**
     * @param host hostname including protocol. i.e. 'https://cluster.livekit.io'
     * @param apiKey API Key, can be set in env var LIVEKIT_API_KEY
     * @param secret API Secret, can be set in env var LIVEKIT_API_SECRET
     */
    constructor(host, apiKey, secret) {
        super(apiKey, secret);
        this.rpc = new TwirpRPC_1.TwirpRpc(host, TwirpRPC_1.livekitPackage);
    }
    startRoomCompositeEgress(roomName, output, optsOrLayout, options, audioOnly, videoOnly, customBaseUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let layout;
            if (optsOrLayout !== undefined) {
                if (typeof optsOrLayout === 'string') {
                    layout = optsOrLayout;
                }
                else {
                    const opts = optsOrLayout;
                    layout = opts.layout;
                    options = opts.encodingOptions;
                    audioOnly = opts.audioOnly;
                    videoOnly = opts.videoOnly;
                    customBaseUrl = opts.customBaseUrl;
                }
            }
            layout !== null && layout !== void 0 ? layout : (layout = '');
            audioOnly !== null && audioOnly !== void 0 ? audioOnly : (audioOnly = false);
            videoOnly !== null && videoOnly !== void 0 ? videoOnly : (videoOnly = false);
            customBaseUrl !== null && customBaseUrl !== void 0 ? customBaseUrl : (customBaseUrl = '');
            const { file, stream, segments, preset, advanced, fileOutputs, streamOutputs, segmentOutputs } = this.getOutputParams(output, options);
            const req = livekit_egress_1.RoomCompositeEgressRequest.toJSON({
                roomName,
                layout,
                audioOnly,
                videoOnly,
                customBaseUrl,
                file,
                stream,
                segments,
                preset,
                advanced,
                fileOutputs,
                streamOutputs,
                segmentOutputs,
            });
            const data = yield this.rpc.request(svc, 'StartRoomCompositeEgress', req, this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    /**
     * @param url url
     * @param output file or stream output
     * @param opts WebOptions
     */
    startWebEgress(url, output, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const audioOnly = (opts === null || opts === void 0 ? void 0 : opts.audioOnly) || false;
            const videoOnly = (opts === null || opts === void 0 ? void 0 : opts.videoOnly) || false;
            const awaitStartSignal = (opts === null || opts === void 0 ? void 0 : opts.awaitStartSignal) || false;
            const { file, stream, segments, preset, advanced, fileOutputs, streamOutputs, segmentOutputs } = this.getOutputParams(output, opts === null || opts === void 0 ? void 0 : opts.encodingOptions);
            const req = livekit_egress_1.WebEgressRequest.toJSON({
                url,
                audioOnly,
                videoOnly,
                awaitStartSignal,
                file,
                stream,
                segments,
                preset,
                advanced,
                fileOutputs,
                streamOutputs,
                segmentOutputs,
            });
            const data = yield this.rpc.request(svc, 'StartWebEgress', req, this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    /**
     * Export a participant's audio and video tracks,
     *
     * @param roomName room name
     * @param output one or more outputs
     * @param opts ParticipantEgressOptions
     */
    startParticipantEgress(roomName, identity, output, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { preset, advanced, fileOutputs, streamOutputs, segmentOutputs } = this.getOutputParams(output, opts === null || opts === void 0 ? void 0 : opts.encodingOptions);
            const req = livekit_egress_1.ParticipantEgressRequest.toJSON({
                roomName,
                identity,
                preset,
                advanced,
                fileOutputs,
                streamOutputs,
                segmentOutputs,
            });
            const data = yield this.rpc.request(svc, 'StartParticipantEgress', req, this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    startTrackCompositeEgress(roomName, output, optsOrAudioTrackId, videoTrackId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let audioTrackId;
            if (optsOrAudioTrackId !== undefined) {
                if (typeof optsOrAudioTrackId === 'string') {
                    audioTrackId = optsOrAudioTrackId;
                }
                else {
                    const opts = optsOrAudioTrackId;
                    audioTrackId = opts.audioTrackId;
                    videoTrackId = opts.videoTrackId;
                    options = opts.encodingOptions;
                }
            }
            audioTrackId !== null && audioTrackId !== void 0 ? audioTrackId : (audioTrackId = '');
            videoTrackId !== null && videoTrackId !== void 0 ? videoTrackId : (videoTrackId = '');
            const { file, stream, segments, preset, advanced, fileOutputs, streamOutputs, segmentOutputs } = this.getOutputParams(output, options);
            const req = livekit_egress_1.TrackCompositeEgressRequest.toJSON({
                roomName,
                audioTrackId,
                videoTrackId,
                file,
                stream,
                segments,
                preset,
                advanced,
                fileOutputs,
                streamOutputs,
                segmentOutputs,
            });
            const data = yield this.rpc.request(svc, 'StartTrackCompositeEgress', req, this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    isEncodedOutputs(output) {
        return (output.file !== undefined ||
            output.stream !== undefined ||
            output.segments !== undefined);
    }
    isEncodedFileOutput(output) {
        return (output.filepath !== undefined ||
            output.fileType !== undefined);
    }
    isSegmentedFileOutput(output) {
        return (output.filenamePrefix !== undefined ||
            output.playlistName !== undefined ||
            output.filenameSuffix !== undefined);
    }
    isStreamOutput(output) {
        return (output.protocol !== undefined || output.urls !== undefined);
    }
    getOutputParams(output, options) {
        let file;
        let fileOutputs;
        let stream;
        let streamOutputs;
        let segments;
        let segmentOutputs;
        let preset;
        let advanced;
        if (this.isEncodedOutputs(output)) {
            if (output.file !== undefined) {
                fileOutputs = [output.file];
            }
            if (output.stream !== undefined) {
                streamOutputs = [output.stream];
            }
            if (output.segments !== undefined) {
                segmentOutputs = [output.segments];
            }
        }
        else if (this.isEncodedFileOutput(output)) {
            file = output;
            fileOutputs = [file];
        }
        else if (this.isSegmentedFileOutput(output)) {
            segments = output;
            segmentOutputs = [segments];
        }
        else if (this.isStreamOutput(output)) {
            stream = output;
            streamOutputs = [stream];
        }
        if (options) {
            if (typeof options === 'number') {
                preset = options;
            }
            else {
                advanced = options;
            }
        }
        return { file, stream, segments, preset, advanced, fileOutputs, streamOutputs, segmentOutputs };
    }
    /**
     * @param roomName room name
     * @param output file or websocket output
     * @param trackId track Id
     */
    startTrackEgress(roomName, output, trackId) {
        return __awaiter(this, void 0, void 0, function* () {
            let file;
            let websocketUrl;
            if (typeof output === 'string') {
                websocketUrl = output;
            }
            else {
                file = output;
            }
            const req = livekit_egress_1.TrackEgressRequest.toJSON({
                roomName,
                trackId,
                file,
                websocketUrl,
            });
            const data = yield this.rpc.request(svc, 'StartTrackEgress', req, this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    /**
     * @param egressId
     * @param layout
     */
    updateLayout(egressId, layout) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'UpdateLayout', livekit_egress_1.UpdateLayoutRequest.toJSON({ egressId, layout }), this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    /**
     * @param egressId
     * @param addOutputUrls
     * @param removeOutputUrls
     */
    updateStream(egressId, addOutputUrls, removeOutputUrls) {
        return __awaiter(this, void 0, void 0, function* () {
            addOutputUrls !== null && addOutputUrls !== void 0 ? addOutputUrls : (addOutputUrls = []);
            removeOutputUrls !== null && removeOutputUrls !== void 0 ? removeOutputUrls : (removeOutputUrls = []);
            const data = yield this.rpc.request(svc, 'UpdateStream', livekit_egress_1.UpdateStreamRequest.toJSON({ egressId, addOutputUrls, removeOutputUrls }), this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
    /**
     * @param roomName list egress for one room only
     */
    listEgress(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let req = {};
            if (typeof options === 'string') {
                req.roomName = options;
            }
            else if (options !== undefined) {
                req = options;
            }
            const data = yield this.rpc.request(svc, 'ListEgress', livekit_egress_1.ListEgressRequest.toJSON(req), this.authHeader({ roomRecord: true }));
            return (_a = livekit_egress_1.ListEgressResponse.fromJSON(data).items) !== null && _a !== void 0 ? _a : [];
        });
    }
    /**
     * @param egressId
     */
    stopEgress(egressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'StopEgress', livekit_egress_1.StopEgressRequest.toJSON({ egressId }), this.authHeader({ roomRecord: true }));
            return livekit_egress_1.EgressInfo.fromJSON(data);
        });
    }
}
exports.EgressClient = EgressClient;
//# sourceMappingURL=EgressClient.js.map