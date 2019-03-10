import {Injectable } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/database';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class NotesService{

    public dataBase: firebase.database.Reference;
    public ordenDatabase: firebase.database.Reference;

    constructor( public loadingCtrl: LoadingController
    ){
        this.dataBase = firebase.database().ref(`/inventario/ingredients/`);
        this.ordenDatabase = firebase.database().ref(`/Orden/`)
    }

    public notes = [];

    public getNotes(){
        //return this.notes;
       return this.dataBase;
    } 
      
    public getNote(id){
        /*return this.notes.filter(function (e, i){return e.id == id})[0] || {id: null, title: null, description: null};*/
        return this.dataBase.child(id);
    }

    public createNote(note){
        this.dataBase.child(note.id).set(note);
        //this.notes.push(note);
    }

    public editNote(note){
        /*for(let i = 0; i<this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i] = note;
            }
        }*/
        this.dataBase.child(note.id).set(note);
    }

    public deleteNote(note){
        this.dataBase.child(note.id).remove();
        
        /*for(let i = 0; i < this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i, 1);
            }
        } */
    }

    public contador(){
        return this.dataBase;
    }

    public actualizarVodka(cantidadVodka){
        return this.dataBase.child("/Vodka/cantidad").set(cantidadVodka);
    }

    public actualizarVermouth(cantidadVermouth){
        return this.dataBase.child("/Vermouth/cantidad").set(cantidadVermouth);
    }

    public actualizarRon(cantidadRon){
        return this.dataBase.child("/Ron/cantidad").set(cantidadRon);
    }

    public actualizarGinger(cantidadGinger){
        return this.dataBase.child("/Ginger/cantidad").set(cantidadGinger);
    }

    public actualizarCuracao(cantidadCuracao){
        return this.dataBase.child("/Curacao Azul/cantidad").set(cantidadCuracao);
    }

    public actualizarTequila(cantidadTequila){
        return this.dataBase.child("/Tequila/cantidad").set(cantidadTequila);
    }

    public escribirOrden(){
        return this.ordenDatabase;
    }

    
}