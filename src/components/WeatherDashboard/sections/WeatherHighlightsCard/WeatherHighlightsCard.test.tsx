import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'

import {
  alertHeavyDashboardFixture,
  quietDashboardFixture
} from '../../fixtures'
import { getDashboardPalette } from '../../helpers'
import WeatherHighlightsCard from '.'

describe('<WeatherHighlightsCard />', () => {
  it('renders the quiet weather fallback when no alerts are active', () => {
    renderWithTheme(
      <WeatherHighlightsCard
        palette={getDashboardPalette(quietDashboardFixture)}
        headline={quietDashboardFixture.overview.headline}
        forecastOffice={quietDashboardFixture.location.forecastOffice}
        alerts={quietDashboardFixture.alerts}
        timeZone={quietDashboardFixture.location.timeZone}
      />
    )

    expect(screen.getByText(/quiet weather signal/i)).toBeInTheDocument()
  })

  it('renders active alert cards when alerts are present', () => {
    renderWithTheme(
      <WeatherHighlightsCard
        palette={getDashboardPalette(alertHeavyDashboardFixture)}
        headline={alertHeavyDashboardFixture.overview.headline}
        forecastOffice={alertHeavyDashboardFixture.location.forecastOffice}
        alerts={alertHeavyDashboardFixture.alerts}
        timeZone={alertHeavyDashboardFixture.location.timeZone}
      />
    )

    expect(screen.getByText(/dense fog advisory/i)).toBeInTheDocument()
    expect(screen.getByText(/flood watch/i)).toBeInTheDocument()
  })
})
