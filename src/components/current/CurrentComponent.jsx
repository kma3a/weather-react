import React, {Component} from 'react';
import * as Constants from '../../util/constants';
import withAPI from '../HOC/withAPI';
import '../../styles/current.css';

class CurrentComponent extends Component {
  render() {
    const {weatherData} = this.props;
    var main = weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon;
    var tempMin = weatherData && weatherData.main &&  Number(weatherData.main.temp_min);
    var tempMax = weatherData && weatherData.main &&  Number(weatherData.main.temp_max);
    return (
      <div className='current'>
        <h1>Current Weather</h1>
        { Number(weatherData.cod) !== 200 &&
          <p> Sorry we have had trouble recieving your request</p>
        }
        { Number(weatherData.cod) === 200 && weatherData.name  &&
          <h2 class="city">{weatherData.name}</h2>
        }
        <div className="weatherInfo">
          {main && 
            <img alt={main} src={`http://openweathermap.org/img/w/${main}.png`} />
          }
          {tempMax != null ? 
              <h3>Max: {tempMax} &deg; {Constants[weatherData.unit]}</h3> : 
              <h3>Max: -- &deg;</h3>
          }
          {tempMin != null ? 
            <h3>Min: {tempMin} &deg; {Constants[weatherData.unit]}</h3> :
            <h3>Min: -- &deg;</h3>
          }
        </div>
      </div>
    )
  }
}

CurrentComponent.displayName = 'CurrentComponent';
export default withAPI(CurrentComponent, {page:'current'});
