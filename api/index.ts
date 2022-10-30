import axios from 'axios'

export const axiosBase = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
