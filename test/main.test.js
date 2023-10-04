import { describe, expect, test } from 'vitest'
import data from '../datos.js'

describe('Ficheros creados', () => {
  test('Existe data en datos.js y contiene 6 libros', () => {
    expect(data.books.length).toBe(6)
  })
})