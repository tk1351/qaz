import { useQuery } from '@tanstack/react-query'
import { axiosBase } from '../../../api'
import { Person, PersonCredits } from '../../../api/types/people'

export const usePersonDetail = (id: number) =>
  useQuery(
    ['personDetail', id],
    async () => {
      const { data } = await axiosBase.get<Person>(
        `/person/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      )
      return data
    },
    { enabled: Boolean(id) }
  )

export const usePersonCredits = (id: number) =>
  useQuery(['personCredits', id], async () => {
    const { data } = await axiosBase.get<PersonCredits>(
      `/person/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
    )
    return data
  })
