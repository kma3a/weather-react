import React, {Component} from 'react';
import OneHour from './hourly';
import * as Constants from '../../util/constants';

class FiveDayComponent extends Component {

  state = {
    name: '',
    fiveDay: {}
  };

  componentDidMount() {
    fetch(Constants.APIURL+ Constants.FIVEDAYURL + '?q=London'+ Constants.APIKEY+ Constants.UNITS)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({name:data.city.name,fiveDay: data})
      });
  }
  render() {
    const {fiveDay, name} = this.state;
    return (
      <div>
        <h1>Five Day Weather for</h1>
        <h1> {name}</h1>
        { fiveDay.list && fiveDay.list.map((single) => (
          <OneHour key={single.dt} hour={single} />
        ))}
      </div>
    )
  }
}

export default FiveDayComponent;
