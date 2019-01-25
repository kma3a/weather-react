export const  APIURL = 'http://api.openweathermap.org/data/2.5/';
export const  FIVEDAYURL = 'forecast';
export const  CURRENTURL = 'weather';
export const  APIKEY = '&APPID='+process.env.REACT_APP_API_KEY;
export const  UNITS = '&units=';
export const  imperial = 'F';
export const  metric = 'C';
export const  kalvin = 'K';

export const tempUnits = [
  {value: 'imperial', label: 'Fahrenheit'},
  {value: 'metric', label: 'Celsius'},
  {value: 'default', label: 'Kalvin'},
];
