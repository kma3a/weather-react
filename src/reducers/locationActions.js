export const updateLocation = (location) => {
  return {
    type: "UPDATE_LOCATION",
    payload: {
      location
    }
  }
}

export const updateLocationUpdated = (locationUpdated) => {
  return {
    type: "UPDATE_LOCATION_UPDATED",
    payload: {
      locationUpdated
    }
  }
}

export const updateUnit = (unit) => {
  return {
    type: "UPDATE_UNIT",
    payload: {
      unit
    }
  }
}
