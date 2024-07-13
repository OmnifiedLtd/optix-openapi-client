"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toExn = exports.fromClientResponse = void 0;
const error_1 = require("./error");
function fromClientResponse(response) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (((_a = response.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        return {
            type: 'Error',
            error: {
                type: 'Unauthorized',
                title: 'Unauthorized',
                status: (_b = response.response) === null || _b === void 0 ? void 0 : _b.status,
                detail: (_c = response.response) === null || _c === void 0 ? void 0 : _c.statusText,
                instance: (_d = response.response) === null || _d === void 0 ? void 0 : _d.url,
            },
            response: response.response,
        };
    }
    if (((_e = response.response) === null || _e === void 0 ? void 0 : _e.status) === 400) {
        return {
            type: 'Error',
            error: {
                type: 'Bad Request',
                title: 'Bad Request',
                status: (_f = response.response) === null || _f === void 0 ? void 0 : _f.status,
                detail: (_g = response.response) === null || _g === void 0 ? void 0 : _g.statusText,
                instance: (_h = response.response) === null || _h === void 0 ? void 0 : _h.url,
            },
            response: response.response,
        };
    }
    if (response.data) {
        return {
            type: 'Success',
            data: response.data,
            response: response.response,
        };
    }
    if (response.error) {
        const error = (0, error_1.fromClientError)(response.error);
        return {
            type: 'Error',
            error: error,
            response: response.response,
        };
    }
    else {
        // this should never happen
        return {
            type: 'Error',
            error: {
                type: 'Generic',
                title: "No data or error returned from api",
            },
            response: response.response,
        };
    }
}
exports.fromClientResponse = fromClientResponse;
// TODO: add more info to errors
function toExn(response) {
    switch (response.type) {
        case 'Success':
            return response.data;
        case 'Error':
            const error = response.error;
            switch (error.type) {
                case 'Unauthorized':
                    throw new Error("Unauthorized");
                case 'Forbidden':
                    throw new Error("Forbidden");
                case 'Not Found':
                    throw new Error("Not Found");
                case 'Generic':
                    throw new Error("Generic Error");
            }
            throw new Error("Unknown Error");
    }
}
exports.toExn = toExn;
