import { FC } from 'react'
import styled from 'styled-components'
import tokens from '../../../../data/build/tokens'

const MovieCardSize = {
  HEIGHT: 200,
  WIDTH: 370
} as const

type Props = {
  imageURL: string
  height: number
  width: number
  title: string
  directorName: string
  country: string
  year: string
  onClick: () => void
}

export const MovieCard: FC<Props> = ({
  imageURL,
  height = MovieCardSize.HEIGHT,
  width = MovieCardSize.WIDTH,
  title,
  directorName,
  country,
  year,
  onClick
}) => {
  const handleClick = (event: any) => {
    event.preventDefault()
    onClick()
  }

  return (
    <StyledMovieCardWrapper
      onClick={handleClick}
      imageURL={imageURL}
      height={height}
      width={width}
      data-testid="movie-card"
    >
      <StyledMovieCardLink href="#" />
      <StyledMovieCardDescriptionWrapper>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieCardSubDescriptionWrapper>
          <StyledDirectorName>{directorName}</StyledDirectorName>
          <StyledCountry>{country}</StyledCountry>
          <StyledYear>{year}</StyledYear>
        </StyledMovieCardSubDescriptionWrapper>
      </StyledMovieCardDescriptionWrapper>
    </StyledMovieCardWrapper>
  )
}

const StyledMovieCardWrapper = styled.div<{
  imageURL: string
  height: number
  width: number
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-image: ${({ imageURL }) =>
    `linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.4)), url(${imageURL})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 20px 10px;
  box-sizing: border-box;
  position: relative;

  &:hover {
    background-image: ${({ imageURL }) =>
      `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45)), url(${imageURL})`};
  }
`

const StyledMovieCardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const StyledMovieCardLink = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledMovieTitle = styled.h3`
  margin: 0;
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.lg.value}px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledMovieCardSubDescriptionWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const StyledDirectorName = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px; // FIXME: tokens データから取得するよう修正
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledCountry = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px; // FIXME: tokens データから取得するよう修正
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledYear = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px; // FIXME: tokens データから取得するよう修正
`
