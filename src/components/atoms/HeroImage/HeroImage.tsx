import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  imageURL: string
  children: ReactNode
}

export const HeroImage: FC<Props> = ({ imageURL, children }) => (
  <StyledHeroWrapper imageURL={imageURL}>
    <StyledContentColumnWrapper>
      <StyledContentFlexWrapper>{children}</StyledContentFlexWrapper>
    </StyledContentColumnWrapper>
  </StyledHeroWrapper>
)

const StyledHeroWrapper = styled.div<{ imageURL: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ imageURL }) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageURL})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 160px 30px;
  box-sizing: border-box;
`

const StyledContentColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

const StyledContentFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
