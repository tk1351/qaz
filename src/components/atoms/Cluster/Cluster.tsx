import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  gap?: string
  align?: string
  justify?: string
  children: ReactNode
}

export const Cluster: FC<Props> = ({
  gap = '30px',
  align = 'center',
  justify = 'flex-start',
  children
}) => (
  <StyledCluster gap={gap} align={align} justify={justify}>
    {children}
  </StyledCluster>
)

const StyledCluster = styled.div<{
  gap: string
  align: string
  justify: string
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
`
