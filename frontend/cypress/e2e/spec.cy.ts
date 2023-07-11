import type {} from "cypress";

describe("Mind Sound", () => {
  const isProd = Cypress.env("mode") === "production";
  before(() => {
    if (isProd) {
      cy.log("production");
    }
    cy.visit("/");
  });

  describe("Tpl all Views", () => {
    //
  });
});
