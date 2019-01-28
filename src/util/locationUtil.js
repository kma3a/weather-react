
const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((location) => {
      var parsedLocation = {lat: location.coords.latitude, long: location.coords.longitude};
      return resolve( parsedLocation);
    })
  })}


export default getLocation;
