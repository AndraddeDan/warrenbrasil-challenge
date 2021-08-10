describe("ViewTransactionDetails.js", () => {
  it("open transaction details", () => {
    cy.visit("/");
    cy.wait(3000);
    cy.get('[data-testid="TransactionsList-card(00)"]').click();
  });

  it("close transaction details modal", () => {
    cy.wait(5000);
    cy.get('[data-testid="Modal-close"]').click();
  });
});
