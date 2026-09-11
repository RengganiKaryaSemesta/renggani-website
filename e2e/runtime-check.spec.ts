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

    // Verify matrix table features
    const matrixTable = page.locator('#bukubatik-matrix-table');
    await expect(matrixTable).toBeVisible();
    await expect(matrixTable.getByText('Purchase Invoice').first()).toBeVisible();
    await expect(matrixTable.getByText('Stock Opname').first()).toBeVisible();
    await expect(matrixTable.getByText('Rekonsiliasi Bank', { exact: true })).toBeVisible();
    await expect(matrixTable.getByText('Maksimal Cabang').first()).toBeVisible();

    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });

  test('RKSWorkmate page renders cleanly and displays 17-feature comparison matrix', async ({ page }) => {
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

    await page.goto('/rksworkmate');
    await expect(page).toHaveTitle(/RKSWorkmate/);

    // Verify navbar is visible and solid immediately without scrolling
    const navbar = page.locator('#navbar');
    await expect(navbar).toBeVisible();
    await expect(page.locator('#logo-color')).toBeVisible();
    await expect(navbar.getByText('Beranda')).toBeVisible();

    // Verify hero CTA exists
    const heroCta = page.locator('#rks-hero-cta-demo');
    await expect(heroCta).toBeVisible();

    // Verify comparison section exists
    const comparisonSection = page.locator('#komparasi-paket');
    await expect(comparisonSection).toBeVisible();

    // Verify key capacity texts (≤ 50, ≤ 125, ≤ 250) on visible desktop matrix
    const desktopTable = page.locator('#desktop-matrix-table');
    await expect(desktopTable.getByText('≤ 50').first()).toBeVisible();
    await expect(desktopTable.getByText('≤ 125').first()).toBeVisible();
    await expect(desktopTable.getByText('≤ 250').first()).toBeVisible();

    // Verify exact monthly prices (200k, 500k, 850k)
    await expect(comparisonSection.getByText('Rp200.000').first()).toBeVisible();
    await expect(comparisonSection.getByText('Rp500.000').first()).toBeVisible();
    await expect(comparisonSection.getByText('Rp850.000').first()).toBeVisible();

    // Verify billing toggle interaction (Monthly -> Yearly)
    const rksToggle = page.locator('#rks-billing-toggle');
    await expect(rksToggle).toBeVisible();
    await rksToggle.click();

    // Verify exact yearly prices (2.000.000, 5.000.000, 8.500.000)
    await expect(comparisonSection.getByText('Rp2.000.000').first()).toBeVisible();
    await expect(comparisonSection.getByText('Rp5.000.000').first()).toBeVisible();
    await expect(comparisonSection.getByText('Rp8.500.000').first()).toBeVisible();

    // Toggle back to monthly
    await rksToggle.click();
    await expect(comparisonSection.getByText('Rp200.000').first()).toBeVisible();

    // Verify special disbursement feature row exists and shows +Rp8.000 / karyawan
    await expect(desktopTable.getByText('Disbursement ke rekening', { exact: true })).toBeVisible();
    await expect(comparisonSection.getByText('+Rp8.000 / karyawan').first()).toBeVisible();
    await expect(comparisonSection.getByText('Transparansi Biaya Auto-Disbursement Bank')).toBeVisible();

    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });

  test('BukuBatik redesigned landing page renders as pure accounting system without ERP branding', async ({ page }) => {
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

    await page.goto('/bukubatik');
    await expect(page).toHaveTitle(/Sistem Akuntansi Modern/);

    // Verify navbar is visible and solid immediately without scrolling
    const navbar = page.locator('#navbar');
    await expect(navbar).toBeVisible();
    await expect(page.locator('#logo-color')).toBeVisible();
    await expect(navbar.getByText('Beranda')).toBeVisible();

    // Verify main headline and pure accounting positioning
    const heading = page.locator('#bukubatik-hero-heading');
    await expect(heading).toContainText('Presisi Akuntansi Klasik');
    await expect(heading).not.toContainText('ERP');

    // Verify Pricing section anchor and cards are embedded in the single page
    const pricingSection = page.locator('#paket-harga');
    await expect(pricingSection).toBeVisible();
    await expect(pricingSection.getByText('Starter', { exact: true }).first()).toBeVisible();
    await expect(pricingSection.getByText('Bisnis', { exact: true }).first()).toBeVisible();
    await expect(pricingSection.getByText('Enterprise', { exact: true }).first()).toBeVisible();

    // Verify matrix table features inside the single page
    const matrixTable = page.locator('#bukubatik-matrix-table');
    await expect(matrixTable).toBeVisible();
    await expect(matrixTable.getByText('Purchase Invoice').first()).toBeVisible();
    await expect(matrixTable.getByText('Average Cost').first()).toBeVisible();
    await expect(matrixTable.getByText('Rekonsiliasi Bank', { exact: true })).toBeVisible();

    expect(failedRequests).toHaveLength(0);
    expect(consoleErrors).toHaveLength(0);
  });
});
