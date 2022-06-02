/**
 * Base class for page objects
 */
abstract class BasePage {
  url: string | undefined;

  /**
   * Visit page url. Note: 'url' field must be initialized
   */
  visit() {
    if (!this.url) {
      throw new Error('visit: url id not defined');
    }
    cy.visit(this.url);
  }
}

export default BasePage;
