import { Result } from './index'

export type SearchMovie = {
  page: number
  results: Result[]
  total_results: number
  total_pages: number
}

export type SearchPerson = {
  page: number
  results: {
    profile_path: string | null
    adult: boolean
    id: number
    known_for:
      | {
          poster_path: string | null
          adult: boolean
          overview: string
          release_date: string
          original_title: string
          genre_ids: number[]
          id: number
          media_type: string
          original_language: string
          title: string
          backdrop_path: string | null
          popularity: number
          vote_count: number
          video: boolean
          vote_average: number
        }
      | {
          poster_path: string | null
          popularity: number
          id: number
          overview: string
          backdrop_path: string | null
          vote_average: number
          media_type: string
          first_air_date: string
          origin_country: string[]
          genre_ids: number[]
          original_language: string
          vote_count: number
          name: string
          original_name: string
        }
    name: string
    popularity: number
  }[]
  total_results: number
  total_pages: number
}
