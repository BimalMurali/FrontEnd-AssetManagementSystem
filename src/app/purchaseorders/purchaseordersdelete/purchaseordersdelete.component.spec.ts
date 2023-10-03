import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseordersdeleteComponent } from './purchaseordersdelete.component';

describe('PurchaseordersdeleteComponent', () => {
  let component: PurchaseordersdeleteComponent;
  let fixture: ComponentFixture<PurchaseordersdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseordersdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseordersdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
