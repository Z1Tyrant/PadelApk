import { Component, OnInit } from '@angular/core';
import { ClProducto } from '../modelo/Clproducto';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {

  nombreprodErrorL: string ="";
  precioErrorL: string ="";
  direccionErrorL: string = "";
  //Creamos una variable del tipo FormGroup
  // ! ==> Con esto le decimos a TS, que sabemos que la variable no esta inicializada
  //          y que estamos seguro que cuando se ejecute no será null
  productForm!: FormGroup;
  // Generalmente se usa una interface, sin embargo para jugar utilizaremos  una clase
  producto: ClProducto = {
    
    idProducto: 0,
    codigo: '09-G08',
    nombreprod: '',
    precio: 0,
    cantidad: 0, // Nueva propiedad
    fechaNacimiento: '', // Nueva propiedad
    rut:'0',
    dv: '0', // Nueva propiedad
    enfermedad: '0', // Nueva propiedad
    fonocontacto: 0, // Nueva propiedad
    categoria: '0', // Nueva propiedad
    editorial: '0', // Nueva propiedad
    raza: '0', // Nueva propiedad
    edad: 0, // Nueva propiedad
    altura: 0, // Nueva propiedad
    hrini: '0', // Nueva propiedad
    hrfin: '0', // Nueva propiedad
    direccion: '', // Nueva propiedad
    fCreacion: '', // Nueva propiedad
  };

  // Injectamos FormBuilder, el cual nos permitirá realizar validaciones                         
  constructor(private formBuilder: FormBuilder,
    // Injectamos las librerías necesarias
    private loadingController: LoadingController,
    private restApi: ProductServiceService,
    private router: Router,
  ) { }

  // Antes que inicie en pantalla
  // especificamos las validaciones, 
  //    por medio de formBuilder injectado en el constructor
  ngOnInit() {
    // Especificamos que todos los campos son obligatorios
    this.productForm = this.formBuilder.group({
      "prod_name": [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required],
      
    });
  }
  // se ejecutará cuando presione el Submit
  async onFormSubmit(form: NgForm) {
    console.log("onFormSubmit del Product ADD")

    // Reset de mensajes de error
  this.nombreprodErrorL = '';
  this.precioErrorL = '';
  this.direccionErrorL = '';




  // Validación para el nombre del producto (solo letras)
  if (!/^[A-Za-z]+$/.test(this.producto.nombreprod)) {
    this.nombreprodErrorL = 'El nombre del producto debe contener solo letras.';
    return;
  }


  // Validación para el precio (solo números)
  if (!/^\d+$/.test(this.producto.precio.toString())) {
    this.precioErrorL = 'El precio del producto debe ser un número entero válido.';
    return;
  }


    // Validación para la descripcion (solo letras)
    if (!/^[A-Za-z]+$/.test(this.producto.direccion)) {
      this.direccionErrorL = 'La descripcion del producto debe contener solo letras.';
      return;
    }




    // Creamos un Loading Controller, Ojo no lo muestra
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    // Muestra el Loading Controller
    await loading.present();

    // Ejecuta el método del servicio y los suscribe
    await this.restApi.addProduct(this.producto)
      .subscribe({
        next: (res) => {
          console.log("Next AddProduct Page",res)
          loading.dismiss(); //Elimina la espera
          if (res== null){ // No viene respuesta del registro
            console.log("Next No Agrego, Ress Null ");
            return
          }
          // Si viene respuesta
          console.log("Next Agrego SIIIIII Router saltaré ;",this.router);
          this.router.navigate(['/product-list']);
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error AddProduct Página",err);
          loading.dismiss(); //Elimina la espera
        }
      });
    console.log("Observe que todo lo del suscribe sale después de este mensaje")
  }

}