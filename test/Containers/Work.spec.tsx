import React from 'react';
import { shallow } from 'enzyme';
import { Work } from '../../src/containers/Work/Work';
import WorkContent from '../../src/containers/Work/WorkContent';
import Footer from '../../src/components/Footer/Footer';

describe('Work', () => {
  function setup() {
    const props = {};
    const wrapper = shallow(<Work />);
    return { wrapper, props };
  }

  it('Renders the Work page', () => {
    const { wrapper } = setup();
    expect(wrapper.find(WorkContent).exists()).toBe(true);
    expect(wrapper.find(WorkContent).dive().find('main.work-main').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
