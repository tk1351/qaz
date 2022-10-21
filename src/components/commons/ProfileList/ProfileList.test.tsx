import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileCardType } from '../../../shared/types'
import { ProfileList } from './ProfileList'

const dummyProfile: ProfileCardType = {
  id: 1,
  name: 'Profile Name',
  job: 'Profile Job',
  imageSrc: ''
}

const setup = () => {
  const mockFunction = vi.fn()
  const utils = render(
    <ProfileList
      rowGap="10px"
      columnGap="10px"
      minLength="180px"
      profiles={[dummyProfile]}
      onClick={mockFunction}
    />
  )
  return { ...utils, mockFunction }
}

describe('Testing ProfileList Component', () => {
  describe('role', () => {
    it('role="list"が含まれていること', () => {
      setup()
      const list = screen.getByRole('list')
      expect(list).toBeInTheDocument()
    })
    it('role="listitem"が含まれていること', () => {
      setup()
      const listitem = screen.getByRole('listitem')
      expect(listitem).toBeInTheDocument()
    })
  })
})
