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
  Results="Pangalawa";
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private http: HttpClient) {
    this.openDB();
  }

  openDB(){
    this.sqlite.create({
      name: 'Dictdb.db',
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
    console.log("fill called");
    this.http.get('assets/database/Dictdb.sql',{responseType:'text'})
   .subscribe((sql:any) => {
        console.log("subscribed");
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
            console.log("dbready")
          })
          .catch(e => console.log("eto  " + JSON.stringify(e),Object.getOwnPropertyNames(e)));
      },error=>console.log(JSON.stringify(error)))
  }

  getTranslate(){
    this.openDB();
    this.database.executeSql('SELECT EntryNo from DictionaryEntry WHERE EntryNo=1',[])
    .then((result) => {
      console.log("hayy" + result);
       this.Results = JSON.stringify(result);
    },error=>{console.log(JSON.stringify("mamaya"))})
  }

}
