import { LandingPage } from '../../pages/landing'
import { SearchResultsPage } from '../../pages/searchResults'
import { ProjectCard } from '../../pageComponents/projectCard'
import { SearchOverlay } from '../../pageComponents/searchOverlay'

describe('Search ', function () {
    describe('from landing page', function () {
        beforeEach(function () {
            cy.visit(Cypress.env('home'))
        })

        it('has results in overlay', function () {
            cy.get(LandingPage.searchInput).click()
            cy.get(LandingPage.searchInput).type('Oslo')
            cy.get(LandingPage.searchResultsLocationSuggestionList).should('have.length', 5)
            cy.get(SearchOverlay.searchResultsProjectsList).find(ProjectCard.projectCard).should('have.length', 5)
        })

        it('gets the user to search results', function () {
            cy.get(LandingPage.searchInput).click()
            cy.get(LandingPage.searchInput).type('Oslo')
            cy.get(LandingPage.searchResultsLocationSuggestionList).should('have.length', 5)
            cy.get(LandingPage.searchResultsLocationSuggestionList).first().click()
            cy.url().should('include', '/prosjekter')
            cy.get(SearchResultsPage.resultProjects).should('be.visible')
            cy.get(SearchResultsPage.resultProjects).should('have.length.above', 1)
        })
    })

    describe('from projects page', function () {
        beforeEach(function () {
            cy.visit(Cypress.env('home'))
            cy.visit('/prosjekter')
        })

        it('displays results to the user', function () {
            cy.url().should('include', '/prosjekter')
            cy.get(SearchResultsPage.resultProjects).should('be.visible')
            cy.get(SearchResultsPage.resultProjects).should('be.visible')
            cy.get(SearchResultsPage.resultProjects).should('have.length.above', 1)
        })
    })
})
