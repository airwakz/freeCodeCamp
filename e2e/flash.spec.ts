import { test, expect, type Page } from '@playwright/test';
import translations from '../client/i18n/locales/english/translations.json';

test.use({ storageState: 'playwright/.auth/certified-user.json' });
test.beforeEach(async ({ page }) => {
  await page.goto('/settings');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

const checkFlashMessageVisibility = async (page: Page, translation: string) => {
  const flashMessage = page.getByText(translation);
  await expect(flashMessage).toBeVisible();
  const closeButton = page.getByRole('button', { name: 'close' });
  await closeButton.click();
  await expect(flashMessage).not.toBeVisible();
};

test.describe('Flash Message component E2E test', () => {
  test('Flash Message Visibility for Night Mode Toggle', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit');
    await page
      .getByRole('button', { name: translations.buttons.menu, exact: true })
      .click();
    await page
      .getByRole('button', {
        name: translations.settings.labels['night-mode'],
        exact: true
      })
      .click();
    await checkFlashMessageVisibility(
      page,
      translations.flash['updated-themes']
    );
  });

  test('Flash Message Visibility for Sound Mode Toggle', async ({
    page,
    browserName
  }) => {
    test.skip(browserName === 'webkit');
    await page
      .getByLabel(translations.settings.labels['sound-mode'])
      .getByRole('button', { name: translations.buttons.on })
      .click();
    await checkFlashMessageVisibility(
      page,
      translations.flash['updated-sound']
    );
  });
});
