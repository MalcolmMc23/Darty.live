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
exports.IngressClient = void 0;
const livekit_ingress_1 = require("./proto/livekit_ingress");
const ServiceBase_1 = __importDefault(require("./ServiceBase"));
const TwirpRPC_1 = require("./TwirpRPC");
const svc = 'Ingress';
/**
 * Client to access Ingress APIs
 */
class IngressClient extends ServiceBase_1.default {
    /**
     * @param host hostname including protocol. i.e. 'https://cluster.livekit.io'
     * @param apiKey API Key, can be set in env var LIVEKIT_API_KEY
     * @param secret API Secret, can be set in env var LIVEKIT_API_SECRET
     */
    constructor(host, apiKey, secret) {
        super(apiKey, secret);
        this.rpc = new TwirpRPC_1.TwirpRpc(host, TwirpRPC_1.livekitPackage);
    }
    /**
     * @param inputType protocol for the ingress
     * @param opts CreateIngressOptions
     */
    createIngress(inputType, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let name = '';
            let roomName = '';
            let participantName = '';
            let participantIdentity = '';
            let bypassTranscoding = false;
            let url = '';
            let audio;
            let video;
            if (opts !== undefined) {
                name = opts.name || '';
                roomName = opts.roomName || '';
                participantName = opts.participantName || '';
                participantIdentity = opts.participantIdentity || '';
                bypassTranscoding = opts.bypassTranscoding || false;
                url = opts.url || '';
                audio = opts.audio;
                video = opts.video;
            }
            const req = livekit_ingress_1.CreateIngressRequest.toJSON({
                inputType,
                name,
                roomName,
                participantIdentity,
                participantName,
                bypassTranscoding,
                url,
                audio,
                video,
            });
            const data = yield this.rpc.request(svc, 'CreateIngress', req, this.authHeader({ ingressAdmin: true }));
            return livekit_ingress_1.IngressInfo.fromJSON(data);
        });
    }
    /**
     * @param ingressId ID of the ingress to update
     * @param opts UpdateIngressOptions
     */
    updateIngress(ingressId, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = opts.name || '';
            const roomName = opts.roomName || '';
            const participantName = opts.participantName || '';
            const participantIdentity = opts.participantIdentity || '';
            const { audio, video, bypassTranscoding } = opts;
            const req = livekit_ingress_1.UpdateIngressRequest.toJSON({
                ingressId,
                name,
                roomName,
                participantIdentity,
                participantName,
                bypassTranscoding,
                audio,
                video,
            });
            const data = yield this.rpc.request(svc, 'UpdateIngress', req, this.authHeader({ ingressAdmin: true }));
            return livekit_ingress_1.IngressInfo.fromJSON(data);
        });
    }
    listIngress(arg) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let req = {};
            if (typeof arg === 'string') {
                req.roomName = arg;
            }
            else if (arg) {
                req = arg;
            }
            const data = yield this.rpc.request(svc, 'ListIngress', livekit_ingress_1.ListIngressRequest.toJSON(req), this.authHeader({ ingressAdmin: true }));
            return (_a = livekit_ingress_1.ListIngressResponse.fromJSON(data).items) !== null && _a !== void 0 ? _a : [];
        });
    }
    /**
     * @param ingressId ingress to delete
     */
    deleteIngress(ingressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.rpc.request(svc, 'DeleteIngress', livekit_ingress_1.DeleteIngressRequest.toJSON({ ingressId }), this.authHeader({ ingressAdmin: true }));
            return livekit_ingress_1.IngressInfo.fromJSON(data);
        });
    }
}
exports.IngressClient = IngressClient;
//# sourceMappingURL=IngressClient.js.map