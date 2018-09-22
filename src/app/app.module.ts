import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TranslatePage } from '../pages/translate/translate';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoriteTabPage } from '../pages/favorite-tab/favorite-tab';
import { TagalogFavoritePage } from '../pages/tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../pages/iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../pages/kapampangan-favorite/kapampangan-favorite';
import {HelpTabPage} from '../pages/help-tab/help-tab'
import {AboutTabPage} from '../pages/about-tab/about-tab'
import {About1Page} from '../pages/about1/about1'
import {About2Page} from '../pages/about2/about2'
import {Help1Page} from '../pages/help1/help1'
import {Help2Page} from '../pages/help2/help2'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    TranslatePage,
    DictionaryPage,
    TabsPage,
    FavoriteTabPage,
    IlokoFavoritePage,
    TagalogFavoritePage,
    KapampanganFavoritePage,
    HelpTabPage,
    AboutTabPage,
    About1Page,
    About2Page,
    Help1Page,
    Help2Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false } ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TranslatePage,
    DictionaryPage,
    TabsPage,
    FavoriteTabPage,
    IlokoFavoritePage,
    TagalogFavoritePage,
    KapampanganFavoritePage,
    HelpTabPage,
    AboutTabPage,
    About1Page,
    About2Page,
    Help1Page,
    Help2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
