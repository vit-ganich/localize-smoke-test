export default class WebElement {
  protected _selector: string | keyof HTMLElementTagNameMap;
  protected contains: boolean = false;

  get selector() {
    return this._selector;
  }

  constructor(
    selector: string | keyof HTMLElementTagNameMap,
    { contains = false } = {},
  ) {
    this._selector = selector;
    this.contains = contains;
  }

  get(
    options?: Partial<
      Cypress.Loggable &
        Cypress.Timeoutable &
        Cypress.Withinable &
        Cypress.Shadow
    >,
  ) {
    if (this.contains) {
      return cy.contains(this._selector, options);
    }
    return cy.get(this._selector, options);
  }
}
