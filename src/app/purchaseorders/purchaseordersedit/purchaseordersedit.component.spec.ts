import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderseditComponent } from './purchaseordersedit.component';

describe('PurchaseorderseditComponent', () => {
  let component: PurchaseorderseditComponent;
  let fixture: ComponentFixture<PurchaseorderseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
