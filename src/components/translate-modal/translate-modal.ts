import { Component } from '@angular/core';

/**
 * Generated class for the TranslateModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'translate-modal',
  templateUrl: 'translate-modal.html'
})
export class TranslateModalComponent {

  text: string;

  constructor() {
    console.log('Hello TranslateModalComponent Component');
    this.text = 'Hello World';
  }

}
