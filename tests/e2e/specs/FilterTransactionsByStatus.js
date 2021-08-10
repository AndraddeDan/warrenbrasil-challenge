describe("FilterTransactionsByStatus.js", () => {
  it("filter transactions by status", () => {
    cy.visit("/");
    cy.get('button[data-testid="Header-action"]').click();
    cy.wait(1000);
    cy.get('[data-testid="FilterByStatus-allBtn(1)"]').click();
  });
});
