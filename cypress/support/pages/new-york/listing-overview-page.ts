import Button from '../../web.elements/button';
import TextBox from '../../web.elements/textBox';

export class ListingOverviewPage {
  primaryAddress = new TextBox('[data-auto="primary_address_text"]');
  secondaryAddress = new TextBox('[data-auto="secondary_address_text"');
  contactAgentButton = new Button(
    '[data-auto="agent-contact-button-sticky-text"]',
  );

  verifyUrl() {
    cy.url().should('contain', 'listings');
  }
}
