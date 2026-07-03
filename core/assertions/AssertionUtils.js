const { expect } = require('@playwright/test');
const Logger = require('../logger/Logger');

class AssertionUtils {
    constructor(page) {
        this.page = page;
    }

    async expectElementVisible(selector) {
        Logger.info(`Asserting element is visible: ${selector}`);
        const locator = this.page.locator(selector);
        await expect(locator).toBeVisible();
    }

    async expectElementToHaveText(selector, text) {
        Logger.info(`Asserting element ${selector} has text: ${text}`);
        const locator = this.page.locator(selector);
        await expect(locator).toHaveText(text);
    }

    async expectUrlToContain(urlPart) {
        Logger.info(`Asserting URL contains: ${urlPart}`);
        await expect(this.page).toHaveURL(new RegExp(urlPart));
    }
    
    async expectTitleToContain(titlePart) {
        Logger.info(`Asserting Title contains: ${titlePart}`);
        await expect(this.page).toHaveTitle(new RegExp(titlePart));
    }
}

module.exports = AssertionUtils;
