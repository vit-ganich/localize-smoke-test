/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

import dotenvPlugin from 'cypress-dotenv';

// eslint-disable-next-line no-unused-vars
export default (on: any, config: Cypress.PluginConfigOptions) => {
  config = dotenvPlugin(config);
  return config;
};
