import { useQuery } from '@tanstack/react-query'
import { axiosBase } from '../../../api'
import { Movie, MovieCredits, NowPlaying } from '../../../api/types/movies'

export const useNowPlaying = () =>
  useQuery(['nowPlaying'], async () => {
    const { data } = await axiosBase.get<NowPlaying>(
      `/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&page=1`
    )
    return data.results
  })

export const useMovieDetail = (id: number) =>
  useQuery(
    ['movieDetail', id],
    async () => {
      const { data } = await axiosBase.get<Movie>(
        `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
      )
      return data
    },
    { enabled: Boolean(id) }
  )

export const useMovieCredits = (id: number) =>
  useQuery(
    ['movieCredits', id],
    async () => {
      const { data } = await axiosBase.get<MovieCredits>(
        `/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
      )
      return data
    },
    { enabled: Boolean(id) }
  )
