import { defineConfig } from 'cypress'

export default defineConfig({
    fixturesFolder: false,
    defaultCommandTimeout: 15000,
    responseTimeout: 30000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    retries: {
        runMode: 1,
        openMode: 0,
    },
    e2e: {
        baseUrl: 'https://eiendom.no',
        testIsolation: true,
        specPattern: './cypress/e2e/**/*specs.ts',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
