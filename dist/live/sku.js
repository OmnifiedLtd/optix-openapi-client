import { fromClientResponse, toExn } from '../response';
export async function skuGetStockLevels(client, input) {
    const response = await client.POST('/v1/sku/stocklevels', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function skuGetStockLevelsExn(client, input) {
    const response = await skuGetStockLevels(client, input);
    return toExn(response);
}
export async function skuGetDetails(client, input) {
    const response = await client.POST('/v1/sku/details', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function skuGetDetailsExn(client, input) {
    const response = await skuGetDetails(client, input);
    return toExn(response);
}
export async function skuGetPrices(client, input) {
    const response = await client.POST('/v1/sku/prices', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function skuGetPricesExn(client, input) {
    const response = await skuGetPrices(client, input);
    return toExn(response);
}
export async function skuUpdateStockLevelBySku(client, input) {
    const response = await client.PUT('/v1/sku/updatestocklevelbysku', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function skuUpdateStockLevelBySkuExn(client, input) {
    const response = await skuUpdateStockLevelBySku(client, input);
    return toExn(response);
}
