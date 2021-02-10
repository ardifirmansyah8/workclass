describe("Card Detail", () => {
  // For desktop view
  context("720p resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport(1280, 720);
    });

    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });

      describe("Click card", () => {
        it("Should navigate to Job Detail page", () => {
          cy.get("[data-cy=card]").click({ multiple: true });
          cy.url({ timeout: 8000 }).should("include", "/detail/");
        });
      });
    });
  });
});
