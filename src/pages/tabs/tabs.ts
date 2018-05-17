import { Component } from '@angular/core';

import { FunctionTabsPage } from '../function-tabs/function-tabs';
import { FavoriteTabPage } from '../favorite-tab/favorite-tab';
import { HelpTabPage } from '../help-tab/help-tab';
import { AboutTabPage } from '../about-tab/about-tab';
import { DictionaryPage } from '../dictionary/dictionary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DictionaryPage;
  tab2Root = FavoriteTabPage;
  tab3Root = HelpTabPage;
  tab4Root = AboutTabPage;

  constructor() {

  }
}
