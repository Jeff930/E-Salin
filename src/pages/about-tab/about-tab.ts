import { Component } from '@angular/core';

import { About1Page } from '../about1/about1';
import { About2Page } from '../about2/about2';

@Component({
  templateUrl: 'about-tab.html'
})
export class AboutTabPage {

  tab1Root = About1Page;
  tab2Root = About2Page;

  constructor() {

  }
}
