import newYorkNyPage from '../support/pages/new-york/new-york-ny.page';
import getRandomInt from '../support/utils/getRandomInt';

describe('Smoke test', () => {
  // ISSUE: page does not work correctly in Chrome browser. Use Electron instead
  it('When I visit New York page', () => {
    newYorkNyPage.visit();
    newYorkNyPage.waitForLoad();
  });

  it('And I search by location SoHo', () => {
    newYorkNyPage.applyRentFilter('SoHo');
  });

  // ISSUE: From time to time the items list is not loaded in Cypress window.
  it('Then I should see homes found amount should be equal to cards amount', () => {
    newYorkNyPage.verifySearchResultsAmount();
  });

  // ISSUE: Click on the listing card has no effect in Cypress window (even manually)
  it('When I navigate to random listing', () => {
    newYorkNyPage.getSearchResultsAmount().then((length) => {
      const randomIndex = getRandomInt(length);

      const randomItem = newYorkNyPage.selectItemFromList(randomIndex);
      randomItem.verifyUrl();
    });
  });

  // ISSUE: canvas test does not work
  it.skip('When I click on point on the map', () => {
    newYorkNyPage.selectRandomItemFromMap();
  });
});
