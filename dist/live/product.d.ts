import { newAuthenticatedClient } from './client';
import type { components } from '../generated';
import { ApiResponse } from '../response';
export declare enum ProductType {
    Frame = "Frame",
    Sunglasses = "Sunglasses",
    MiscItem = "Misc Item"
}
export type ProductSearchRequest = components['schemas']['ProductSearchRequest'];
export type ProductSearchInput = ProductSearchRequest & {
    productType: ProductType;
};
export type ProductSearchResponse = components['schemas']['QueryProductDetailsResponseIPagedResult'];
export declare function productsSearch(client: ReturnType<typeof newAuthenticatedClient>, input: ProductSearchInput): Promise<ApiResponse<ProductSearchResponse>>;
export declare function productsSearchExn(client: ReturnType<typeof newAuthenticatedClient>, input: ProductSearchInput): Promise<ProductSearchResponse>;
export type ProductGetSkusInput = components['schemas']['QueryProductSkusRequest'];
export type ProductGetSkusResponse = components['schemas']['QueryProductSkusResponse'];
export declare function productGetSkus(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetSkusInput): Promise<ApiResponse<ProductGetSkusResponse>>;
export declare function productGetSkusExn(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetSkusInput): Promise<ProductGetSkusResponse>;
export type ProductGetPricesInput = components['schemas']['QueryBatchProductPriceRequest'];
export type ProductGetPricesResponse = components['schemas']['ProductBatchPriceResponse'];
export declare function productGetPrices(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetPricesInput): Promise<ApiResponse<ProductGetPricesResponse>>;
export declare function productGetPricesExn(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetPricesInput): Promise<ProductGetPricesResponse>;
export type SkuRetailPriceRequest = components['schemas']['SkuRetailPriceRequest'];
export type ProductGetRetailPricesInput = {
    priceRequests?: SkuRetailPriceRequest[];
};
export type ProductGetRetailPricesResponse = components['schemas']['SkuRetailPriceResponse'][];
export declare function productGetRetailPrices(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetRetailPricesInput): Promise<ApiResponse<ProductGetRetailPricesResponse>>;
export declare function productGetRetailPricesExn(client: ReturnType<typeof newAuthenticatedClient>, input: ProductGetRetailPricesInput): Promise<ProductGetRetailPricesResponse>;
