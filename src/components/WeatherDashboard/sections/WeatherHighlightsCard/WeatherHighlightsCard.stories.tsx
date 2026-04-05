import { Meta, Story } from '@storybook/react/types-6-0'

import {
  alertHeavyDashboardFixture,
  quietDashboardFixture
} from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { WeatherHighlightsCardProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import WeatherHighlightsCard from '.'

type WeatherHighlightsCardStoryProps = Omit<
  WeatherHighlightsCardProps,
  'palette'
>

export default {
  title: 'Dashboard/Highlights',
  component: WeatherHighlightsCard
} as Meta

const Template: Story<WeatherHighlightsCardStoryProps> = (args) => {
  const palette = useStoryPalette(
    args.alerts.length ? alertHeavyDashboardFixture : quietDashboardFixture
  )

  return (
    <StoryFrame palette={palette}>
      <WeatherHighlightsCard {...args} palette={palette} />
    </StoryFrame>
  )
}

export const QuietWeather = Template.bind({})
QuietWeather.args = {
  headline: quietDashboardFixture.overview.headline,
  forecastOffice: quietDashboardFixture.location.forecastOffice,
  alerts: quietDashboardFixture.alerts,
  timeZone: quietDashboardFixture.location.timeZone
}

export const ActiveAlerts = Template.bind({})
ActiveAlerts.args = {
  headline: alertHeavyDashboardFixture.overview.headline,
  forecastOffice: alertHeavyDashboardFixture.location.forecastOffice,
  alerts: alertHeavyDashboardFixture.alerts,
  timeZone: alertHeavyDashboardFixture.location.timeZone
}
