import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCompComponent } from './name-comp.component';

describe('NameCompComponent', () => {
  let component: NameCompComponent;
  let fixture: ComponentFixture<NameCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
