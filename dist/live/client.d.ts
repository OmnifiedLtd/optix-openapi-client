import { Middleware } from 'openapi-fetch';
import type { paths } from '../generated';
export declare function newAuthenticatedClient(apiKey: string): {
    GET: import("openapi-fetch").ClientMethod<paths, "get", `${string}/${string}`>;
    PUT: import("openapi-fetch").ClientMethod<paths, "put", `${string}/${string}`>;
    POST: import("openapi-fetch").ClientMethod<paths, "post", `${string}/${string}`>;
    DELETE: import("openapi-fetch").ClientMethod<paths, "delete", `${string}/${string}`>;
    OPTIONS: import("openapi-fetch").ClientMethod<paths, "options", `${string}/${string}`>;
    HEAD: import("openapi-fetch").ClientMethod<paths, "head", `${string}/${string}`>;
    PATCH: import("openapi-fetch").ClientMethod<paths, "patch", `${string}/${string}`>;
    TRACE: import("openapi-fetch").ClientMethod<paths, "trace", `${string}/${string}`>;
    use(...middleware: Middleware[]): void;
    eject(...middleware: Middleware[]): void;
};
