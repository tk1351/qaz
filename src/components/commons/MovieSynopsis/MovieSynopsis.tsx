import { FC } from 'react'
import styled from 'styled-components'
import { Stack } from '../../atoms/Stack/Stack'
import tokens from '../../../../data/build/tokens'

type Props = {
  description: string
}

export const MovieSynopsis: FC<Props> = ({ description }) => (
  <StyledMovieSynopsis>
    <Stack space="8px">
      <StyledMovieSynopsisLabel>Synopsis</StyledMovieSynopsisLabel>
      <StyledMovieSynopsisDescription>
        {description}
      </StyledMovieSynopsisDescription>
    </Stack>
  </StyledMovieSynopsis>
)

const StyledMovieSynopsis = styled.div``

const StyledMovieSynopsisLabel = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.sm.value};
  font-weight: bold;
`

const StyledMovieSynopsisDescription = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global['2sm'].value}px;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
`
