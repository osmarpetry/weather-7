import { Story, Meta } from '@storybook/react/types-6-0'
import MenuIcon from '.'

export default {
  title: 'Menu',
  component: MenuIcon,
  argTypes: {
    name: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = () => <MenuIcon />

Default.parameters = {
  layout: 'fullscreen'
}
