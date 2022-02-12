import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlaceDeDatosBidireccionalComponent } from './enlace-de-datos-bidireccional.component';

describe('EnlaceDeDatosBidireccionalComponent', () => {
  let component: EnlaceDeDatosBidireccionalComponent;
  let fixture: ComponentFixture<EnlaceDeDatosBidireccionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlaceDeDatosBidireccionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlaceDeDatosBidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
