import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configureStore} from '../store/configStore';

const store = configureStore();

Enzyme.configure({ adapter: new Adapter() });

describe("location Reducer", () => {
  it('', () => {
  });
});
