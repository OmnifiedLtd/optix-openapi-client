"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skuUpdateStockLevelBySkuExn = exports.skuUpdateStockLevelBySku = exports.skuGetPricesExn = exports.skuGetPrices = exports.skuGetDetailsExn = exports.skuGetDetails = exports.skuGetStockLevelsExn = exports.skuGetStockLevels = void 0;
const response_1 = require("../response");
async function skuGetStockLevels(client, input) {
    const response = await client.POST('/v1/sku/stocklevels', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.skuGetStockLevels = skuGetStockLevels;
async function skuGetStockLevelsExn(client, input) {
    const response = await skuGetStockLevels(client, input);
    return (0, response_1.toExn)(response);
}
exports.skuGetStockLevelsExn = skuGetStockLevelsExn;
async function skuGetDetails(client, input) {
    const response = await client.POST('/v1/sku/details', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.skuGetDetails = skuGetDetails;
async function skuGetDetailsExn(client, input) {
    const response = await skuGetDetails(client, input);
    return (0, response_1.toExn)(response);
}
exports.skuGetDetailsExn = skuGetDetailsExn;
async function skuGetPrices(client, input) {
    const response = await client.POST('/v1/sku/prices', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.skuGetPrices = skuGetPrices;
async function skuGetPricesExn(client, input) {
    const response = await skuGetPrices(client, input);
    return (0, response_1.toExn)(response);
}
exports.skuGetPricesExn = skuGetPricesExn;
async function skuUpdateStockLevelBySku(client, input) {
    const response = await client.PUT('/v1/sku/updatestocklevelbysku', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.skuUpdateStockLevelBySku = skuUpdateStockLevelBySku;
async function skuUpdateStockLevelBySkuExn(client, input) {
    const response = await skuUpdateStockLevelBySku(client, input);
    return (0, response_1.toExn)(response);
}
exports.skuUpdateStockLevelBySkuExn = skuUpdateStockLevelBySkuExn;
