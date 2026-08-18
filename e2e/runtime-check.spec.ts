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

  test('BukuBatik pricing page renders and toggles billing successfully', async ({ page }) => {
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

    await page.goto('/bukubatik/pricing');
    await expect(page).toHaveTitle(/BukuBatik Pricing/);
    
    const monthlyBlock = page.locator('.monthly-price-block').first();
    const yearlyBlock = page.locator('.yearly-price-block').first();
    
    await expect(monthlyBlock).toBeVisible();
    await expect(yearlyBlock).toBeHidden();
    
    const toggleButton = page.locator('#billing-toggle');
    await toggleButton.click();
    
    await expect(monthlyBlock).toBeHidden();
    await expect(yearlyBlock).toBeVisible();
    
    await toggleButton.click();
    await expect(monthlyBlock).toBeVisible();
    await expect(yearlyBlock).toBeHidden();

    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });
});
