import { useState } from 'react'
import SearchCity from './components/SearchCity'
import ViewWeather from './components/ViewWeather'
import API_BASE_URL from "./config/api";

function App() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!city) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch(
        `${API_BASE_URL}/cities/${city}/weather`
      )

      if (!res.ok) {
        throw new Error('Failed to fetch weather')
      }

      const data = await res.json()
      setResult(data)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>Weather Service</h1>
      <SearchCity city={city} setCity={setCity} handleSubmit={handleSubmit} />
      <ViewWeather result={result} loading={loading} error={error} />
    </div>
  )
}

export default App
