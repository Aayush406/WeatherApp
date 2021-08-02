import './App.css';
import SearchBar from "./SearchBar.js";
import {useState} from "react";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons"
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const apiInfo = {
  key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/weather?"
}

const icons = [faSun, faMoon, faCloudSun, faCloudMoon, faCloud, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faBolt, faSnowflake, faSmog]; // Array of icons to use based on weather
var num = -1; // index of icon

function App() {
  
  // const [city, setCity] = useState("Irvine");
  const [currentWeather, setCurrentWeather] = useState("");
  

  const getWeatherInfo = async(city) =>{ // Creates a request to the openweathermap api using the given city

    // var link = (apiInfo.base + "q=" + city + "&appid=" + apiInfo.key);
    // console.log(link)

    try{ // Tries to get the data for the given city
      const response = await fetch(apiInfo.base + "q=" + city + "&appid=" + apiInfo.key);

      if (response.status === 200) {
        const currWeather = await response.json() //Converts the api call to json on success


        if (currWeather.weather[0].icon === "01d"){ //Checks to see what the icon code is to decide what icon to use in icons array
          num = 0;
        }
        else if (currWeather.weather[0].icon === "01n"){
          num = 1;
        }
        else if (currWeather.weather[0].icon === "02d"){
          num = 2;
        }
        else if (currWeather.weather[0].icon === "02n"){
          num = 3;
        }
        
        else if (currWeather.weather[0].icon === "03d"){
          num = 4;
        }
        else if (currWeather.weather[0].icon === "03n"){
          num = 4;
        }
        else if (currWeather.weather[0].icon === "04d"){
          num = 4;
        }
        else if (currWeather.weather[0].icon === "04n"){
          num = 4;
        }
        
        else if (currWeather.weather[0].icon === "09d"){
          num = 5;
        }
        else if (currWeather.weather[0].icon === "09n"){
          num = 5;
        }
        else if (currWeather.weather[0].icon === "10d"){
          num = 6;
        }
        else if (currWeather.weather[0].icon === "10n"){
          num = 7;
        }
        else if (currWeather.weather[0].icon === "11d"){
          num = 8;
        }
        else if (currWeather.weather[0].icon === "11n"){
          num = 8;
        }
        else if (currWeather.weather[0].icon === "13d"){
          num = 9;
        }
        else if (currWeather.weather[0].icon === "13n"){
          num = 9;
        }
        else if (currWeather.weather[0].icon === "50d"){
          num = 10;
        }
        else if (currWeather.weather[0].icon === "50n"){
          num = 10;
        }
        setCurrentWeather(currWeather);
      }
      else{ //Throw error on failure
        throw new Error("Unable to get weather");
      }
    }
    catch{ //For now do nothing and allow for more inputs
      
    }
  }
  return (
    <div className="App">
      <SearchBar getCityWeather={getWeatherInfo}></SearchBar>
      {(typeof currentWeather.main != "undefined") ? (
        <div>
          <div className="location">
            <div>{currentWeather.name}, {currentWeather.sys.country} </div>
          </div>
          <div className="weather">
            <div>{currentWeather.weather[0].main}</div>
          </div>
          <div>
            <div className="weatherIcon"><FontAwesomeIcon icon={icons[num]} color="white"/> </div>
          </div>
          <div className="temperature">
            <div>{parseInt(9/5 * (currentWeather.main.temp - 273) + 32)}°F</div>
          </div>

      </div>
      ) : ('')}
    </div>
  );
}



// function SearchBar (){
  

// }

export default App;
