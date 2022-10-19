import { FC } from 'react'
import styled from 'styled-components'
import { MovieCard } from '../../atoms/MovieCard/MovieCard'
import { Grid } from '../../atoms/Grid/Grid'
import { MovieCardType } from '../../../shared/types'

type Props = {
  rowGap: string
  columnGap: string
  minLength: string
  movies: ReadonlyArray<MovieCardType>
  onClick: () => void
}

export const MovieList: FC<Props> = ({
  rowGap,
  columnGap,
  minLength,
  movies,
  onClick
}) => (
  <StyledMovieList>
    <Grid rowGap={rowGap} columnGap={columnGap} minLength={minLength}>
      {movies.map(({ id, title, directorName, country, year, imageURL }) => (
        <StyledMovieListItem key={id}>
          <MovieCard
            imageURL={imageURL}
            height={200}
            width={370}
            title={title}
            directorName={directorName}
            country={country}
            year={year}
            onClick={onClick}
          />
        </StyledMovieListItem>
      ))}
    </Grid>
  </StyledMovieList>
)

const StyledMovieList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledMovieListItem = styled.li`
  width: 370px;
  height: 200px;
`
