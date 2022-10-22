import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MovieSynopsis } from './MovieSynopsis'

export default {
  title: 'Commons/MovieSynopsis',
  component: MovieSynopsis,
  argTypes: {}
} as ComponentMeta<typeof MovieSynopsis>

const Template: ComponentStory<typeof MovieSynopsis> = (args) => (
  <MovieSynopsis {...args} />
)

export const Default = Template.bind({})
Default.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at feugiat enim. Duis sit amet est non risus molestie sagittis. Sed at malesuada turpis, vel imperdiet dolor. Vivamus consectetur posuere vehicula. Cras eget odio molestie est interdum tempor. Quisque auctor tempor risus, a aliquet elit congue eu. Curabitur congue malesuada velit et eleifend. Sed tempus tempor massa, id congue ex tincidunt eu. Sed eleifend ullamcorper felis nec eleifend. Suspendisse rhoncus felis felis, et mollis dolor convallis eu. Nullam mollis, turpis vel congue faucibus, odio ex tempor erat, non semper nunc nulla sed ex. Nulla facilisi. Sed sem nulla, lacinia vitae felis eget, congue dictum nibh. Morbi sapien neque, malesuada quis ullamcorper sit amet, varius vitae turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tempor, orci nec viverra eleifend, libero erat imperdiet neque, non lobortis dui leo non ipsum.Morbi dapibus, dolor id sodales fermentum, tortor sapien elementum leo, nec dapibus lectus diam ac dolor. Quisque nisi tortor, pharetra tincidunt finibus eget, rhoncus at magna. Fusce finibus turpis mattis arcu fringilla finibus. Vivamus vel mi nunc. Fusce sed ullamcorper mauris. Sed tincidunt augue at molestie pharetra. In velit quam, gravida congue est a, tempus semper diam. Sed elementum mauris non malesuada dictum. Quisque ut augue tellus. Pellentesque semper mollis lectus, ac blandit felis ultrices eu. Integer ultrices, leo in congue porta, lacus lorem ultricies tortor, vel sollicitudin ipsum diam ut enim. Curabitur nec tempus nisl. Aenean molestie elit ut justo commodo egestas.'
}
