import React, {Component} from 'react';

class HomeComponent extends Component {
  state = {
    location: {
      lat: 42.3352587,
      long: -83.04943689999999
    },
    locationUpdate: false
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({location: {lat: location.coords.latitude, long: location.coords.longitude}, locationUpdate:true})
    })
  }

  render() {
    const {location, locationUpdate} = this.state;
    return (
      <div>
        {!locationUpdate && 
          <h2>Default Location: Detroit</h2>
        }
        {locationUpdate && 
          <h2>Current Longitude and Latitude:</h2>
        }
        <h3>Latitude: {location.lat}</h3>
        <h3>Longitude: {location.long}</h3>
      </div>
    )
  }
}

export default HomeComponent;
