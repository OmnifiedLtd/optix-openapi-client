"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const api_1 = require("../api");
require("dotenv/config");
const product_1 = require("../live/product");
(0, vitest_1.test)('search products', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = (0, api_1.newLiveClient)(apiKey);
    const input = {
        productType: product_1.ProductType.Sunglasses,
        pageSize: 2
    };
    const response = await client.productsSearch(input);
    (0, vitest_1.expect)(response.type).toEqual('Success');
});
(0, vitest_1.test)('unauthorized error', async () => {
    const apiKey = "invalidApiKey";
    const client = (0, api_1.newLiveClient)(apiKey);
    const input = {
        productType: product_1.ProductType.Sunglasses,
        pageSize: 2
    };
    const response = await client.productsSearch(input);
    (0, vitest_1.expect)(response.type).toEqual('Error');
    const { error } = response;
    (0, vitest_1.expect)(error.type).toEqual('Unauthorized');
});
(0, vitest_1.test)('bad request error', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = (0, api_1.newLiveClient)(apiKey);
    const badInput = {
        productTipe: product_1.ProductType.Sunglasses,
    };
    const response = await client.productsSearch(badInput);
    (0, vitest_1.expect)(response.type).toEqual('Error');
    const { error } = response;
    (0, vitest_1.expect)(error.type).toEqual('Bad Request');
});
(0, vitest_1.test)('branch/product/sku operations', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = (0, api_1.newLiveClient)(apiKey);
    const branches = await client.branchesSearchExn({
        pageSize: 2
    });
    const branch = branches.items[0];
    if (!branch) {
        throw new Error("No branch found");
    }
    await client.branchGetDetailsExn({
        branchId: branch.id
    });
    const productSearchInput = {
        productType: product_1.ProductType.Sunglasses,
        pageSize: 2
    };
    const productsData = await client.productsSearchExn(productSearchInput);
    const product = productsData.items[0];
    if (!product) {
        throw new Error("No sunglass product found");
    }
    const productSkus = await client.productGetSkusExn({
        productCode: product.code,
    });
    const sku = productSkus.skus[0];
    if (!sku) {
        throw new Error("No sku found for test product");
    }
    await client.skuGetStockLevelsExn({
        skuIds: [sku.skuId],
    });
    await client.productGetRetailPricesExn({
        priceRequests: [
            {
                productId: product.id,
                variantId: sku.skuId,
                branchId: branch.id,
                productTypeId: product.productTypeId,
            }
        ]
    });
    (0, vitest_1.expect)(1).toEqual(1);
});
