# Playwright Automation Framework

A robust, scalable, and maintainable UI Automation Framework built using [Playwright](https://playwright.dev/) and Node.js. It leverages the Page Object Model (POM) design pattern and features custom wrappers for actions, assertions, and logging.

## 🚀 Features

- **Page Object Model (POM):** Clean separation between test logic and page interactions.
- **Environment Management:** Easily switch between different environments (dev, qa, prod) using configuration files.
- **Custom Core Wrappers:** Modular wrappers for Playwright actions, assertions, and waits to enhance reusability and error handling.
- **Logging:** Built-in logging support using `winston`.
- **Test Resources Management:** Structured management for test data, selectors, and execution configurations.
- **Parallel Execution & Cross-Browser Testing:** Configured for running tests in parallel across Chromium, Firefox, and WebKit.
- **Reporting:** Generates detailed HTML reports.

## 📂 Project Structure

```
├── config/                 # Environment configurations and resource loaders
│   ├── env.json
│   ├── EnvironmentManager.js
│   ├── ResourceLoader.js
│   └── Constants.js
├── core/                   # Core framework wrappers and utilities
│   ├── actions/            # Custom action wrappers (click, type, etc.)
│   ├── assertions/         # Custom assertions
│   ├── browser/            # Browser management
│   ├── elements/           # Element interaction wrappers
│   ├── helpers/            # Helper utilities
│   ├── logger/             # Winston logger configuration
│   ├── page/               # Page management
│   └── waits/              # Custom wait mechanisms
├── pages/                  # Page Object classes (e.g., Login.page.js)
├── tests/                  # Playwright test files (*.test.js)
├── TestResources/          # Environment-specific resources
│   ├── selectors/          # Selectors JSON files per env
│   ├── testData/           # Test data JSON files per env
│   └── testExecution/      # Execution config JSON files per env
├── utils/                  # General utilities
├── reports/                # Test execution HTML reports
├── test-results/           # Test artifacts (traces, videos, screenshots)
├── playwright.config.js    # Playwright configuration file
└── package.json            # Project dependencies and scripts
```

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (Node Package Manager)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd PlaywrightAutomationFramework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

The framework uses an `EnvironmentManager` to load configurations based on the targeted environment (e.g., `dev`, `qa`, `prod`). Ensure you have your environments configured properly in the `config/env.json` and respective `TestResources` folders.

## 🚀 Running Tests

You can run tests using Playwright's test runner:

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode:**
  ```bash
  npx playwright test --headed
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/login.test.js
  ```

- **Run tests with UI mode:**
  ```bash
  npx playwright test --ui
  ```

## 📊 Reporting

By default, the framework is configured to generate an HTML report. After running tests, you can view the report using:

```bash
npx playwright show-report reports
```

Trace viewer and screenshots will be captured upon test failure (as configured in `playwright.config.js`).

## 🏗️ Writing Tests

Follow the Page Object Model (POM) pattern when creating new tests:
1. Define locators and methods in a corresponding `Page` class within the `pages/` directory.
2. Utilize the core wrappers (e.g., `ActionUtils`, `AssertionUtils`) instead of direct Playwright methods for consistency and better logging.
3. Write your test scenarios in the `tests/` directory.

## 📝 License

ISC License
