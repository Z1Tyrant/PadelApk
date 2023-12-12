import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundPage } from './not-found.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Asegúrate de importar BrowserAnimationsModule

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [BrowserAnimationsModule], // Importa BrowserAnimationsModule aquí
    }).compileComponents(); // Asegúrate de llamar a compileComponents para que Angular compile los componentes de forma asíncrona
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
