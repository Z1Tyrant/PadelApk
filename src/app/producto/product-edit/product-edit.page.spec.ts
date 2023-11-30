import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEditPage } from './product-edit.page';
import { ProductServiceService } from '../product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ProductEditPage', () => {
  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductEditPage],
      imports: [HttpClientModule],
      providers: [
        ProductServiceService,
        { provide: ActivatedRoute, useValue: {} }  // Proporciona ActivatedRoute con un valor dummy
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});