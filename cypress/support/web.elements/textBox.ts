import WebElement from './webElement';

export default class TextBox extends WebElement {
  type(text: string, options?: Partial<Cypress.TypeOptions>) {
    return this.get().type(text, options);
  }
  read(option = 'text'): Cypress.Chainable<string> {
    return this.get().invoke(option);
  }
}
