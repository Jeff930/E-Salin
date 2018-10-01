import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseHandlerProvider} from '../../providers/database-handler/database-handler';

/**
 * Generated class for the DictionaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dictionary',
  templateUrl: 'dictionary.html',
})
export class DictionaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public databaseHandlerProvider : DatabaseHandlerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DictionaryPage');
  }

}
