import { FC, MouseEvent } from 'react'
import styled from 'styled-components'
import { Stack } from '../../atoms/Stack/Stack'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { IconButton } from '../../atoms/IconButton/IconButton'
import { ReactComponent as Star } from '../../../assets/icons/star_FILL0_wght400_GRAD0_opsz48.svg'
import { ReactComponent as Favorite } from '../../../assets/icons/favorite_FILL0_wght400_GRAD0_opsz48.svg'
import tokens from '../../../../data/build/tokens'
import { VIEW_BOX } from '../../../shared/svg'

type Props = {
  title: string
  originalTitle: string
  directorName: string
  country: string
  year: string
  genre: string
  runtime: number
  language: string
  onClickLink: () => void
}

export const MovieDescription: FC<Props> = ({
  title,
  originalTitle,
  directorName,
  country,
  year,
  runtime,
  genre,
  language,
  onClickLink
}) => {
  const handleClickLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onClickLink()
  }

  return (
    <StyledMovieDescription>
      <Stack space="4px">
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <StyledMovieOriginalTitle>{originalTitle}</StyledMovieOriginalTitle>
        <Cluster gap="2px">
          <StyledMovieDirectorWrapper>
            Directed by{' '}
            <StyledMovieDirectorLink href="#" onClick={handleClickLink}>
              <StyledMovieDirectorName>{directorName}</StyledMovieDirectorName>
            </StyledMovieDirectorLink>
          </StyledMovieDirectorWrapper>
        </Cluster>
        <Cluster gap="2px">
          <StyledMovieCountry>{country},</StyledMovieCountry>
          <StyledMovieYear>{year}</StyledMovieYear>
        </Cluster>
        <StyledMovieGenres>{genre}</StyledMovieGenres>
        <StyledMovieDescriptionWrapper>
          <Cluster gap="4px">
            <StyledMovieRuntime>{runtime}</StyledMovieRuntime>
            <StyledMovieLanguage>{language}</StyledMovieLanguage>
          </Cluster>
        </StyledMovieDescriptionWrapper>
      </Stack>
      <StyledMovieActionsWrapper>
        <Cluster gap="10px">
          <IconButton
            buttonWidth={32}
            buttonHeight={32}
            svgWidth={28}
            svgHeight={28}
            disabled={false}
            onClick={() => {}}
          >
            <Star viewBox={VIEW_BOX} />
          </IconButton>
          <IconButton
            buttonWidth={32}
            buttonHeight={32}
            svgWidth={28}
            svgHeight={28}
            disabled={false}
            onClick={() => {}}
          >
            <Favorite viewBox={VIEW_BOX} />
          </IconButton>
        </Cluster>
      </StyledMovieActionsWrapper>
    </StyledMovieDescription>
  )
}

const StyledMovieDescription = styled.div``

const StyledMovieDescriptionWrapper = styled.div`
  border-bottom: 1px solid ${tokens.global.White['1'].value};
`

const StyledMovieTitle = styled.h2`
  margin: 0;
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.xl.value};
  font-weight: bold;
`

const StyledMovieOriginalTitle = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.sm.value};
  font-weight: bold;
`

const StyledMovieDirectorWrapper = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px;
`

const StyledMovieDirectorLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: 2px underline ${tokens.global.White['1'].value};
  }
`

const StyledMovieDirectorName = styled.span`
  color: ${tokens.global.White['1'].value};
  font-weight: bold;
`

const StyledMovieCountry = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px;
`

const StyledMovieYear = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: 12px;
`

const StyledMovieGenres = styled.span`
  color: ${tokens.global.White['5'].value};
  font-size: 12px;
`

const StyledMovieRuntime = styled.span`
  color: ${tokens.global.White['5'].value};
  font-size: 12px;
`

const StyledMovieLanguage = styled.span`
  color: ${tokens.global.White['5'].value};
  font-size: 12px;
`

const StyledMovieActionsWrapper = styled.div`
  margin-top: 10px;
`
