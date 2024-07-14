import { expect, test } from 'vitest';
import { newLiveClient } from '../api';
import 'dotenv/config';
import { ProductType } from '../live/product';
test('search products', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = newLiveClient(apiKey);
    const input = {
        productType: ProductType.Sunglasses,
        pageSize: 2
    };
    const response = await client.productsSearch(input);
    expect(response.type).toEqual('Success');
});
test('unauthorized error', async () => {
    const apiKey = "invalidApiKey";
    const client = newLiveClient(apiKey);
    const input = {
        productType: ProductType.Sunglasses,
        pageSize: 2
    };
    const response = await client.productsSearch(input);
    expect(response.type).toEqual('Error');
    const { error } = response;
    expect(error.type).toEqual('Unauthorized');
});
test('bad request error', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = newLiveClient(apiKey);
    const badInput = {
        productTipe: ProductType.Sunglasses,
    };
    const response = await client.productsSearch(badInput);
    expect(response.type).toEqual('Error');
    const { error } = response;
    expect(error.type).toEqual('Bad Request');
});
test('branch/product/sku operations', async () => {
    const apiKey = process.env.OPTIX_API_KEY;
    const client = newLiveClient(apiKey);
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
        productType: ProductType.Sunglasses,
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
    expect(1).toEqual(1);
});
