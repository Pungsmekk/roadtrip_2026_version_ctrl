const { test, expect } = require('@playwright/test');
const path = require('path');

const pageUrl = 'file://' + path.join(__dirname, '..', 'index.html');

async function openDay(page, targetId) {
  const pill = page.locator(`.pill[data-target="${targetId}"]`);
  await pill.click();
  return pill;
}

test.describe('Dagkorts-navigasjon', () => {
  test('pill åpner riktig dag og setter aktiv tilstand', async ({ page }) => {
    await page.goto(pageUrl);

    const pill = await openDay(page, 'day-2');
    const dayCard = page.locator('#day-2');

    await expect(dayCard).toHaveClass(/open/);
    await expect(pill).toHaveClass(/active/);
  });

  test('Neste dag-knapp åpner neste kort og oppdaterer pill', async ({ page }) => {
    await page.goto(pageUrl);

    await openDay(page, 'day-2');
    const nextButton = page.locator('#day-2 .next-day-btn');
    await nextButton.click();

    const nextCard = page.locator('#day-3');
    const nextPill = page.locator('.pill[data-target="day-3"]');

    await expect(nextCard).toHaveClass(/open/);
    await expect(nextPill).toHaveClass(/active/);
  });
});
