import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers2Component } from './customers2.component';

describe('Customers2Component', () => {
  let component: Customers2Component;
  let fixture: ComponentFixture<Customers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customers2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
