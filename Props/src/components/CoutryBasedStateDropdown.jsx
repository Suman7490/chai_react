import React, { useState } from 'react'
const countries = [
    {
        name: "India",
        value: "IN",
        cities: ['Delhi', 'Mumbai']
    },
    {
        name: "Pakistan",
        value: "PK",
        cities: ['Lahore', 'Karachi']
    },
    {
        name: "Bangladesh",
        value: "BG",
        cities: ['Dhaka', 'Chittangong']
    },
]
function CoutryBasedStateDropdown() {
    const [country, setCountry] = useState(countries[0])

    return (
        <div>
            <div className='from-group'>
                <label>Select Country: </label>
                <select
                    value={country.name}
                    onChange={(e) => {
                        const selectedCountry = countries.find(item => item.name === e.target.value)
                        setCountry(selectedCountry)
                    }}
                >
                    {countries.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    )
                    )}
                </select>
            </div>
            <div className='from-group'>
            <label>Select State: </label>
                <select>
                    {country.cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    )
                    )}
                </select>
            </div>
        </div>
    )
}

export default CoutryBasedStateDropdown
