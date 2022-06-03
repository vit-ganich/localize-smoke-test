import Button from '../../web.elements/button';
import SearchBox from '../../web.elements/searchBox';

export class EditSearchPopup {
  locationsSearch = new SearchBox('[data-auto="textfield-wrapper"] input');
  submitButton = new Button('[data-auto*="submit-button"]');

  setSearchLocation(location: string) {
    this.locationsSearch.findByKeyword(location);
    this.submitButton.click();
  }
}
