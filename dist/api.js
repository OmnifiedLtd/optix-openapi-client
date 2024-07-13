"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLiveClient = void 0;
const product_1 = require("./live/product");
const sku_1 = require("./live/sku");
const client_1 = require("./live/client");
const branch_1 = require("./live/branch");
function newLiveClient(apiKey) {
    const authenticatedClient = (0, client_1.newAuthenticatedClient)(apiKey);
    return {
        branchGetDetails: (input) => (0, branch_1.branchGetDetails)(authenticatedClient, input),
        branchGetDetailsExn: (input) => (0, branch_1.branchGetDetailsExn)(authenticatedClient, input),
        branchesSearch: (input) => (0, branch_1.branchesSearch)(authenticatedClient, input),
        branchesSearchExn: (input) => (0, branch_1.branchesSearchExn)(authenticatedClient, input),
        productGetSkus: (input) => (0, product_1.productGetSkus)(authenticatedClient, input),
        productGetSkusExn: (input) => (0, product_1.productGetSkusExn)(authenticatedClient, input),
        productGetPrices: (input) => (0, product_1.productGetPrices)(authenticatedClient, input),
        productGetPricesExn: (input) => (0, product_1.productGetPricesExn)(authenticatedClient, input),
        productGetRetailPrices: (input) => (0, product_1.productGetRetailPrices)(authenticatedClient, input),
        productGetRetailPricesExn: (input) => (0, product_1.productGetRetailPricesExn)(authenticatedClient, input),
        productsSearch: (input) => (0, product_1.productsSearch)(authenticatedClient, input),
        productsSearchExn: (input) => (0, product_1.productsSearchExn)(authenticatedClient, input),
        skuGetStockLevels: (input) => (0, sku_1.skuGetStockLevels)(authenticatedClient, input),
        skuGetStockLevelsExn: (input) => (0, sku_1.skuGetStockLevelsExn)(authenticatedClient, input),
        skuGetDetails: (input) => (0, sku_1.skuGetDetails)(authenticatedClient, input),
        skuGetDetailsExn: (input) => (0, sku_1.skuGetDetailsExn)(authenticatedClient, input),
        skuGetPrices: (input) => (0, sku_1.skuGetPrices)(authenticatedClient, input),
        skuGetPricesExn: (input) => (0, sku_1.skuGetPricesExn)(authenticatedClient, input),
        skuUpdateStockLevelBySku: (input) => (0, sku_1.skuUpdateStockLevelBySku)(authenticatedClient, input),
        skuUpdateStockLevelBySkuExn: (input) => (0, sku_1.skuUpdateStockLevelBySkuExn)(authenticatedClient, input),
    };
}
exports.newLiveClient = newLiveClient;
