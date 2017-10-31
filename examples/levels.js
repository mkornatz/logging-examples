const logger = require('../logger');

/** npm levels
  {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  }
 */

logger.error('This is an error message.');

logger.warn('This is an warn message.');

logger.info('This is an info message.');

logger.verbose('This is an verbose message.');

logger.debug('This is an debug message.');

logger.silly('This is an silly message.');
