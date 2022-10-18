import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MovieCard } from './MovieCard'

const setup = () => {
  const mockFunction = vi.fn()
  const utils = render(
    <MovieCard
      imageURL={''}
      height={250}
      width={250}
      title={'title'}
      directorName={'directorName'}
      country={'country'}
      year={'2022'}
      onClick={mockFunction}
    />
  )
  return { ...utils, mockFunction }
}

describe('Testing MovieCard Component', () => {
  describe('role', () => {
    it('role="link" が含まれていること', () => {
      setup()
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('正しく title が表示されていること', () => {
        setup()
        const expectedTitle = 'title'
        expect(screen.getByText(expectedTitle)).toBeInTheDocument()
      })
    })
    describe('directorName', () => {
      it('正しく directorName が表示されていること', () => {
        setup()
        const expectedDirectorName = 'directorName'
        expect(screen.getByText(expectedDirectorName)).toBeInTheDocument()
      })
    })
    describe('country', () => {
      it('正しく country が表示されていること', () => {
        setup()
        const expectedCountry = 'country'
        expect(screen.getByText(expectedCountry)).toBeInTheDocument()
      })
    })
    describe('year', () => {
      it('正しく year が表示されていること', () => {
        setup()
        const expectedYear = '2022'
        expect(screen.getByText(expectedYear)).toBeInTheDocument()
      })
    })
  })

  describe('Event', () => {
    describe('onClick', () => {
      it('MovieCard コンポーネントをクリックしたときに、1度 handleClick が発動すること', async () => {
        const { mockFunction } = setup()
        const user = userEvent.setup()
        await user.click(screen.getByTestId('movie-card'))
        expect(mockFunction).toHaveBeenCalledTimes(1)
      })
    })
  })
})
