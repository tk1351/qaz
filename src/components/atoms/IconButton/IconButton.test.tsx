import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from './IconButton'

const setup = (disabled: boolean) => {
  const mockFunction = vi.fn()
  const utils = render(
    <IconButton
      buttonWidth={32}
      buttonHeight={32}
      svgWidth={24}
      svgHeight={24}
      disabled={disabled}
      onClick={mockFunction}
    >
      Icon Button
    </IconButton>
  )
  return { ...utils, mockFunction }
}

describe('Testing IconButton Component', () => {
  describe('role', () => {
    it('role="button" が含まれていること', () => {
      setup(false)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('disabled', () => {
      it('disabled が true の場合、 disabled 属性が付与されていること', () => {
        setup(true)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
      })

      it('disabled が false の場合、 disabled 属性が付与されていないこと', () => {
        setup(false)
        const button = screen.getByRole('button')
        expect(button).toBeEnabled()
      })
    })
  })

  describe('Event', () => {
    describe('onClick', () => {
      it('IconButton コンポーネントをクリックしたときに、 onClick が1度発動すること', async () => {
        const { mockFunction } = setup(false)
        await userEvent.click(screen.getByRole('button'))
        expect(mockFunction).toHaveBeenCalledTimes(1)
      })
    })
  })
})
