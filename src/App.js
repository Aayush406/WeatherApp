import './App.css';
import SearchBar from "./SearchBar.js";
import {useState} from "react";


const apiInfo = {
  key: "718bc4c83b7278c32f27be07e724e39a",
  base: "http://api.openweathermap.org/data/2.5/weather?"
}


function App() {
  
  // const [city, setCity] = useState("Irvine");
  const [currentWeather, setCurrentWeather] = useState("");

  const getWeatherInfo = async(city) =>{
    var link = (apiInfo.base + "q=" + city + "&appid=" + apiInfo.key);
    console.log(link)
    const response = await fetch(apiInfo.base + "q=" + city + "&appid=" + apiInfo.key);

    if (response.status === 200) {
      const weather = await response.json()
      setCurrentWeather(weather);
      console.log(weather);
    }
    else{
      throw new Error("Unable to get weather");
    }
  }
  return (
    <div className="App">
      <SearchBar getCityWeather={getWeatherInfo}></SearchBar>
      <div>
        <p>{parseInt((currentWeather.main.temp - 273) * 9/5 + 32)}</p>
      </div>
    </div>
  );
}



// function SearchBar (){
  

// }

export default App;
