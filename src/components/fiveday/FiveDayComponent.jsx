import React, {Component} from 'react';
import OneHour from './hourly';
import * as Constants from '../../util/constants';

class FiveDayComponent extends Component {

  state = {
    name: '',
    fiveDay: {},
    unit: 'imperial'
  };

  componentDidMount() {
    fetch(Constants.APIURL+ Constants.FIVEDAYURL + '?q=Detroit'+ Constants.APIKEY+ Constants.UNITS + this.state.unit)
      .then(response => response.json())
      .then(data => {
        this.setState({name:data.city.name,fiveDay: data})
      });
  }
  render() {
    const {fiveDay, name, unit} = this.state;
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

export default FiveDayComponent;
