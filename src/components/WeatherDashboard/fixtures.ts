import { WeatherResponse } from 'types/weather'

export const dashboardFixture: WeatherResponse = {
  location: {
    query: 'Washington, DC',
    matchedAddress: 'Washington, DC, USA',
    lat: 38.8977,
    lon: -77.0365,
    city: 'Washington',
    state: 'DC',
    timeZone: 'America/New_York',
    forecastOffice: 'LWX',
    radarStation: 'KDCA'
  },
  current: {
    observedAt: '2026-04-02T22:50:00.000Z',
    icon: '/icons/icon.svg',
    summary: 'Partly cloudy',
    temperatureF: 64,
    feelsLikeF: 64,
    humidity: 83,
    dewpointF: 59,
    windSpeedMph: 0,
    windDirection: 'N',
    pressureHpa: 1019,
    visibilityMiles: 10,
    stationName: 'Ronald Reagan Washington National Airport',
    stationId: 'KDCA'
  },
  sun: {
    sunrise: '2026-04-02T10:50:00.000Z',
    sunset: '2026-04-02T23:32:00.000Z',
    solarNoon: '2026-04-02T17:11:00.000Z'
  },
  hourly: [
    {
      time: '2026-04-02T23:00:00.000Z',
      label: '7 PM',
      isDaytime: true,
      temperatureF: 66,
      precipitationChance: 4,
      humidity: 81,
      windSpeedMph: 4,
      windDirection: 'NE',
      icon: '/icons/icon.svg',
      shortForecast: 'Mostly clear'
    },
    {
      time: '2026-04-03T00:00:00.000Z',
      label: '8 PM',
      isDaytime: false,
      temperatureF: 65,
      precipitationChance: 6,
      humidity: 82,
      windSpeedMph: 3,
      windDirection: 'NE',
      icon: '/icons/icon.svg',
      shortForecast: 'Partly cloudy'
    },
    {
      time: '2026-04-03T01:00:00.000Z',
      label: '9 PM',
      isDaytime: false,
      temperatureF: 65,
      precipitationChance: 8,
      humidity: 84,
      windSpeedMph: 3,
      windDirection: 'E',
      icon: '/icons/icon.svg',
      shortForecast: 'Patchy fog'
    },
    {
      time: '2026-04-03T02:00:00.000Z',
      label: '10 PM',
      isDaytime: false,
      temperatureF: 65,
      precipitationChance: 12,
      humidity: 86,
      windSpeedMph: 2,
      windDirection: 'E',
      icon: '/icons/icon.svg',
      shortForecast: 'Patchy fog'
    },
    {
      time: '2026-04-03T03:00:00.000Z',
      label: '11 PM',
      isDaytime: false,
      temperatureF: 64,
      precipitationChance: 15,
      humidity: 88,
      windSpeedMph: 2,
      windDirection: 'SE',
      icon: '/icons/icon.svg',
      shortForecast: 'Chance showers'
    },
    {
      time: '2026-04-03T04:00:00.000Z',
      label: '12 AM',
      isDaytime: false,
      temperatureF: 63,
      precipitationChance: 18,
      humidity: 89,
      windSpeedMph: 2,
      windDirection: 'SE',
      icon: '/icons/icon.svg',
      shortForecast: 'Chance showers'
    },
    {
      time: '2026-04-03T05:00:00.000Z',
      label: '1 AM',
      isDaytime: false,
      temperatureF: 63,
      precipitationChance: 22,
      humidity: 90,
      windSpeedMph: 3,
      windDirection: 'S',
      icon: '/icons/icon.svg',
      shortForecast: 'Light rain'
    },
    {
      time: '2026-04-03T06:00:00.000Z',
      label: '2 AM',
      isDaytime: false,
      temperatureF: 62,
      precipitationChance: 28,
      humidity: 91,
      windSpeedMph: 3,
      windDirection: 'S',
      icon: '/icons/icon.svg',
      shortForecast: 'Light rain'
    },
    {
      time: '2026-04-03T07:00:00.000Z',
      label: '3 AM',
      isDaytime: false,
      temperatureF: 61,
      precipitationChance: 35,
      humidity: 92,
      windSpeedMph: 4,
      windDirection: 'SW',
      icon: '/icons/icon.svg',
      shortForecast: 'Rain showers'
    },
    {
      time: '2026-04-03T08:00:00.000Z',
      label: '4 AM',
      isDaytime: false,
      temperatureF: 60,
      precipitationChance: 39,
      humidity: 92,
      windSpeedMph: 4,
      windDirection: 'SW',
      icon: '/icons/icon.svg',
      shortForecast: 'Rain showers'
    },
    {
      time: '2026-04-03T09:00:00.000Z',
      label: '5 AM',
      isDaytime: false,
      temperatureF: 59,
      precipitationChance: 30,
      humidity: 90,
      windSpeedMph: 5,
      windDirection: 'W',
      icon: '/icons/icon.svg',
      shortForecast: 'Mostly cloudy'
    },
    {
      time: '2026-04-03T10:00:00.000Z',
      label: '6 AM',
      isDaytime: true,
      temperatureF: 58,
      precipitationChance: 18,
      humidity: 88,
      windSpeedMph: 5,
      windDirection: 'W',
      icon: '/icons/icon.svg',
      shortForecast: 'Clouds clearing'
    }
  ],
  daily: [
    {
      date: '2026-04-03',
      label: 'Fri, Apr 3',
      summary: 'Patchy fog then chance rain showers',
      icon: '/icons/icon.svg',
      highF: 67,
      lowF: 58,
      day: {
        name: 'Friday',
        startTime: '2026-04-03T10:00:00.000Z',
        isDaytime: true,
        temperatureF: 67,
        precipitationChance: 35,
        windSpeedMph: 7,
        windDirection: 'W',
        shortForecast: 'Mostly sunny',
        detailedForecast:
          'Patchy fog gives way to a brighter afternoon with a low chance of showers.',
        icon: '/icons/icon.svg'
      }
    },
    {
      date: '2026-04-04',
      label: 'Sat, Apr 4',
      summary: 'Mostly sunny',
      icon: '/icons/icon.svg',
      highF: 69,
      lowF: 51,
      day: {
        name: 'Saturday',
        startTime: '2026-04-04T10:00:00.000Z',
        isDaytime: true,
        temperatureF: 69,
        precipitationChance: 6,
        windSpeedMph: 8,
        windDirection: 'NW',
        shortForecast: 'Mostly sunny',
        detailedForecast:
          'Dry air settles in with a bright sky and a light northwest breeze.',
        icon: '/icons/icon.svg'
      }
    },
    {
      date: '2026-04-05',
      label: 'Sun, Apr 5',
      summary: 'Sunny',
      icon: '/icons/icon.svg',
      highF: 71,
      lowF: 52,
      day: {
        name: 'Sunday',
        startTime: '2026-04-05T10:00:00.000Z',
        isDaytime: true,
        temperatureF: 71,
        precipitationChance: 4,
        windSpeedMph: 6,
        windDirection: 'N',
        shortForecast: 'Sunny',
        detailedForecast: 'A quiet spring day with broad sun and low humidity.',
        icon: '/icons/icon.svg'
      }
    },
    {
      date: '2026-04-06',
      label: 'Mon, Apr 6',
      summary: 'Increasing clouds',
      icon: '/icons/icon.svg',
      highF: 68,
      lowF: 55,
      day: {
        name: 'Monday',
        startTime: '2026-04-06T10:00:00.000Z',
        isDaytime: true,
        temperatureF: 68,
        precipitationChance: 18,
        windSpeedMph: 10,
        windDirection: 'SE',
        shortForecast: 'Partly sunny',
        detailedForecast:
          'Cloud cover thickens through the day while the breeze turns onshore.',
        icon: '/icons/icon.svg'
      }
    },
    {
      date: '2026-04-07',
      label: 'Tue, Apr 7',
      summary: 'Showers likely',
      icon: '/icons/icon.svg',
      highF: 63,
      lowF: 49,
      day: {
        name: 'Tuesday',
        startTime: '2026-04-07T10:00:00.000Z',
        isDaytime: true,
        temperatureF: 63,
        precipitationChance: 65,
        windSpeedMph: 12,
        windDirection: 'E',
        shortForecast: 'Showers likely',
        detailedForecast:
          'A wetter setup arrives with steady clouds and periodic rain bands.',
        icon: '/icons/icon.svg'
      }
    }
  ],
  alerts: [
    {
      id: 'alert-1',
      event: 'Dense Fog Advisory',
      severity: 'Moderate',
      urgency: 'Expected',
      certainty: 'Likely',
      headline: 'Dense Fog Advisory in effect until 10 AM EDT',
      description:
        'Visibility may drop below one quarter mile in low-lying areas and near waterways.',
      instruction:
        'Slow down, use low-beam headlights, and leave extra distance.',
      area: 'District of Columbia',
      effective: '2026-04-03T04:00:00.000Z',
      ends: '2026-04-03T14:00:00.000Z'
    }
  ],
  overview: {
    headline: 'Clouds break after a damp overnight period',
    narrative:
      'A foggy and occasionally wet overnight stretch gives way to a brighter afternoon before clouds rebuild early next week.'
  },
  generatedAt: '2026-04-02T22:55:00.000Z'
}

export const quietDashboardFixture: WeatherResponse = {
  ...dashboardFixture,
  alerts: []
}

export const partialObservationFixture: WeatherResponse = {
  ...dashboardFixture,
  current: {
    ...dashboardFixture.current,
    feelsLikeF: null,
    humidity: null,
    dewpointF: null,
    windSpeedMph: null,
    pressureHpa: null,
    visibilityMiles: null,
    stationName: null,
    stationId: null
  },
  location: {
    ...dashboardFixture.location,
    radarStation: null
  }
}

export const mixedForecastFixture: WeatherResponse = {
  ...dashboardFixture,
  daily: dashboardFixture.daily.map((day, index) =>
    index === 1
      ? {
          ...day,
          lowF: null
        }
      : index === 3
      ? {
          ...day,
          highF: null,
          day: {
            ...day.day!,
            windSpeedMph: null
          }
        }
      : day
  )
}

export const alertHeavyDashboardFixture: WeatherResponse = {
  ...dashboardFixture,
  current: {
    ...dashboardFixture.current,
    summary: 'Thunderstorms likely'
  },
  alerts: [
    ...dashboardFixture.alerts,
    {
      id: 'alert-2',
      event: 'Flood Watch',
      severity: 'Severe',
      urgency: 'Future',
      certainty: 'Possible',
      headline: 'Flood Watch in effect late tonight through Tuesday afternoon',
      description:
        'Multiple rounds of rainfall may produce flooding in poor-drainage and low-lying areas.',
      instruction:
        'Monitor later forecasts and be prepared to move to higher ground.',
      area: 'District of Columbia',
      effective: '2026-04-03T22:00:00.000Z',
      ends: null
    }
  ],
  overview: {
    headline: 'Storm bands build ahead of a wetter Tuesday',
    narrative:
      'Conditions remain unsettled as repeated rounds of showers and storms push through the metro corridor.'
  }
}
