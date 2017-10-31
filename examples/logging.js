const logger = require('../logger');


/**
 * Mock to save record
 */
function saveRecord(record) {
  if (record.isValid) {
    return true;
  }
  return false;
}




/**
 * Saves a customer to the db
 */
function saveCustomer(customer) {
  logger.info(`Saving a ${customer.type} customer.`);

  logger.debug(JSON.stringify(customer));

  if (customer.type === 'retail' && !customer.taxRate) {
    logger.warn('Retail customer does not have tax rate set.');
  }

  if (saveRecord(customer)) {
    logger.verbose('Customer saved.');
    return true;
  }

  logger.error('Failed to save customer record to db.');
  return false;
}





// Noah is retail customer
saveCustomer({
  type: 'retail',
  fName: 'Noah',
  lName: 'Birdsong',
  taxRate: null,
  isValid: false
});

// Matt is a wholesale customer
saveCustomer({
  type: 'wholesale',
  fName: 'Matt',
  lName: 'Kortez',
  taxRate: null,
  isValid: true
});
