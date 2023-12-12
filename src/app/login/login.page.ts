import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private authservice: AuthService,
    private nacCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login(){
    const loggedIn = await this.authservice.login(this.email, this.password);
    if(loggedIn){
      this.nacCtrl.navigateRoot('home')

    }else{
      this.presentAlert('Credenciales incorrectas', 'Por favor, verifica tu correo y contraseña.');

    }
  }

  async register(){
    const registered = await this.authservice.register(this.email, this.password);
    if(registered){
      this.presentAlert('Usuario registrado', 'Ya puede iniciar sesion con su usuario.');

    } else{
      console.log('error al registrar');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
