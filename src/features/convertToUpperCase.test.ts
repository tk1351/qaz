import { describe, it, expect } from 'vitest'
import { convertToUpperCase } from './convertToUpperCase'

describe('Testing convertToUpperCase', () => {
  it('渡された小文字の文字列が、正しく大文字に変換されること', () => {
    const expectedValue = 'VALUE'
    const result = convertToUpperCase('value')
    expect(result).toBe(expectedValue)
  })

  it('渡された一部が小文字の文字列が、正しく大文字に変換されること', () => {
    const expectedValue = 'VALUE'
    const result = convertToUpperCase('vaLUE')
    expect(result).toBe(expectedValue)
  })

  it('渡されたスペースが含まれる文字列が、正しく大文字に変換されること', () => {
    const expectedValue = 'CONVERT TO UPPERCASE'
    const result = convertToUpperCase('Convert to uppercase')
    expect(result).toBe(expectedValue)
  })
})
