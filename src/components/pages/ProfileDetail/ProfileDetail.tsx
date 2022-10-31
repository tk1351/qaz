import { FC } from 'react'
import { useMatch } from '@tanstack/react-location'
import styled from 'styled-components'
import { Cast, Crew } from '../../../../api/types/people'
import tokens from '../../../../data/build/tokens'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { imageUrl } from '../../../features/imageUrl'
import { Stack } from '../../atoms/Stack/Stack'
import { mappedJob, MovieCardType } from '../../../shared/types'
import { MovieList } from '../../commons/MovieList/MovieList'
import { excludeFromString } from '../../../features/excludeFromString'
import { convertToUpperCase } from '../../../features/convertToUpperCase'
import { usePersonCredits, usePersonDetail } from '../../../features/api/people'

export const ProfileDetail: FC = () => {
  const { params } = useMatch()
  const { data: personDetail } = usePersonDetail(Number(params.id))
  const { data: personCredits } = usePersonCredits(Number(params.id))
  if (personDetail && personCredits) {
    // eslint-disable-next-line camelcase
    const { name, profile_path } = personDetail
    const { cast, crew } = personCredits

    const orderedImage = imageUrl(profile_path)

    const isCast = cast.length >= 1

    const jobs = crew
      .map((person) => person.job)
      .filter(
        (job) =>
          job === mappedJob.director ||
          job === mappedJob.writer ||
          job === mappedJob.producer ||
          job === mappedJob.photographer
      )

    const orderedJobs = (isCast: boolean, jobs: string[]) => {
      if (isCast) {
        return ['Cast', ...new Set(jobs)].join(' | ')
      }

      return [...new Set(jobs)].join(' | ')
    }

    const directorsMovie: Crew[] = crew.filter(
      (person) => person.job === mappedJob.director
    )

    const writersMovie: Crew[] = crew.filter(
      (person) => person.job === mappedJob.writer
    )

    const photographersMovie: Crew[] = crew.filter(
      (person) => person.job === mappedJob.photographer
    )

    const producersMovie: Crew[] = crew.filter(
      (person) => person.job === mappedJob.producer
    )

    const orderedMoviesList = (data: Cast[] | Crew[]): MovieCardType[] =>
      data
        .map(
          // eslint-disable-next-line camelcase
          ({ id, title, release_date, backdrop_path, original_language }) => ({
            id,
            title,
            directorName: 'director name',
            year: excludeFromString(release_date, '-'),
            country: convertToUpperCase(original_language),
            imageURL: imageUrl(backdrop_path)
          })
        )
        .sort((a, b) => {
          if (a.year > b.year) return -1
          if (a.year < b.year) return 1
          return 0
        })

    return (
      <StyledProfileDetailWrapper>
        <StyledProfileWrapper>
          <Cluster gap="50px" align="flex-start" wrap="nowrap">
            <StyledProfileImage src={orderedImage} alt="" />
            <Stack space="10px">
              <StyledProfileName>{name}</StyledProfileName>
              <StyledProfileJob>{orderedJobs(isCast, jobs)}</StyledProfileJob>
            </Stack>
          </Cluster>
        </StyledProfileWrapper>
        <StyledCreditsWrapper>
          <Stack>
            {directorsMovie.length !== 0 && (
              <>
                <StyledJobHeading>{mappedJob.director}</StyledJobHeading>
                <MovieList
                  rowGap="10px"
                  columnGap="10px"
                  minLength="320px"
                  movies={orderedMoviesList(directorsMovie)}
                />
              </>
            )}
            {writersMovie.length !== 0 && (
              <>
                <StyledJobHeading>{mappedJob.writer}</StyledJobHeading>
                <MovieList
                  rowGap="10px"
                  columnGap="10px"
                  minLength="320px"
                  movies={orderedMoviesList(writersMovie)}
                />
              </>
            )}
            {photographersMovie.length !== 0 && (
              <>
                <StyledJobHeading>{mappedJob.photographer}</StyledJobHeading>
                <MovieList
                  rowGap="10px"
                  columnGap="10px"
                  minLength="320px"
                  movies={orderedMoviesList(photographersMovie)}
                />
              </>
            )}
            {producersMovie.length !== 0 && (
              <>
                <StyledJobHeading>{mappedJob.producer}</StyledJobHeading>
                <MovieList
                  rowGap="10px"
                  columnGap="10px"
                  minLength="320px"
                  movies={orderedMoviesList(producersMovie)}
                />
              </>
            )}
            {cast.length !== 0 && (
              <>
                <StyledJobHeading>Cast</StyledJobHeading>
                <MovieList
                  rowGap="10px"
                  columnGap="10px"
                  minLength="320px"
                  movies={orderedMoviesList(cast)}
                />
              </>
            )}
          </Stack>
        </StyledCreditsWrapper>
      </StyledProfileDetailWrapper>
    )
  }

  return null
}

const StyledProfileDetailWrapper = styled.div``

const StyledProfileWrapper = styled.div`
  height: 345px;
  background-color: ${tokens.global.Green['1'].value};
  padding: 30px 160px 10px;
`
const StyledCreditsWrapper = styled.div`
  min-height: 500px;
  padding: 40px 160px;
`

const StyledProfileImage = styled.img`
  width: 240px;
  height: 285px;
  filter: grayscale(100%);
  object-fit: cover;
`

const StyledProfileName = styled.h2`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.xl.value}px;
`

const StyledProfileJob = styled.p`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.sm.value}px;
`

const StyledJobHeading = styled.h3`
  color: ${tokens.global.White[1].value};
  font-size: ${tokens.global.lg.value}px;
  margin-bottom: 20px;
`
