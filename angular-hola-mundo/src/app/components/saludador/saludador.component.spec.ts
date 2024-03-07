import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludadorComponent } from './saludador.component';

describe('SaludadorComponent', () => {
  let component: SaludadorComponent;
  let fixture: ComponentFixture<SaludadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaludadorComponent]
    });
    fixture = TestBed.createComponent(SaludadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
