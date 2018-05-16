import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import { TranslatePage } from '../pages/translate/translate';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoriteTabPage } from '../pages/favorite-tab/favorite-tab';
import { TagalogFavoritePage } from '../pages/tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../pages/iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../pages/kapampangan-favorite/kapampangan-favorite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public keyboard: Keyboard) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Diksyunaryo', component: TabsPage },
      { title: 'Paborito', component: FavoriteTabPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.keyboard.disableScroll(true);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
