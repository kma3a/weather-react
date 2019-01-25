import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneHour from './hourly';
import * as Constants from '../../util/constants';
const mapState = (state) => ({
  location: state.location
})

const fetchFiveDay = (data) => {
  return fetch(Constants.APIURL+ Constants.FIVEDAYURL + '?lat='+ data.location.lat+ '&lon='+ data.location.long + Constants.APIKEY+ Constants.UNITS + data.unit)
    .then(response => response.json())
}

class FiveDayComponent extends Component {

  state = {
    name: '',
    fiveDay: {}
  };

  getWeather = () => {
    var currentProps = this.props.location;
    console.log(currentProps);
    fetchFiveDay(currentProps)
      .then(data => {
        var locationName = (data && data.city && data.city.name )|| '';
        var tempUnit = currentProps.unit === 'default'? 'kalvin': currentProps.unit;
        this.setState({name:locationName,fiveDay: data, unit: tempUnit})
      });
  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(nextProps, nextState) {
    if(this.props !== nextProps) {
      this.getWeather();
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

export default connect(mapState)(FiveDayComponent);
