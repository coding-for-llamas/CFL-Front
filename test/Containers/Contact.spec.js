import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from '../../src/containers/Contact/Contact';
import Footer from '../../src/components/Footer/Footer';

describe('Contact', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<Contact />);
    return { wrapper, props };
  }

  it('Renders the Contact page', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div.page-content').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
