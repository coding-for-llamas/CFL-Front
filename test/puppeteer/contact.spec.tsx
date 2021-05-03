import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Contact', () => {
  it('should be titled "Contact Me | Coding For Llamas"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8999/contact', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('Contact Me | Coding For Llamas');
  });
});
