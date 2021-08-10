describe("FilterTransactionsByTitle.js", () => {
  it("filter transactions by title", () => {
    cy.visit("/");
    cy.get('input[data-testid="Searcher-input"]').type("resgate");
  });
});
