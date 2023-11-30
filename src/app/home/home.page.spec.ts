import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Storage, IonicStorageModule } from '@ionic/storage-angular';
import { AuthService } from '../auth.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],  // Asegúrate de importar IonicStorageModule
      providers: [AuthService, Storage],        // Asegúrate de proporcionar Storage
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});