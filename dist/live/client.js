import createClient from 'openapi-fetch';
function mkAuthMiddleware(apiKey) {
    const authMiddleware = {
        async onRequest({ request }) {
            request.headers.set('X-OPTIX-API-KEY-V2', apiKey);
            return request;
        },
    };
    return authMiddleware;
}
export function newAuthenticatedClient(apiKey) {
    const client = createClient({
        baseUrl: 'https://publicapi.optix.co.uk/',
    });
    const authMiddleware = mkAuthMiddleware(apiKey);
    client.use(authMiddleware);
    return client;
}
