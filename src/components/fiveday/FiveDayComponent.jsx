import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneHour from './hourly';
import { updateLocation, updateLocationUpdated} from '../../reducers/locationActions';
import getWeather from '../../util/apiUtil';
import getLocation from '../../util/locationUtil';


const actions= {
  updateLocation,
  updateLocationUpdated
}

const mapState = (state) => ({
  location: state.location
})

class FiveDayComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      fiveDay: {}
    };
  }

  fetchWeather = () => {
    var currentProps = this.props.location;
    getWeather(currentProps, 'fiveday')
      .then(data => {
        var locationName = (data && data.city && data.city.name )|| '';
        var tempUnit = currentProps.unit === 'default'? 'kalvin': currentProps.unit;
        this.setState({name:locationName,fiveDay: data, unit: tempUnit})
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
    const {name, fiveDay, unit} = this.state;
    return (
      <div>
        <h1>Five Day Weather</h1>
        { Number(fiveDay.cod) !== 200 &&
          <p> Sorry we have had trouble recieving your request</p>
        }
        { Number(fiveDay.cod) === 200 &&
          <h1>For {name}</h1>
        }
        { fiveDay.list && fiveDay.list.map((single) => (
          <OneHour key={single.dt} hour={single} unit={unit}/>
        ))}
      </div>
    )
  }
}

export default connect(mapState,actions)(FiveDayComponent);
