/// <reference types="Cypress" />

//Konsta Hasanen

describe('Jamkin sivujen testailua', () => {
  it('Jamkin sivuille', () => {
    cy.visit('https://www.jamk.fi/fi');

    cy.get('#CybotCookiebotDialogBodyButtonDecline').click();

    cy.get('.toggle-expand').click();

    cy.get('.main').should('be.visible');

    cy.get('span[class="expand-sub"]').eq(0).click({ force: true });

    cy.contains('AMK-tutkinnot').click({ force: true });

    cy.contains('Yhteystiedot').scrollIntoView().click({ force: true });

    cy.get('#edit-s').type('Niko Kiviaho {enter}');

    cy.get('.contact').scrollIntoView();
  });
});
