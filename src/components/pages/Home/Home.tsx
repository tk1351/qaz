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

export const Home: FC = () => {
  const { data: nowPlayingData } = useNowPlaying()

  const getRandomArbitrary = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.ceil(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const index = getRandomArbitrary(0, 19)
  const nowMovieImage = nowPlayingData
    ? `https://image.tmdb.org/t/p/original${nowPlayingData[index].backdrop_path}`
    : ''

  if (nowPlayingData) {
    // eslint-disable-next-line camelcase
    const { id, title, overview, release_date } = nowPlayingData[index]
    const year = nowPlayingData ? excludeFromString(release_date, '-') : ''

    const { data: movieDetail } = useMovieDetail(id)
    const { data: movieCredits } = useMovieCredits(id)

    const crew = movieCredits?.crew
    const directorName = crew?.find((person) => person.job === 'Director')?.name
    const country = movieDetail?.production_countries[0]?.name
    return (
      <StyledHomeWrapper>
        <HeroImage imageURL={nowMovieImage}>
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
                  {directorName}
                </span>
                <StyledCountryAndYearText>
                  {country} {year}
                </StyledCountryAndYearText>
              </Cluster>
              <StyledOverview>{overview}</StyledOverview>
            </Stack>
          </StyledDescriptionWrapper>
        </HeroImage>
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
  width: 400px;
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
