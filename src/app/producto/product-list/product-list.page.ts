import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClProducto } from '../modelo/Clproducto';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productos: ClProducto[] = [];


  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController
  ) {}


  ngOnInit() {
    this.getProducts();
  }


  ionViewDidEnter() {
    // Este método se ejecuta cada vez que la vista entra (navegación de regreso desde otra página)
    this.getProducts();
  }


  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });


    await loading.present();


    await this.restApi.getProducts().subscribe({
      next: (res) => {
        // Filtrar los productos por código '09-G08'
        this.productos = res.filter((producto) => producto.codigo === '09-G08');
        loading.dismiss();
      },
      complete: () => {},
      error: (err) => {
        console.log("Error: " + err);
        loading.dismiss();
      },
    });
  }
}




