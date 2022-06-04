import TextBox from '../../web.elements/textBox';
import WebElement from '../../web.elements/webElement';
import BasePage from '../base.page';
import { EditSearchPopup } from './edit-search-popup';
import { ListingOverviewPage } from './listing-overview-page';

class NewYorkNyPage extends BasePage {
  constructor() {
    super('/for-rent/new-york-ny');
  }

  waitForLoad(): void {
    // TODO: need to find a better way for the page load
    // cy.intercept('**/page/page_view').as('pageView');
    // cy.wait('@pageView');
    cy.wait(2000);
    this.welcomeToFeed.get().should('be.visible');
  }

  welcomeToFeed = new WebElement('div [data-section-type="welcomeToYourFeed"]');
  // Feed filters
  rent = new WebElement('[data-auto="feed-filter-control-dealtype-button"]');

  // Map
  mapCanvas = new WebElement('.mapboxgl-canvas');
  mapBoxPopup = new WebElement('div .mapboxgl-popup');

  // Search results
  resultsFound = new TextBox("[data-section-type='recentSort']>div");
  listedCardsMain = new WebElement(
    '[data-auto="ignore-section-0-block"] div[data-auto="listed-bulletin"]',
  );

  /**
   * Perform search by the neiborhood
   * @param location
   */
  applyRentFilter(location: string) {
    this.rent.click({ force: true });
    new EditSearchPopup().setSearchLocation(location);

    this.mapCanvas.get().should('be.visible');

    cy.wait(2000); // TODO: add a smart wait
  }

  /**
   * Extract the number from texbox 'N homes found'
   * @example
   * 7 homes found -> 7
   *
   * @returns
   */
  getSearchResultsAmount(): Cypress.Chainable<number> {
    return this.resultsFound.read().then((text) => {
      const regeExp = new RegExp(/\d*/);
      const foundAmountString = regeExp.exec(text);
      const foundAmount = Number(foundAmountString);

      return foundAmount;
    });
  }

  /**
   * Check the 'N homes found' equals with the actual amount of cards
   */
  verifySearchResultsAmount() {
    this.getSearchResultsAmount().then((expectedAmount) => {
      this.listedCardsMain.get().should('have.length', expectedAmount);
    });
  }

  /**
   * Select a listing card by index
   * @param itemIndex
   * @returns
   */
  selectItemFromList(itemIndex: number) {
    // TODO: click has no effect
    this.listedCardsMain.get().eq(itemIndex).click('top', { force: true });
    return new ListingOverviewPage();
  }

  // TODO: need to get coordinates from the server
  selectRandomItemFromMap() {
    cy.wait(5000); // TODO: add a smart wait
    this.mapCanvas.get().then(($canvas) => {
      // cy.wrap($canvas).click(381, 901);

      const canvasWidth = Number($canvas.width());
      const canvasHeight = Number($canvas.height());

      // Divide in half since cursor will be at center of canvas
      // const canvasCenterX = canvasWidth / 2;
      // const canvasCenterY = canvasHeight / 2;
      // cy.log('Width: ' + canvasWidth);
      // cy.log('Height: ' + canvasHeight);
      // cy.log('Center X: ' + canvasCenterX);
      // cy.log('Center Y: ' + canvasCenterY);

      // Attempt to click all points on the map - it can hit the point accidentally
      // for (let x = canvasCenterX; x < canvasCenterX + 50; x++) {
      //   for (let y = canvasCenterY; y < canvasCenterY + 50; y++) {
      //     cy.log('X: ' + x);
      //     cy.log('Y: ' + y);
      //     cy.wrap($canvas).scrollIntoView().click(x, y);
      //     cy.wait(500);
      //     cy.url().then((url) => {
      //       if (url.includes('listings')) {
      //         return;
      //       }
      //     });
      //     //   cy.get('body').then(($body) => {
      //     //     const popup = $body.find(this.mapBoxPopup.selector);
      //     //     if (popup.length > 0) {
      //     //       return;
      //     //     }
      //     //   });
      //   }
      // }
    });
  }
}

export default new NewYorkNyPage();
