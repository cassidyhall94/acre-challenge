const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.nationwide-intermediary.co.uk',
  },
})
