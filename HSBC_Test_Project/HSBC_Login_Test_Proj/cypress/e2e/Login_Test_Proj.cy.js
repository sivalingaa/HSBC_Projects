
beforeEach(() => {
  cy.viewport(1500, 1000);
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

describe('HSBC Bank Login Scenarios', () => {
  it('Login Test cases', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.screenshot();
    cy.wait(3000);
    cy.get('h1>img').should('be.visible').screenshot();
    cy.wait(3000);
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.screenshot();
    cy.wait(3000);
    cy.contains('Log On').click({force:true});
    cy.screenshot();    
    cy.wait(3000);
    cy.contains('Continue to log on with browser').click();
    cy.screenshot();
    cy.wait(3000);
    cy.get('h2').contains('Log On');
    cy.screenshot();
    cy.wait(3000);
    cy.get('button[name="continue"]').should('be.visible');
    cy.screenshot();
    cy.wait(3000);
    cy.get('button[name="continue"]').should('be.disabled');
    cy.screenshot();
    cy.wait(3000);
    cy.get('input#username').type("TestUser1");
    cy.screenshot();
    cy.wait(3000);
    cy.get('button[name="continue"]').should('not.be.disabled');
    cy.screenshot();
    cy.wait(3000);
    cy.get('input#rememberMe').should('not.be.checked');
    cy.screenshot();
    cy.wait(3000);
    cy.get('a#username_help_link>span>span').should('be.visible');
    cy.screenshot();
    cy.wait(3000);
    cy.get('a#username_help_link').click({force:true});
    cy.screenshot();
    cy.wait(3000);
    cy.get('h3>span').should('be.visible');
    cy.screenshot();
    cy.wait(3000);
    cy.get('a.close-btn>span>span').should('be.visible');
    cy.screenshot(); 
    cy.wait(3000);
    cy.get('a.close-btn').click({force: true});
    cy.screenshot();
  })
  
})