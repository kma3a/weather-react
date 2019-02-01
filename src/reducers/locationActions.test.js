import {updateLocation, updateLocationUpdated, updateUnit } from './locationActions';

const updatedLocation = {
  lat: 37.5407,
  long: -77.4360
};

const update = {
  locationUpdated: true
};


describe("location Actions", () => {
  it('action creator updateLocation', () => {
    const location = updateLocation(updatedLocation);
    expect(location).toEqual({type:"UPDATE_LOCATION", payload: {location:updatedLocation}});
  });

  it('action creator updateLocationUpdated', () => {
    const location = updateLocationUpdated(true);
    expect(location).toEqual({type:"UPDATE_LOCATION_UPDATED", payload: update});
  });

  it('action creator updateUnit', () => {
    const location = updateUnit("metric");
    expect(location).toEqual({type:"UPDATE_UNIT", payload: {unit: "metric"}});
  });

});
