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
    //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZGVlNTgwMS1lNjVkLTQ5YzctYWFmOS01NTNjNDZjNjVlZmEiLCJyZWdpc3RyYXRpb25UeXBlIjoiVklTSVRPUiIsInJvbGVzIjpbIlZJU0lUT1IiXSwiaXNJbXBlcnNvbmF0aW9uTG9nSW4iOmZhbHNlLCJpc0JvdCI6ZmFsc2UsInJlZnJlc2hUb2tlblZlcnNpb24iOiIxIiwic2FsdCI6Ijk4Y2QwNzhmLTI1YWQtNGM1Ni05YThkLTEyOTY5NGM2MzVlNSIsInYiOjIsImlhdCI6MTY1NDE1NTE2MSwiZXhwIjoxNjU1MzY0NzYxfQ.mQs4yvhcrO2GdECGimMhZ9dTDW5AJJ0mnM-7xfO0DIo';
    //   return request;
    // });
    cy.wait(1500); // TODO: Need to wait for the list get loaded

    cy.get(this.suggestions).eq(index).click();
  }
}
