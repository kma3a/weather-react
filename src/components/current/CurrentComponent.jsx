import React, {Component} from 'react';
import Moment from 'react-moment';
import * as Constants from '../../util/constants';


class CurrentComponent extends Component {
  state = {
    currentWeather: {},
    unit: 'imperial'
  };

  componentDidMount() {
    fetch(Constants.APIURL+ Constants.CURRENTURL + '?q=Detroit'+ Constants.APIKEY+ Constants.UNITS + this.state.unit)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({currentWeather: data})
      });
  }
  render() {
    const {currentWeather,unit} = this.state;
    var main = currentWeather && currentWeather.weather && currentWeather.weather[0] && currentWeather.weather[0].main;
    var tempMin = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_min);
    var tempMax = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_max);
    return (
      <div>
        <h1>Current Weather for</h1>
        <h1>{currentWeather.name}</h1>
        {main && 
          <h3> weather: {main}</h3>
        }
        {tempMax != null &&
          <h3>Max: {tempMax} &deg; {Constants[unit]}</h3>
        }
        {tempMin != null && 
          <h3>Min: {tempMin} &deg; {Constants[unit]}</h3>
        }
      </div>
    )
  }
}

export default CurrentComponent;
