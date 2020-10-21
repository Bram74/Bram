import {Before, Then} from 'cucumber';
import {PlanetPage} from './planet.po';

let planetPage: PlanetPage;

Before(() => {
  planetPage = new PlanetPage();
});

Then(/^the planet result is:$/, async (dataTable) => {
 await planetPage.assertTable(dataTable.raw());
});

Then('the planets result is more then one {string}', async (string) => {
  await planetPage.meerdereTables(string);
});
