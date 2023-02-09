import { useState } from 'react'
import Week from 'components/Forecast/Week'
import AddressForm from 'components/Forecast/AddressForm'
import { getWeatherFunc } from 'api'

export default function Home() {
  const [address, setAddress] = useState('')
  const [forecast, setForecast] = useState([])

  const handleAddressChange = (address: string) => {
    setAddress(address)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForecast(await getWeatherFunc(address))
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <AddressForm
        address={address}
        handleAddressChange={handleAddressChange}
        handleSubmit={handleSubmit}
      />
      {forecast?.length > 0 ? <Week forecast={forecast} /> : null}
    </main>
  )
}
