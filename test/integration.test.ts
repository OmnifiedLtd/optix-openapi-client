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
