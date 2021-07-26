import "./SearchBar.css";
import {useState} from "react";


function SearchBar(props){
    const [cityName, setCityName] = useState("");


    return(
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form>
                <input type="text"/>
                <button>Get Forecast</button>
            </form> 
            {/* <button>Get Forecast</button> */}
        </div>

    )

}



export default SearchBar