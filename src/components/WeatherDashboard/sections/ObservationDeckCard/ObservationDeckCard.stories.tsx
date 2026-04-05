import { Meta, Story } from '@storybook/react/types-6-0'

import { dashboardFixture, partialObservationFixture } from '../../fixtures'
import { StoryFrame } from '../../StoryFrame'
import { ObservationDeckCardProps } from '../../helpers'
import { useStoryPalette } from '../../storybook-mode'
import ObservationDeckCard from '.'

type ObservationDeckCardStoryProps = Omit<ObservationDeckCardProps, 'palette'>

export default {
  title: 'Dashboard/Observation Deck',
  component: ObservationDeckCard
} as Meta

const Template: Story<ObservationDeckCardStoryProps> = (args) => {
  const palette = useStoryPalette(
    args.current === partialObservationFixture.current
      ? partialObservationFixture
      : dashboardFixture
  )

  return (
    <StoryFrame palette={palette}>
      <div style={{ maxWidth: 560 }}>
        <ObservationDeckCard {...args} palette={palette} />
      </div>
    </StoryFrame>
  )
}

export const Populated = Template.bind({})
Populated.args = {
  location: dashboardFixture.location,
  current: dashboardFixture.current
}

export const PartialObservation = Template.bind({})
PartialObservation.args = {
  location: partialObservationFixture.location,
  current: partialObservationFixture.current
}
