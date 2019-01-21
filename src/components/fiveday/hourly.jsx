import React from 'react';

const OneHour = ({hour}) => {
  console.log("I am the hour", hour);
  return (
    <div>
      <h3>Date: {Date(hour.dt_txt)}</h3>
      <img src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
      <p>{hour.weather[0].main}</p>
      <p>Max; {hour.main.temp_max}</p>
      <p>Min: {hour.main.temp_min}</p>
    </div>
  )
}

export default OneHour;
