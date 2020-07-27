import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from '../../src/containers/Contact/Contact';
import ContactContent from '../../src/containers/Contact/ContactContent';
import Footer from '../../src/components/Footer/Footer';

describe('Contact', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<Contact />);
    return { wrapper, props };
  }

  it('Renders the Contact page', () => {
    const { wrapper } = setup();
    expect(wrapper.find(ContactContent).exists()).toBe(true);
    expect(wrapper.find(ContactContent).dive().find('main.contact').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
