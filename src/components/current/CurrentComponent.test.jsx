import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import CurrentComponent from '../current/CurrentComponent';

describe('withAPI', ()=>{
  const mockStore = configureStore();
  let store, container;
  Enzyme.configure({ adapter: new Adapter() })

  const initialState = {
    location: {},
    unit:'imperial',
    locationUpdated: false
  };

  const mockGeolocation = {
    getCurrentPosition: (fn)=>{ return fn({coords: {latitude:12.32455,longitude: -83.223423523}});}
  };
  global.navigator.geolocation = mockGeolocation;
  const data = {
    weather: [{icon:'test'}],
    main: {
      temp_min: 2.34,
      temp_max: 12.23
    }};


  beforeEach(()=>{
    store = mockStore(initialState);

    container = shallow(
      <Provider store={store}>
        <CurrentComponent weatherData={data}/>
      </Provider>
    );

  });

  it('should send the weatherData to the component', ()=>{
    console.log("PROPS",container.props().children);


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
