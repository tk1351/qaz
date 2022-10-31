import { ReactLocation, Route } from '@tanstack/react-location'
import { Home } from '../components/pages/Home/Home'
import { MovieDetail } from '../components/pages/MovieDetail/MovieDetail'

export const location = new ReactLocation()
export const routes: Route[] = [
  { path: '/', element: <Home /> },
  {
    path: 'movie',
    children: [
      {
        path: ':id',
        element: <MovieDetail />
      }
    ]
  }
]
