const ResourceLoader = require('./ResourceLoader');
const Constants = require('./Constants');

class EnvironmentManager {
    constructor() {
        this.envName = process.env.ENV || Constants.DEFAULT_ENV;
        this.validateEnvironment();

        this.envConfig = this.loadEnvConfig();
        this.selectors = this.loadSelectors();
        this.testData = this.loadTestData();
        this.testExecution = this.loadTestExecution();
    }

    validateEnvironment() {
        const validEnvs = Object.values(Constants.ENVIRONMENTS);
        if (!validEnvs.includes(this.envName)) {
            throw new Error(`Invalid environment '${this.envName}'. Allowed environments are: ${validEnvs.join(', ')}`);
        }
    }

    loadEnvConfig() {
        const envs = ResourceLoader.loadJson('config/env.json');
        if (!envs[this.envName]) {
            throw new Error(`Configuration for environment '${this.envName}' not found in env.json`);
        }
        return envs[this.envName];
    }

    loadSelectors() {
        return ResourceLoader.loadJson(`${Constants.RESOURCES_PATH}/selectors/${this.envName}/selectors.json`);
    }

    loadTestData() {
        return ResourceLoader.loadJson(`${Constants.RESOURCES_PATH}/testData/${this.envName}/testData.json`);
    }

    loadTestExecution() {
        return ResourceLoader.loadJson(`${Constants.RESOURCES_PATH}/testExecution/${this.envName}/testExecution.json`);
    }

    getBaseUrl() {
        return this.envConfig.baseUrl;
    }

    getSelectors() {
        return this.selectors;
    }

    getTestData() {
        return this.testData;
    }

    getTestExecution() {
        return this.testExecution;
    }
}

// Export as a singleton so all parts of the framework share the same configuration
module.exports = new EnvironmentManager();
