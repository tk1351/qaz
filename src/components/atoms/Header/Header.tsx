import { FC } from 'react'
import styled from 'styled-components'
import { Link } from '@tanstack/react-location'
import tokens from '../../../../data/build/tokens'
import { ReactComponent as Search } from '../../../assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg'
import { mappedNavigation } from '../../../constants/navigation'
import { convertToUpperCase } from '../../../features/convertToUpperCase'

type NavigationListItem = ReadonlyArray<{ name: string; href: string }>

export const Header: FC = () => {
  const navigationListItem: NavigationListItem = [
    {
      name: mappedNavigation.nowShowing.name,
      href: mappedNavigation.nowShowing.href
    },
    {
      name: mappedNavigation.watchList.name,
      href: mappedNavigation.watchList.href
    }
  ]

  const mappedNavigationListItem = (itemList: NavigationListItem) =>
    itemList.map(({ name, href }) => ({
      name: convertToUpperCase(name),
      href
    }))
  return (
    <StyledHeader>
      <StyledLink>
        <Link to="/">QAZ</Link>
      </StyledLink>
      <StyledForm>
        <StyledInputWrapper>
          <StyledInput type="text" placeholder="Search" />
          <StyledSvg viewBox="-25 -25 100 100" />
        </StyledInputWrapper>
      </StyledForm>
      <StyledNav>
        <StyledList>
          {mappedNavigationListItem(navigationListItem).map((item) => (
            <li key={item.name}>
              <StyledNavLink>
                <Link to={item.href}>{item.name}</Link>
              </StyledNavLink>
            </li>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${tokens.global['Dark Green']['1'].value};
  display: flex;
  align-items: center;
  padding: 0 160px;
`

const StyledLink = styled.div`
  font-size: ${tokens.global.xl.value}px;
  margin-right: 40px;
`

const StyledForm = styled.form`
  height: 100%;
  border-left: 0.5px solid ${tokens.global.White['5'].value};
`

const StyledInputWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const StyledInput = styled.input`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 10px 0 50px;
  &:focus {
    background-color: ${tokens.global['Dark Green']['2'].value};
  }
`

const StyledSvg = styled(Search)`
  position: absolute;
  top: 0;
  left: 272px;
  fill: ${tokens.global.White['3'].value};
`

const StyledNav = styled.nav`
  margin-left: auto;
`

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledNavLink = styled.div`
  &:hover {
    color: ${tokens.global.White['5'].value};
  }
`
