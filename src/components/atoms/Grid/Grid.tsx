import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  rowGap?: string
  columnGap?: string
  minLength?: string
  children: ReactNode
}

export const Grid: FC<Props> = ({
  rowGap = '30px',
  columnGap = '30px',
  minLength = '250px',
  children
}) => (
  <StyledGrid rowGap={rowGap} columnGap={columnGap} minLength={minLength}>
    {children}
  </StyledGrid>
)

const StyledGrid = styled.div<{
  rowGap: string
  columnGap: string
  minLength: string
}>`
  display: grid;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  grid-template-columns: ${({ minLength }) =>
    `repeat(auto-fill, minmax(${minLength}, 1fr))`};
`
