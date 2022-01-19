import React, {useState} from "react";
import DisplayWeatherDaily from "./DisplayWeatherDaily";
import DisplayWeatherHourly from "./DisplayWeatherHourly";
import DisplayWeatherMinutely from "./DisplayWeatherMinutely";
import Flickity from "react-flickity-component";


import "../styles/GetWeather.css";
import "../styles/Flickity.css";



function GetWeather(props) {

    const flickityOptions = {
        freeScroll: true,
        draggable: true,
        groupCells: 4,
    };

    if (props.cityWeather.daily)
    {
        return (
            <div>
                <div className={"getDaily"}>
                    {props.cityWeather.daily.map(event=><DisplayWeatherDaily
                        index={props.cityWeather.daily.indexOf(event)}
                        info={event}/>)}
                </div>

                <div className={"getHourly"}>
                    <h2>
                        Hourly Weather
                    </h2>
                    <Flickity options={flickityOptions}>
                            {props.cityWeather.hourly.map(e=><DisplayWeatherHourly info={e}/>)}
                    </Flickity>
                </div>

                <div className={"getminutely"}>
                    <h2>
                        Minutely weather
                    </h2>

                    <Flickity options={flickityOptions}>
                        {props.cityWeather.minutely.map(e=><DisplayWeatherMinutely info={e}/>)}
                    </Flickity>

                </div>

            </div>
        )
    }
    else {
        return(
            <div>

            </div>
        )
    }
}


export default GetWeather;