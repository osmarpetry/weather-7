import { Meta, Story } from '@storybook/react/types-6-0'

import { dashboardFixture } from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { getSunProgress, SolarArcCardProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import SolarArcCard from '.'

type SolarArcCardStoryProps = Omit<SolarArcCardProps, 'palette'>

export default {
  title: 'Dashboard/Solar Arc',
  component: SolarArcCard
} as Meta

const Template: Story<SolarArcCardStoryProps> = (args) => {
  const palette = useStoryPalette(dashboardFixture)

  return (
    <StoryFrame palette={palette}>
      <div style={{ maxWidth: 420 }}>
        <SolarArcCard {...args} palette={palette} />
      </div>
    </StoryFrame>
  )
}

export const Daylight = Template.bind({})
Daylight.args = {
  timeZone: dashboardFixture.location.timeZone,
  sun: dashboardFixture.sun,
  sunProgress: getSunProgress(
    dashboardFixture.sun.sunrise,
    dashboardFixture.sun.sunset,
    dashboardFixture.current.observedAt
  )
}

export const MissingData = Template.bind({})
MissingData.args = {
  ...Daylight.args,
  sun: {
    sunrise: null,
    sunset: null,
    solarNoon: null
  },
  sunProgress: 50
}
