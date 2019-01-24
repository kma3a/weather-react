import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Constants from '../../util/constants';

const mapState = (state) => ({
  location: state.location
})

class CurrentComponent extends Component {
  state = {
    currentWeather: {}
  };

  componentDidMount() {
    const data = this.props.location;
    fetch(Constants.APIURL+ Constants.CURRENTURL + '?lat='+ data.location.lat+'&lon=' + data.location.long+ Constants.APIKEY+ Constants.UNITS + data.unit)
      .then(response => response.json())
      .then(data => {
        this.setState({currentWeather: data});
      });
  }
  render() {
    const {unit} = this.props.location;
    const {currentWeather} = this.state;
    var main = currentWeather && currentWeather.weather && currentWeather.weather[0] && currentWeather.weather[0].icon;
    var tempMin = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_min);
    var tempMax = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_max);
    console.log(currentWeather);
    return (
      <div>
        <h1>Current Weather</h1>
        { Number(currentWeather.cod) !== 200 &&
          <p> Sorry we have had trouble recieving your request</p>
        }
        { Number(currentWeather.cod) === 200 && currentWeather.name  &&
          <h1>{currentWeather.name}</h1>
        }
        {main && 
          <img alt={main} src={`http://openweathermap.org/img/w/${main}.png`} />
        }
        {tempMax != null ? 
            <h3>Max: {tempMax} &deg; {Constants[unit]}</h3> : 
            <h3>Max: -- &deg;</h3>
        }
        {tempMin != null ? 
          <h3>Min: {tempMin} &deg; {Constants[unit]}</h3> :
          <h3>Min: -- &deg;</h3>
        }
      </div>
    )
  }
}

export default connect(mapState)(CurrentComponent);
