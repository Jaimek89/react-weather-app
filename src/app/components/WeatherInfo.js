import React from 'react'

const WeatherInfo = props => {

    console.log(props)

    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger text-center">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-body">
                        <p>
                            Location: {props.city}, Country: {props.country}
                        </p>
                        <p>
                            Temperature: {props.temperature} ºC, {props.description}
                        </p>
                        <p>
                            Humidity: {props.humidity}
                        </p>
                        <p>
                            Wind Speed: {props.wind_speed}
                        </p>
                    </div>
                : 
                <div>
                </div>
            }
        </div>
    )
}

export default WeatherInfo