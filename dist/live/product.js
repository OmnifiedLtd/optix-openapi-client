"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productGetRetailPricesExn = exports.productGetRetailPrices = exports.productGetPricesExn = exports.productGetPrices = exports.productGetSkusExn = exports.productGetSkus = exports.productsSearchExn = exports.productsSearch = exports.ProductType = void 0;
const response_1 = require("../response");
var ProductType;
(function (ProductType) {
    ProductType["Frame"] = "Frame";
    ProductType["Sunglasses"] = "Sunglasses";
    ProductType["MiscItem"] = "Misc Item";
})(ProductType || (exports.ProductType = ProductType = {}));
async function productsSearch(client, input) {
    const response = await client.POST('/v1/product/search/{ProductType}', {
        params: {
            path: {
                ProductType: input.productType,
            },
        },
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.productsSearch = productsSearch;
async function productsSearchExn(client, input) {
    const response = await productsSearch(client, input);
    return (0, response_1.toExn)(response);
}
exports.productsSearchExn = productsSearchExn;
async function productGetSkus(client, input) {
    const response = await client.POST('/v1/product/skus', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.productGetSkus = productGetSkus;
async function productGetSkusExn(client, input) {
    const response = await productGetSkus(client, input);
    return (0, response_1.toExn)(response);
}
exports.productGetSkusExn = productGetSkusExn;
async function productGetPrices(client, input) {
    const response = await client.POST('/v1/product/prices', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.productGetPrices = productGetPrices;
async function productGetPricesExn(client, input) {
    const response = await productGetPrices(client, input);
    return (0, response_1.toExn)(response);
}
exports.productGetPricesExn = productGetPricesExn;
async function productGetRetailPrices(client, input) {
    const response = await client.POST('/v1/product/retail-prices', {
        body: input,
    });
    return (0, response_1.fromClientResponse)(response);
}
exports.productGetRetailPrices = productGetRetailPrices;
async function productGetRetailPricesExn(client, input) {
    const response = await productGetRetailPrices(client, input);
    return (0, response_1.toExn)(response);
}
exports.productGetRetailPricesExn = productGetRetailPricesExn;
