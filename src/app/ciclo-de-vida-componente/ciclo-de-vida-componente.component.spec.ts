import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaComponenteComponent } from './ciclo-de-vida-componente.component';

describe('CicloDeVidaComponenteComponent', () => {
  let component: CicloDeVidaComponenteComponent;
  let fixture: ComponentFixture<CicloDeVidaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloDeVidaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloDeVidaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
