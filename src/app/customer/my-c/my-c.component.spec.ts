import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCComponent } from './my-c.component';

describe('MyCComponent', () => {
  let component: MyCComponent;
  let fixture: ComponentFixture<MyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
