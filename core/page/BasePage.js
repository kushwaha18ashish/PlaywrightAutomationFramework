const ActionUtils = require('../actions/ActionUtils');
const WaitUtils = require('../waits/WaitUtils');
const AssertionUtils = require('../assertions/AssertionUtils');
const Logger = require('../logger/Logger');
const EnvironmentManager = require('../../config/EnvironmentManager');

class BasePage {
    constructor(page) {
        this.page = page;
        this.actions = new ActionUtils(this.page);
        this.waits = new WaitUtils(this.page);
        this.asserts = new AssertionUtils(this.page);
        this.selectors = EnvironmentManager.getSelectors();
    }

    async navigateTo(url) {
        Logger.info(`Navigating to URL: ${url}`);
        await this.page.goto(url);
        await this.waits.waitForLoadState();
    }
    
    async getTitle() {
        return await this.page.title();
    }
}

module.exports = BasePage;
