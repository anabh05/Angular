import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGestionComponent } from './pagina-gestion.component';

describe('PaginaGestionComponent', () => {
  let component: PaginaGestionComponent;
  let fixture: ComponentFixture<PaginaGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaGestionComponent]
    });
    fixture = TestBed.createComponent(PaginaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
