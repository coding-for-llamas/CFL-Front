import React from 'react';
import { shallow } from 'enzyme';
import { Work } from '../../src/containers/Work/Work';
import Footer from '../../src/components/Footer/Footer';

describe('Work', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<Work />);
    return { wrapper, props };
  }

  it('Renders the Work page', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div.page-content').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
