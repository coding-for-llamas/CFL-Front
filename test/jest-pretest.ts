import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { config } from 'dotenv';

global.ResizeObserver = require('resize-observer-polyfill');

config();
configure({ adapter: new Adapter() });
document.body.innerHTML = '<div id="root"></div>';
Object.defineProperty(window, 'location', { value: { reload: jest.fn(), assign: jest.fn(), href: '/' }, writable: true });
window.location = {
  ...window.location,
  href: 'https://codingforllamas.com',
  reload: () => {},
  assign: () => {},
};
