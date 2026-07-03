const { defineConfig, devices } = require('@playwright/test');
const EnvironmentManager = require('./config/EnvironmentManager');

// Load execution configuration from the environment
const testExecution = EnvironmentManager.getTestExecution();

// Map string browser names to Playwright projects
const browserProjects = [];
if (testExecution.browser === 'chrome' || testExecution.browser === 'chromium') {
    browserProjects.push({
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    });
} else if (testExecution.browser === 'firefox') {
    browserProjects.push({
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
    });
} else if (testExecution.browser === 'webkit' || testExecution.browser === 'safari') {
    browserProjects.push({
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
    });
} else {
    // Default to chromium
    browserProjects.push({
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    });
}

module.exports = defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only or based on config */
    retries: testExecution.retries || (process.env.CI ? 2 : 0),
    /* Opt out of parallel tests on CI. */
    workers: testExecution.workers || (process.env.CI ? 1 : undefined),
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['html', { outputFolder: 'reports', open: 'never' }]],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: EnvironmentManager.getBaseUrl(),

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',

        /* Take screenshot on failure */
        screenshot: 'only-on-failure',
        
        headless: testExecution.headless !== undefined ? testExecution.headless : true,
    },

    /* Configure projects for major browsers */
    projects: browserProjects,
});
