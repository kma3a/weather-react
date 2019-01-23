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
        console.log("data", data);
        this.setState({name:data.city.name,fiveDay: data})
      });
  }
  render() {
    const {unit} = this.props.location;
    const {name, fiveDay} = this.state;
    return (
      <div>
        <h1>Five Day Weather for</h1>
        <h1> {name}</h1>
        { fiveDay.list && fiveDay.list.map((single) => (
          <OneHour key={single.dt} hour={single} unit={unit}/>
        ))}
      </div>
    )
  }
}

export default connect(mapState)(FiveDayComponent);
