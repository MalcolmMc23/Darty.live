"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccessToken_1 = require("./AccessToken");
/**
 * Utilities to handle authentication
 */
class ServiceBase {
    /**
     * @param apiKey API Key.
     * @param secret API Secret.
     * @param ttl token TTL
     */
    constructor(apiKey, secret, ttl) {
        this.apiKey = apiKey;
        this.secret = secret;
        this.ttl = ttl || '10m';
    }
    authHeader(grant) {
        const at = new AccessToken_1.AccessToken(this.apiKey, this.secret, { ttl: this.ttl });
        at.addGrant(grant);
        return {
            Authorization: `Bearer ${at.toJwt()}`,
        };
    }
}
exports.default = ServiceBase;
//# sourceMappingURL=ServiceBase.js.map