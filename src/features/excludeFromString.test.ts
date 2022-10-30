import { describe, it, expect } from 'vitest'
import { excludeFromString } from './excludeFromString'

describe('excludeFromString', () => {
  it('渡ってきた文字列から、任意の文字以降を除外した文字列を返すこと', () => {
    const result = excludeFromString('qwertyuiop[]', 't')
    expect(result).toBe('qwer')
  })
})
