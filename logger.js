const winston = require('winston');
var path = require('path');
const { combine, timestamp, label, printf, colorize } = winston.format;

// Load env vars from .env file
require('dotenv').config({ path: path.dirname(__filename) + '/.env' });

// Custom format function
const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

console.log(process.env.LOG_LEVEL);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',

  format: combine(
    // Creates a timestamp value for the format function to utilize
    timestamp(),

    // Colorizes the output based on log level
    colorize(),

    // shows executing script name
    label({ label: path.basename(process.argv[1]) }),

    myFormat
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: path.dirname(__filename) + '/logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: path.dirname(__filename) + '/logs/combined.log' }),
    new winston.transports.Console()
  ]
});

module.exports = logger;
