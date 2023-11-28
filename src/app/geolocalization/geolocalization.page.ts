import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocalization',
  templateUrl: './geolocalization.page.html',
  styleUrls: ['./geolocalization.page.scss'],
})
export class GeolocalizationPage implements OnInit {

  latitude: number = 0; // Inicializamos las variables
  longitude: number = 0;

  constructor() { }

  async ngOnInit() {

    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }


}
