import React from 'react';
import { shallow } from 'enzyme';
import AppTemplate from '../../src/components/App-Main';
import { Homepage } from '../../src/containers/Homepage/Homepage';

describe('AppMain', () => {
  it('Renders the component', () => {
    const wrapper = shallow(<AppTemplate />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(Homepage).exists()).toBe(true);
  });
});
