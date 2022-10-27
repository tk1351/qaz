import { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Router, Outlet, Link } from '@tanstack/react-location'
import tokens from '../data/build/tokens'
import { ReactComponent as Search } from './assets/icons/search_FILL0_wght400_GRAD0_opsz48.svg'
import { convertToUpperCase } from './features/convertToUpperCase'
import { mappedNavigation } from './constants/navigation'
import { routes, location } from './routes'
import { axiosBase } from './api'

type NavigationListItem = ReadonlyArray<{ name: string; href: string }>

export const App: FC = () => {
  useEffect(() => {
    ;(async () => {
      axiosBase
        .get(`/550?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => console.log(response.data))
    })()
  }, [])

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
    <Router routes={routes} location={location}>
      <StyledWrapper>
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
        <Outlet />
      </StyledWrapper>
    </Router>
  )
}

const StyledWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${tokens.global.Black['1'].value};
  color: ${tokens.global.White['1'].value};
`

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
