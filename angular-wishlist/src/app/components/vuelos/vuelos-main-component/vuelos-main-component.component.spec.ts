import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuelosMainComponentComponent } from './vuelos-main-component.component';

describe('VuelosMainComponentComponent', () => {
  let component: VuelosMainComponentComponent;
  let fixture: ComponentFixture<VuelosMainComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VuelosMainComponentComponent]
    });
    fixture = TestBed.createComponent(VuelosMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
