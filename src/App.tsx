import { FC, Suspense } from 'react'
import styled from 'styled-components'
import { Router, Outlet } from '@tanstack/react-location'
import tokens from '../data/build/tokens'
import { routes, location } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from './components/atoms/Header/Header'
import { Loading } from './components/atoms/Loading/Loading'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router routes={routes} location={location}>
      <StyledWrapper>
        <Header />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </StyledWrapper>
    </Router>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
)

const StyledWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${tokens.global.Black['1'].value};
  color: ${tokens.global.White['1'].value};
`
