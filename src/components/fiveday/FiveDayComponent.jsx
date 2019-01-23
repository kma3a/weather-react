import React, {Component} from 'react';
import OneHour from './hourly';

class FiveDayComponent extends Component {

  state = {
    fiveDay: {}
  };

  componentDidMount() {
    console.log(process.env);
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID='+process.env.REACT_APP_API_KEY+'&units=imperial')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({fiveDay: data})
      });
  }
  render() {
    const {fiveDay} = this.state;
    return (
      <div>
        <h1>Five Day Weather for</h1>
        <h1> {fiveDay.name}</h1>
        { fiveDay.list && fiveDay.list.map((single) => (
          <OneHour key={single.dt} hour={single} />
        ))}
      </div>
    )
  }
}

export default FiveDayComponent;
