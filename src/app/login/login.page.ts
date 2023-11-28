import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

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
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  async login(){
    const loggedIn = await this.authservice.login(this.email, this.password);
    if(loggedIn){
      this.nacCtrl.navigateRoot('home')

    }else{
      console.log('Las credenciales no son correctas')
    }
  }

  async register(){
    const registered = await this.authservice.register(this.email, this.password);
    if(registered){
      console.log('usuario registrado correctamente', this.email);

    } else{
      console.log('error al registrar');
    }
  }

}
