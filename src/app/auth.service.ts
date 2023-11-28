import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { 

    this.ngOnInit();
  }

  async ngOnInit(){
    await this.storage.create();
  }

  async login(email: string, password: string,): Promise<boolean>{
    const usuario = await this.storage.get('user');

    if(usuario){
      console.log(usuario.email, usuario.password);
    } else{
      console.log('no se encontraron datos del usuario');
    }

    if (email === usuario.email && password == usuario.password){
      await this.storage.set('isLoggedIn', true);
      return true
    }else{
      
      return false

    }
  }

  async register(email: string, password: string): Promise<boolean>{
    await this.storage.set('user',{email,password});
    return true

  }

  async isLoggedIn(): Promise<boolean>{
    return !!(await this.storage.get('isLoggedIn'));
  }

  async logOut(): Promise<void>{
    await this.storage.remove('isLoggedIn');
  }
}
