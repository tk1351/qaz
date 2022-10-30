import { ReactLocation, Route } from '@tanstack/react-location'
import { Home } from '../components/pages/Home/Home'

export const location = new ReactLocation()
export const routes: Route[] = [{ path: '/', element: <Home /> }]
