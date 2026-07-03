class Constants {
    static ENVIRONMENTS = {
        DEV: 'dev',
        QA: 'qa',
        REL: 'rel',
        PROD: 'prod'
    };

    static DEFAULT_ENV = this.ENVIRONMENTS.QA;

    static RESOURCES_PATH = 'TestResources';
}
module.exports = Constants;
