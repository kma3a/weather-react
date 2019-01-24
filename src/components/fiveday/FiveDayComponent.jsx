import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneHour from './hourly';
import * as Constants from '../../util/constants';
const mapState = (state) => ({
  location: state.location
})

class FiveDayComponent extends Component {

  state = {
    name: '',
    fiveDay: {}
  };

  componentDidMount() {
    const data = this.props.location;
    fetch(Constants.APIURL+ Constants.FIVEDAYURL + '?lat='+ data.location.lat+ '&lon='+ data.location.long + Constants.APIKEY+ Constants.UNITS + data.unit)
      .then(response => response.json())
      .then(data => {
        var locationName = (data && data.city && data.city.name )|| '';
        this.setState({name:locationName,fiveDay: data})
      });
  }
  render() {
    const {unit} = this.props.location;
    const {name, fiveDay} = this.state;
    console.log(fiveDay);
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
