import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack } from './Stack'

export default {
  title: 'Atoms/Stack',
  component: Stack,
  argTypes: {}
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = (args) => (
  <div style={{ width: '300px', height: '500px', border: '1px solid gray' }}>
    <Stack {...args}>
      <div
        style={{ width: '100%', height: '100px', border: '1px solid tomato' }}
      />
      <div
        style={{ width: '100%', height: '100px', border: '1px solid tomato' }}
      />
      <div
        style={{ width: '100%', height: '100px', border: '1px solid tomato' }}
      />
    </Stack>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  space: '60px'
}
