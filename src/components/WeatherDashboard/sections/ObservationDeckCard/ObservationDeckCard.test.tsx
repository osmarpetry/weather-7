import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'

import { partialObservationFixture } from '../../fixtures'
import { getDashboardPalette } from '../../helpers'
import ObservationDeckCard from '.'

describe('<ObservationDeckCard />', () => {
  it('renders fallback values for partial observations', () => {
    renderWithTheme(
      <ObservationDeckCard
        palette={getDashboardPalette(partialObservationFixture)}
        location={partialObservationFixture.location}
        current={partialObservationFixture.current}
      />
    )

    expect(screen.getByText('Feels like')).toBeInTheDocument()
    expect(screen.getAllByText('--').length).toBeGreaterThan(0)
    expect(screen.getByText(/radar unavailable/i)).toBeInTheDocument()
    expect(screen.getByText(/nearest station unavailable/i)).toBeInTheDocument()
  })
})
