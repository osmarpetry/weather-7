import { FormEvent } from 'react'

import {
  DailyForecast,
  HourlyForecast,
  SunSchedule,
  WeatherAlert,
  WeatherCurrentConditions,
  WeatherLocation,
  WeatherOverview,
  WeatherResponse
} from 'types/weather'

import {
  DashboardPalette,
  DashboardStoryMode,
  palettes,
  storyModePalettes,
  VisualTone
} from './palette'

export type WeatherDashboardProps = {
  data?: WeatherResponse
  searchValue: string
  onSearchChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  errorMessage?: string | null
}

export type DashboardHeroProps = {
  palette: DashboardPalette
  statusLabel: string
  searchValue: string
  onSearchChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  errorMessage?: string | null
  location?: WeatherLocation
  current?: WeatherCurrentConditions
  overview?: WeatherOverview
}

export type SolarArcCardProps = {
  palette: DashboardPalette
  timeZone: string
  sun: SunSchedule
  sunProgress: number
}

export type WeatherHighlightsCardProps = {
  palette: DashboardPalette
  headline: string
  forecastOffice: string
  alerts: WeatherAlert[]
  timeZone: string
}

export type HourlyRhythmSectionProps = {
  palette: DashboardPalette
  hourly: HourlyForecast[]
}

export type OutlookBoardCardProps = {
  palette: DashboardPalette
  daily: DailyForecast[]
}

export type ObservationDeckCardProps = {
  palette: DashboardPalette
  location: WeatherLocation
  current: WeatherCurrentConditions
}

export type ObservationDetail = {
  label: string
  value: string
  note: string
}

export function pickTone(summary = ''): VisualTone {
  const text = summary.toLowerCase()

  if (/(snow|sleet|blizzard|ice)/.test(text)) return 'snow'
  if (/(thunder|storm|lightning)/.test(text)) return 'storm'
  if (/(rain|showers|drizzle)/.test(text)) return 'rain'
  if (/(fog|mist|haze|smoke)/.test(text)) return 'fog'
  if (/(cloud|overcast)/.test(text)) return 'cloudy'

  return 'clear'
}

export function getDashboardPalette(
  data?: WeatherResponse,
  mode: DashboardStoryMode = 'auto'
) {
  if (mode !== 'auto') {
    return storyModePalettes[mode]
  }

  const summaryText = data
    ? `${data.current.summary} ${data.overview.headline}`
    : 'cloudy'

  return palettes[pickTone(summaryText)]
}

export function formatTemperature(value: number | null) {
  return value === null ? '--' : `${value}°`
}

export function formatPercent(value: number | null) {
  return value === null ? '--' : `${value}%`
}

export function formatSpeed(value: number | null) {
  return value === null ? '--' : `${value} mph`
}

export function formatVisibility(value: number | null) {
  return value === null ? '--' : `${value} mi`
}

export function formatPressure(value: number | null) {
  return value === null ? '--' : `${value} hPa`
}

export function formatTime(value: string | null | undefined, timeZone: string) {
  if (!value) return '--'

  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(value))
}

export function formatTimeWithZone(value: string, timeZone: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  }).format(new Date(value))
}

export function formatEnds(value: string | null, timeZone: string) {
  if (!value) return 'until further notice'

  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(value))
}

export function getSunProgress(
  sunrise: string | null,
  sunset: string | null,
  currentTime: string
) {
  if (!sunrise || !sunset) return 50

  const sunriseTime = new Date(sunrise).getTime()
  const sunsetTime = new Date(sunset).getTime()
  const activeTime = new Date(currentTime).getTime()

  if (activeTime <= sunriseTime) return 8
  if (activeTime >= sunsetTime) return 92

  return 8 + ((activeTime - sunriseTime) / (sunsetTime - sunriseTime)) * 84
}

export function getTemperatureScale(temperatures: number[]) {
  const min = Math.min(...temperatures)
  const max = Math.max(...temperatures)
  const spread = Math.max(max - min, 1)

  return { min, max, spread }
}

export function getHourlyTemperatureScale(hourly: HourlyForecast[]) {
  return getTemperatureScale(hourly.map((entry) => entry.temperatureF))
}

export function getForecastTemperatureScale(daily: DailyForecast[]) {
  const values = daily.flatMap((entry) =>
    [entry.lowF, entry.highF].filter(
      (value): value is number => typeof value === 'number'
    )
  )

  return getTemperatureScale(values.length ? values : [0, 1])
}

export function getStatusLabel(
  data: WeatherResponse | undefined,
  isLoading: boolean,
  timeZone: string
) {
  if (!data) return 'Connecting to live forecast services'
  if (isLoading) return 'Refreshing live grid'

  return `Observed ${formatTimeWithZone(data.current.observedAt, timeZone)}`
}

export function buildObservationDetails(
  location: WeatherLocation,
  current: WeatherCurrentConditions
): ObservationDetail[] {
  return [
    {
      label: 'Feels like',
      value: formatTemperature(current.feelsLikeF),
      note: current.summary
    },
    {
      label: 'Humidity',
      value: formatPercent(current.humidity),
      note: `Dew point ${formatTemperature(current.dewpointF)}`
    },
    {
      label: 'Wind',
      value: `${formatSpeed(current.windSpeedMph)} ${current.windDirection}`,
      note: 'Surface observation'
    },
    {
      label: 'Visibility',
      value: formatVisibility(current.visibilityMiles),
      note: location.radarStation
        ? `Radar ${location.radarStation}`
        : 'Radar unavailable'
    },
    {
      label: 'Pressure',
      value: formatPressure(current.pressureHpa),
      note: `Office ${location.forecastOffice}`
    },
    {
      label: 'Station',
      value: current.stationId || '--',
      note: current.stationName || 'Nearest station unavailable'
    },
    {
      label: 'Coordinates',
      value: `${location.lat}, ${location.lon}`,
      note: 'Forecast point used for the NWS grid lookup.'
    },
    {
      label: 'Timezone',
      value: location.timeZone,
      note: 'Every label on the page is rendered in the local zone for this location.'
    }
  ]
}
