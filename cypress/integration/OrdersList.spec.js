context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
    cy.visit('/orders')
  })

  it('Check Main UI', () => {
    cy.get('.order-content').should('exist')
    cy.get('.order-status-filterbar').should('exist')
    cy.get('.skeleton-loading').should('be.visible')
    cy.get('button[name=filter-btn').should('be.visible').click()
    cy.get('.filter-modal').should('be.visible')
    cy.get('.modal-close-icon').click()
    cy.get('.order-item-business:first').first().click()
    cy.get('.order-detail').should('exist')
    cy.get('.modal-close-icon').click()
  })
})
