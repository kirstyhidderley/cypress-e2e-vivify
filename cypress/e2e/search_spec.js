describe('Vivify Venues Search and Facility Page Test', () => {
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  
    it('Searches for facilities using the postcode LA3 1AB', () => {
      // Visit the Vivify Venues website
      cy.visit('https://www.vivifyvenues.com');
  
      // Handle the cookie banner if it appears
      cy.get('body').then($body => {
        if ($body.find('button[aria-label="Dismiss"]').length > 0) {
          cy.get('button[aria-label="Dismiss"]').click();
        }
        if ($body.find('a:contains("Accept")').length > 0) {
          cy.contains('a', ' Accept ').click({ force: true });
        }
      });
  
      // Find the Postcode tab and click it
      cy.get('#tab-1-1').click({ force: true });
  
      // Find the search input field and type the postcode 'LA3 1AB'
      cy.get('input[name="postcode"]')
        .should('be.visible')
        .type('LA3 1AB', { force: true })
        .type('{enter}');
  
      // After clicking on the correct search link. 

      cy.get('a[href="/lancaster-royal-grammar/lancaster_classroom"]').eq(1).click();
  
   
      cy.get('img[alt="Facility Preview"]').should('be.visible');
      cy.get('img[alt="Facility Preview"]').should('have.length.greaterThan', 0);
      cy.then(() => {
        Cypress.log({ message: 'Test completed successfully.' });
      });
    });
  });
