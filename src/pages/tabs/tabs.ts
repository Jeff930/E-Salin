import { Component } from '@angular/core';

import { TranslatePage } from '../translate/translate';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TranslatePage;
  tab2Root = DictionaryPage;

  constructor() {

  }
}
