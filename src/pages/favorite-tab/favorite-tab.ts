import { Component } from '@angular/core';

import { TagalogFavoritePage } from '../tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../kapampangan-favorite/kapampangan-favorite';

@Component({
  templateUrl: 'favorite-tabs.html'
})
export class FavoriteTabPage {

  tab1Root = TagalogFavoritePage;
  tab2Root = IlokoFavoritePage;
  tab3Root = KapampanganFavoritePage;

  constructor() {

  }
}
