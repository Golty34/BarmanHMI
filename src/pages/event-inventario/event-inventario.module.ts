import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInventarioPage } from './event-inventario';

@NgModule({
  declarations: [
    EventInventarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EventInventarioPage),
  ],
})
export class EventInventarioPageModule {}
