import React, {useState} from "react";
import axios from "axios";
import "../styles/CitiesSelect.css";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import GetWeather from "./GetWeather";

function CitiesSelect () {

    const availableCities = [
        {
            "coords": {
                "lat": "55.75583",
                "lon": "37.61778"
            },
            "name": "Moscow",
            "population": 12655050,
            "subject": "Moscow"
        },
        {
            "coords": {
                "lat": "59.95",
                "lon": "30.31667"
            },
            "name": "saint petersburg",
            "population": 5384342,
            "subject": "saint petersburg"
        },
        {
            "coords": {
                "lat": "53.18333",
                "lon": "50.11667"
            },
            "name": "Samara",
            "population": 1144759,
            "subject": "Samara"
        },
        {
            "coords": {
                "lat": "55.01667",
                "lon": "82.91667"
            },
            "name": "Novosibirsk",
            "population": 1620162,
            "subject": "Novosibirsk district"
        },
    ];

    let [coord, coordinations] = useState([])

    function ChangedCity(e) {
        // document.getElementById("city").innerHTML = e.key.lon;
        let lat = e.key.lat;
        let lon = e.key.lon;
        let unit = "metric";
        let API_key = "70f2a98404bc24b9abc7e1d47f4db876"

        if(!coord.length) {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_key}`)
                .then(res=> {
                    console.log(res);
                    coordinations(res.data);
                })
        }

    }

    const selectCity = availableCities.map(opt=> ({label: opt.subject, value: opt.name, key:opt.coords}))

    return (
        <div>
        <Select
            options={selectCity}
            onChange={opt=> ChangedCity(opt)}
        />


            <GetWeather cityWeather = {coord}/>

        </div>
)

}

export default CitiesSelect;