context('LoginForm', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('img').should('be.visible')
    cy.get('[type="email"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
    cy.get('button').contains('LOGIN').should('be.visible')
  })

  it('Login', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('input[name=email]').type('sergio+admin@ordering.co')
    cy.get('input[name=password]').type('test2020')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })
})
