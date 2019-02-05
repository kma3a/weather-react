import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OneHour from './hourly';
const weather = {"dt":1549314000,"main":{"temp":49.23,"temp_min":42.7,"temp_max":49.23,"pressure":997.02,"sea_level":1021.06,"grnd_level":997.02,"humidity":85,"temp_kf":3.62},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":12.46,"deg":194.5},"rain":{"3h":1.6875},"sys":{"pod":"d"},"dt_txt":"2019-02-04 21:00:00"};

describe('hourly', ()=>{
  Enzyme.configure({adapter: new Adapter()});
  describe('time', ()=>{
    it('should display the time if it gets it', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[0];
      expect(elem.props.className).toBe('time');
      expect(elem.props.children.props.date).toBe(weather.dt_txt);
    });

    it('should display the time if it gets it', ()=>{
      const newWeather = Object.assign({}, weather);
      delete newWeather.dt_txt;
      const wrapper = shallow(<OneHour hour={newWeather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[0];
      expect(elem).toBe(undefined);
    });
  });

  describe('icon', ()=>{
    it('should desplay the icon', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[1];

      expect(elem.type).toBe('img');
    });

    it('should not desplay the icon', ()=>{
      const newWeather = {main:{}}
      const wrapper = shallow(<OneHour hour={newWeather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[1];
      expect(elem).toBe(false);
    });
  });

  describe('main', ()=>{
    it('should desplay the icon', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[2];
      expect(elem.type).toBe('p');
      expect(elem.props.children).toBe(weather.weather[0].main);
    });

    it('should not desplay the icon', ()=>{
      const newWeather = {}
      const wrapper = shallow(<OneHour hour={newWeather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[2];
      expect(elem).toBe(false);
    });
  });

  describe('temp_max', ()=>{
    it('should desplay the temp_max', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[3];
      expect(elem.type).toBe('p');
      expect(elem.props.children[1]).toBe(weather.main.temp_max);
    });

    it('should not desplay the temp_max', ()=>{
      const newWeather = {};
      const wrapper = shallow(<OneHour hour={newWeather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[3];
      expect(elem.props.children).toBe('Max: --  °');
    });

  });

  describe('temp_min', ()=>{
    it('should desplay the temp_min', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[4];
      expect(elem.type).toBe('p');
      expect(elem.props.children[1]).toBe(weather.main.temp_min);
    });

    it('should not desplay the temp_min', ()=>{
      const newWeather = {};
      const wrapper = shallow(<OneHour hour={newWeather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[4];
      expect(elem.props.children).toBe('Min: --  °');
    });
  });

  describe('unit', ()=>{

    it('should desplay F for imperial', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='imperial'></OneHour>);
      const elem = wrapper.props().children[4];
      const elem2 = wrapper.props().children[3];
      expect(elem.props.children[3]).toBe('F');
      expect(elem2.props.children[3]).toBe('F');
    });

    it('should display C for metric', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='metric'></OneHour>);
      const elem = wrapper.props().children[4];
      const elem2 = wrapper.props().children[3];
      expect(elem.props.children[3]).toBe('C');
      expect(elem2.props.children[3]).toBe('C');
    });

    it('should display K for kalvin', ()=>{
      const wrapper = shallow(<OneHour hour={weather} unit='kalvin'></OneHour>);
      const elem = wrapper.props().children[4];
      const elem2 = wrapper.props().children[3];
      expect(elem.props.children[3]).toBe('K');
      expect(elem2.props.children[3]).toBe('K');
    });


  });
});
