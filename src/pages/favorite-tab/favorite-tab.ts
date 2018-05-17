import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TagalogFavoritePage } from '../tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../kapampangan-favorite/kapampangan-favorite';

/**
 * Generated class for the FavoriteTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite-tab',
  templateUrl: 'favorite-tab.html',
})
export class FavoriteTabPage {

  tab1Root = TagalogFavoritePage;
  tab2Root = IlokoFavoritePage;
  tab3Root = KapampanganFavoritePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteTabPage');
  }

}
