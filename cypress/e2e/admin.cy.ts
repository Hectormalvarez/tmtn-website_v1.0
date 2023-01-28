describe('Admin page functionality', () => {
  it('can login', () => {
    cy.visit('/admin')
    cy.get('label').contains('Email').should('exist')
    cy.get('label').contains('Password').should('exist')
    cy.get('input[placeholder="Enter your Email"]')
      .should('be.visible')
      .type('halvarez@taylormadetech.net')
    cy.get('input[placeholder="Enter your Password"]').should('be.visible').type('Hailey33*')
    cy.get('button').contains('Sign in').click()
    cy.get('button').contains('Sign out').should('exist')
  })
})
