import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../src/components/Nav/Navbar';
import DefaultCollapsableNav from '../../src/components/Nav/CollapsableNav';

const wrapper = shallow<Navbar>(<Navbar />);

describe('Navbar', () => {
  it('Renders the Navbar', () => {
    wrapper.instance().forceUpdate();
    expect(wrapper.find(DefaultCollapsableNav).exists()).toBe(true);
  });
  it('renders the full nav when big enough', () => {
    const width = 300;
    wrapper.instance().onResize(width);
    wrapper.setState({ width: 1300 });
    expect(wrapper.find('nav.menu').exists()).toBe(true);
  });
});
