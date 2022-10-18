import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MovieCard } from './MovieCard'

export default {
  title: 'Atoms/MovieCard',
  component: MovieCard,
  argTypes: {}
} as ComponentMeta<typeof MovieCard>

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  imageURL:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  width: 370,
  height: 200,
  title: 'Movie Title',
  directorName: 'Director Name',
  country: 'Country',
  year: '2022',
  onClick: () => console.log('test')
}

export const BigContents = Template.bind({})
BigContents.args = {
  imageURL:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  width: 370,
  height: 200,
  title: 'Instructions For A Light And Sound Machine',
  directorName: 'Dirk Schaefer, Matthias Muller, Peter Tscherkassky',
  country: 'West Germany',
  year: '2022',
  onClick: () => console.log('test')
}

export const SmallCard = Template.bind({})
SmallCard.args = {
  imageURL:
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  width: 307,
  height: 192,
  title: 'Instructions For A Light And Sound Machine',
  directorName: 'Dirk Schaefer, Matthias Muller, Peter Tscherkassky',
  country: 'West Germany',
  year: '2022',
  onClick: () => console.log('test')
}
