interface Coords {
  lat: number
  lng: number
}

interface Forecast {
  temperature: string
  shortForecast: string
  detailedForecast: string
}

interface ForecastData {
  periods: Forecast[]
}

interface ForecastResponse {
  properties: ForecastData
}

async function fetchForecast(coords: Coords): Promise<Forecast[][]> {
  console.log(coords.lat, coords.lng)
  try {
    let response = await fetch(
      `https://api.weather.gov/points/${coords.lat},${coords.lng}`
    )
    let data = await response.json()
    const forecast = data?.properties?.forecast
    if (forecast) {
      response = await fetch(forecast)
      data = (await response.json()) as ForecastResponse
      const periods = data.properties.periods
      const days: Forecast[][] = []
      for (let i = 0; i < periods.length; i += 2) {
        days.push([periods[i], periods[i + 1]])
      }
      return days
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

async function fetchCoords(address: string): Promise<Coords> {
  try {
    const endpoint = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${address}&benchmark=Public_AR_Current&format=json`
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://geocoding.geo.census.gov'
        }
      }
    )
    const data = await response.json()
    const coords = data.result.addressMatches[0].coordinates
    return {
      lat: coords.y,
      lng: coords.x
    }
  } catch (error) {
    console.log(error)
  }
  return { lat: 0, lng: 0 }
}

export const getWeatherFunc = async (address: string) => {
  const coords = await fetchCoords(address)
  const forecast = await fetchForecast(coords)
  return forecast
}
