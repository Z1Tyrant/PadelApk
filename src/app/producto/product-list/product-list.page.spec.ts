import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductListPage } from './product-list.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { ClProducto } from '../modelo/Clproducto';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;
  let productService: ProductServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [ProductServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductServiceService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products', () => {
    const products: ClProducto[] = [
      // Mock data as needed
    ];

    spyOn(productService, 'getProducts').and.returnValue(of(products));

    component.getProducts();

    // Add your expectations here, for example:
    expect(component.productos).toEqual(products);
  });
});