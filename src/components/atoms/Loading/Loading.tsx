import { FC } from 'react'
import styled from 'styled-components'
import tokens from '../../../../data/build/tokens'

export const Loading: FC = () => <StyledLoading />

const StyledLoading = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 80px;
  height: 80px;
  border: 4px solid;
  border-color: ${tokens.global.Green['1'].value}
    ${tokens.global.Black['4'].value} ${tokens.global.Black['4'].value};
  border-radius: 50%;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
