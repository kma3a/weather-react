import React, {Component} from 'react';


const currentWeather = {
  "coord":{"lon":-122.09,"lat":37.39},
  "sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
  "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
  "base":"stations",
  "main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
  "wind":{"speed":0.96,"deg":285.001},
  "clouds":{"all":0},
  "dt":1427700245,
  "id":0,
  "name":"Mountain View",
  "cod":200
};

class CurrentComponent extends Component {
  render() {
    return (
      <div>
        <h1>Current Weather</h1>
        <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} />
        <h3> weather: {currentWeather.weather[0].main}</h3>
        <h3>Max: {currentWeather.main.temp_max}</h3>
        <h3>Min: {currentWeather.main.temp_min}</h3>
      </div>
    )
  }
}

export default CurrentComponent;
