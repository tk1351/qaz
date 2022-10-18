import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'Atoms/ProfileCard',
  component: ProfileCard,
  argTypes: {}
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 313,
  imageHeight: 214,
  imageSrc:
    'https://images.unsplash.com/photo-1666021110874-24e450fa215c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  name: 'Peter Tscherkassky',
  job: 'Editing, Producer, Director, Screenplay',
  onClick: () => console.log('test')
}
