import React, {Component} from 'react';
import withAPI from '../HOC/withAPI';
import OneHour from './hourly';
import '../../styles/fiveday.css';

class FiveDayComponent extends Component {
  render() {
    const {weatherData} = this.props;
    const name = (weatherData && weatherData.city && weatherData.city.name) || '';
    const {unit} = this.props.weatherData;
    return (
      <div className="fiveDayr">
        <h1>Five Day Weather</h1>
        { Number(weatherData.cod) !== 200 &&
          <p> Sorry we have had trouble recieving your request</p>
        }
        { (Number(weatherData.cod) === 200 ) &&
          <h2>For {name}</h2>
        }
        { weatherData.list && weatherData.list.map((single) => (
          <OneHour key={single.dt} hour={single} unit={unit}/>
        ))}
      </div>
    )
  }
}

FiveDayComponent.displayName = 'FiveDayComponent';
export default withAPI(FiveDayComponent, {page:'fiveday'});
