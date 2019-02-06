import React, {Component} from 'react';
import withAPI from './withAPI';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import CurrentComponent from '../current/CurrentComponent';

class mockComponent extends Component {
  render() {
    const {weatherData} = this.props;
    console.log("mock Com", weatherData);
    var main = weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon;
    return (
      <div>
        <h1> MockData</h1>
        { main && 
          <p>{main}</p>
        }
      </div>
    )
  }
}

const mockWeather ={
  weather: [{icon: 'coolIcon'}]
};


describe('withAPI', ()=>{
  const mockStore = configureStore();
  let store, container;
  Enzyme.configure({ adapter: new Adapter() })

  const initialState = {
    location: {lat: 12.32, long:-89.34},
    unit:'imperial',
    locationUpdated: false
  };

  const mockGeolocation = {
    getCurrentPosition: (fn)=>{ return fn({coords: {latitude:12.32455,longitude: -83.223423523}});}
  };
  global.navigator.geolocation = mockGeolocation;

  describe('recieving api data', ()=> {

    beforeEach(()=>{
      global.fetch = jest.fn().mockImplementation(()=>{
         var p = new Promise((resolve, reject) => {
           resolve({
             json: ()=> {return mockWeather; }
           });
         });
        return p;
      });
      var withAPIWrapper = withAPI({page:'current'});
      var CurrentWrapped = withAPIWrapper(mockComponent);
      store = mockStore({location: initialState});

      container = shallow(
        <Provider store={store}>
          <CurrentWrapped location={initialState}/>
        </Provider>
      );
    });

    it('should build the mockComponent', ()=>{
      console.log("container", container.html());
      expect(container.html()).toEqual('<div><h1> MockData</h1></div>');
    });

    it('should add the weatherData if it iget it back', ()=>{
      console.log("container", container.html());
      expect(container.html()).toEqual('<div><h1> MockData</h1></div>');
    });

  });

  xdescribe('NOT recieving api data', ()=> {

    beforeEach(()=>{
      global.fetch = jest.fn().mockImplementation(()=>{
         var p = new Promise((resolve, reject) => {
           resolve({
             json: ()=> {return null; }
           });
         });
        return p;
      });
      var withAPIWrapper = withAPI({page:'current'});
      var CurrentWrapped = withAPIWrapper(mockComponent);
      store = mockStore(initialState);

      container = shallow(
        <Provider store={store}>
          <CurrentWrapped location={location} />
        </Provider>
      );

    });

    it('should build the mockComponent', ()=>{
      expect(container.html()).toEqual('<div><h1> MockData</h1></div>');
    });
  });


/*
  it(' checks action despatching', () => {
    let action;
    store.dispatch(updateLocation({lat:37.5407, long: -77.4360}));
    action = store.getActions();
    expect(action[0].type).toBe("UPDATE_LOCATION");
  });
  */

});
