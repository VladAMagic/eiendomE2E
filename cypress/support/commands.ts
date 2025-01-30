// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { FavouritesPage } from '../pages/favorites'
import { LandingPage } from '../pages/landing'

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<void>
            clearAllFavorites(): Chainable<void>
        }
    }
}

Cypress.Commands.add(
    'login',
    (username: string = Cypress.env('username'), password: string = Cypress.env('password')) => {
        cy.session([username, password], () => {
            cy.visit('/')
            cy.get(LandingPage.loginLink).click()
            cy.get(LandingPage.emailInput).type(username)
            cy.get(LandingPage.submitEmailButton).click()
            cy.get(LandingPage.passwordInput).type(password)
            cy.get(LandingPage.submitPasswordButton).click()
            cy.get(LandingPage.userAvatar).should('be.visible')
        })
    }
)
