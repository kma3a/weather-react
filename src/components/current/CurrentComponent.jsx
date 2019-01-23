import React, {Component} from 'react';
import Moment from 'react-moment';


class CurrentComponent extends Component {
  state = {
    currentWeather: {}
  };

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID='+process.env.REACT_APP_API_KEY+'&units=imperial')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({currentWeather: data})
      });
  }
  render() {
    const {currentWeather} = this.state;
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
          <h3>Max: {tempMax}</h3>
        }
        {tempMin != null && 
          <h3>Min: {tempMin}</h3>
        }
      </div>
    )
  }
}

export default CurrentComponent;
