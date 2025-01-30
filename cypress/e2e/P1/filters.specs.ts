import { SearchResultsPage } from '../../pages/searchResults'

describe('Filters ', function () {
    beforeEach(function () {
        cy.visit(Cypress.env('home'))
        cy.visit('/prosjekter')
        cy.get(SearchResultsPage.resultProjects).should('be.visible')
    })

    describe('by building type ', function () {
        //TO DO: make a foreach for all filters here
        it('can filter down to only Rekkehus', function () {
            cy.get(SearchResultsPage.resultProjects).first().should('not.contain.text', 'Rekkehus')
            cy.get(SearchResultsPage.buildingTypeFilterButton).click()
            cy.get(SearchResultsPage.townhouseFilterCheckbox).click()
            cy.get(SearchResultsPage.submitFilterButton).click()
            cy.get(SearchResultsPage.resultProjects).should('be.visible')
            cy.get(SearchResultsPage.resultProjects).first().should('contain.text', 'Rekkehus')
            cy.get(SearchResultsPage.resultProjects).should('contain.text', 'Rekkehus')
            //maybe here it would also be relevant to intercept requests and check/assert on them if any more info about the results
        })
    })

    describe('by bedroom count', function () {
        //TO DO: make a foreach for all filters here
        it('can filter down to only more than 5 bedrooms', function () {
            cy.get(SearchResultsPage.resultProjects).first().should('not.contain.text', 'Rekkehus')
            cy.get(SearchResultsPage.bedroomsFilterButton).click()
            cy.get(SearchResultsPage.bedroomsMoreThan5Checkbox).click()
            cy.get(SearchResultsPage.submitFilterButton).click()
            cy.get(SearchResultsPage.resultProjects).should('be.visible')
            cy.get(SearchResultsPage.resultProjects).should('contain.text', 'Solkroken 1')
            //maybe here it would also be relevant to intercept requests and check/assert on them if any more info about the results
        })
    })
})
