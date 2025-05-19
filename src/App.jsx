import React, { useState } from "react";
import axios from "axios";

const App = () => {

    const [data, setData] = useState([])
    const [location, setLocation] = useState('')

    const apiKey = '196c97385a8f3b60942dd868c4a80d5a'
    
    
    
    const searchLocation = async (event) => {
      if (event.key === 'Enter') {
        try {
          // Use the location state in the URL (not a hardcoded city)
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
          );
          console.log(response.data);
          setData(response.data);
         
         
        } catch (error) {
          alert('invalid location. try again')
          console.error('Error fetching weather data:', error);
          setLocation('')
          
          
        }
      }
    };
    
  
       
        

  










  return (
    <div className="app">

       <div className="search" >
        <input 
        onChange={(e) =>setLocation(e.target.value)}  
        type="text" 
        placeholder="Search Location For Weather "
        value={location}
        onKeyDown={searchLocation}
        
        />
       </div>
     

      <div className="container">
        

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            
          </div>
          <div className="description">
            {data.weather ?  <p>{data.weather[0].main}</p> : null }
           
          </div>
        </div>
        {data.name !== undefined ? <div className="bottom ">
          <div className="feels ">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ?  <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
           
            <p>Wind Speed</p>
          </div>
        </div> : null}
        
      </div>
    </div>
  );
};

export default App;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 196c97385a8f3b60942dd868c4a80d5a
// https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=196c97385a8f3b60942dd868c4a80d5a