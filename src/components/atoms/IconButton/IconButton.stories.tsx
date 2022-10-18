import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconButton } from './IconButton'
import { ReactComponent as Favorite } from '../../../assets/icons/favorite_FILL0_wght400_GRAD0_opsz48.svg'
import { ReactComponent as Add } from '../../../assets/icons/add_FILL0_wght400_GRAD0_opsz48.svg'
import { ReactComponent as Star } from '../../../assets/icons/star_FILL0_wght400_GRAD0_opsz48.svg'
import { VIEW_BOX } from '../../../shared/svg'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {}
} as ComponentMeta<typeof IconButton>

const FavoriteTemplate: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Favorite viewBox={VIEW_BOX} />
  </IconButton>
)

const AddTemplate: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Add viewBox={VIEW_BOX} />
  </IconButton>
)

const StarTemplate: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Star viewBox={VIEW_BOX} />
  </IconButton>
)

export const FavoriteButton = FavoriteTemplate.bind({})
FavoriteButton.args = {
  buttonWidth: 32,
  buttonHeight: 32,
  svgWidth: 28,
  svgHeight: 28,
  onClick: action('onClick')
}

export const AddButton = AddTemplate.bind({})
AddButton.args = {
  buttonWidth: 32,
  buttonHeight: 32,
  svgWidth: 28,
  svgHeight: 28,
  onClick: action('onClick')
}

export const StarButton = StarTemplate.bind({})
StarButton.args = {
  buttonWidth: 32,
  buttonHeight: 32,
  svgWidth: 28,
  svgHeight: 28,
  onClick: action('onClick')
}
