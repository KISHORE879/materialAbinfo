import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip4Component } from './chip4.component';

describe('Chip4Component', () => {
  let component: Chip4Component;
  let fixture: ComponentFixture<Chip4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chip4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chip4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
