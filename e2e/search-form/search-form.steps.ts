import {SearchFormPage} from './search-form.po';
import {Before, Then, When} from 'cucumber';
import {protractor} from 'protractor';

let searchFormPage: SearchFormPage;

Before(() => {
  searchFormPage = new SearchFormPage();
});

When('radiobutton people is selected', async() => {
  searchFormPage.radioButtonPeople.click();
});

When('radiobutton planets is selected', async() => {
  searchFormPage.radioButtonPlanets.click();
});

When('search text is send {string}',  async (string) => {
  await searchFormPage.searchTextBox.sendKeys(string);
});

When('search + click is performed with {string}',  async (string) => {
  await searchFormPage.searchTextBox.sendKeys(string);
  await searchFormPage.searchButton.click();
});

When('search button is clicked',  async () => {
  await searchFormPage.searchButton.click();
});

When('search box is cleared', async() => {
  await searchFormPage.searchTextBox.click();
  await searchFormPage.searchTextBox.clear();
});

When('search + enter is performed with {string}',  async (string) => {
  await searchFormPage.searchTextBox.sendKeys(string + protractor.Key.ENTER);
});

Then('the result is {string}', async (string) => {
  await searchFormPage.responseNotFoundText(string);
});
