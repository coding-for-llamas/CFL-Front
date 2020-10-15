import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Home', () => {
  it('should be titled "Coding For Llamas"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8989/', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('Coding For Llamas');
  });
});
