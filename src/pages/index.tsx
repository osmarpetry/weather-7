import { FormEvent, useState, useTransition } from 'react'
import Head from 'next/head'
import useSWR from 'swr'

import WeatherDashboard from 'components/WeatherDashboard'
import { DEFAULT_LOCATION, getWeather } from 'api'

export default function Home() {
  const [searchValue, setSearchValue] = useState(DEFAULT_LOCATION)
  const [query, setQuery] = useState(DEFAULT_LOCATION)
  const [isPending, startTransition] = useTransition()

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    query ? ['weather', query] : null,
    ([, nextQuery]) => getWeather(nextQuery),
    {
      revalidateOnFocus: false,
      keepPreviousData: true
    }
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextQuery = searchValue.trim()

    if (!nextQuery) {
      return
    }

    if (nextQuery === query) {
      void mutate()
      return
    }

    startTransition(() => {
      setQuery(nextQuery)
    })
  }

  return (
    <>
      <Head>
        <title>Weather Observatory</title>
        <meta
          name="description"
          content="A cinematic weather observatory built on the National Weather Service API."
        />
      </Head>

      <WeatherDashboard
        data={data}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSubmit={handleSubmit}
        isLoading={isLoading || isValidating || isPending}
        errorMessage={error instanceof Error ? error.message : null}
      />
    </>
  )
}
