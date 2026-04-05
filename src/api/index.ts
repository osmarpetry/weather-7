import { WeatherResponse } from 'types/weather'

export const DEFAULT_LOCATION = 'Washington, DC'

export async function getWeather(address: string): Promise<WeatherResponse> {
  const response = await fetch(
    `/api/weather?address=${encodeURIComponent(address)}`
  )
  const payload = await response.json()

  if (!response.ok) {
    throw new Error(payload.message || 'Unable to load the weather report.')
  }

  return payload as WeatherResponse
}
