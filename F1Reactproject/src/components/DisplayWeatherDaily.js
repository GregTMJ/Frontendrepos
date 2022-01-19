import React from "react";
import "../styles/DisplayWeatherDaily.css";

function DisplayWeatherDaily(props) {

    const today = new Date();
    const neededDate = new Date();

    neededDate.setDate(today.getDate() + props.index);

    let neededNumDay = neededDate.getDate()

    let neededMonth = neededDate.toLocaleString("en-US", {month: "short"});
    let Day = neededDate.toLocaleString("en-US", {weekday: "short"});


    return(
        <div className={"WeatherDaily"}>

            <div className={"DateDisplay"}>

                <h3 className={"dayDisplay"}>
                    {Day}
                </h3>

                <h4 className={"monthDisplay"}>
                    {neededNumDay} {neededMonth}
                </h4>

            </div>

            <ul className={"weatherInfo"}>

                <li>
                    <img src={"https://cdn-icons.flaticon.com/png/512/2387/premium/2387835.png?token=exp=1642490938~hmac=cb13dae88a2c92e6e514d08d3fe6423c"}
                         width={16} height={16} alt={"thermometer"}/>: {Math.round(props.info.temp.min)}
                         / {Math.round(props.info.temp.max)} °C
                </li>
                <li>
                    <img src={"https://cdn-icons-png.flaticon.com/512/556/556958.png"} width={16} height={16}
                    alt={"pressure gauge"}/> : {Math.round(props.info.pressure)}
                </li>
                <li>
                    <img src={"https://cdn-icons.flaticon.com/png/512/2903/premium/2903592.png?token=exp=1642491444~hmac=f16a59ceeaa4cee85c03cb4f09b560b7"}
                         width={16} height={16} alt={"humidity icon"}/> : {props.info.humidity}%
                </li>
            </ul>
        </div>
    )
}

export default DisplayWeatherDaily;