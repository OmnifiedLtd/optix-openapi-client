"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAuthenticatedClient = void 0;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
function mkAuthMiddleware(apiKey) {
    const authMiddleware = {
        async onRequest({ request }) {
            request.headers.set('X-OPTIX-API-KEY-V2', apiKey);
            return request;
        },
    };
    return authMiddleware;
}
function newAuthenticatedClient(apiKey) {
    const client = (0, openapi_fetch_1.default)({
        baseUrl: 'https://publicapi.optix.co.uk/',
    });
    const authMiddleware = mkAuthMiddleware(apiKey);
    client.use(authMiddleware);
    return client;
}
exports.newAuthenticatedClient = newAuthenticatedClient;
