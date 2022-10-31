export const imageUrl = (path: string | null) => {
  if (!path)
    return 'https://images.unsplash.com/photo-1532291053013-5ce5c7e1d0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  return `https://image.tmdb.org/t/p/original${path}`
}
