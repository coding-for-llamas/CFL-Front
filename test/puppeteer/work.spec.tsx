import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Work', () => {
  it('should be titled "My Work | Coding For Llamas"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8989/work', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('My Work | Coding For Llamas');
  });
});
