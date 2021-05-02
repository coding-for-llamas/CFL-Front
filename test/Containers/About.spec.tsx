import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../src/containers/About/About';
import AboutContent from '../../src/containers/About/AboutContent';
import Footer from '../../src/components/Footer/Footer';

describe('About', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<About />);
    return { wrapper, props };
  }

  it('Renders the About page', () => {
    const { wrapper } = setup();
    expect(wrapper.find(AboutContent).exists()).toBe(true);
    expect(wrapper.find(AboutContent).dive().find('main.about-main').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
