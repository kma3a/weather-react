import {createReducer} from '../util/reducerUtil';

const initialState = {
  location: {
    lat: 42.3352587,
    long: -83.04943689999999
  },
  locationUpdated: false,
  unit: 'imperial'
};

export const updateLocation = (state, payload) => {
  return {...state, location: payload.location};
}

export const updateLocationUpdated = (state, payload) => {
  return {...state, locationUpdated: payload.locationUpdated};
}

export const updateUnit = (state, payload) => {
  return {...state, unit: payload.unit};
}

export default createReducer(initialState,{
  "UPDATE_LOCATION": updateLocation,
  "UPDATE_LOCATION_UPDATED": updateLocationUpdated,
  "UPDATE_UNIT": updateUnit
});
