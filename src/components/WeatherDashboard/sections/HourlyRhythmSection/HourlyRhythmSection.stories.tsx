import { Meta, Story } from '@storybook/react/types-6-0'

import { dashboardFixture } from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { HourlyRhythmSectionProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import HourlyRhythmSection from '.'

type HourlyRhythmSectionStoryProps = Omit<HourlyRhythmSectionProps, 'palette'>

export default {
  title: 'Dashboard/Hourly Rhythm',
  component: HourlyRhythmSection
} as Meta

const Template: Story<HourlyRhythmSectionStoryProps> = (args) => {
  const palette = useStoryPalette(dashboardFixture)

  return (
    <StoryFrame palette={palette}>
      <HourlyRhythmSection {...args} palette={palette} />
    </StoryFrame>
  )
}

export const Default = Template.bind({})
Default.args = {
  hourly: dashboardFixture.hourly
}
