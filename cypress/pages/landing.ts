// cypress/pages/landing.ts
export const LandingPage = {
    loginLink: '[data-testid="log-in-button"]',
    emailInput: '[data-testid="authentication-user-email"]',
    submitEmailButton: '[data-testid="modal-authentication-submit"]',
    passwordInput: '[data-testid="user-password"]',
    submitPasswordButton: '[data-testid="modal-login-submit"]',
    userAvatar: '[data-testid="user-avatar-toggle"]',
    searchInput: '[data-testid="search-input"]',
    searchResultsSuggestionList: '[data-testid="locations-expanded"] > div.section-result',
}
