describe('rick-and-morty', () => {
  it('should navigate to characters list', () => {
    cy.visit('/');
    cy.location('pathname').should('equal', '/characters-list');
  });

  it('should navigate to the not found page', () => {
    cy.visit('/made-up-url')
    cy.location('pathname').should('equal', '/page-not-found');
  });
});
