import {updateLocation} from './locationReducer';

describe('location Reducer', ()=>{
  it('should have updateLocation', ()=>{
    const updateLoc = {
      lat: 2.43,
      long: -12.33
    };
    let state = updateLocation({}, {location:updateLoc});
    expect(state.location).toEqual(updateLoc);
  });
});
