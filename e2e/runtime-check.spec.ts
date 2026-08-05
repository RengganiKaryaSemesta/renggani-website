import { test, expect } from '@playwright/test';

test.describe('Runtime Site Verification', () => {
  test('homepage renders cleanly without 500/503 errors or failed network requests', async ({ page }) => {
    const failedRequests: string[] = [];
    const consoleErrors: string[] = [];

    page.on('requestfailed', (request) => {
      const url = request.url();
      if (!url.includes('/_vercel/')) {
        failedRequests.push(`${url} - ${request.failure()?.errorText}`);
      }
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        const location = msg.location().url;
        if (!text.includes('404') && !location.includes('/_vercel/')) {
          consoleErrors.push(`${text} (${location})`);
        }
      }
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/Renggani Karya Semesta/);
    
    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });
});
