import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MovieDescription } from './MovieDescription'

export default {
  title: 'Commons/MovieDescription',
  component: MovieDescription,
  argTypes: {}
} as ComponentMeta<typeof MovieDescription>

const Template: ComponentStory<typeof MovieDescription> = (args) => (
  <MovieDescription {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'The White Reindeer',
  originalTitle: 'Valkoinen Peura',
  directorName: 'Erik Blomberg',
  country: 'Finland',
  year: '1952',
  genre: 'Drama, Horror, Fantasy',
  runtime: 68,
  language: 'Finnish',
  onClickLink: () => console.log('test')
}
