/* eslint-disable camelcase */
import { FC } from 'react'
import { useMatch } from '@tanstack/react-location'
import styled from 'styled-components'
import { useMovieCredits, useMovieDetail } from '../../../features/api/movie'
import { imageUrl } from '../../../features/imageUrl'
import { HeroImage } from '../../atoms/HeroImage/HeroImage'
import tokens from '../../../../data/build/tokens'
import { MovieDescription } from '../../commons/MovieDescription/MovieDescription'
import { MovieSynopsis } from '../../commons/MovieSynopsis/MovieSynopsis'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { excludeFromString } from '../../../features/excludeFromString'
import { ProfileList } from '../../commons/ProfileList/ProfileList'
import { mappedJob, ProfileCardType } from '../../../shared/types'

export const MovieDetail: FC = () => {
  const { params } = useMatch()
  const { data: movieDetail } = useMovieDetail(Number(params.id))
  const { data: movieCredits } = useMovieCredits(Number(params.id))
  if (movieDetail && movieCredits) {
    const {
      title,
      original_title,
      overview,
      backdrop_path,
      release_date,
      genres,
      runtime,
      original_language,
      production_countries
    } = movieDetail
    const { crew, cast } = movieCredits

    const orderedImage = imageUrl(backdrop_path)
    const orderedDescription = overview || ''
    const orderedYear = excludeFromString(release_date, '-')
    const orderedGenre = genres.map((genre) => genre.name).join(',')
    const orderedRuntime = runtime || 0
    const orderedCountry = production_countries[0].name
    const orderedDirector = crew?.find((person) => person.job === 'Director')
    const orderedDirectorId = orderedDirector?.id || ''
    const orderedDirectorName = orderedDirector?.name || ''

    const jobIndex = (job: string) => {
      switch (job) {
        case 'Director':
          return 1
        case 'Writer':
          return 2
        case 'Director of Photography':
          return 3
        case 'Producer':
          return 4
        default:
          return 0
      }
    }

    const orderedCrew: ProfileCardType[] = crew
      ?.filter(
        (person) =>
          person.job === mappedJob.director ||
          person.job === mappedJob.writer ||
          person.job === mappedJob.photographer ||
          person.job === mappedJob.producer
      )
      .map(({ id, name, job, profile_path }) => ({
        index: jobIndex(job),
        id,
        name,
        job,
        imageSrc: imageUrl(profile_path)
      }))
      .sort((a, b) => {
        if (a.index > b.index) return 1
        if (a.index < b.index) return -1
        return 0
      })

    const orderedCast: ProfileCardType[] = cast
      ?.map(({ id, name, profile_path }) => ({
        index: 9,
        id,
        name,
        job: 'Cast',
        imageSrc: imageUrl(profile_path)
      }))
      .slice(0, 20)

    const orderedProfiles = [...orderedCrew, ...orderedCast]
    return (
      <StyledMovieDetailWrapper>
        <HeroImage imageURL={orderedImage}>
          <StyledDescriptionWrapper>
            <Cluster>
              <MovieDescription
                title={title}
                originalTitle={original_title}
                directorName={orderedDirectorName}
                country={orderedCountry}
                year={orderedYear}
                genre={orderedGenre}
                runtime={orderedRuntime}
                language={original_language}
                onClickLink={() => console.log(orderedDirectorId)}
              />
              <MovieSynopsis description={orderedDescription} />
            </Cluster>
          </StyledDescriptionWrapper>
        </HeroImage>
        <StyledMovieDetailBottomWrapper>
          <StyledCastAndCrew>Cast & Crew</StyledCastAndCrew>
          <ProfileList
            rowGap="10px"
            columnGap="5px"
            minLength="180px"
            profiles={orderedProfiles}
          />
        </StyledMovieDetailBottomWrapper>
      </StyledMovieDetailWrapper>
    )
  }

  return null
}

const StyledMovieDetailWrapper = styled.div`
  height: 876px;
`

const StyledDescriptionWrapper = styled.div`
  height: 100%;
  width: 800px;
`

const StyledMovieDetailBottomWrapper = styled.div`
  min-height: 500px;
  padding: 40px 160px;
  background-color: ${tokens.global.Black['1'].value};
`

const StyledCastAndCrew = styled.h3`
  color: ${tokens.global.White[1].value};
  font-size: ${tokens.global.lg.value}px;
  margin-bottom: 20px;
`
