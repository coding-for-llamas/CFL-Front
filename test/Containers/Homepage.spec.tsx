import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage/Homepage';
import HomepageContent from '../../src/containers/Homepage/HomepageContent';

describe('Home', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<Homepage />);
    return { wrapper, props };
  }
  it('Renders the homepage', () => {
    const { wrapper } = setup();
    wrapper.instance().forceUpdate();
    expect(wrapper.find(HomepageContent).exists()).toBe(true);
    expect(wrapper.find(HomepageContent).dive().find('main.home-main').exists()).toBe(true);
  });
});
