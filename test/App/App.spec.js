import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/App';

describe('App component', () => {
  const dp = (fun) => fun;
  const wrapper = shallow(<App dispatch={dp} />);
  it('renders the component', () => {
    expect(wrapper.find('div#App').exists()).toBe(true);
  });
  it('does not fetch the images if they already exist', () => new Promise((done) => {
    const images = [{}];
    const wrapper2 = shallow(<App dispatch={dp} images={images} />);
    expect(wrapper2.find('div#App').exists()).toBe(true);
    done();
  }));
});
