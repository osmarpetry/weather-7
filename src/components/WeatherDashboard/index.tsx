import * as S from './styles'
import {
  getDashboardPalette,
  getStatusLabel,
  getSunProgress,
  WeatherDashboardProps
} from './helpers'
import DashboardHero from './sections/DashboardHero'
import HourlyRhythmSection from './sections/HourlyRhythmSection'
import ObservationDeckCard from './sections/ObservationDeckCard'
import OutlookBoardCard from './sections/OutlookBoardCard'
import SolarArcCard from './sections/SolarArcCard'
import WeatherHighlightsCard from './sections/WeatherHighlightsCard'
import { useDashboardStoryMode } from './storybook-mode'

export type { WeatherDashboardProps } from './helpers'

export default function WeatherDashboard({
  data,
  searchValue,
  onSearchChange,
  onSubmit,
  isLoading,
  errorMessage
}: WeatherDashboardProps) {
  const storyMode = useDashboardStoryMode()
  const palette = getDashboardPalette(data, storyMode)
  const timeZone = data?.location.timeZone || 'America/New_York'
  const statusLabel = getStatusLabel(data, isLoading, timeZone)
  const sun = data?.sun || {
    sunrise: null,
    solarNoon: null,
    sunset: null
  }
  const sunProgress = getSunProgress(
    sun.sunrise,
    sun.sunset,
    data?.current.observedAt || new Date().toISOString()
  )

  return (
    <S.Page $palette={palette}>
      <S.Atmosphere $palette={palette} />
      <S.Content>
        <S.TopBar>
          <S.Brand>
            <S.BrandMark $palette={palette} />
            Weather Observatory
          </S.Brand>
          <S.StatusPill $palette={palette}>{statusLabel}</S.StatusPill>
        </S.TopBar>

        <S.HeroGrid>
          <DashboardHero
            palette={palette}
            statusLabel={statusLabel}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            onSubmit={onSubmit}
            isLoading={isLoading}
            errorMessage={errorMessage}
            location={data?.location}
            current={data?.current}
            overview={data?.overview}
          />

          <SolarArcCard
            palette={palette}
            timeZone={timeZone}
            sun={sun}
            sunProgress={sunProgress}
          />
        </S.HeroGrid>

        {data ? (
          <>
            <WeatherHighlightsCard
              palette={palette}
              headline={data.overview.headline}
              forecastOffice={data.location.forecastOffice}
              alerts={data.alerts}
              timeZone={timeZone}
            />

            <HourlyRhythmSection palette={palette} hourly={data.hourly} />

            <S.LowerGrid>
              <OutlookBoardCard palette={palette} daily={data.daily} />
              <ObservationDeckCard
                palette={palette}
                location={data.location}
                current={data.current}
              />
            </S.LowerGrid>
          </>
        ) : null}
      </S.Content>
    </S.Page>
  )
}
