import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventarioHomePage } from './inventario-home';

@NgModule({
  declarations: [
    InventarioHomePage,
  ],
  imports: [
    IonicPageModule.forChild(InventarioHomePage),
  ],
})
export class InventarioHomePageModule {}
