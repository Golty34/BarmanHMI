import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { NotesService } from '../../services/notes.service';



/**
 * Generated class for the EventBebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-bebidas',
  templateUrl: 'event-bebidas.html',
})
export class EventBebidasPage {

  public cantidadVodka: number;
  public cantidadRon: number;
  public cantidadTequila: number;
  public cantidadVermouth: number;
  public cantidadGinger: number;
  public cantidadCuracao: number;

  public estado: number = 0;
  public estado0: number = 1;
  public estado1: number =1;
  public estado2: number = 0;
  public estadoOrden: number =0;
  public contadorOrden: number = 0;

  public nombreUsuario: string;
  public cantidadOrden: any;
  public id: string;

  public tapMartini: number = 0;
  public tapLaguna: number = 0;
  public tapHastaNunca: number = 0;
  public tapCaipirina: number = 0;

  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public notesService: NotesService,
    private bluetoothSerial: BluetoothSerial
  ) {
    this.bluetoothSerial.enable();   

  }

  myDate: String = new Date().toISOString();

  continuar(){

    if(this.cantidadOrden > 4){

      this.showToast("Escoge hasta 4 Cocteles");
      return;
    }

    /*this.notesService.escribirOrden().push({
      nombre: this.nombreUsuario,
      numOrden: this.cantidadOrden,
      
    });*/
    this.estado0 = 0;
    this.estado = 1;
    

  }
  

  goToMartini(): void {
    
    this.tapMartini++;
    this.functionContador();
    this.showToast("Agregando: " + this.tapMartini +" Martini A la orden");
  }


  goToLagunaAzul(): void {
    
    this.tapLaguna++;
    this.functionContador();
    this.showToast("Agregando: " + this.tapLaguna +" Laguna Azul A la orden");
    
  }
  goToHastaNunca(): void {
  
    this.tapHastaNunca++;    
    this.functionContador();
    this.showToast("Agregando: " + this.tapHastaNunca +" Hasta Nunca A la orden");

  }
  goToCaipirina(): void {
    
    
    this.tapCaipirina++;
    this.functionContador();
    this.showToast("Agregando: " + this.tapCaipirina + " Caipirina A la orden");
    
  }

  functionContador(){

    this.contadorOrden = this.tapMartini + this.tapLaguna + this.tapHastaNunca + this.tapCaipirina;

    if(this.contadorOrden == this.cantidadOrden){
      this.estado = 0;
      this.estado1 =0;
      this.estadoOrden = 1;
      this.estado2 = 1;
    }
  }

  public orden = {id: null, nombre: null, martini: null , lagunaAzul: null, hastaNunca: null , caipirina: null };

  //ENVIO DE LOS DATOS MEDIO BLUETOOTH
  public datoSerial: any;

  //METODOS PARA CREAR ORDEN SERIAL
  public countVodka: any = 0;
  public countVermouth: any = 0;
  public countRon: any = 0;
  public countTequila: any = 0;
  public countcuracao: any = 0;
  public countGinger: any = 0;

  public tiempoVodka: number = 0;
  public tiempoVermouth: number = 0;
  public tiempoRon: number = 0;
  public tiempoTequila: number = 0;
  public tiempoCuracao: number = 0;
  public tiempoGinger: number = 0;

  pedirOrden(){

    //-------------------------------------------------------------------------//
    //ACTUALIZAR INGREDIENTES DEL MARTINI
    if(this.tapMartini != 0){

      for (let i = 0; i < this.tapMartini; i++) {
        
        this.notesService.contador().child("Vodka").once("value", Snapshot =>{        //Vodka
          this.cantidadVodka = Snapshot.val().cantidad - 1;
        });

        this.notesService.contador().child("Vermouth").once("value", Snapshot =>{     //Vermouth
          this.cantidadVermouth = Snapshot.val().cantidad - 1;
        })

        this.notesService.actualizarVodka(this.cantidadVodka);          //Vodka
        this.notesService.actualizarVermouth(this.cantidadVermouth);    //Vermouth

        //
        this.countVodka += 1;
        this.countVermouth += 1;   
      }
    }
    
    //-------------------------------------------------------------------------//
    //ACTUALIZAR INGREDIENTES DE LAGUNA AZUL
    if (this.tapLaguna != 0) {

      for (let i = 0; i < this.tapLaguna; i++) {

        this.notesService.contador().child("Vodka").once("value", Snapshot =>{   //Vodka
          this.cantidadVodka = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ron").once("value", Snapshot =>{    //Ron
          this.cantidadRon = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ginger").once("value", Snapshot =>{    //Ginger
          this.cantidadGinger = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Curacao Azul").once("value", Snapshot =>{    //Curacao
          this.cantidadCuracao = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.actualizarVodka(this.cantidadVodka);        //Vodka
        this.notesService.actualizarRon(this.cantidadRon);            //Ron
        this.notesService.actualizarGinger(this.cantidadGinger);      //Ginger
        this.notesService.actualizarCuracao(this.cantidadCuracao);    //Curacao
       
        //
        this.countVodka += 1;
        this.countRon += 1;
        this.countGinger += 1;
        this.countcuracao += 1;
        
      }
    }
        
      this.orden.lagunaAzul = this.tapLaguna;
    //-------------------------------------------------------------------------//
    //ACTUALIZAR INGREDIENTES DE HASTA NUNCA
    if (this.tapHastaNunca != 0) {
      

      for (let i = 0; i < this.tapHastaNunca; i++) {

        this.notesService.contador().child("Vodka").once("value", Snapshot =>{   //Vodka
          this.cantidadVodka = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ginger").once("value", Snapshot =>{    //Ginger
          this.cantidadGinger = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ron").once("value", Snapshot =>{    //Ron
          this.cantidadRon = Snapshot.val().cantidad - 1;
        });
    
    
        this.notesService.contador().child("Tequila").once("value", Snapshot =>{    //Tequila
          this.cantidadTequila = Snapshot.val().cantidad - 1;
        });
        
        this.notesService.contador().child("Curacao Azul").once("value", Snapshot =>{    //Curacao
          this.cantidadCuracao = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.actualizarVodka(this.cantidadVodka);      //Vodka
        this.notesService.actualizarGinger(this.cantidadGinger);    //Ginger
        this.notesService.actualizarRon(this.cantidadRon);          //Ron
        this.notesService.actualizarTequila(this.cantidadTequila);  //Tequila
        this.notesService.actualizarCuracao(this.cantidadCuracao);  //Curacao

        //
        this.countVodka += 1;
        this.countGinger += 1;
        this.countRon += 1;;
        this.countTequila += 1;;
        this.countcuracao += 1;;
       
      }
    }
      this.orden.hastaNunca = this.tapHastaNunca;
    //-------------------------------------------------------------------------//
    //ACTUALIZAR INGREDIENTES DE CAIPIRINA
    if (this.tapCaipirina != 0) {

      
      for (let i = 0; i < this.tapCaipirina; i++) {

        this.notesService.contador().child("Vodka").once("value", Snapshot =>{   //Vodka
          this.cantidadVodka = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ron").once("value", Snapshot =>{    //Ron
          this.cantidadRon = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.contador().child("Ginger").once("value", Snapshot =>{    //Ginger
          this.cantidadGinger = Snapshot.val().cantidad - 1;
        });
    
        this.notesService.actualizarVodka(this.cantidadVodka);    //Vodka
        this.notesService.actualizarRon(this.cantidadRon);        //Ron
        this.notesService.actualizarGinger(this.cantidadGinger);  //Ginger
        
        //
        this.countVodka += 1;
        this.countRon += 1;
        this.countGinger += 1;
      }
    }

      this.orden.caipirina = this.tapCaipirina;
    //-------------------------------------------------------------------------//

    if (this.countVodka != 0 ) {
      this.tiempoVodka = 9; //
    }else{
      this.tiempoVodka = 0;
    }
    if (this.countRon != 0 ) {
      this.tiempoRon = 9; //
    }else{
      this.tiempoRon = 0;
    }
    if (this.countVermouth != 0 ) {
      this.tiempoVermouth = 9; //
    }else{
      this.tiempoVermouth = 0;
    }
    if (this.countTequila != 0 ) {
      this.tiempoTequila = 9; //
    }else{
      this.tiempoTequila = 0;
    }
    if (this.countcuracao != 0 ) {
      this.tiempoCuracao = 9; //
    }else{
      this.tiempoCuracao = 0;
    }
    if (this.countGinger != 0 ) {
      this.tiempoGinger = 9; //
    }else{
      this.tiempoGinger = 0;
    }

      this.orden.id = Date.now();
      this.orden.nombre = this.nombreUsuario;

      this.datoSerial = "05,0" + this.tiempoVodka + ",0" + this.countVodka+
                        ",10,0" + this.tiempoVermouth + ",0" + this.countVermouth+
                        ",10,0" + this.tiempoRon + ",0" + this.countRon+
                        ",10,0" + this.tiempoTequila + ",0" + this.countTequila+
                        ",10,0" + this.tiempoCuracao + ",0" + this.countcuracao+
                        ",05,0" + this.tiempoGinger + ",0" + this.countGinger+ 
                        ",15,50,0" + this.cantidadOrden + ",";

      console.log("DatoSerial = "+this.datoSerial);
      console.log("datoVodka =" +this.countVodka);
      /*
      this.bluetoothSerial.write('Preparando El siguiente Pedido de: ' + this.orden.nombre).then();
      this.bluetoothSerial.write('\n').then();

      if (this.tapMartini > 0) {
        this.bluetoothSerial.write("Martini: "+ this.tapMartini );
        this.bluetoothSerial.write('\n').then();
      } else {
        this.orden.martini = null;
      }

      if (this.tapLaguna > 0) {
        this.bluetoothSerial.write("Laguna Azul: "+ this.tapLaguna );
        this.bluetoothSerial.write('\n').then();
      } else {
        this.orden.lagunaAzul = null;
      }

      if (this.tapHastaNunca  > 0) {
        this.bluetoothSerial.write("Hasta Nunca: "+ this.tapHastaNunca  );
        this.bluetoothSerial.write('\n').then();
      } else {
        this.orden.hastaNunca = null;
      }

      if (this.tapCaipirina > 0) {
        this.bluetoothSerial.write("Caipirina: "+ this.tapCaipirina );
        this.bluetoothSerial.write('\n').then();
      } else {
        this.orden.caipirina = null;
      }

    */

   this.bluetoothSerial.write(this.datoSerial).then();

    this.notesService.escribirOrden().child(this.orden.id).set(this.orden);

   

    this.navCtrl.pop();

  }

 
  
  

  functionReiniciar(){
    this.estado = 0;
    this.estado0 = 1;
    this.estado1 =1;
    this.estado2 = 0;
    this.estadoOrden = 0;

    this.tapMartini = 0;
    this.tapLaguna = 0;
    this.tapHastaNunca = 0;
    this.tapCaipirina = 0;

    this.contadorOrden = 0;
    this.cantidadOrden = "";
    
  }

  showToast(msj) {
    const toast = this.toastCtrl.create({
      message: msj,
      duration: 2000
    });
    toast.present();

  }

}
