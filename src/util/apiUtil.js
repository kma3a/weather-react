import * as Constants from './constants';

const apiUrl = {
    "current": "weather",
    "fiveday": "forecast"
};

const getWeather = (data, url)=> {
  return fetch(Constants.APIURL+ apiUrl[url] + '?lat='+ data.location.lat+'&lon=' + data.location.long+ Constants.APIKEY+ Constants.UNITS + data.unit)
      .then(response => response.json());
}

export default getWeather;
