import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TranslatePage } from '../pages/translate/translate';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoriteTabPage } from '../pages/favorite-tab/favorite-tab';
import { TagalogFavoritePage } from '../pages/tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../pages/iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../pages/kapampangan-favorite/kapampangan-favorite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TranslatePage,
    DictionaryPage,
    TabsPage,
    FavoriteTabPage,
    IlokoFavoritePage,
    TagalogFavoritePage,
    KapampanganFavoritePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false } ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TranslatePage,
    DictionaryPage,
    TabsPage,
    FavoriteTabPage,
    IlokoFavoritePage,
    TagalogFavoritePage,
    KapampanganFavoritePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
