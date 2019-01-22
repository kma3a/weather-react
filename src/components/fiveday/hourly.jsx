import React from 'react';
import Moment from 'react-moment';

const OneHour = ({hour}) => {
  return (
    <div>
      <h3>Date:
        <Moment date={hour.dt_txt} format="MM/DD/YYYY hh:mm A"/>
      </h3>
      <img alt='weather image' src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
      <p>{hour.weather[0].main}</p>
      <p>Max; {hour.main.temp_max}</p>
      <p>Min: {hour.main.temp_min}</p>
    </div>
  )
}

export default OneHour;
