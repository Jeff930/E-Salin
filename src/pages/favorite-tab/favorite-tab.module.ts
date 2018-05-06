import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteTabPage } from './favorite-tab';

@NgModule({
  declarations: [
    FavoriteTabPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteTabPage),
  ],
})
export class FavoriteTabPageModule {}
