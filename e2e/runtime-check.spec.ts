import { test, expect } from '@playwright/test';

test.describe('Runtime Site Verification', () => {
  test('homepage renders cleanly without 500/503 errors or failed network requests', async ({ page }) => {
    const failedRequests: string[] = [];
    const consoleErrors: string[] = [];

    page.on('requestfailed', (request) => {
      failedRequests.push(`${request.url()} - ${request.failure()?.errorText}`);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/Renggani Karya Semesta/);
    
    // Validate zero failed network requests and zero console errors
    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });
});
