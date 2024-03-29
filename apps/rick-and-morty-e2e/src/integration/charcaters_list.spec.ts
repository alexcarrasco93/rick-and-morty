import getAllCharacters1 from '../fixtures/characters-list/getAllCharacters1.json';
import getAllCharacters2 from '../fixtures/characters-list/getAllCharacters2.json';
import getAllCharacters10 from '../fixtures/characters-list/getAllCharacters10.json';
import getCharacterDetail from '../fixtures/characters-list/getCharacterDetail.json';
import getFilteredCharacters from '../fixtures/characters-list/getFilteredCharacters.json';

describe('charcaters list', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1', {
      statusCode: 200,
      body: getAllCharacters1,
    }).as('getAllCharacters1');
    cy.visit('/characters-list');
    cy.wait('@getAllCharacters1').its('response.statusCode').should('eq', 200);
    cy.location('pathname').should('equal', '/characters-list');
  });

  it('should show Rick Sanchez and be able to got to the next page and show Aqua Morty', () => {
    cy.get('c-character-card')
      .first()
      .contains('Rick Sanchez')
      .should('exist');
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=2', {
      statusCode: 200,
      body: getAllCharacters2,
    }).as('getAllCharacters2');
    cy.get('.buttons').contains('>').click();
    cy.wait('@getAllCharacters2').its('response.statusCode').should('eq', 200);
    cy.get('c-character-card')
      .first()
      .contains('Aqua Morty')
      .should('exist');
  });

  it('should go to Rick Sanchez details and go back to the list', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character/1', {
      statusCode: 200,
      body: getCharacterDetail,
    }).as('getCharacterDetail');
    cy.get('c-character-card').first().contains('Rick Sanchez').click();
    cy.wait('@getCharacterDetail').its('response.statusCode').should('eq', 200);
    cy.get('c-character-detail-container')
      .contains('Rick Sanchez')
      .should('exist');
    cy.get('c-character-detail-container')
      .contains('Alive')
      .should('exist');
    cy.get('c-character-detail-container')
      .contains('Human')
      .should('exist');
    cy.get('c-character-detail-container')
      .contains('Earth')
      .should('exist');
    cy.get('button').contains('Go back to the list').should('exist').click();
  });

  it('should filter Rick Sanchez characters', () => {
    cy.intercept(
      'GET',
      'https://rickandmortyapi.com/api/character?page=*&name=*',
      {
        statusCode: 200,
        body: getFilteredCharacters,
      }
    ).as('getFilteredCharacters');
    cy.get('input').type('Rick Sanchez');
    cy.wait('@getFilteredCharacters')
      .its('response.statusCode')
      .should('eq', 200);
    cy.get('c-character-card')
      .first()
      .contains('Rick Sanchez')
      .should('exist');
    cy.get('c-character-card')
      .last()
      .contains('Rick Sanchez')
      .should('exist');
  });

  it('should be able to navigate by page with the url', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=*', {
      statusCode: 200,
      body: getAllCharacters10,
    }).as('getAllCharacters10');
    cy.visit('/characters-list?page=10');
    cy.wait('@getAllCharacters10').its('response.statusCode').should('eq', 200);
    cy.get('c-character-card')
      .first()
      .contains("Jessica's Friend")
      .should('exist');
  });

  it('should show a non exist page message when navigating to a non existing page', () => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=*', {
      statusCode: 404,
      body: { error: 'There is nothing here' },
    }).as('getAllCharacters10');
    cy.visit('/characters-list?page=100');
    cy.wait('@getAllCharacters10').its('response.statusCode').should('eq', 404);
    cy.get('c-characters-list-container')
      .contains('This characters list page does not exist')
      .should('exist');
  });
});
