import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests'

import { getDashboardPalette } from '../../helpers'
import { mixedForecastFixture } from '../../fixtures'
import OutlookBoardCard from '.'

describe('<OutlookBoardCard />', () => {
  it('renders fallback values for mixed forecast temperature data', () => {
    renderWithTheme(
      <OutlookBoardCard
        palette={getDashboardPalette(mixedForecastFixture)}
        daily={mixedForecastFixture.daily}
      />
    )

    expect(screen.getAllByText('--').length).toBeGreaterThan(0)
    expect(screen.getByText(/wind light/i)).toBeInTheDocument()
  })
})
