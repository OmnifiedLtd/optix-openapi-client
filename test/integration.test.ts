import { expect, test } from 'vitest'
import { newClient } from '../client'
import { ProductSearchInput, ProductType, searchProducts } from '../product'
import 'dotenv/config'
import { ApiErrorResponse } from '../response'
import { ErrorType } from '../error'

test('search products', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newClient(apiKey)
  const input: ProductSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await searchProducts(client, input)
  expect(response.apiResponseType).toEqual('success')
})

test('unauthorized error', async () => {
  const apiKey = "invalidApiKey"
  const client = newClient(apiKey)
  const input: ProductSearchInput = {
    productType: ProductType.Sunglasses,
    pageSize: 2
  }
  const response = await searchProducts(client, input)
  expect(response.apiResponseType).toEqual('error')
  const { error } = response as ApiErrorResponse
  expect(error.type).toEqual(ErrorType.Unauthorized)
})

test('bad request error', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newClient(apiKey)
  const badInput: ProductSearchInput = {
    productTipe: ProductType.Sunglasses,
  } as any
  const response = await searchProducts(client, badInput)
  expect(response.apiResponseType).toEqual('error')
  const { error } = response as ApiErrorResponse

  expect(error.type).toEqual(ErrorType.BadRequest)
})
