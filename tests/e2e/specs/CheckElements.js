describe("CheckElements.js", () => {
  it("visits the app root url and check some elements", () => {
    cy.visit("/");
    cy.get('h1[data-testid="Header-title"]').contains("Transações");
    cy.get('input[data-testid="Searcher-input"]').should(
      "have.attr",
      "placeholder",
      "Busque pelo título"
    );
    cy.get('button[data-testid="Header-action"]').contains("Status");
    cy.get('button[data-testid="ToggleViewer"]').should("be.visible");
  });
});
