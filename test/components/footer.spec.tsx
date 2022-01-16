/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import Footer from 'src/components/Footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);
  it('renders', () => {
    expect(wrapper.find('footer.main-footer').exists()).toBe(true);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
