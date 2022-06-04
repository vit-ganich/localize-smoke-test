import WebElement from './webElement';

export default class SearchBox extends WebElement {
  constructor(
    selector: string,
    private suggestions: string = '[data-auto="autocomplete-suggestion"]',
  ) {
    super(selector);
  }

  findByKeyword(keyword: string, index = 0) {
    this.get().type(keyword);
    // TODO: there is no Authorization header in Cypress Chrome for /api2 and /api3 requests
    // Attempt to fix it, but need to get a token somehow
    // cy.intercept('/api*', (request) => {
    //   request.headers['authorization'] =
    //     'Bearer token';
    //   return request;
    // });
    cy.wait(1500); // TODO: Need to wait for the list get loaded

    cy.get(this.suggestions).eq(index).click();
  }
}
