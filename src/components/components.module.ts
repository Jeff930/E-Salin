import { NgModule } from '@angular/core';
import { TranslateModalComponent } from './translate-modal/translate-modal';
import { DictionaryModalComponent } from './dictionary-modal/dictionary-modal';
@NgModule({
	declarations: [TranslateModalComponent,
    DictionaryModalComponent],
	imports: [],
	exports: [TranslateModalComponent,
    DictionaryModalComponent]
})
export class ComponentsModule {}
