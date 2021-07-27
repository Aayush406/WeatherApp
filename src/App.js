import './App.css';
import SearchBar from "./SearchBar.js";
import {useState} from "react";

const apiInfo = {
  key: "718bc4c83b7278c32f27be07e724e39a",
  base: "api.openweathermap.org/data/2.5/weather?"
}


function App() {
  
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  
  const getCity = (cityName) =>{
    setCity(cityName);
    getWeatherInfo();
  }

  const getWeatherInfo = async() =>{
    const response = await fetch(apiInfo.base + "q=" + city + "&appid=" + apiInfo.key);

    if (response.status === 200) {
      console.log(response);
      console.log(response.json());
      // const weather = await response.json()
      // setCurrentWeather(weather);
      // console.log(weather);
    }
    else{
      throw new Error("Unable to get weather");
    }
  //   fetch('${apiInfo.base}q=${city}&appid=${apiInfo.key}')
  //     .then(response => response.json())
  //     .then(weather => setCurrentWeather(weather));
  }
  
  return (
    <div className="App">
      <SearchBar getCityName={getCity}></SearchBar>
      <div>
        
      </div>
    </div>
  );
}



// function SearchBar (){
  

// }

export default App;
