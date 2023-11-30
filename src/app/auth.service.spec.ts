import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';


import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

describe('AuthService', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        { provide: Storage, useValue: {} } // Puedes proporcionar un objeto vacío o configurar más opciones según tus necesidades
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});