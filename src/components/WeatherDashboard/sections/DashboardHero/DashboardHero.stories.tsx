import { Meta, Story } from '@storybook/react/types-6-0'

import { dashboardFixture } from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { getStatusLabel, DashboardHeroProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import DashboardHero from '.'

type DashboardHeroStoryProps = Omit<DashboardHeroProps, 'palette'>

const statusLabel = getStatusLabel(
  dashboardFixture,
  false,
  dashboardFixture.location.timeZone
)

export default {
  title: 'Dashboard/Hero',
  component: DashboardHero
} as Meta

const Template: Story<DashboardHeroStoryProps> = (args) => {
  const palette = useStoryPalette(dashboardFixture)

  return (
    <StoryFrame palette={palette}>
      <DashboardHero {...args} palette={palette} />
    </StoryFrame>
  )
}

export const Populated = Template.bind({})
Populated.args = {
  statusLabel,
  searchValue: 'Washington, DC',
  onSearchChange: () => undefined,
  onSubmit: (event) => event.preventDefault(),
  isLoading: false,
  errorMessage: null,
  location: dashboardFixture.location,
  current: dashboardFixture.current,
  overview: dashboardFixture.overview
}

export const Empty = Template.bind({})
Empty.args = {
  ...Populated.args,
  location: undefined,
  current: undefined,
  overview: undefined,
  searchValue: ''
}

export const Loading = Template.bind({})
Loading.args = {
  ...Populated.args,
  isLoading: true
}

export const Error = Template.bind({})
Error.args = {
  ...Empty.args,
  errorMessage: 'Location lookup failed.'
}
