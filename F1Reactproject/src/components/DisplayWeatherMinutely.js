import React from "react";
import "../styles/DisplayWeatherMinutely.css";

function DisplayWeatherMinutely(props){

    const today = new Date(props.info.dt);
    const realDate = today.toString();

    const timeDate = new Date(realDate);
    let timeNeed = timeDate.toLocaleTimeString('en-US');


    return (
        <div className={"minutely-cell"}>

            <ul className={"minutely-block"}>
                <li>
                    <img src={"https://cdn-icons.flaticon.com/png/512/2387/premium/2387835.png?token=exp=1642490938~hmac=cb13dae88a2c92e6e514d08d3fe6423c"}
                         width={16} height={16} alt={"thermometer"}/>:
                    {Math.round(props.info.temp)} °C / feels like:{Math.round(props.info.feels_like)} °C
                </li>
                <li>
                    <img src={"https://cdn-icons.flaticon.com/png/512/2903/premium/2903592.png?token=exp=1642491444~hmac=f16a59ceeaa4cee85c03cb4f09b560b7"}
                         width={16} height={16} alt={"humidity icon"}/> :
                    {Math.round(props.info.humidity)}%
                    /
                    <img src={"https://cdn-icons-png.flaticon.com/512/556/556958.png"} width={16} height={16}
                         alt={"pressure gauge"}/>: {Math.round(props.info.pressure)}
                </li>
                <li>
                    {timeNeed}
                </li>
            </ul>
        </div>
    )
}

export default DisplayWeatherMinutely;