/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { About } from 'src/containers/About/index';
import AboutContent from 'src/containers/About/AboutContent';

describe('About', () => {
  const wrapper = shallow(<About />);
  it('renders', () => {
    expect(wrapper.find(AboutContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(AboutContent).dive().find('div.about-header').exists()).toBe(true);
  });
  
});
