import { shallow } from 'enzyme';
import { App } from 'src/App';

describe('App component', () => {
  const wrapper = shallow<App>(<App />);
  it('renders the component', () => {
    expect(wrapper.find('div#App').exists()).toBe(true);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
