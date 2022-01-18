/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Work } from 'src/containers/Work/index';
import WorkContent from 'src/containers/Work/WorkContent';

describe('Work', () => {
  const wrapper = shallow(<Work />);
  it('renders', () => {
    expect(wrapper.find(WorkContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(WorkContent).dive().find('div.work-header').exists()).toBe(true);
  });
  
});
