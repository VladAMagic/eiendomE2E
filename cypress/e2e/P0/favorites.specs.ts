import { LandingPage } from '../../pages/landing'
import { SearchResultsPage } from '../../pages/searchResults'
import { FavouritesPage } from '../../pages/favorites'

describe('Favourites ', function () {
    before(function () {
        cy.clearAllSessionStorage()
    })

    beforeEach(function () {
        cy.login()
        cy.visit(Cypress.env('home'))
    })

    it('can be marked from search results', function () {
        cy.get(LandingPage.searchInput).click()
        cy.get(LandingPage.searchInput).type('Grunerlokka')
        cy.get(LandingPage.searchResultsSuggestionList).should('have.length', 5)
        cy.get(LandingPage.searchResultsSuggestionList).first().click()
        cy.get(SearchResultsPage.resultsList).should('be.visible')
        cy.get(SearchResultsPage.resultsList)
            .first()
            .find(SearchResultsPage.addToFavoritesButton)
            .should('be.visible')
            .and('not.have.a.property', 'style')
        cy.get(SearchResultsPage.resultsList).first().find(SearchResultsPage.addToFavoritesButton).click()
        cy.get(SearchResultsPage.resultsList)
            .first()
            .find(SearchResultsPage.removeFromFavoritesButton)
            .should('be.visible')
        cy.get(SearchResultsPage.resultsList)
            .first()
            .find(SearchResultsPage.addToFavoritesButton)
            .should('have.attr', 'style', 'display: none;')
        cy.get(SearchResultsPage.resultsList)
            .first()
            .find(SearchResultsPage.cardTitle)
            .invoke('text')
            .as('projectTitle')
    })

    it('previously marked are visible in profile', function () {
        cy.visit('/profile/favourites')
        cy.get(FavouritesPage.projectCard).should('be.visible')
        cy.get(FavouritesPage.projectCard).should('contain.text', this.projectTitle)
    })

    it('can be removed from profile favourites page', function () {
        cy.visit('/profile/favourites')
        cy.get(FavouritesPage.projectCard).should('be.visible')
        cy.get(FavouritesPage.projectCard)
            .contains(this.projectTitle)
            .parents(FavouritesPage.projectCard)
            .find(FavouritesPage.removeFromFavouritesButton)
            .click()
    })
})
