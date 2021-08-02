import "./SearchBar.css";
import {useState} from "react";


function SearchBar(props){
    const [cityName, setCityName] = useState("");

    function handleSubmit(e){ //Passes back the name of the city to App.js
        e.preventDefault();
        if(cityName !== "" ){
            props.getCityWeather(cityName);
        }
        setCityName("");
    }


    // const giveName = () =>{
    //     if(cityName !== "" ){
    //         props.getCityWeather(cityName);
    //     }
    //     setCityName("");
    // } 


    return(
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={handleSubmit}>
                <input className="CityInput" type="text" placeholder="Enter City Name..." value={cityName} onChange={(e) => setCityName(e.target.value)} /> 
                {/* <button className="ForecastButton" type="button" onClick={giveName}>Get Forecast</button> */}
            </form> 
            {/* <button>Get Forecast</button> */}
        </div>

    )

}



export default SearchBar