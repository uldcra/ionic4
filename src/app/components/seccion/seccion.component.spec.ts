import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComponent } from './seccion.component';

describe('SeccionComponent', () => {
  let component: SeccionComponent;
  let fixture: ComponentFixture<SeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
