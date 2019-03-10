import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/database';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InventarioProvider {

  public cantidadVodka: firebase.database.Reference;
  public cantidadVermouth: firebase.database.Reference;
  public cantidadTequila: firebase.database.Reference;
  public cantidadRon: firebase.database.Reference;
  public cantidadGinger: firebase.database.Reference;
  public cantidadCuracao: firebase.database.Reference;

  constructor(public http: HttpClient) {
    this.cantidadVodka = firebase.database().ref(`/Inventario/Ingredientes/Vodka`);
  }

  getInventarioVodka(): firebase.database.Reference {
    return this.cantidadVodka;
  }

  getInventarioVermouth(): firebase.database.Reference {
    return this.cantidadVermouth;
  }
  
  getInventarioTequila(): firebase.database.Reference {
    return this.cantidadTequila;
  }
  getInventarioRon(): firebase.database.Reference {
    return this.cantidadRon;
  }
  getInventarioGin(): firebase.database.Reference {
    return this.cantidadGinger;
  }
  getInventarioCuracao(): firebase.database.Reference {
    return this.cantidadCuracao;
  }

}
