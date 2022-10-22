import { describe, it, vi, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MovieDescription } from './MovieDescription'

const setup = () => {
  const mockFunction = vi.fn()
  const utils = render(
    <MovieDescription
      title={'title'}
      originalTitle={'originalTitle'}
      directorName={'directorName'}
      country={'country'}
      year={'year'}
      genre={'genre'}
      runtime={10}
      language={'language'}
      onClickLink={mockFunction}
    />
  )
  return { ...utils, mockFunction }
}

describe('Testing MovieDescription Component', () => {
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
    describe('originalTitle', () => {
      it('正しく originalTitle が表示されていること', () => {
        setup()
        const expectedOriginalTitle = 'originalTitle'
        expect(screen.getByText(expectedOriginalTitle)).toBeInTheDocument()
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
        const expectedCountry = 'country,'
        expect(screen.getByText(expectedCountry)).toBeInTheDocument()
      })
    })
    describe('year', () => {
      it('正しく year が表示されていること', () => {
        setup()
        const expectedYear = 'year'
        expect(screen.getByText(expectedYear)).toBeInTheDocument()
      })
    })
    describe('genre', () => {
      it('正しく genre が表示されていること', () => {
        setup()
        const expectedGenre = 'genre'
        expect(screen.getByText(expectedGenre)).toBeInTheDocument()
      })
    })
    describe('runtime', () => {
      it('正しく runtime が表示されていること', () => {
        setup()
        const expectedRuntime = '10'
        expect(screen.getByText(expectedRuntime)).toBeInTheDocument()
      })
    })
    describe('language', () => {
      it('正しく language が表示されていること', () => {
        setup()
        const expectedLanguage = 'language'
        expect(screen.getByText(expectedLanguage)).toBeInTheDocument()
      })
    })
  })

  describe('Event', () => {
    describe('onClickLink', () => {
      it('a 要素をクリックしたときに、1度 handleClickLink が発動すること', async () => {
        const { mockFunction } = setup()
        await userEvent.click(screen.getByRole('link'))
        expect(mockFunction).toHaveBeenCalledTimes(1)
      })
    })
  })
})
