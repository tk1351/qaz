import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Cluster } from './Cluster'

export default {
  title: 'Atoms/Cluster',
  component: Cluster,
  argTypes: {
    gap: {
      control: { type: 'text' }
    },
    align: {
      control: { type: 'select' },
      options: ['center', 'start', 'end', 'flex-start', 'flex-end']
    },
    justify: {
      control: { type: 'select' },
      options: [
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly'
      ]
    }
  }
} as ComponentMeta<typeof Cluster>

const Template: ComponentStory<typeof Cluster> = (args) => (
  <div style={{ width: '1000px', height: '500px', border: '1px solid gray' }}>
    <Cluster {...args}>
      {[...Array(10).keys()].map((item) => (
        <div
          key={item}
          style={{
            width: '200px',
            height: '100px',
            border: '1px solid tomato'
          }}
        />
      ))}
    </Cluster>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
