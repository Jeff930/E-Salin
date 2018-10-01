import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the DatabaseHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseHandlerProvider {

  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
  userInput="";
  translateTo="Tagalog";
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private http: HttpClient) {
    this.openDB();
  }

  openDB(){
    this.sqlite.create({
      name: 'DictionaryDB.db',
      location: 'default'
    })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
  }
 
  fillDatabase() {
    this.http.get('assets/database/DictionaryDB.sql')
    .subscribe((sql:any) => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.log("this"));
      },error=>console.log("this"))
  }

  getTranslate(){

  }

}
