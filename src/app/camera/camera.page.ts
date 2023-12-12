import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {


  userAvatar: string = '';

  
  

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    if (photo.webPath) {
      this.userAvatar = photo.webPath;
    } else {
      console.error('La propiedad webPath de la foto es undefined.');
      // Puedes manejar este caso según tus necesidades.
    }
    
  }
  
}
