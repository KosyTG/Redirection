const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    viewportWidth: 900,
    viewportHeight: 1680,
    defaultCommandTimeout: 30000,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    // experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
