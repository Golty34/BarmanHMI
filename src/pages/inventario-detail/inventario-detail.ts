import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { InventarioHomePage } from '../inventario-home/inventario-home';

/**
 * Generated class for the InventarioDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventario-detail',
  templateUrl: 'inventario-detail.html',
})
export class InventarioDetailPage {
  
  //public note = {id: null, title: null, description: null };
  public note = {id: null, Cantidad: null };


  id = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController, 
    public notesService: NotesService) 
    {
      //this.id = navParams.get('id');
      //if(this.id != 0){
        //this.note = noteService.getNote(this.id);

      //}
  }


  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    if(this.id != 0){
      this.notesService.getNote(this.id).on("value", noteSnapshot => {
          this.note = noteSnapshot.val();
        });
      
    }
  }

  addNote(){
    if(this.id != 0){
      this.notesService.editNote(this.note);
      alert('Nota Editada');
      
    }else{
      //this.note.id = Date.now();
      
      this.notesService.createNote(this.note);
      alert('Nota Creada');
      
    }
    this.navCtrl.pop();
  }

  

  deleteNote(){
    

    this.notesService.deleteNote(this.note);
    alert('Nota Eliminada');
    this.navCtrl.pop();
    
  
  }

  
}
