import {$} from 'protractor';
import {equal} from 'assert';

export class PlanetPage {

  async assertTable(dataTableRaw) {
    for (let i = 0; i < dataTableRaw.length; i++ ) {
      const j = i + 1;
      await $('app-planet .row:nth-of-type(' + j + ') div:nth-child(1)').getText().then((present) => {
        equal(present, dataTableRaw[i][0]);
      });
      await $('app-planet .row:nth-of-type(' + j + ') div:nth-child(2)').getText().then((present) => {
        equal(present, dataTableRaw[i][1]);
      });
    }
  }

  async meerdereTables(bool) {
    await $('div:nth-child(2) app-planet').isPresent().then( (present) => {
      equal(present, Boolean(bool));
    });
  }
}
