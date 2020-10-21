import {Before, Then} from 'cucumber';
import {CharacterPage} from './character.po';

let characterPage: CharacterPage;

Before(() => {
  characterPage = new CharacterPage();
});

Then(/^the character result is:$/, async (dataTable) => {
  await characterPage.assertTable(dataTable.raw());
});

Then('the character result is more then one {string}', async (string) => {
  await characterPage.meerdereTables(string);
});
