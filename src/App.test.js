import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


describe("App", ()=>{
  const mockStore = configureStore();
  let store, container;
  Enzyme.configure({ adapter: new Adapter() })

  const initialState = {
    location: {},
    unit:'imperial',
    locationUpdated: false
  };

  const updateLocation = (data) => {
    return {
      type: "UPDATE_LOCATION",
      data
    }
  }

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><App /></Provider>);
  });

  it('renders component', () => {
    expect(container.find(App).length).toEqual(1);
  });

  it('matches the snapshot', () => {
    expect(container.find(App)).toMatchSnapshot();
  });

  it(' checks action despatching', () => {
    let action;
    store.dispatch(updateLocation({lat:37.5407, long: -77.4360}));
    action = store.getActions();
    console.log(action);
    expect(action[0].type).toBe("UPDATE_LOCATION");
  });
});

