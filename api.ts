import { productGetPrices, productGetPricesExn, ProductGetPricesInput, ProductGetPricesResponse, productGetRetailPrices, productGetRetailPricesExn, ProductGetRetailPricesInput, ProductGetRetailPricesResponse, productGetSkus, productGetSkusExn, ProductGetSkusInput, ProductGetSkusResponse, ProductSearchInput, ProductSearchResponse, productsSearch, productsSearchExn } from "./live/product"
import { ApiResponse } from "./response"
import { skuGetDetails, skuGetDetailsExn, SkuGetDetailsInput, SkuGetDetailsResponse, skuGetPrices, skuGetPricesExn, SkuGetPricesInput, SkuGetPricesResponse, skuGetStockLevels, skuGetStockLevelsExn, SkuGetStockLevelsInput, SkuGetStockLevelsResponse, skuUpdateStockLevelBySku, skuUpdateStockLevelBySkuExn, SkuUpdateStockLevelBySkuInput, SkuUpdateStockLevelBySkuResponse } from "./live/sku"
import { newAuthenticatedClient } from "./live/client"
import { BranchDetailsRequest, BranchDetailsResponse, branchesSearch, branchesSearchExn, branchGetDetails, branchGetDetailsExn, BranchSearchRequest, BranchSearchResponse } from "./live/branch"

export type OptixApiClient = {
  branchGetDetails: (input: BranchDetailsRequest) => Promise<ApiResponse<BranchDetailsResponse>>
  branchGetDetailsExn: (input: BranchDetailsRequest) => Promise<BranchDetailsResponse>
  branchesSearch: (input: BranchSearchRequest) => Promise<ApiResponse<BranchSearchResponse>>
  branchesSearchExn: (input: BranchSearchRequest) => Promise<BranchSearchResponse>
  productGetSkus: (input: ProductGetSkusInput) => Promise<ApiResponse<ProductGetSkusResponse>>
  productGetSkusExn: (input: ProductGetSkusInput) => Promise<ProductGetSkusResponse>
  productGetPrices: (input: ProductGetPricesInput) => Promise<ApiResponse<ProductGetPricesResponse>>
  productGetPricesExn: (input: ProductGetPricesInput) => Promise<ProductGetPricesResponse>
  productGetRetailPrices: (input: ProductGetRetailPricesInput) => Promise<ApiResponse<ProductGetRetailPricesResponse>>
  productGetRetailPricesExn: (input: ProductGetRetailPricesInput) => Promise<ProductGetRetailPricesResponse>
  productsSearch: (input: ProductSearchInput) => Promise<ApiResponse<ProductSearchResponse>>
  productsSearchExn: (input: ProductSearchInput) => Promise<ProductSearchResponse>
  skuGetStockLevels: (input: SkuGetStockLevelsInput) => Promise<ApiResponse<SkuGetStockLevelsResponse>>
  skuGetStockLevelsExn: (input: SkuGetStockLevelsInput) => Promise<SkuGetStockLevelsResponse>
  skuGetDetails: (input: SkuGetDetailsInput) => Promise<ApiResponse<SkuGetDetailsResponse>>
  skuGetDetailsExn: (input: SkuGetDetailsInput) => Promise<SkuGetDetailsResponse>
  skuGetPrices: (input: SkuGetPricesInput) => Promise<ApiResponse<SkuGetPricesResponse>>
  skuGetPricesExn: (input: SkuGetPricesInput) => Promise<SkuGetPricesResponse>
  skuUpdateStockLevelBySku: (input: SkuUpdateStockLevelBySkuInput) => Promise<ApiResponse<SkuUpdateStockLevelBySkuResponse>>
  skuUpdateStockLevelBySkuExn: (input: SkuUpdateStockLevelBySkuInput) => Promise<SkuUpdateStockLevelBySkuResponse>
}

export function newLiveClient(apiKey: string): OptixApiClient {
  const authenticatedClient = newAuthenticatedClient(apiKey)
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
  }
}
