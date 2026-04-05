import {
  DailyForecast,
  DailyPeriod,
  HourlyForecast,
  WeatherAlert,
  WeatherResponse
} from 'types/weather'

const DEFAULT_NWS_USER_AGENT =
  'weather-7/1.0 (https://github.com/osmarpetry/weather-7; weather-7@example.com)'

const NWS_HEADERS = {
  Accept: 'application/geo+json',
  'User-Agent': process.env.NWS_USER_AGENT || DEFAULT_NWS_USER_AGENT
}

const US_STATE_CODES: Record<string, string> = {
  alabama: 'AL',
  alaska: 'AK',
  arizona: 'AZ',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'WA',
  'west virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
  'district of columbia': 'DC'
}

const US_STATE_ALIASES: Record<string, string> = {
  al: 'alabama',
  alaska: 'alaska',
  ak: 'alaska',
  arizona: 'arizona',
  az: 'arizona',
  arkansas: 'arkansas',
  ar: 'arkansas',
  california: 'california',
  ca: 'california',
  colorado: 'colorado',
  co: 'colorado',
  connecticut: 'connecticut',
  ct: 'connecticut',
  delaware: 'delaware',
  de: 'delaware',
  florida: 'florida',
  fl: 'florida',
  georgia: 'georgia',
  ga: 'georgia',
  hawaii: 'hawaii',
  hi: 'hawaii',
  idaho: 'idaho',
  id: 'idaho',
  illinois: 'illinois',
  il: 'illinois',
  indiana: 'indiana',
  in: 'indiana',
  iowa: 'iowa',
  ia: 'iowa',
  kansas: 'kansas',
  ks: 'kansas',
  kentucky: 'kentucky',
  ky: 'kentucky',
  louisiana: 'louisiana',
  la: 'louisiana',
  maine: 'maine',
  me: 'maine',
  maryland: 'maryland',
  md: 'maryland',
  massachusetts: 'massachusetts',
  ma: 'massachusetts',
  michigan: 'michigan',
  mi: 'michigan',
  minnesota: 'minnesota',
  mn: 'minnesota',
  mississippi: 'mississippi',
  ms: 'mississippi',
  missouri: 'missouri',
  mo: 'missouri',
  montana: 'montana',
  mt: 'montana',
  nebraska: 'nebraska',
  ne: 'nebraska',
  nevada: 'nevada',
  nv: 'nevada',
  'new hampshire': 'new hampshire',
  nh: 'new hampshire',
  'new jersey': 'new jersey',
  nj: 'new jersey',
  'new mexico': 'new mexico',
  nm: 'new mexico',
  'new york': 'new york',
  ny: 'new york',
  'north carolina': 'north carolina',
  nc: 'north carolina',
  'north dakota': 'north dakota',
  nd: 'north dakota',
  ohio: 'ohio',
  oh: 'ohio',
  oklahoma: 'oklahoma',
  ok: 'oklahoma',
  oregon: 'oregon',
  or: 'oregon',
  pennsylvania: 'pennsylvania',
  pa: 'pennsylvania',
  'rhode island': 'rhode island',
  ri: 'rhode island',
  'south carolina': 'south carolina',
  sc: 'south carolina',
  'south dakota': 'south dakota',
  sd: 'south dakota',
  tennessee: 'tennessee',
  tn: 'tennessee',
  texas: 'texas',
  tx: 'texas',
  utah: 'utah',
  ut: 'utah',
  vermont: 'vermont',
  vt: 'vermont',
  virginia: 'virginia',
  va: 'virginia',
  washington: 'washington',
  wa: 'washington',
  'west virginia': 'west virginia',
  wv: 'west virginia',
  wisconsin: 'wisconsin',
  wi: 'wisconsin',
  wyoming: 'wyoming',
  wy: 'wyoming',
  'district of columbia': 'district of columbia',
  dc: 'district of columbia'
}

class WeatherServiceError extends Error {
  statusCode: number

  constructor(message: string, statusCode = 500) {
    super(message)
    this.name = 'WeatherServiceError'
    this.statusCode = statusCode
  }
}

interface ValuePayload {
  value: number | null
}

interface ExternalForecastPeriod {
  name: string
  startTime: string
  endTime: string
  isDaytime: boolean
  temperature: number
  temperatureUnit: string
  probabilityOfPrecipitation: ValuePayload
  dewpoint?: ValuePayload
  relativeHumidity?: ValuePayload
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

interface ExternalForecastResponse {
  properties: {
    generatedAt: string
    periods: ExternalForecastPeriod[]
  }
}

interface ExternalPointsResponse {
  properties: {
    forecast: string
    forecastHourly: string
    observationStations: string
    timeZone: string
    forecastOffice: string
    radarStation?: string
    relativeLocation?: {
      properties?: {
        city?: string
        state?: string
      }
    }
    astronomicalData?: {
      sunrise?: string
      sunset?: string
      transit?: string
    }
  }
}

interface ExternalStationsResponse {
  features: Array<{
    properties: {
      stationIdentifier: string
    }
  }>
}

interface ExternalObservationProperties {
  stationId: string
  stationName: string
  timestamp: string
  textDescription?: string
  icon?: string
  temperature: ValuePayload
  dewpoint: ValuePayload
  windDirection: ValuePayload
  windSpeed: ValuePayload
  relativeHumidity: ValuePayload
  barometricPressure: ValuePayload
  visibility: ValuePayload
  heatIndex: ValuePayload
  windChill: ValuePayload
}

interface ExternalObservationResponse {
  properties: ExternalObservationProperties
}

interface ExternalAlertsResponse {
  features: Array<{
    id: string
    properties: {
      event: string
      severity: string
      urgency: string
      certainty: string
      headline?: string
      description?: string
      instruction?: string
      areaDesc?: string
      effective?: string
      ends?: string
    }
  }>
}

interface ExternalGeocoderResponse {
  result?: {
    addressMatches?: Array<{
      coordinates: {
        x: number
        y: number
      }
      matchedAddress: string
    }>
  }
}

interface ExternalOpenMeteoGeocoderResponse {
  results?: Array<{
    latitude: number
    longitude: number
    name: string
    admin1?: string
    country?: string
  }>
}

type ResolvedLocation = {
  lat: number
  lon: number
  matchedAddress: string
  city?: string
  state?: string
}

function roundNumber(value: number | null | undefined, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null
  }

  const multiplier = 10 ** digits
  return Math.round(value * multiplier) / multiplier
}

function celsiusToFahrenheit(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return null
  }

  return Math.round((value * 9) / 5 + 32)
}

function kmhToMph(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return null
  }

  return roundNumber(value * 0.621371)
}

function metersToMiles(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return null
  }

  return roundNumber(value / 1609.344, 1)
}

function pascalsToHpa(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return null
  }

  return roundNumber(value / 100)
}

function parseWindSpeedMph(value: string | undefined) {
  const numericValues = value?.match(/\d+/g)?.map(Number)

  if (!numericValues?.length) {
    return null
  }

  const average =
    numericValues.reduce((total, entry) => total + entry, 0) /
    numericValues.length

  return Math.round(average)
}

function windDegreesToCompass(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return 'Calm'
  }

  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW'
  ]

  const index = Math.round(value / 22.5) % directions.length
  return directions[index]
}

function getDateKey(dateString: string, timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(new Date(dateString))

  const partMap = parts.reduce<Record<string, string>>((accumulator, part) => {
    if (part.type !== 'literal') {
      accumulator[part.type] = part.value
    }

    return accumulator
  }, {})

  return `${partMap.year}-${partMap.month}-${partMap.day}`
}

function getDateLabel(dateString: string, timeZone: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }).format(new Date(dateString))
}

function extractForecastOffice(url: string) {
  const fragments = url.split('/')
  return fragments[fragments.length - 1] || 'NWS'
}

function normalizeRegionName(value: string) {
  const normalizedValue = value
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, ' ')
    .trim()

  return US_STATE_ALIASES[normalizedValue] || normalizedValue
}

function getStateCode(value: string | undefined) {
  if (!value) {
    return ''
  }

  return US_STATE_CODES[normalizeRegionName(value)] || value
}

function mapDailyPeriod(period: ExternalForecastPeriod): DailyPeriod {
  return {
    name: period.name,
    startTime: period.startTime,
    isDaytime: period.isDaytime,
    temperatureF: period.temperature,
    precipitationChance: period.probabilityOfPrecipitation?.value || 0,
    windSpeedMph: parseWindSpeedMph(period.windSpeed),
    windDirection: period.windDirection,
    shortForecast: period.shortForecast,
    detailedForecast: period.detailedForecast,
    icon: period.icon
  }
}

function mapDailyForecast(
  periods: ExternalForecastPeriod[],
  timeZone: string
): DailyForecast[] {
  const groupedForecast = new Map<string, DailyForecast>()

  periods.forEach((period) => {
    const key = getDateKey(period.startTime, timeZone)
    const existingForecast = groupedForecast.get(key) || {
      date: key,
      label: getDateLabel(period.startTime, timeZone),
      summary: period.shortForecast,
      icon: period.icon,
      highF: null,
      lowF: null
    }

    const mappedPeriod = mapDailyPeriod(period)

    if (period.isDaytime) {
      existingForecast.day = mappedPeriod
      existingForecast.summary = mappedPeriod.shortForecast
      existingForecast.icon = mappedPeriod.icon
      existingForecast.highF = mappedPeriod.temperatureF
    } else {
      existingForecast.night = mappedPeriod
      existingForecast.lowF = mappedPeriod.temperatureF

      if (!existingForecast.day) {
        existingForecast.summary = mappedPeriod.shortForecast
        existingForecast.icon = mappedPeriod.icon
      }
    }

    existingForecast.highF =
      existingForecast.day?.temperatureF ??
      existingForecast.highF ??
      existingForecast.night?.temperatureF ??
      null
    existingForecast.lowF =
      existingForecast.night?.temperatureF ??
      existingForecast.lowF ??
      existingForecast.day?.temperatureF ??
      null

    groupedForecast.set(key, existingForecast)
  })

  return Array.from(groupedForecast.values()).slice(0, 5)
}

function mapHourlyForecast(
  periods: ExternalForecastPeriod[],
  timeZone: string
): HourlyForecast[] {
  return periods.slice(0, 12).map((period) => ({
    time: period.startTime,
    label: new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric'
    }).format(new Date(period.startTime)),
    isDaytime: period.isDaytime,
    temperatureF: period.temperature,
    precipitationChance: period.probabilityOfPrecipitation?.value || 0,
    humidity: roundNumber(period.relativeHumidity?.value),
    windSpeedMph: parseWindSpeedMph(period.windSpeed),
    windDirection: period.windDirection,
    icon: period.icon,
    shortForecast: period.shortForecast
  }))
}

function buildOverview(
  currentSummary: string,
  daily: DailyForecast[],
  alertCount: number
) {
  const primaryForecast = daily[0]
  const primaryNarrative =
    primaryForecast?.day?.detailedForecast ||
    primaryForecast?.night?.detailedForecast ||
    currentSummary

  if (alertCount > 0) {
    return {
      headline: `${alertCount} active weather alert${
        alertCount > 1 ? 's' : ''
      } for this location.`,
      narrative: primaryNarrative
    }
  }

  return {
    headline:
      primaryForecast?.summary || currentSummary || 'Live weather outlook',
    narrative: primaryNarrative
  }
}

function parseCoordinateQuery(query: string) {
  const match = query.match(/^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/)

  if (!match) {
    return null
  }

  const lat = Number(match[1])
  const lon = Number(match[2])

  if (
    Number.isNaN(lat) ||
    Number.isNaN(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    return null
  }

  return {
    lat,
    lon,
    matchedAddress: `Coordinates ${lat.toFixed(4)}, ${lon.toFixed(4)}`,
    city: '',
    state: ''
  }
}

async function fetchJson<T>(
  url: string,
  init: RequestInit = {},
  timeoutMs = 10000
): Promise<T> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal
    })

    if (!response.ok) {
      let message = `Request failed with status ${response.status}`

      try {
        const errorBody = (await response.json()) as {
          detail?: string
          title?: string
        }
        message = errorBody.detail || errorBody.title || message
      } catch {
        // Ignore response body parsing errors and keep the generic message.
      }

      throw new WeatherServiceError(
        message,
        response.status >= 400 && response.status < 500 ? response.status : 502
      )
    }

    return (await response.json()) as T
  } catch (error) {
    if (error instanceof WeatherServiceError) {
      throw error
    }

    if (error instanceof Error && error.name === 'AbortError') {
      throw new WeatherServiceError('Weather service request timed out.', 504)
    }

    throw new WeatherServiceError('Unable to reach the weather service.', 502)
  } finally {
    clearTimeout(timeoutId)
  }
}

async function fetchNws<T>(url: string) {
  return fetchJson<T>(url, {
    headers: NWS_HEADERS
  })
}

async function resolveWithCensus(
  query: string
): Promise<ResolvedLocation | null> {
  const searchParams = new URLSearchParams({
    address: query,
    benchmark: 'Public_AR_Current',
    format: 'json'
  })

  const geocoderResponse = await fetchJson<ExternalGeocoderResponse>(
    `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?${searchParams.toString()}`
  )

  const firstMatch = geocoderResponse.result?.addressMatches?.[0]

  if (!firstMatch) {
    return null
  }

  const addressParts = firstMatch.matchedAddress
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

  return {
    lat: firstMatch.coordinates.y,
    lon: firstMatch.coordinates.x,
    matchedAddress: firstMatch.matchedAddress,
    city: addressParts[1] || '',
    state: addressParts[2] || ''
  }
}

async function resolveWithOpenMeteo(
  query: string
): Promise<ResolvedLocation | null> {
  const trimmedQuery = query.replace(/\s+/g, ' ').trim()
  const queryParts = trimmedQuery
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
  const regionHint = queryParts[1] ? normalizeRegionName(queryParts[1]) : null
  const queryVariants = Array.from(
    new Set([
      trimmedQuery,
      trimmedQuery.replace(/,/g, ' '),
      queryParts.slice(0, 2).join(' '),
      queryParts[0]
    ])
  )

  for (const queryVariant of queryVariants) {
    if (!queryVariant) {
      continue
    }

    const searchParams = new URLSearchParams({
      name: queryVariant,
      count: '8',
      format: 'json',
      language: 'en',
      countryCode: 'US'
    })

    const geocoderResponse = await fetchJson<ExternalOpenMeteoGeocoderResponse>(
      `https://geocoding-api.open-meteo.com/v1/search?${searchParams.toString()}`
    )

    const results = geocoderResponse.results || []

    if (!results.length) {
      continue
    }

    const firstMatch =
      (regionHint
        ? results.find(
            (result) => normalizeRegionName(result.admin1 || '') === regionHint
          )
        : null) || results[0]

    const adminRegion = firstMatch.admin1 ? `, ${firstMatch.admin1}` : ''
    const country = firstMatch.country ? `, ${firstMatch.country}` : ''

    return {
      lat: firstMatch.latitude,
      lon: firstMatch.longitude,
      matchedAddress: `${firstMatch.name}${adminRegion}${country}`,
      city: firstMatch.name,
      state: getStateCode(firstMatch.admin1)
    }
  }

  return null
}

async function resolveLocation(query: string): Promise<ResolvedLocation> {
  const coordinateLocation = parseCoordinateQuery(query)

  if (coordinateLocation) {
    return coordinateLocation
  }

  let lastError: WeatherServiceError | null = null

  try {
    const censusLocation = await resolveWithCensus(query)

    if (censusLocation) {
      return censusLocation
    }
  } catch (error) {
    if (isWeatherServiceError(error)) {
      lastError = error
    }
  }

  try {
    const openMeteoLocation = await resolveWithOpenMeteo(query)

    if (openMeteoLocation) {
      return openMeteoLocation
    }
  } catch (error) {
    if (isWeatherServiceError(error)) {
      lastError = error
    }
  }

  if (lastError && lastError.statusCode >= 500) {
    throw lastError
  }

  throw new WeatherServiceError(
    'No matching U.S. location was found for that search.',
    404
  )
}

async function fetchLatestObservation(stationsUrl: string) {
  const stations = await fetchNws<ExternalStationsResponse>(stationsUrl)
  const stationIds = stations.features
    .map((feature) => feature.properties.stationIdentifier)
    .filter(Boolean)
    .slice(0, 4)

  for (const stationId of stationIds) {
    try {
      const observation = await fetchNws<ExternalObservationResponse>(
        `https://api.weather.gov/stations/${stationId}/observations/latest?require_qc=true`
      )

      if (observation.properties?.timestamp) {
        return observation.properties
      }
    } catch {
      // Skip stations that do not currently provide a usable observation.
    }
  }

  return null
}

export function isWeatherServiceError(
  error: unknown
): error is WeatherServiceError {
  return error instanceof WeatherServiceError
}

export async function getWeatherReport(
  query: string
): Promise<WeatherResponse> {
  const trimmedQuery = query.trim()

  if (!trimmedQuery) {
    throw new WeatherServiceError(
      'Enter a city, ZIP code, or coordinates.',
      400
    )
  }

  const resolvedLocation = await resolveLocation(trimmedQuery)
  const points = await fetchNws<ExternalPointsResponse>(
    `https://api.weather.gov/points/${resolvedLocation.lat},${resolvedLocation.lon}`
  )

  const [forecast, hourly] = await Promise.all([
    fetchNws<ExternalForecastResponse>(points.properties.forecast),
    fetchNws<ExternalForecastResponse>(points.properties.forecastHourly)
  ])

  const [observationResult, alertsResult] = await Promise.allSettled([
    fetchLatestObservation(points.properties.observationStations),
    fetchNws<ExternalAlertsResponse>(
      `https://api.weather.gov/alerts/active?point=${resolvedLocation.lat},${resolvedLocation.lon}`
    )
  ])

  const observation =
    observationResult.status === 'fulfilled' ? observationResult.value : null
  const alertsPayload =
    alertsResult.status === 'fulfilled' ? alertsResult.value : { features: [] }

  const daily = mapDailyForecast(
    forecast.properties.periods,
    points.properties.timeZone
  )
  const hourlyForecast = mapHourlyForecast(
    hourly.properties.periods,
    points.properties.timeZone
  )
  const fallbackHourly = hourlyForecast[0]
  const currentSummary =
    observation?.textDescription ||
    fallbackHourly?.shortForecast ||
    daily[0]?.summary ||
    'Current conditions unavailable'

  const locationCity =
    resolvedLocation.city ||
    points.properties.relativeLocation?.properties?.city ||
    ''
  const locationState =
    resolvedLocation.state ||
    points.properties.relativeLocation?.properties?.state ||
    'US'

  const weatherAlerts: WeatherAlert[] = alertsPayload.features.map(
    (feature) => ({
      id: feature.id,
      event: feature.properties.event,
      severity: feature.properties.severity,
      urgency: feature.properties.urgency,
      certainty: feature.properties.certainty,
      headline: feature.properties.headline || feature.properties.event,
      description: feature.properties.description || '',
      instruction: feature.properties.instruction || '',
      area: feature.properties.areaDesc || '',
      effective: feature.properties.effective || null,
      ends: feature.properties.ends || null
    })
  )

  return {
    location: {
      query: trimmedQuery,
      matchedAddress: resolvedLocation.matchedAddress,
      lat: roundNumber(resolvedLocation.lat, 4) || resolvedLocation.lat,
      lon: roundNumber(resolvedLocation.lon, 4) || resolvedLocation.lon,
      city: locationCity,
      state: locationState,
      timeZone: points.properties.timeZone,
      forecastOffice: extractForecastOffice(points.properties.forecastOffice),
      radarStation: points.properties.radarStation || null
    },
    current: {
      observedAt:
        observation?.timestamp ||
        fallbackHourly?.time ||
        forecast.properties.generatedAt,
      icon: observation?.icon || fallbackHourly?.icon || daily[0]?.icon || '',
      summary: currentSummary,
      temperatureF:
        celsiusToFahrenheit(observation?.temperature.value) ??
        fallbackHourly?.temperatureF ??
        null,
      feelsLikeF:
        celsiusToFahrenheit(
          observation?.heatIndex.value ?? observation?.windChill.value
        ) ??
        celsiusToFahrenheit(observation?.temperature.value) ??
        fallbackHourly?.temperatureF ??
        null,
      humidity:
        roundNumber(observation?.relativeHumidity.value) ??
        fallbackHourly?.humidity ??
        null,
      dewpointF: celsiusToFahrenheit(observation?.dewpoint.value) ?? null,
      windSpeedMph:
        kmhToMph(observation?.windSpeed.value) ??
        fallbackHourly?.windSpeedMph ??
        null,
      windDirection:
        windDegreesToCompass(observation?.windDirection.value) ||
        fallbackHourly?.windDirection ||
        'Calm',
      pressureHpa: pascalsToHpa(observation?.barometricPressure.value),
      visibilityMiles: metersToMiles(observation?.visibility.value),
      stationName: observation?.stationName || null,
      stationId: observation?.stationId || null
    },
    sun: {
      sunrise: points.properties.astronomicalData?.sunrise || null,
      sunset: points.properties.astronomicalData?.sunset || null,
      solarNoon: points.properties.astronomicalData?.transit || null
    },
    hourly: hourlyForecast,
    daily,
    alerts: weatherAlerts.slice(0, 3),
    overview: buildOverview(currentSummary, daily, weatherAlerts.length),
    generatedAt:
      observation?.timestamp ||
      hourly.properties.generatedAt ||
      forecast.properties.generatedAt
  }
}
