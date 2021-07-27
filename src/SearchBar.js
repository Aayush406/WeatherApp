import "./SearchBar.css";
import {useState} from "react";


function SearchBar(props){
    const [cityName, setCityName] = useState("");


    const giveName = () =>{
        if(cityName !== ""){
            props.getCityName(cityName);
        }
        setCityName("");
    } 


    return(
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form>
                <input type="text" placeholder="Enter City Name" value={cityName} onChange={(e) => setCityName(e.target.value)}/>
                <button type="button" onClick={giveName}>Get Forecast</button>
            </form> 
            {/* <button>Get Forecast</button> */}
        </div>

    )

}



export default SearchBar