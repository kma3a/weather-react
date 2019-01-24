import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { updateLocation, updateLocationUpdated, updateUnit} from '../../reducers/locationActions';

const mapState = (state) => ({
  location: state.location
})

const actions = {
  updateLocation,
  updateLocationUpdated,
  updateUnit
};
class HomeComponent extends Component {
  componentWillMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.props.updateLocation({lat: location.coords.latitude, long: location.coords.longitude});
      this.props.updateLocationUpdated(true);
    })
  }

  render() {
    const {location, locationUpdated} = this.props.location;
    return (
      <div>
        {!locationUpdated && 
          <h2>Default Location: Detroit</h2>
        }
        {locationUpdated && 
          <h2>Current Longitude and Latitude:</h2>
        }
        <h3>Latitude: {location.lat}</h3>
        <h3>Longitude: {location.long}</h3>
      </div>
    )
  }
}

export default connect(mapState, actions)(HomeComponent);
