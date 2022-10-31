import { FC } from 'react'
import styled from 'styled-components'
import { Grid } from '../../atoms/Grid/Grid'
import { ProfileCard } from '../../atoms/ProfileCard/ProfileCard'
import { ProfileCardType } from '../../../shared/types'

type Props = {
  rowGap: string
  columnGap: string
  minLength: string
  profiles: ReadonlyArray<ProfileCardType>
}

export const ProfileList: FC<Props> = ({
  rowGap,
  columnGap,
  minLength,
  profiles
}) => (
  <StyledProfileList>
    <Grid rowGap={rowGap} columnGap={columnGap} minLength={minLength}>
      {profiles.map(({ id, name, job, imageSrc }) => (
        <li key={id}>
          <ProfileCard
            width={180}
            height={313}
            imageHeight={214}
            id={id}
            imageSrc={imageSrc}
            name={name}
            job={job}
          />
        </li>
      ))}
    </Grid>
  </StyledProfileList>
)

export const StyledProfileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
