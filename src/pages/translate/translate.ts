import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseHandlerProvider} from '../../providers/database-handler/database-handler';

/**
 * Generated class for the TranslatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-translate',
  templateUrl: 'translate.html',
})
export class TranslatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public databaseHandlerProvider : DatabaseHandlerProvider) {
  }

  ionViewDidLoad() {
    this.databaseHandlerProvider.openDB();
  }

}
