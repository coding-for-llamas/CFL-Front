import * as main from '../src/main.tsx';

describe('Main', () => {
  it('renders to the root', () => {
    expect(document.getElementById('root')).not.toBe(null);
    expect(document.getElementById('root')).not.toBe(undefined);
    expect(main).toBeDefined();
  });
});
