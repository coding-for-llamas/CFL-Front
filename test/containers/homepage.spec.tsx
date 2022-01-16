/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Homepage } from 'src/containers/Homepage/index';
import HomepageContent from 'src/containers/Homepage/HomepageContent';

describe('Homepage', () => {
  const wrapper = shallow(<Homepage />);
  it('renders', () => {
    expect(wrapper.find(HomepageContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HomepageContent).dive().find('div.home-header').exists()).toBe(true);
  });
  
});
