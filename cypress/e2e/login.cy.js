/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('practice login', () => {
  it('should be able to login', () => {
    cy.visit('https://www.konga.com/')
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    cy.get('#username').type('ebahausa@yopmail.com')
    cy.get('#password').type('123456')
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()

      /// should and
      cy.url().should('include','konga.com')
      cy.url().should('eq','https://www.konga.com/')


  })
})