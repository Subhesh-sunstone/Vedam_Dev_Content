// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]],
  outputDir: 'test-results',
});
