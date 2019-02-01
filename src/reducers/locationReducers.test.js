import {updateLocation, updateLocationUpdated, updateUnit} from './locationReducer';

describe('location Reducer', ()=>{
  it('should have updateLocation', ()=>{
    const updateLoc = {
      lat: 2.43,
      long: -12.33
    };
    let state = updateLocation({}, {location:updateLoc});
    expect(state.location).toEqual(updateLoc);
  });

  it('should allow for updated location updated', ()=>{
    let state = updateLocationUpdated({}, {locationUpdated:false});
    expect(state.locationUpdated).toEqual(false);
  });

  it('should allow for update unit', ()=>{
    let state = updateUnit({unit:"text"}, {unit:"time"});
    expect(state.unit).toEqual("time");
  });

});
