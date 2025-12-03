import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'f22qh9',
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.ts', // TypeScript files
  },
})
