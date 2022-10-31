import { FC, MouseEvent } from 'react'
import { useNavigate } from '@tanstack/react-location'
import styled from 'styled-components'
import tokens from '../../../../data/build/tokens'

const ProfileCardSize = {
  WIDTH: 180,
  HEIGHT: 313,
  IMAGE_HEIGHT: 214
} as const

type Props = {
  width: number
  height: number
  imageHeight: number
  id: number
  imageSrc: string
  name: string
  job: string
}

export const ProfileCard: FC<Props> = ({
  width = ProfileCardSize.WIDTH,
  height = ProfileCardSize.HEIGHT,
  imageHeight = ProfileCardSize.IMAGE_HEIGHT,
  id,
  imageSrc,
  name,
  job
}) => {
  const navigate = useNavigate()
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    navigate({ to: `/profile/${id}` })
  }

  return (
    <StyledProfileCardWrapper
      width={width}
      height={height}
      onClick={handleClick}
      data-testid="profile-card"
    >
      <StyledProfileCardLink href="#">
        <StyledProfileImageWrapper imageHeight={imageHeight}>
          <StyledProfileImage src={imageSrc} alt="" imageHeight={imageHeight} />
        </StyledProfileImageWrapper>
        <StyledProfileDescriptionWrapper imageHeight={imageHeight}>
          <StyledProfileName>{name}</StyledProfileName>
          <StyledProfileJob>{job}</StyledProfileJob>
        </StyledProfileDescriptionWrapper>
      </StyledProfileCardLink>
    </StyledProfileCardWrapper>
  )
}

const StyledProfileCardWrapper = styled.div<{
  width: number
  height: number
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: relative;
`

const StyledProfileCardLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-decoration: none;
`

const StyledProfileImageWrapper = styled.div<{ imageHeight: number }>`
  width: 100%;
  height: ${({ imageHeight }) => `${imageHeight}px`};
`

const StyledProfileImage = styled.img<{ imageHeight: number }>`
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  object-fit: cover;
`

const StyledProfileDescriptionWrapper = styled.div<{ imageHeight: number }>`
  width: 100%;
  height: ${({ imageHeight }) => `calc(100% - ${imageHeight}px)`};
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${tokens.global.Green['1'].value};
`

const StyledProfileName = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global.sm.value}px;
  font-weight: bold;
  line-height: 1.2;

  ${StyledProfileCardWrapper}:hover & {
    color: ${tokens.global.White['5'].value};
  }
`

const StyledProfileJob = styled.span`
  color: ${tokens.global.White['1'].value};
  font-size: ${tokens.global['2sm'].value}px;
  line-height: 1.2;

  ${StyledProfileCardWrapper}:hover & {
    color: ${tokens.global.White['5'].value};
  }
`
