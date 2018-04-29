import { Component } from '@angular/core';

/**
 * Generated class for the TabsPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs-page.html'
})
export class TabsPageComponent {

  text: string;

  constructor() {
    console.log('Hello TabsPageComponent Component');
    this.text = 'Hello World';
  }

}
