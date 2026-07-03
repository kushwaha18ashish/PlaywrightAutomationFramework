const winston = require('winston');

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
});

class Logger {
    static info(message) {
        logger.info(message);
    }
    static warn(message) {
        logger.warn(message);
    }
    static error(message) {
        logger.error(message);
    }
}

module.exports = Logger;
