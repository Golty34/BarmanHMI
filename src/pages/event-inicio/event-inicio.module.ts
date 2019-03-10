import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventInicioPage } from './event-inicio';

@NgModule({
  declarations: [
    EventInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(EventInicioPage),
  ],
})
export class EventInicioPageModule {}
