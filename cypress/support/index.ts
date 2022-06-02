// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on(
  'test:after:run',
  (test: Cypress.ObjectLike, runnable: Mocha.Test) => {
    if (test.state === 'failed') {
      attachScreenshot(test, runnable);
    }
  },
);

/**
 * Attach a screenshot to Mochawesome report
 * @param test
 * @param runnable
 */
function attachScreenshot(test: Cypress.ObjectLike, runnable: Mocha.Test) {
  const addContext = require('mochawesome/addContext');
  const title = runnable.parent?.title;
  const screenshotsFolder = Cypress.config('screenshotsFolder');
  const screenshot = `${screenshotsFolder}/${Cypress.spec.name}/${title} -- ${test.title} (failed).png`;
  addContext({ test }, screenshot);
}
