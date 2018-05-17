import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TranslatePage } from '../pages/translate/translate';
import { DictionaryPage } from '../pages/dictionary/dictionary';
import { TabsPage } from '../pages/tabs/tabs';
import { HelpTabPage } from '../pages/help-tab/help-tab';
import { AboutTabPage } from '../pages/about-tab/about-tab';
import { FavoriteTabPage } from '../pages/favorite-tab/favorite-tab';
import { FunctionTabsPage } from '../pages/function-tabs/function-tabs';
import { TagalogFavoritePage } from '../pages/tagalog-favorite/tagalog-favorite';
import { IlokoFavoritePage } from '../pages/iloko-favorite/iloko-favorite';
import { KapampanganFavoritePage } from '../pages/kapampangan-favorite/kapampangan-favorite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Keyboard } from '@ionic-native/keyboard';
import { DictionaryServiceProvider } from '../providers/dictionary-service/dictionary-service';

@NgModule({
  declarations: [
    MyApp,
    HelpTabPage,
    AboutTabPage,
    FunctionTabsPage,
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
    HelpTabPage,
    AboutTabPage,
    FunctionTabsPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DictionaryServiceProvider
  ]
})
export class AppModule {}
