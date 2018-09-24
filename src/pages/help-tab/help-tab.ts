import { Component } from '@angular/core';

import { Help1Page } from '../help1/help1';
import { Help2Page } from '../help2/help2';

@Component({
  templateUrl: 'help-tab.html'
})
export class HelpTabPage {

  tab1Root = Help1Page;
  tab2Root = Help2Page;

  constructor() {

  }
}
