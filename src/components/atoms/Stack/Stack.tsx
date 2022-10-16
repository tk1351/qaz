import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  space?: string
  children: ReactNode
}

export const Stack: FC<Props> = ({ space = '30px', children }) => (
  <StyledStack space={space}>{children}</StyledStack>
)

const StyledStack = styled.div<{ space: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-block: 0;
  }

  > * + * {
    margin-top: ${({ space }) => space};
  }

  &:only-child {
    height: 100%;
  }
`
