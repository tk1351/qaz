import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HeroImage } from './HeroImage'
import tokens from '../../../../data/build/tokens'

export default {
  title: 'Atoms/HeroImage',
  component: HeroImage,
  argTypes: {}
} as ComponentMeta<typeof HeroImage>

const Template: ComponentStory<typeof HeroImage> = (args) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <HeroImage {...args}>
      <div style={{ height: '100%', width: '300px' }}>
        <p
          style={{
            margin: 0,
            color: tokens.global.White['1'].value,
            fontSize: '12px'
          }}
        >
          Latest Movie
        </p>
        <h2
          style={{
            margin: 0,
            color: tokens.global.White['1'].value,
            fontSize: `${tokens.global.xl.value}px`,
            lineHeight: 1
          }}
        >
          Lorem ipsum dolor sit amet
        </h2>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span
            style={{
              color: tokens.global.White['1'].value,
              fontSize: `${tokens.global.sm.value}px`,
              fontWeight: 'bold'
            }}
          >
            Director Name
          </span>
          <span style={{ color: tokens.global.White['1'].value }}>
            Country 2022
          </span>
        </div>
        <p
          style={{
            fontSize: '12px',
            margin: 0,
            color: tokens.global.White['1'].value
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu consectetur augue. Praesent sagittis sapien lorem, non dignissim
          nibh ornare in. Proin metus quam, pretium quis mattis sit amet,
          porttitor vitae risus. Sed eu tempor arcu, in posuere velit. Donec at
          turpis est. Etiam quis ipsum scelerisque, auctor erat eu, vulputate
          justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse eu consectetur augue. Praesent sagittis sapien lorem, non
          dignissim nibh ornare in. Proin metus quam, pretium quis mattis sit
          amet, porttitor vitae risus. Sed eu tempor arcu, in posuere velit.
          Donec at turpis est. Etiam quis ipsum scelerisque, auctor erat eu,
          vulputate justo.
        </p>
      </div>
    </HeroImage>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  imageURL:
    'https://plus.unsplash.com/premium_photo-1664367173326-e7ebe6f8de27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}
