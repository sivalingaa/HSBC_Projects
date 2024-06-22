beforeEach( () => {
  cy.viewport(1600, 1000)
  cy.visit('https://www.hsbc.co.in/')
})

Cypress.on('uncaught:exception', (err,runnable) => {
  return false;
})

describe('ATM search test', () => {
  it('Testing ATM search test scenarios', () => {
    cy.screenshot()
    cy.wait(3000)
    cy.contains('Find your nearest HSBC branch or ATM').click({force: true});
    cy.screenshot()
    cy.wait(3000)
    cy.url().should('include','/ways-to-bank/branches/')
    cy.screenshot()
    cy.wait(3000)
    cy.get('h1').contains('Branches & ATMs')
    cy.screenshot()
    cy.wait(3000)
    // cy.get('a#content_main_button_1').click()
    cy.contains('Branch & ATM Locator').click()
    cy.screenshot()
    cy.wait(3000)
    cy.get('input#searchInput').type('india{enter}')
    cy.screenshot()
    cy.wait(3000)
    //cy.get('input#searchInput').type('india')
    //cy.get('ul#autocomplete-results>li').click({multiple: true})
    cy.contains('Rajbhavan Road, Somajiguda , Hyderabad, India, 500082').should('be.visible')
    cy.screenshot()
    cy.wait(3000)
    cy.contains('Show more results').click()
    cy.screenshot()
    cy.wait(3000)
    //cy.xpath('//*[contains(text(),"580.1")]/span/span').should('be.visible')
    cy.contains('Amar Avinash Corporate City, Bund Garden Road, Pune, India, 411001').should('be.visible');
    cy.screenshot()
    cy.wait(3000)
    cy.get('a.social-icon-instagram').should('be.visible');
    cy.get('a.social-icon-facebook').should('be.visible');
    cy.get('a.social-icon-twitter').should('be.visible');
    cy.get('a.social-icon-youtube').should('be.visible');
    cy.screenshot()
    cy.wait(3000)
    cy.get('div.header-logo>a>img').click();
    cy.screenshot()
    cy.wait(3000)
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    cy.screenshot()
    cy.wait(3000)
    cy.contains('Privacy Statement').click({force: true});
    cy.screenshot()
    cy.wait(3000)
    cy.get('h1').contains('Privacy Statement');
    cy.screenshot()
    cy.wait(3000)

  })
})