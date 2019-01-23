import React from 'react';
import Moment from 'react-moment';
import * as Constants from '../../util/constants';

const OneHour = ({hour, unit}) => {
  return (
    <div>
      <h3>
        <Moment date={hour.dt_txt} format="MM/DD/YYYY h:mm A"/>
      </h3>
      <img alt='weather image' src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
      <p>{hour.weather[0].main}</p>
      <p>Max: {hour.main.temp_max} &deg; {Constants[unit]}</p>
      <p>Min: {hour.main.temp_min} &deg; {Constants[unit]}</p>
    </div>
  )
}

export default OneHour;
