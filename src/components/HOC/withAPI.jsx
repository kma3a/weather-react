import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateLocation, updateLocationUpdated} from '../../reducers/locationActions';
import * as Constants from '../../util/constants';

const apiUrl = {
    "current": "weather",
    "fiveday": "forecast"
};

const mapState = (state) => ({
  data: state.location
})

const actions= {
  updateLocation,
  updateLocationUpdated
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withAPI = (appProps) => (WrappedComponent) => {
  class apiContainer extends Component {
    state = {
      weatherData: {},
      data: appProps
    };

    fetchWeather = () => {
      console.log("PROPS", this.props);
      var currentProps= this.props.data;
      return fetch(Constants.APIURL+ apiUrl[this.state.data.page] + '?lat='+ currentProps.location.lat+'&lon=' + currentProps.location.long+ Constants.APIKEY+ Constants.UNITS + currentProps.unit)
        .then(response => {  return response.json()})
        .then(data => {
          data.unit = currentProps.unit === 'default' ? "kalvin" : currentProps.unit;
          if(this.mounted) {
            this.setState({weatherData: data});
          }
          this.mounted = true;
        });
    }

    componentWillMount() {
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((location) => {
          var parsedLocation = {lat: location.coords.latitude, long: location.coords.longitude};
          this.props.updateLocation(parsedLocation);
          this.props.updateLocationUpdated(true);
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
  apiContainer.displayName = `WithAPI(${getDisplayName(WrappedComponent)})`;
  return connect(mapState, actions)(apiContainer); 
}


export default withAPI;

