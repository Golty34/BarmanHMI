import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventarioDetailPage } from './inventario-detail';

@NgModule({
  declarations: [
    InventarioDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InventarioDetailPage),
  ],
})
export class InventarioDetailPageModule {}
