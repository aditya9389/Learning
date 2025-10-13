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

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

declare namespace Cypress {
  interface Chainable {
    iframe(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}
Cypress.Commands.add('iframe',(selector: string) : Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy
    .get(selector)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then((body) => cy.wrap(body as unknown as JQuery<HTMLElement>));
});
