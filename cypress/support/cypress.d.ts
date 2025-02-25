declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login.
     * @example cy.login('user@example.com', 'password123')
     */
    login(username: string, password: string): Chainable<void>;

    logout(): Chainable<void>;
  }
}
