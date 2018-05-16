import { Component } from '@angular/core';

import { TranslatePage } from '../translate/translate';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  templateUrl: 'function-tabs.html'
})
export class FunctionTabsPage {

  tab1Root = TranslatePage;
  tab2Root = DictionaryPage;

  constructor() {

  }
}
