import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MovieList } from './MovieList'
import { MovieCardType } from '../../../shared/types'

const dummyMovie: MovieCardType = {
  id: 1,
  title: 'Movie Title',
  directorName: 'DirectorName',
  country: 'Country',
  year: '2022',
  imageURL:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}

const setup = () => {
  const mockFunction = vi.fn()
  const utils = render(
    <MovieList
      rowGap="10px"
      columnGap="10px"
      minLength="370px"
      movies={[dummyMovie]}
      onClick={mockFunction}
    />
  )
  return { ...utils, mockFunction }
}

describe('Testing MovieList Component', () => {
  describe('role', () => {
    it('role="list" が含まれていること', () => {
      setup()
      const list = screen.getByRole('list')
      expect(list).toBeInTheDocument()
    })
    it('role="listitem" が含まれていること', () => {
      setup()
      const listitem = screen.getByRole('listitem')
      expect(listitem).toBeInTheDocument()
    })
  })
})
