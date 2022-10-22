import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MovieSynopsis } from './MovieSynopsis'

describe('Testing MovieSynopsis Component', () => {
  describe('Props', () => {
    describe('description', () => {
      it('正しく description が表示されていること', () => {
        render(<MovieSynopsis description={'description'} />)
        const expectedDescription = 'description'
        expect(screen.getByText(expectedDescription)).toBeInTheDocument()
      })
    })
  })
})
