import * as S from './styles'
import DashboardImage from '../../DashboardImage'
import {
  DashboardHeroProps,
  formatPercent,
  formatSpeed,
  formatTemperature
} from '../../helpers'

export default function DashboardHero({
  palette,
  searchValue,
  onSearchChange,
  onSubmit,
  isLoading,
  errorMessage,
  location,
  current,
  overview
}: DashboardHeroProps) {
  const hasData = Boolean(location && current && overview)

  return (
    <S.HeroCard $palette={palette}>
      <S.Eyebrow>National Weather Service / Cinematic View</S.Eyebrow>

      <S.SearchForm onSubmit={onSubmit}>
        <S.SearchInput
          $palette={palette}
          type="text"
          placeholder="Try Washington, DC or 38.8977, -77.0365"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Weather location"
        />
        <S.SearchButton
          $palette={palette}
          type="submit"
          disabled={!searchValue.trim() || isLoading}
        >
          {isLoading ? 'Scanning' : 'Track Weather'}
        </S.SearchButton>
      </S.SearchForm>

      {errorMessage ? (
        <S.ErrorText>{errorMessage}</S.ErrorText>
      ) : (
        <S.HelperText>
          U.S. cities, ZIP codes, street addresses, and raw coordinates all work
          here.
        </S.HelperText>
      )}

      {hasData ? (
        <>
          <S.LocationLine>
            <S.LocationBadge $palette={palette}>
              {location.city
                ? `${location.city}, ${location.state}`
                : 'Mapped location'}
            </S.LocationBadge>
            <S.MatchedAddress>{location.matchedAddress}</S.MatchedAddress>
          </S.LocationLine>

          <S.CurrentGrid>
            <S.HeroIconWrap $palette={palette}>
              {current.icon ? (
                <DashboardImage
                  src={current.icon}
                  alt={current.summary}
                  width={124}
                  height={124}
                  priority
                />
              ) : null}
            </S.HeroIconWrap>

            <S.CurrentSummary>
              <S.LocationName>
                {location.city
                  ? `${location.city}, ${location.state}`
                  : location.matchedAddress}
              </S.LocationName>
              <S.Temperature>
                {formatTemperature(current.temperatureF)}
              </S.Temperature>
              <S.ForecastText>{current.summary}</S.ForecastText>
              <S.Narrative>{overview.narrative}</S.Narrative>
            </S.CurrentSummary>
          </S.CurrentGrid>

          <S.MetricChips>
            <S.MetricChip $palette={palette}>
              <S.ChipLabel>Feels Like</S.ChipLabel>
              <S.ChipValue>{formatTemperature(current.feelsLikeF)}</S.ChipValue>
            </S.MetricChip>
            <S.MetricChip $palette={palette}>
              <S.ChipLabel>Humidity</S.ChipLabel>
              <S.ChipValue>{formatPercent(current.humidity)}</S.ChipValue>
            </S.MetricChip>
            <S.MetricChip $palette={palette}>
              <S.ChipLabel>Wind</S.ChipLabel>
              <S.ChipValue>
                {formatSpeed(current.windSpeedMph)} {current.windDirection}
              </S.ChipValue>
            </S.MetricChip>
          </S.MetricChips>
        </>
      ) : (
        <S.EmptyState $palette={palette}>
          <S.EmptyTitle>Building a live forecast scene</S.EmptyTitle>
          <S.EmptyCopy>
            The dashboard loads current conditions, hourly flow, day-part
            forecast, solar timing, and active alerts through a server-side
            National Weather Service integration.
          </S.EmptyCopy>
        </S.EmptyState>
      )}
    </S.HeroCard>
  )
}
