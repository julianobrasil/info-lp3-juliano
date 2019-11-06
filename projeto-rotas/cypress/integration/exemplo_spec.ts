describe('um conjunto qualquer de testes', () => {
  it('testar o login', () => {
    cy.visit('http://localhost:4200');
    cy.contains(' Login').click();
    cy.contains('Link 1').click();
    cy.url().should('include', 'sistema/link-1');
  });
});
