import { Meta, Story } from '@storybook/react/types-6-0'

import { dashboardFixture, mixedForecastFixture } from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { OutlookBoardCardProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import OutlookBoardCard from '.'

type OutlookBoardCardStoryProps = Omit<OutlookBoardCardProps, 'palette'>

export default {
  title: 'Dashboard/Outlook Board',
  component: OutlookBoardCard
} as Meta

const Template: Story<OutlookBoardCardStoryProps> = (args) => {
  const palette = useStoryPalette(
    args.daily === mixedForecastFixture.daily
      ? mixedForecastFixture
      : dashboardFixture
  )

  return (
    <StoryFrame palette={palette}>
      <div style={{ maxWidth: 860 }}>
        <OutlookBoardCard {...args} palette={palette} />
      </div>
    </StoryFrame>
  )
}

export const Populated = Template.bind({})
Populated.args = {
  daily: dashboardFixture.daily
}

export const MixedValues = Template.bind({})
MixedValues.args = {
  daily: mixedForecastFixture.daily
}
