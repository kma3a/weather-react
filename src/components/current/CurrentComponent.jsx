import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateLocation, updateLocationUpdated} from '../../reducers/locationActions';
import * as Constants from '../../util/constants';
import getLocation from '../../util/locationUtil';
import getWeather from '../../util/apiUtil';


const mapState = (state) => ({
  location: state.location
})

const actions= {
  updateLocation,
  updateLocationUpdated
}

class CurrentComponent extends Component {
  state = {
    currentWeather: {}
  };

  fetchWeather = () => {
    var currentProps= this.props.location;
    getWeather(currentProps, "current")
      .then(data => {
        
        data.unit = currentProps.unit === 'default' ? "kalvin" : currentProps.unit;;
        this.setState({currentWeather: data});
      });

  }

  componentWillMount() {
    getLocation()
      .then((userLoc) => {
        this.props.updateLocation(userLoc);
        this.props.updateLocationUpdated(true);
      });
    
  }

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(nextProps, nextState) {
    if(this.props !== nextProps) {
      this.fetchWeather();
    }

  }

  render() {
    const {currentWeather} = this.state;
    var main = currentWeather && currentWeather.weather && currentWeather.weather[0] && currentWeather.weather[0].icon;
    var tempMin = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_min);
    var tempMax = currentWeather && currentWeather.main &&  Number(currentWeather.main.temp_max);
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
            <h3>Max: {tempMax} &deg; {Constants[currentWeather.unit]}</h3> : 
            <h3>Max: -- &deg;</h3>
        }
        {tempMin != null ? 
          <h3>Min: {tempMin} &deg; {Constants[currentWeather.unit]}</h3> :
          <h3>Min: -- &deg;</h3>
        }
      </div>
    )
  }
}

export default connect(mapState, actions)(CurrentComponent);
