import { expect, test } from 'vitest'
import { newClient } from '../client'
import { searchProducts } from '../product'

test('1==1', async () => {
  const client = newClient('test')
  const input: any = {}
  const response = await searchProducts(client, input)
  console.log(response)
  expect(1).toEqual(1)
})
