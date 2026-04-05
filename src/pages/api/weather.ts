import type { NextApiRequest, NextApiResponse } from 'next'

import { getWeatherReport, isWeatherServiceError } from 'lib/weather'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  const address = Array.isArray(req.query.address)
    ? req.query.address[0]
    : req.query.address

  if (!address) {
    return res
      .status(400)
      .json({ message: 'Add an address, city, ZIP code, or coordinates.' })
  }

  try {
    const forecast = await getWeatherReport(address)

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600')
    return res.status(200).json(forecast)
  } catch (error) {
    if (isWeatherServiceError(error)) {
      return res.status(error.statusCode).json({ message: error.message })
    }

    return res
      .status(500)
      .json({ message: 'Unexpected weather service error.' })
  }
}
