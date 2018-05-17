//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DictionaryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DictionaryServiceProvider {

  translateLanguage="Tagalog";
  translateWord="";
  dictionaryWord="";
  
  constructor() {
    console.log('Hello DictionaryServiceProvider Provider');
  }

  showTranslator(){
    document.getElementById('dictionary').style.display = "none";
    document.getElementById('translator').style.display = "block";
  }

  showDictionary(){
    document.getElementById('translator').style.display = "none";
    document.getElementById('dictionary').style.display = "block";
  }
  

}
