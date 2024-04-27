import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/weather.css'; 

function Weatherapp(){

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
            const apiKey = '3e49df5ba6e3ef1df7e8995849353ac5';
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

    let inputCity = document.querySelector(".textBox");

    if(inputCity){
        inputCity.addEventListener("keydown", (event)=>{
            if(event.key === 'Enter'){
                clickHandler();
            }
        })
    }

    return(
        <div>
            <div>
                <h1>Weather App</h1>
            </div>
            <Link to='/'><button type='button' className='homebttn'>Home</button></Link>
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
                {!showResult && (<div className='error'>{error}</div>)}
            </div>
            <div>
                <p className="footer">made with ❤️ by <a href="https://github.com/Abayvm">abay</a></p>
            </div>
        </div>
    )
}

export default Weatherapp;