import React, { useState } from 'react';

function Body(){

    const [city, setCity] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [error, setError] = useState('');

    function handleInputChange(event){
        setCity(event.target.value);
    }

    async function clickHandler() {
        try {
            const apiKey = `3e49df5ba6e3ef1df7e8995849353ac5`;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setCurrentTemp(`${data.main.temp}°C`);
            setFeelsLike(`${data.main.feels_like}°C`)
            setShowResult(true);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error: No city found. Please try again.');
            setShowResult(false);
        }
    }

    return(
        <div className='main'>
            <div className='infoGetter'>
                <input type="text" placeholder="enter a city name" value={city} onChange={handleInputChange} className='textBox' />
                <button type="button" onClick={clickHandler}>
                    <img src='/images/search-icon.png' alt="Search Icon" className='searchIcon'/>
                </button>
            </div>
            {showResult && (
                <div className='result'>
                    <div className='tem'><h2>Current Temperature</h2><p className='temps'>{currentTemp}</p></div>
                    <div className='tem'><h2>Feels Like</h2><p className='temps'>{feelsLike}</p></div>
                </div>
            )}
            <div className='error'>{error}</div>
        </div>

    )
}

export default Body;