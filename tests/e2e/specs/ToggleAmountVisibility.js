describe("ToggleAmountVisibility.js", () => {
  it("toggle amount visibility", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('button[data-testid="ToggleViewer"]').click();
    cy.wait(3000);
    cy.get('button[data-testid="ToggleViewer"]').click();
  });
});
