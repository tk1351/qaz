import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MovieList } from './MovieList'
import { MovieCardType } from '../../../shared/types'

const createDummyMovie = ({ index }: { index: number }): MovieCardType => ({
  id: index,
  title: `Movie Title ${index}`,
  directorName: 'DirectorName',
  country: 'Country',
  year: '2022',
  imageURL:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
})

export default {
  title: 'Commons/MovieList',
  component: MovieList,
  argTypes: {}
} as ComponentMeta<typeof MovieList>

const Template: ComponentStory<typeof MovieList> = (args) => (
  <div style={{ width: '1130px' }}>
    <MovieList {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  rowGap: '10px',
  columnGap: '10px',
  minLength: '370px',
  movies: Array.from({ length: 10 }, (_: undefined, index: number) =>
    createDummyMovie({ index })
  )
}
