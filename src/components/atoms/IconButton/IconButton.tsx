import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import styled from 'styled-components'
import tokens from '../../../../data/build/tokens'
import { SvgSize } from '../../../shared/svg'

const IconButtonSize = {
  WIDTH: 32,
  HEIGHT: 32
} as const

type Props = {
  buttonWidth: number
  buttonHeight: number
  svgWidth: number
  svgHeight: number
  onClick: () => void
  children: ReactNode
} & ComponentPropsWithoutRef<'button'>

export const IconButton: FC<Props> = ({
  buttonWidth = IconButtonSize.WIDTH,
  buttonHeight = IconButtonSize.HEIGHT,
  svgWidth = SvgSize.WIDTH,
  svgHeight = SvgSize.HEIGHT,
  onClick,
  children,
  type = 'button'
}) => (
  <StyledIconButton
    type={type}
    buttonWidth={buttonWidth}
    buttonHeight={buttonHeight}
    svgWidth={svgWidth}
    svgHeight={svgHeight}
    onClick={onClick}
  >
    {children}
  </StyledIconButton>
)

const StyledIconButton = styled.button<{
  buttonWidth: number
  buttonHeight: number
  svgWidth: number
  svgHeight: number
}>`
  border: 1px solid ${tokens.global.White['1'].value};
  border-radius: 50%;
  background-color: ${tokens.global.White['1'].value};
  cursor: pointer;
  width: ${({ buttonWidth }) => `${buttonWidth}px`};
  height: ${({ buttonHeight }) => `${buttonHeight}px`};
  transition: 0.3s ease-out;

  > svg {
    width: ${({ svgWidth }) => `${svgWidth}px`};
    height: ${({ svgHeight }) => `${svgHeight}px`};
    fill: ${tokens.global.Black['1'].value};
  }

  &:hover {
    background-color: ${tokens.global.White['5'].value};
  }
`
