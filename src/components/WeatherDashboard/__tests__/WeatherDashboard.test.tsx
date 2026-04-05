import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'

import WeatherDashboard from '..'
import { dashboardFixture } from '../fixtures'

describe('<WeatherDashboard />', () => {
  const baseProps = {
    searchValue: 'Washington, DC',
    onSearchChange: () => undefined,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) =>
      event.preventDefault(),
    isLoading: false,
    errorMessage: null
  }

  it('renders the empty dashboard state without data', () => {
    renderWithTheme(<WeatherDashboard {...baseProps} />)

    expect(
      screen.getByText(/building a live forecast scene/i)
    ).toBeInTheDocument()
    expect(screen.queryByText(/hourly rhythm/i)).not.toBeInTheDocument()
  })

  it('renders the search error state', () => {
    renderWithTheme(
      <WeatherDashboard
        {...baseProps}
        errorMessage="Unable to resolve that location."
      />
    )

    expect(
      screen.getByText(/unable to resolve that location/i)
    ).toBeInTheDocument()
  })

  it('renders all extracted dashboard sections for populated data', () => {
    renderWithTheme(<WeatherDashboard {...baseProps} data={dashboardFixture} />)

    expect(screen.getByText(/solar arc/i)).toBeInTheDocument()
    expect(screen.getByText(/hourly rhythm/i)).toBeInTheDocument()
    expect(screen.getByText(/outlook board/i)).toBeInTheDocument()
    expect(screen.getByText(/observation deck/i)).toBeInTheDocument()
    expect(
      screen.getByText(dashboardFixture.overview.headline)
    ).toBeInTheDocument()
  })
})
