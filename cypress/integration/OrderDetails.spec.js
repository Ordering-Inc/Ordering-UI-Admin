context('Order details', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('input[name=email]').type('sergio+admin@ordering.co')
    cy.get('input[name=password]').type('test2020')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })
  it('Check valid order', () => {
    cy.visit('/orders/102')
    cy.get('.skeleton-loading').should('be.visible')
    cy.get('.order-info').should('exist')
    cy.get('.contact-info').should('exist')
  })

  it('Check invalid order', () => {
    cy.visit('/orders/invalidorder696')
    cy.get('#not-found-source').should('be.visible')
  })
})
