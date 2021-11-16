import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormRFComponent } from './add-form-rf.component';

describe('AddFormRFComponent', () => {
  let component: AddFormRFComponent;
  let fixture: ComponentFixture<AddFormRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormRFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
