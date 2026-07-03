const Logger = require('../logger/Logger');

class WaitUtils {
    constructor(page) {
        this.page = page;
    }

    async waitForLoadState(state = 'load') {
        Logger.info(`Waiting for page load state: ${state}`);
        await this.page.waitForLoadState(state);
    }

    async waitForElementVisible(selector, timeout = 30000) {
        Logger.info(`Waiting for element to be visible: ${selector}`);
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
    }

    async waitForElementHidden(selector, timeout = 30000) {
        Logger.info(`Waiting for element to be hidden: ${selector}`);
        await this.page.waitForSelector(selector, { state: 'hidden', timeout });
    }
}

module.exports = WaitUtils;
