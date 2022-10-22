import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProfileCard } from './ProfileCard'

const setup = () => {
  const mockFunction = vi.fn()
  const utils = render(
    <ProfileCard
      width={250}
      height={250}
      imageHeight={100}
      imageSrc={''}
      name={'name'}
      job={'job'}
      onClick={mockFunction}
    />
  )
  return { ...utils, mockFunction }
}

describe('Testing ProfileCard Component', () => {
  describe('role', () => {
    it('role="link" が含まれていること', () => {
      setup()
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('name', () => {
      it('正しく name が表示されていること', () => {
        setup()
        const expectedName = 'name'
        expect(screen.getByText(expectedName)).toBeInTheDocument()
      })
    })
    describe('job', () => {
      it('正しく job が表示されていること', () => {
        setup()
        const expectedJob = 'job'
        expect(screen.getByText(expectedJob)).toBeInTheDocument()
      })
    })
  })

  describe('Event', () => {
    describe('onClick', () => {
      it('ProfileCard コンポーネントをクリックしたときに、1度 handleClick が発動すること', async () => {
        const { mockFunction } = setup()
        await userEvent.click(screen.getByTestId('profile-card'))
        expect(mockFunction).toHaveBeenCalledTimes(1)
      })
    })
  })
})
