/// <reference types="Cypress" />

describe('FindE frontendin testausta', () => {
  it('Rendataan FindE sivu ja aloiteteaan testaaminen', () => {
    // Ladataan sivu
    cy.visit('http://localhost:8080/');
  });

  it('Testataan kirjautumista ensimmäiseksi väärillä tunnuksilla', () => {
    // Syötetään väärä sähköposti
    cy.get('input#userName.svelte-h4qyoc')
      .should('be.visible')
      .wait(1000)
      .type('vaaratunnus@gmail.com');
    //Syötetään väärä salasana
    cy.get('input#password.svelte-h4qyoc')
      .should('be.visible')
      .wait(1000)
      .type('vaarasalasana');
    // Painetaan kirjautumisnappia, jolloin kirjautumisen pitäisi epäonnistua
    cy.get('button.login.svelte-s8bhaj').click();
    cy.wait(2000);
    //Modalin pitäisi ilmestyä, suljetaan se
    cy.get('button.svelte-1he369n').should('be.visible').click();
  });

  it('Testataan kirjautumista oikeilla tunnuksilla, jolloin kirjautuminen pitäisi onnistua', () => {
    // Syötetään oikea sähköposti
    cy.get('input#userName.svelte-h4qyoc').clear().type('jorkki@gmail.com');
    // Syötetään oikea salasana
    cy.get('input#password.svelte-h4qyoc').clear().type('salasana');
    // Painetaan kirjautumisnappia uudelleen, jolloin kirjautumisen pitäisi onnistua
    cy.get('button.login.svelte-s8bhaj').click();
  });

  it('Testataan tapahtuman lisäämistä', () => {
    cy.wait(2000);
    //Painetaan Add an event buttonia
    cy.get('button.addButton.svelte-ggb5up').should('be.visible').click();
    //Lisätään tapahtumalle nimi
    cy.get('input#name.svelte-os2imi')
      .should('be.visible')
      .type('Rumpu konsertti');
    //Lisätään tapahtumapaikka
    cy.get('input#location.svelte-os2imi')
      .should('be.visible')
      .type('Lähitapiola areena');
    //Lisätään tapahtumalle genre
    cy.get('select').should('be.visible').select('Music');
    //Lisätään tapahtumalle kuvaus
    cy.get('textarea.svelte-15as3te')
      .should('be.visible')
      .type('Soitetaan rumpuja');
    //Lisätään tapahtumalle alkamispäivä
    cy.get('input#aloituspvm.svelte-os2imi')
      .should('be.visible')
      .type('2023-11-15');
    //Lisätään tapahtumalle alkamisaika
    cy.get('input#aloitusaika.svelte-os2imi')
      .should('be.visible')
      .type('17:00');
    //Lisätään tapahtumalle loppumispäivä
    cy.get('input#lopetuspvm.svelte-os2imi')
      .should('be.visible')
      .type('2023-12-15');
    //Lisätään tapahtumalle loppumisaika
    cy.get('input#lopetusaika.svelte-os2imi')
      .should('be.visible')
      .type('18:00');
    //Lisätään tapahtumalle osoite
    cy.get('input#address.svelte-os2imi')
      .should('be.visible')
      .type('Rajakatu 35');
    //Lisätään tapahtumalle postinumero
    cy.get('input#postalcode.svelte-os2imi').should('be.visible').type('40100');
    //Lisätään tapahtumalle kaupunki
    cy.get('input#city.svelte-os2imi').should('be.visible').type('Jyväskylä');
    //Lisätään tapahtumalle maa
    cy.get('input#country.svelte-os2imi').should('be.visible').type('Suomi');
    //Lisätään tapahtumalle kuva
    const fileName = 'Asunto.png';
    cy.fixture(fileName).then((fileContent) => {
      console.log('File Content:', fileContent);
      cy.get('input#imgUrl').attachFile(
        { fileContent, fileName },
        { subjectType: 'input' }
      );
    });
    //Lisätään tapahtuma painamalla Add event!
    cy.get('button.addButton.svelte-os2imi').should('be.visible').click();
  });

  //Poistetaan lisätty tapahtuma
  cy.wait(2000);
  cy.get('');

  it('Testataan Go back nappia', () => {
    cy.get('button.backButton.svelte-iu37n4').should('be.visible').click();
  });

  it('Kijaudutaan lopuksi ulos käyttäjältä', () => {
    cy.get('button.svelte-1he369n').should('be.visible').click();
  });
});
