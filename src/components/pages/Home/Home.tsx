import React, { FC } from 'react'
import styled from 'styled-components'
import { HeroImage } from '../../atoms/HeroImage/HeroImage'
import tokens from '../../../../data/build/tokens'
import { Stack } from '../../atoms/Stack/Stack'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { excludeFromString } from '../../../features/excludeFromString'
import {
  useMovieCredits,
  useMovieDetail,
  useNowPlaying
} from '../../../features/api/movie'
import { MovieList } from '../../commons/MovieList/MovieList'
import { mappedJob, MovieCardType } from '../../../shared/types'
import { Movie, MovieCredits } from '../../../../api/types/movies'
import { imageUrl } from '../../../features/imageUrl'

export const Home: FC = () => {
  const getRandomArbitrary = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const index = getRandomArbitrary(0, 19)

  const { data: nowPlayingData } = useNowPlaying()

  if (nowPlayingData) {
    // eslint-disable-next-line camelcase
    const { id, title, overview, release_date, backdrop_path } =
      nowPlayingData[index]
    const image = imageUrl(backdrop_path)
    const year = nowPlayingData ? excludeFromString(release_date, '-') : ''

    const nowPlayingMovieIds = nowPlayingData.map((data) => data.id)

    const nowPlayingDetailsAndCredits = nowPlayingMovieIds.map((id) => {
      const { data: movieDetails } = useMovieDetail(id)
      const { data: movieCredits } = useMovieCredits(id)
      return {
        movieDetails,
        movieCredits
      }
    })

    const findMovieById = (
      id: number,
      movies: {
        movieDetails: Movie | undefined
        movieCredits: MovieCredits | undefined
      }[]
    ) =>
      movies.find(({ movieDetails }) => movieDetails && movieDetails.id === id)

    const heroDirectorName = findMovieById(
      id,
      nowPlayingDetailsAndCredits
    )?.movieCredits?.crew?.find(
      (person) => person.job === mappedJob.director
    )?.name

    const heroCountry = findMovieById(id, nowPlayingDetailsAndCredits)
      ?.movieDetails?.production_countries[0]?.name

    const movieCardDirectorName = (id: number) => {
      const target = findMovieById(id, nowPlayingDetailsAndCredits)

      return target?.movieCredits?.crew.find(
        (person) => person.job === 'Director'
      )?.name
    }

    const movieCardCountry = (id: number) => {
      const target = findMovieById(id, nowPlayingDetailsAndCredits)

      return target?.movieDetails?.production_countries[0]?.name
    }

    const movies: MovieCardType[] = nowPlayingData.map(
      // eslint-disable-next-line camelcase
      ({ id, title, release_date, backdrop_path }) => ({
        id,
        title,
        directorName: movieCardDirectorName(id) || '',
        country: movieCardCountry(id) || '',
        year: excludeFromString(release_date, '-'),
        imageURL: imageUrl(backdrop_path)
      })
    )

    return (
      <StyledHomeWrapper>
        <HeroImage imageURL={image}>
          <StyledDescriptionWrapper>
            <Stack space="6px">
              <StyledNowPlayingText>Now Playing</StyledNowPlayingText>
              <StyledMovieTitleText>{title}</StyledMovieTitleText>
              <Cluster gap="4px">
                <span
                  style={{
                    color: tokens.global.White['1'].value,
                    fontSize: `${tokens.global.sm.value}px`,
                    fontWeight: 'bold'
                  }}
                >
                  {heroDirectorName}
                </span>
                <StyledCountryAndYearText>
                  {heroCountry} {year}
                </StyledCountryAndYearText>
              </Cluster>
              <StyledOverview>{overview}</StyledOverview>
            </Stack>
          </StyledDescriptionWrapper>
        </HeroImage>
        <StyledNowPlayingListWrapper>
          <MovieList
            rowGap="10px"
            columnGap="10px"
            minLength="320px"
            movies={movies}
          />
        </StyledNowPlayingListWrapper>
      </StyledHomeWrapper>
    )
  }

  return null
}

const StyledHomeWrapper = styled.div`
  height: 876px;
`

const StyledDescriptionWrapper = styled.div`
  height: 100%;
  width: 450px;
`

const StyledNowPlayingText = styled.p`
  margin: 0;
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global['2sm'].value}px;
`

const StyledMovieTitleText = styled.h2`
  margin: 0;
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.xl.value}px;
  line-height: 1;
`

const StyledOverview = styled.p`
  margin: 0;
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global['2sm'].value}px;
`

const StyledCountryAndYearText = styled.span`
  color: ${tokens.global.White['1'].value};
`

const StyledNowPlayingListWrapper = styled.div`
  min-height: 500px;
  padding: 40px 160px;
  background-color: ${tokens.global.Black['1'].value};
`
