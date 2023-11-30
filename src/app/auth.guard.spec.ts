import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],  // Asegúrate de importar IonicStorageModule
      providers: [AuthGuard, AuthService, Storage], // Asegúrate de proporcionar Storage
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
