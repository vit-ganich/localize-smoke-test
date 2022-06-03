/**
 * Base class for page objects
 */
abstract class BasePage {
  constructor(readonly url: string) {}

  /**
   * Visit page url. Note: 'url' field must be initialized in the constructor
   */
  visit() {
    cy.visit(this.url);
  }

  /**
   * Wait for the page is loaded
   */
  abstract waitForLoad(): void;
}

export default BasePage;
