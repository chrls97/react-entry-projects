import React, { useState, useEffect, userRef, useRef } from 'react';
import './Weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

//TOAST
import { ToastContainer, toast } from 'react-toastify';

//assets image
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';




const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  }

  const search = async (city) =>{
    try{
      if(city === ''){
        toast.error("Please Enter City Name", {autoClose: 1500});
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_ID}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        toast.error("Please Enter Valud City Name", {autoClose: 1500});
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:data.main.temp,
        location:data.name,
        icon:icon
      })

    }catch{
      setWeatherData(false)
    }
  }

  

  return (
    <>
    <div className='weather'>
      <h1>The Weather Channel</h1>
      <div className="search-bar">
        <input type="text"  ref={inputRef} placeholder='Search City'/>
        <button className='location-btn'><FontAwesomeIcon icon={faLocationDot} /></button>
        <button className='search-btn' onClick={() => search(inputRef.current.value)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      {weatherData ? <>
        <img src={weatherData.icon} alt='' className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className="col">
            <img src={humidity_icon} alt={humidity_icon} />
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>

          <div className="col">
            <img src={wind_icon} alt={wind_icon} />
            <div>
              <p>{weatherData.windSpeed} km/h</p>
              <span>Windspeed</span>
            </div>
          </div>
          
        </div>
      </> :<>
      <div className='no-weather'>
        NO WEATHER DATA TO SHOW,<br /> PLEASE ENTER CITY NAME
      </div>
      </>}
      
    </div>
    <ToastContainer />
    </>
  )
}

export default Weather
