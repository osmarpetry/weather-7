import { Meta, Story } from '@storybook/react/types-6-0'

import WeatherDashboard, { WeatherDashboardProps } from '.'
import { alertHeavyDashboardFixture, dashboardFixture } from './fixtures'

export default {
  title: 'Dashboard/Page',
  component: WeatherDashboard,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<WeatherDashboardProps> = (args) => (
  <WeatherDashboard {...args} />
)

export const ClearDefault = Template.bind({})
ClearDefault.args = {
  data: dashboardFixture,
  searchValue: 'Washington, DC',
  onSearchChange: () => undefined,
  onSubmit: (event) => event.preventDefault(),
  isLoading: false,
  errorMessage: null
}

export const Loading = Template.bind({})
Loading.args = {
  ...ClearDefault.args,
  isLoading: true
}

export const Error = Template.bind({})
Error.args = {
  ...ClearDefault.args,
  data: undefined,
  errorMessage: 'Unable to resolve that location right now.'
}

export const ActiveAlerts = Template.bind({})
ActiveAlerts.args = {
  ...ClearDefault.args,
  data: alertHeavyDashboardFixture
}
