import { useState } from 'react'
import { SEARCH_BUTTON } from '../constants'

function SearchCity(props) {
    const ENTER_CITY = 'Enter city (e.g. London)'

    const { city, setCity, handleSubmit } = props
    const [error, setError] = useState(null)

    return (< form onSubmit={handleSubmit} className="search-form" >
        <input
            type="text"
            placeholder={ENTER_CITY}
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">{SEARCH_BUTTON}</button>
    </form >
    )
}

export default SearchCity


