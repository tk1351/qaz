import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from './Grid'

export default {
  title: 'Atoms/Grid',
  component: Grid,
  argTypes: {}
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    {[...Array(10).keys()].map((item) => (
      <div
        key={item}
        style={{
          minWidth: '200px',
          minHeight: '100px',
          border: '1px solid tomato'
        }}
      />
    ))}
  </Grid>
)

export const Default = Template.bind({})
Default.args = {
  rowGap: '20px',
  columnGap: '40px',
  minLength: '300px'
}
