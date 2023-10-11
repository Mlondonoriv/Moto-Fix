import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoServicioComponent } from './moto-servicio.component';

describe('MotoServicioComponent', () => {
  let component: MotoServicioComponent;
  let fixture: ComponentFixture<MotoServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotoServicioComponent]
    });
    fixture = TestBed.createComponent(MotoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
