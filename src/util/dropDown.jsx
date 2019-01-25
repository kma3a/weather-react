import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateUnit} from '../reducers/locationActions';

const mapState = (state, ownProps) => ({
  unit : state.location.unit
})

const actions = {
  updateUnit
};

const tempUnits = [
  {value: 'imperial', label: 'Fahrenheit'},
  {value: 'metric', label: 'Celsius'},
  {value: 'default', label: 'Kalvin'},
];

class DropDown  extends Component{
  state = {
    unit: this.props.unit
  };

  handleChange = (event) => {
    var tempUnit = event.target.value;
    console.log(tempUnit);
    this.setState({unit: tempUnit});
    this.props.updateUnit(tempUnit);
  }

  render() {
    const {unit} = this.state;
    console.log(unit);
    return (
      <div>
        <select  value={unit}  onChange={this.handleChange}>
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celsius</option>
          <option value="default">Kalvin</option>
        </select>
      </div>
    )
  }
}

export default connect(mapState, actions)(DropDown);
