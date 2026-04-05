export interface WeatherLocation {
  query: string
  matchedAddress: string
  lat: number
  lon: number
  city: string
  state: string
  timeZone: string
  forecastOffice: string
  radarStation: string | null
}

export interface WeatherCurrentConditions {
  observedAt: string
  icon: string
  summary: string
  temperatureF: number | null
  feelsLikeF: number | null
  humidity: number | null
  dewpointF: number | null
  windSpeedMph: number | null
  windDirection: string
  pressureHpa: number | null
  visibilityMiles: number | null
  stationName: string | null
  stationId: string | null
}

export interface HourlyForecast {
  time: string
  label: string
  isDaytime: boolean
  temperatureF: number
  precipitationChance: number
  humidity: number | null
  windSpeedMph: number | null
  windDirection: string
  icon: string
  shortForecast: string
}

export interface DailyPeriod {
  name: string
  startTime: string
  isDaytime: boolean
  temperatureF: number
  precipitationChance: number
  windSpeedMph: number | null
  windDirection: string
  shortForecast: string
  detailedForecast: string
  icon: string
}

export interface DailyForecast {
  date: string
  label: string
  summary: string
  icon: string
  highF: number | null
  lowF: number | null
  day?: DailyPeriod
  night?: DailyPeriod
}

export interface WeatherAlert {
  id: string
  event: string
  severity: string
  urgency: string
  certainty: string
  headline: string
  description: string
  instruction: string
  area: string
  effective: string | null
  ends: string | null
}

export interface WeatherOverview {
  headline: string
  narrative: string
}

export interface SunSchedule {
  sunrise: string | null
  sunset: string | null
  solarNoon: string | null
}

export interface WeatherResponse {
  location: WeatherLocation
  current: WeatherCurrentConditions
  sun: SunSchedule
  hourly: HourlyForecast[]
  daily: DailyForecast[]
  alerts: WeatherAlert[]
  overview: WeatherOverview
  generatedAt: string
}
