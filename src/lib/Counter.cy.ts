import Counter from "./Counter.svelte";

describe("Counter.cy.ts", () => {
  it("playground", () => {
    cy.mount(Counter, {
      props: {
        initial: 10
      }
    });
  });
});
