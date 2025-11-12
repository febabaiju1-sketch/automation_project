import { test, expect } from '@playwright/test';
import { InfoPage } from '../pages/info';

test('regitser', async ({ page }) => {
  const response = new InfoPage(page);
  await response.addDetails();
});
