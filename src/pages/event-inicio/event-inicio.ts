import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/**
 * Generated class for the EventInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-inicio',
  templateUrl: 'event-inicio.html',
})
export class EventInicioPage {

  public datoReturn: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController, 
    private bluetoothSerial: BluetoothSerial) {

    this.bluetoothSerial.enable();

    
  
  }
  
  goToBebidas(): void {
    this.navCtrl.push("EventBebidasPage")
  }

  goToInventario(): void{
    this.navCtrl.push("InventarioHomePage")
  }

  recibirDatos(): void{
    
    this.bluetoothSerial.available()
      .then((number: any) => {
        this.bluetoothSerial.read()
        .then((data: any) => {
          this.datoReturn = parseFloat(data);
          this.bluetoothSerial.clear();
          this.showToast("Dato Recibido: " + this.datoReturn);
         
        });
      });
  }

  showToast(msj) {
    const toast = this.toastCtrl.create({
      message: msj,
      duration: 2000
    });
    toast.present();

  }

}
