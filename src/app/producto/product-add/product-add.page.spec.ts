import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
