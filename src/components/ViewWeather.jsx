import { useState } from 'react'
import { LOADING_TEXT } from '../constants'


function ViewWeather(props) {
    const CITY_NOT_FOUND = 'City not found'
    const CHOOSE_CITY = 'Choose city'

    const { result, loading, error } = props

    return (
        <div className="result">
            {loading && <p>{LOADING_TEXT}</p>}

            <div className="weather-box">
                <h1>
                    {result ? `${result.day}, ${result.date}` : CHOOSE_CITY}
                </h1>
                {error && <p className="error">{CITY_NOT_FOUND}</p>}
                <h2 className="city">{result ? result.city : ""}</h2>
                <p className="temperature">{result ? `${result.temperature}°C` : ""}</p>
                <p className="temperature">{result ? result.trend : ""}</p>
            </div>
        </div>
    )
}

export default ViewWeather