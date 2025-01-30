import { LandingPage } from '../../pages/landing'
import { SearchResultsPage } from '../../pages/searchResults'
import { FavouritesPage } from '../../pages/favorites'
import { ProjectCard } from '../../pageComponents/projectCard'

describe('Favourites ', function () {
    before(function () {
        cy.clearAllSessionStorage()
        /*
         * TO DO: add a command that clears all favourites from user profile,
         * as to not interfere with the tests. I have looked into it, but haven't
         * been able to come up with a clean workable solution due to Cypress
         * limitations, and without maybe a considerable time investment.
         * Thus, I have decided to leave it out for now.
         * Ideally I would have wanted the tests to be independent of each other,
         * and making use of session management, possibly each with it's own user,
         * or at least an easier way to clean up.
         */
    })

    beforeEach(function () {
        cy.login()
        cy.visit(Cypress.env('home'))
    })

    it('can be marked from search results', function () {
        cy.get(LandingPage.searchInput).click()
        cy.get(LandingPage.searchInput).type('Grunerlokka')
        cy.get(LandingPage.searchResultsLocationSuggestionList).should('have.length', 5)
        cy.get(LandingPage.searchResultsLocationSuggestionList).first().click()
        cy.get(SearchResultsPage.resultProjects).should('be.visible')
        cy.get(SearchResultsPage.resultProjects)
            .first()
            .find(ProjectCard.addToFavouritesButton)
            .should('be.visible')
            .and('not.have.a.property', 'style')
        cy.get(SearchResultsPage.resultProjects).first().find(ProjectCard.addToFavouritesButton).click()
        cy.get(SearchResultsPage.resultProjects)
            .first()
            .find(ProjectCard.removeFromFavouritesButton)
            .should('be.visible')
        cy.get(SearchResultsPage.resultProjects)
            .first()
            .find(ProjectCard.addToFavouritesButton)
            .should('have.attr', 'style', 'display: none;')
        cy.get(SearchResultsPage.resultProjects).first().find(ProjectCard.cardTitle).invoke('text').as('projectTitle')
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
            .find(ProjectCard.removeFromFavouritesButton)
            .click()
    })
})
