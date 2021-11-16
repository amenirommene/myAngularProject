import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductRFComponent } from './add-product-rf.component';

describe('AddProductRFComponent', () => {
  let component: AddProductRFComponent;
  let fixture: ComponentFixture<AddProductRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductRFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
