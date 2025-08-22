import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:8081',
    // Add reporter configuration
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'reports/junit/cypress-[hash].xml',
      toConsole: false
    }
  },
})
