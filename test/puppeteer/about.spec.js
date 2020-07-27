import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('About', () => {
  it('should be titled "About | Coding For Llamas"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8989/about', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('About | Coding For Llamas');
  });
});
