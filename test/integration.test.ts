import { expect, test } from 'vitest'
import { newLiveClient } from '../api'
import 'dotenv/config'
import { ApiErrorResponse } from '../response'
import { ProductType } from '../live/product'

test('search products', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newLiveClient(apiKey)
  const input = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await client.productsSearch(input)
  expect(response.type).toEqual('Success')
})

test('unauthorized error', async () => {
  const apiKey = "invalidApiKey"
  const client = newLiveClient(apiKey)
  const input = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await client.productsSearch(input)
  expect(response.type).toEqual('Error')
  const { error } = response as ApiErrorResponse
  expect(error.type).toEqual('Unauthorized')
})

test('bad request error', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newLiveClient(apiKey)
  const badInput = {
    productTipe: ProductType.Sunglasses,
  } as any
  const response = await client.productsSearch(badInput)
  expect(response.type).toEqual('Error')
  const { error } = response as ApiErrorResponse

  expect(error.type).toEqual('Bad Request')
})

test('product/sku operations', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newLiveClient(apiKey)
  const productSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const productsData = await client.productsSearchExn(productSearchInput)
  const product = productsData.items![0]
  if (!product) {
    throw new Error("No sunglass product found")
  }
  const productSkus = await client.productGetSkusExn({
    productCode: product.code,
  })
  const sku = productSkus.skus![0]
  if (!sku) {
    throw new Error("No sku found for test product")
  }
  const skuStockLevels = await client.skuGetStockLevelsExn({
    skuIds: [sku.skuId!],
  })
  // const skuPrices = await client.productGetRetailPricesExn({
  //   priceRequests: [
  //     {
  //       productId: product.id!,
  //       variantId: sku.skuId,
  //       branchId: ,
  //       productTypeId: product.productTypeId!,
  //     }
  // })
  // console.log(skuStockLevels)
  expect(1).toEqual(1)
}
)
