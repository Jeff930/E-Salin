import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IlokoFavoritePage } from './iloko-favorite';

@NgModule({
  declarations: [
    IlokoFavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(IlokoFavoritePage),
  ],
})
export class IlokoFavoritePageModule {}
