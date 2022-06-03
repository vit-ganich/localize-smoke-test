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
    cy.wait(1500); // TODO: Need to wait for the list get loaded

    cy.get(this.suggestions).eq(index).click();
  }
}
