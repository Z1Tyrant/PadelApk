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

  async login() {
    const isEmailValid = this.validateEmail(this.email);
    const isPasswordValid = this.validatePassword(this.password);

    if (isEmailValid && isPasswordValid) {
      const loggedIn = await this.authservice.login(this.email, this.password);
      if (loggedIn) {
        this.nacCtrl.navigateRoot('home');
      } else {
        this.presentAlert('Credenciales incorrectas', 'Por favor, verifica tu correo y contraseña.');
      }
    } else {
      this.presentAlert('Formulario no válido', 'Por favor, completa correctamente todos los campos.');
    }
  }

  async register() {
    const isEmailValid = this.validateEmail(this.email);
    const isPasswordValid = this.validatePassword(this.password);

    if (isEmailValid && isPasswordValid) {
      const registered = await this.authservice.register(this.email, this.password);
      if (registered) {
        this.presentAlert('Usuario registrado', 'Ya puede iniciar sesion con su usuario');
      } else {
        console.log('Error al registrar');
      }
    } else {
      this.presentAlert('Formulario no válido', 'Por favor, completa correctamente todos los campos.');
    }
  }

  validateEmail(email: string): boolean {
    // Puedes implementar tu propia lógica de validación de correo electrónico aquí
    // Por ejemplo, puedes utilizar expresiones regulares o una lógica más específica según tus requisitos.
    // En este ejemplo, simplemente verifica si el correo contiene un '@'.
    return email.includes('@');
  }

  validatePassword(password: string): boolean {
    // Validación de contraseña: al menos una mayúscula, dos números y longitud mínima de 8 caracteres
    const passwordRegex = /^(?=.*[A-Z])(?=(?:.*\d){2}).{8,}$/;
    return passwordRegex.test(password);
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