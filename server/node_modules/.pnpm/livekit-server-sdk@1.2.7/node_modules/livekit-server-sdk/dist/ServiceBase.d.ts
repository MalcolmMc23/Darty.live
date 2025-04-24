import { VideoGrant } from './grants';
/**
 * Utilities to handle authentication
 */
export default class ServiceBase {
    private readonly apiKey?;
    private readonly secret?;
    private readonly ttl;
    /**
     * @param apiKey API Key.
     * @param secret API Secret.
     * @param ttl token TTL
     */
    constructor(apiKey?: string, secret?: string, ttl?: string);
    authHeader(grant: VideoGrant): any;
}
