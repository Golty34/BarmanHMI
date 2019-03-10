import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  Alert,
  AlertController 
} from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";




@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  public resetPasswordForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder:FormBuilder
  ) {
    this.resetPasswordForm = formBuilder.group({
      email: [
        "",Validators.compose([Validators.required, EmailValidator.isValid])
      ]
    });
  }

  resetPassword():void{
    if(!this.resetPasswordForm.valid){
      console.log(`form is not valid yet, current value: ${this.resetPasswordForm.value}`
      );      
    }else{
      const email: string = this.resetPasswordForm.value.email;
      this.authProvider.resetPassword(email).then(
        user =>{
          const alert: Alert = this.alertCtrl.create({
            message: "Hemos enviado un link para el cambio de contraseña",
            buttons:[
              {
                text: "Ok",
                role: " cancel",
                handler: ()=> {
                  this.navCtrl.pop();
                }
              }
            ]
          });
          alert.present();
        },
        error => {
          const errorAlert = this.alertCtrl.create({
            message : error.message,
            buttons: [{ text: "Ok", role: "Cancel"}]
          });
          errorAlert.present();
        }
      );
    }
  }

}
