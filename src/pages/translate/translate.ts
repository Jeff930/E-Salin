import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TranslatePage');
  }

  openDB(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        console.log("successful");
    
    
      })
      .catch(e => console.log(e));
  }

}
