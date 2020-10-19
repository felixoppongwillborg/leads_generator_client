describe('Visitor can navigate sub navbar', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visitor can see environment page', () => {
    cy.get('[data-cy=button]').contains("Why solar").click()
    cy.get('[data-cy=button]').contains("Help the environment").click()
    cy.get('[data-cy=title]').should("contain", "Environment page")
  })
  it('visitor can see economics page', () => {
    cy.get('[data-cy=button]').contains("Why solar").click()
    cy.get('[data-cy=button]').contains("Benefit your wallet").click()
    cy.get('[data-cy=title]').should("contain", "Economics page")
  })
})