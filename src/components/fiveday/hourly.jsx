import React from 'react';
import Moment from 'react-moment';
import * as Constants from '../../util/constants';
import '../../styles/hourly.css';

const OneHour = ({hour, unit}) => {
  const hasWeather = (hour && hour.weather && hour.weather[0]) || false;
  return (
    <div className='hourly'>
      {hour && hour.dt_txt &&
        <h3 className='time'>
          <Moment date={hour.dt_txt} format="MM/DD/YYYY h:mm A"/>
        </h3>
      }
      { hasWeather && hour.weather[0].icon && 
        <img alt={hour.weather[0].icon} src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} />
      }
      { hasWeather && hour.weather[0].main && 
        <p>{hour.weather[0].main}</p>
      }
      { hour && hour.main && hour.main.temp_max ? 
        <p>Max: {hour.main.temp_max} &deg; {Constants[unit]}</p> : 
        <p>Max: --  &deg;</p>
      }
      { hour && hour.main && hour.main.temp_min ? 
        <p>Min: {hour.main.temp_min} &deg; {Constants[unit]}</p> :
        <p>Min: --  &deg;</p>
      }
    </div>
  )
}

export default OneHour;
