import { expect, test } from 'vitest'
import { newClient } from '../client'
import { ProductSearchInput, ProductType, searchProducts } from '../product'
import 'dotenv/config'

test('1==1', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newClient(apiKey)
  const input: ProductSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await searchProducts(client, input)
  console.log(response)
  console.log(response.data)
  expect(1).toEqual(1)
})
