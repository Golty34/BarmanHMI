import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { InventarioDetailPage } from '../inventario-detail/inventario-detail';

/**
 * Generated class for the InventarioHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventario-home',
  templateUrl: 'inventario-home.html',
})
export class InventarioHomePage {

  public notes: Array<any>;

  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public notesService: NotesService) {
   //this.notes = notesService.getNotes();
  }

  ionViewDidLoad() {
    this.notesService.getNotes().on("value", eventListSnapshot => {
      this.notes = [];
      eventListSnapshot.forEach(snap => {
        this.notes.push({
          id: snap.val().id,
          //title: snap.val().title,
          //description: snap.val().description
          cantidad: snap.val().cantidad
        });
        return false;
      });
    });
  }


  public goToDetail(id){
    this.navCtrl.push(InventarioDetailPage, {id:id});
  }

  public createNote(){
    this.navCtrl.push(InventarioDetailPage, {id:0});
  }

}
