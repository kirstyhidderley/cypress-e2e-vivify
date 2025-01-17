const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v3rf5e',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.js',
  },
});
