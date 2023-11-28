import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authservice: AuthService,
    private navCtrl: NavController) {}


    async logout(){
      await this.authservice.logOut();
      this.navCtrl.navigateRoot('/login');
    }

}
