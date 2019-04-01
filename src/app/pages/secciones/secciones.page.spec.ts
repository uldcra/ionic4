import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesPage } from './secciones.page';

describe('SeccionesPage', () => {
  let component: SeccionesPage;
  let fixture: ComponentFixture<SeccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
