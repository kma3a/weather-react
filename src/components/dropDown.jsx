import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateUnit} from '../reducers/locationActions';
import * as Constants from '../util/constants';

const mapState = (state, ownProps) => ({
  unit : state.location.unit
})

const actions = {
  updateUnit
};


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
          { Constants.tempUnits.map((data, index) => (
            <option key={index} value={data.value}>{data.label}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default connect(mapState, actions)(DropDown);
