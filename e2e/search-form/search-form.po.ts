import {$, by, element} from 'protractor';
import {equal} from 'assert';

export class SearchFormPage {

  searchTextBox = $('#query');
  radioButtonPlanets = $('#planets');
  radioButtonPeople = $('#people');
  searchButton = element(by.buttonText('Search'));
  responseNotFound = $('body app-root div div div div:nth-child(5)');

  async responseNotFoundText(string) {
    await this.responseNotFound.getText().then((present) => {
      equal(present, string);
    });
  }
}


