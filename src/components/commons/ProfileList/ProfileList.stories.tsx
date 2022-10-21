import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileList } from './ProfileList'
import { ProfileCardType } from '../../../shared/types'

const createDummyProfile = ({ index }: { index: number }): ProfileCardType => ({
  id: index,
  name: `Profile Name ${index}`,
  job: `Director, Editor, Producer`,
  imageSrc:
    'https://images.unsplash.com/photo-1666021110874-24e450fa215c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
})

export default {
  title: 'Commons/ProfileList',
  component: ProfileList,
  argTypes: {}
} as ComponentMeta<typeof ProfileList>

const Template: ComponentStory<typeof ProfileList> = (args) => (
  <ProfileList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  rowGap: '10px',
  columnGap: '5px',
  minLength: '180px',
  profiles: Array.from({ length: 10 }, (_: undefined, index: number) =>
    createDummyProfile({ index })
  ),
  onClick: () => console.log('test')
}
