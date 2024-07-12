import { expect, test } from 'vitest'
import { newClient } from '../client'
import { ProductSearchInput, ProductType, searchProducts } from '../product'
import 'dotenv/config'

test('search products', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newClient(apiKey)
  const input: ProductSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await searchProducts(client, input)
  console.log(response)
  expect(1).toEqual(1)
})


test('unauthorized error', async () => {
  const apiKey = "invalidApiKey"
  const client = newClient(apiKey)
  const input: ProductSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await searchProducts(client, input)
  console.log(response)
  expect(1).toEqual(1)
})
