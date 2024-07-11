import { expect, test } from 'vitest'
import { newClient } from '../client'
import { searchProducts } from '../product'
import 'dotenv/config'

test('1==1', async () => {
  const apiKey = process.env.OPTIX_API_KEY!
  const client = newClient(apiKey)
  const input: any = {}
  const response = await searchProducts(client, input)
  console.log(response)
  expect(1).toEqual(1)
})
