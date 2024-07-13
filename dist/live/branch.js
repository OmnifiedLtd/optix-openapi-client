"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchGetDetailsExn = exports.branchGetDetails = exports.branchesSearchExn = exports.branchesSearch = void 0;
const response_1 = require("../response");
async function branchesSearch(client, input) {
    const response = await client.POST('/v1/branch/search', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.branchesSearch = branchesSearch;
async function branchesSearchExn(client, input) {
    const response = await branchesSearch(client, input);
    return (0, response_1.toExn)(response);
}
exports.branchesSearchExn = branchesSearchExn;
async function branchGetDetails(client, input) {
    const response = await client.GET('/v1/branch/{branchId}', {
        params: {
            path: {
                branchId: input.branchId,
            },
        },
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.branchGetDetails = branchGetDetails;
async function branchGetDetailsExn(client, input) {
    const response = await branchGetDetails(client, input);
    return (0, response_1.toExn)(response);
}
exports.branchGetDetailsExn = branchGetDetailsExn;
