import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Header } from './Header'

describe('Testing Header Component', () => {
  test('QAZ と表示されていること', () => {
    render(<Header />)
    expect(screen.getByText('QAZ')).toBeInTheDocument()
  })

  test('role が navigation であること', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
