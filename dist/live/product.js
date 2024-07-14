import { fromClientResponse, toExn } from '../response';
export var ProductType;
(function (ProductType) {
    ProductType["Frame"] = "Frame";
    ProductType["Sunglasses"] = "Sunglasses";
    ProductType["MiscItem"] = "Misc Item";
})(ProductType || (ProductType = {}));
export async function productsSearch(client, input) {
    const response = await client.POST('/v1/product/search/{ProductType}', {
        params: {
            path: {
                ProductType: input.productType,
            },
        },
        body: input,
    });
    return fromClientResponse(response);
}
export async function productsSearchExn(client, input) {
    const response = await productsSearch(client, input);
    return toExn(response);
}
export async function productGetSkus(client, input) {
    const response = await client.POST('/v1/product/skus', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function productGetSkusExn(client, input) {
    const response = await productGetSkus(client, input);
    return toExn(response);
}
export async function productGetPrices(client, input) {
    const response = await client.POST('/v1/product/prices', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function productGetPricesExn(client, input) {
    const response = await productGetPrices(client, input);
    return toExn(response);
}
export async function productGetRetailPrices(client, input) {
    const response = await client.POST('/v1/product/retail-prices', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function productGetRetailPricesExn(client, input) {
    const response = await productGetRetailPrices(client, input);
    return toExn(response);
}
