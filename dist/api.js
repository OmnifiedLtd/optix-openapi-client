import { productGetPrices, productGetPricesExn, productGetRetailPrices, productGetRetailPricesExn, productGetSkus, productGetSkusExn, productsSearch, productsSearchExn } from "./live/product";
import { skuGetDetails, skuGetDetailsExn, skuGetPrices, skuGetPricesExn, skuGetStockLevels, skuGetStockLevelsExn, skuUpdateStockLevelBySku, skuUpdateStockLevelBySkuExn } from "./live/sku";
import { newAuthenticatedClient } from "./live/client";
import { branchesSearch, branchesSearchExn, branchGetDetails, branchGetDetailsExn } from "./live/branch";
export function newLiveClient(apiKey) {
    const authenticatedClient = newAuthenticatedClient(apiKey);
    return {
        branchGetDetails: (input) => branchGetDetails(authenticatedClient, input),
        branchGetDetailsExn: (input) => branchGetDetailsExn(authenticatedClient, input),
        branchesSearch: (input) => branchesSearch(authenticatedClient, input),
        branchesSearchExn: (input) => branchesSearchExn(authenticatedClient, input),
        productGetSkus: (input) => productGetSkus(authenticatedClient, input),
        productGetSkusExn: (input) => productGetSkusExn(authenticatedClient, input),
        productGetPrices: (input) => productGetPrices(authenticatedClient, input),
        productGetPricesExn: (input) => productGetPricesExn(authenticatedClient, input),
        productGetRetailPrices: (input) => productGetRetailPrices(authenticatedClient, input),
        productGetRetailPricesExn: (input) => productGetRetailPricesExn(authenticatedClient, input),
        productsSearch: (input) => productsSearch(authenticatedClient, input),
        productsSearchExn: (input) => productsSearchExn(authenticatedClient, input),
        skuGetStockLevels: (input) => skuGetStockLevels(authenticatedClient, input),
        skuGetStockLevelsExn: (input) => skuGetStockLevelsExn(authenticatedClient, input),
        skuGetDetails: (input) => skuGetDetails(authenticatedClient, input),
        skuGetDetailsExn: (input) => skuGetDetailsExn(authenticatedClient, input),
        skuGetPrices: (input) => skuGetPrices(authenticatedClient, input),
        skuGetPricesExn: (input) => skuGetPricesExn(authenticatedClient, input),
        skuUpdateStockLevelBySku: (input) => skuUpdateStockLevelBySku(authenticatedClient, input),
        skuUpdateStockLevelBySkuExn: (input) => skuUpdateStockLevelBySkuExn(authenticatedClient, input),
    };
}
