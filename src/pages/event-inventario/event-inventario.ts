import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase/app';
import 'firebase/database';
import { InventarioProvider } from '../../providers/Inventario/inventario';



/**
 * Generated class for the EventInventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-inventario',
  templateUrl: 'event-inventario.html',
})
export class EventInventarioPage {

  public ListaVodka: Array<any>;
  public ListaVermouth: Array<any>;
  public ListaTequila: Array<any>;
  public ListaRon: Array<any>;
  public ListaGin: Array<any>;
  public ListaCuracao: Array<any>;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public inventarioProvider: InventarioProvider
  ) {}

  ionViewDidLoad() {
    this.inventarioProvider.getInventarioVodka().on("value", ListaVodkaSnapshot => {
      this.ListaVodka = [];
      ListaVodkaSnapshot.forEach(snap => {
        this.ListaVodka.push({
          totalVodka: snap.val().cantidad
        });
        return false;
      });
    });
    
    this.inventarioProvider.getInventarioVermouth().on("value", ListaVermouthSnapshot => {
      this.ListaVermouth = [];
      ListaVermouthSnapshot.forEach(snap => {
        this.ListaVermouth.push({
          totalVermouth: snap.val().cantidad
        });
        return false;
      });
    });
    
    this.inventarioProvider.getInventarioTequila().on("value", ListaTequilaSnapshot => {
      this.ListaVermouth = [];
      ListaTequilaSnapshot.forEach(snap => {
        this.ListaTequila.push({
          totalTequila: snap.val().cantidad
        });
        return false;
      });
    });

    this.inventarioProvider.getInventarioRon().on("value", ListaRonSnapshot => {
      this.ListaRon = [];
      ListaRonSnapshot.forEach(snap => {
        this.ListaRon.push({
          totalRon: snap.val().cantidad
        });
        return false;
      });
    });

    this.inventarioProvider.getInventarioGin().on("value", ListaGinSnapshot => {
      this.ListaGin = [];
      ListaGinSnapshot.forEach(snap => {
        this.ListaGin.push({
          totalGin: snap.val().cantidad
        });
        return false;
      });
    });

    this.inventarioProvider.getInventarioCuracao().on("value", ListaCuracaoSnapshot => {
      this.ListaCuracao = [];
      ListaCuracaoSnapshot.forEach(snap => {
        this.ListaCuracao.push({
          totalCuracao: snap.val().cantidad
        });
        return false;
      });
    });




  }

}
