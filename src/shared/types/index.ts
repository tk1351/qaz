export type MovieCardType = {
  id: number
  title: string
  directorName: string
  country: string
  year: string
  imageURL: string
}

export type ProfileCardType = {
  index: number
  id: number
  name: string
  job: string
  imageSrc: string
}

export const mappedJob = {
  director: 'Director',
  writer: 'Writer',
  photographer: 'Director of Photography',
  producer: 'Producer'
} as const
