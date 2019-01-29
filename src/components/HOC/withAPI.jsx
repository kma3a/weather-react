import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateLocation, updateLocationUpdated} from '../../reducers/locationActions';
import * as Constants from '../../util/constants';

const apiUrl = {
    "current": "weather",
    "fiveday": "forecast"
};

const mapState = (state) => ({
  location: state.location
})

const actions= {
  updateLocation,
  updateLocationUpdated
}

function withAPI(WrappedComponent, appProps) {
  class apiContainer extends Component {
    state = {
      weatherData: {},
      data: appProps
    };

    fetchWeather = () => {
      console.log("props", this.props);
      var currentProps= this.props.location;
      console.log("current", this.state);
      return fetch(Constants.APIURL+ apiUrl[this.state.data.page] + '?lat='+ currentProps.location.lat+'&lon=' + currentProps.location.long+ Constants.APIKEY+ Constants.UNITS + currentProps.unit)
        .then(response => response.json())
        .then(data => {
          data.unit = currentProps.unit === 'default' ? "kalvin" : currentProps.unit;
          this.setState({weatherData: data});
        });
    }

    componentWillMount() {
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((location) => {
          var parsedLocation = {lat: location.coords.latitude, long: location.coords.longitude};
          console.log("location: ", parsedLocation);
          this.props.updateLocation(parsedLocation);
          this.props.updateLocationUpdated(true);
          console.log("props", this.props);
          resolve();
        });
      })
        .then(this.fetchWeather);
    }

    componentDidUpdate(nextProps, nextState) {
      if(this.props !== nextProps) {
        this.fetchWeather();
      }
    }

    render() {
      const {weatherData} = this.state;
      return (
        <WrappedComponent {...this.props} weatherData={weatherData}/>
      )
    }
  }
  return connect(mapState, actions)(apiContainer); 
}


export default withAPI;

