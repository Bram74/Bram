import {$} from 'protractor';
import {equal} from 'assert';
const chai = require('chai');
chai.use(require('chai-as-promised'));

export class CharacterPage {

  async meerdereTables(bool) {
    await $('div:nth-child(2) app-character').isPresent().then( (present) => {
      equal(present, Boolean(bool));
    });
  }

  async assertTable(dataTableRaw) {
    for (let i = 0; i < dataTableRaw.length; i++ ) {
    const j = i + 1;
    await $('app-character .row:nth-of-type(' + j + ') div:nth-child(1)').getText().then((present) => {
      equal(present, dataTableRaw[i][0]);
    });
      await $('app-character .row:nth-of-type(' + j + ') div:nth-child(2)').getText().then((present) => {
        equal(present, dataTableRaw[i][1]);
      });
    }
  }
}
