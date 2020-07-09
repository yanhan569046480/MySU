import { LOCALE_ID, NgModule } from '@angular/core';
import { MapComponent } from './components/map.component';

@NgModule({
  declarations: [MapComponent],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
