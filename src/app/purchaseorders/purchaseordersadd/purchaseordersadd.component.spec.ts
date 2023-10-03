import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseordersaddComponent } from './purchaseordersadd.component';

describe('PurchaseordersaddComponent', () => {
  let component: PurchaseordersaddComponent;
  let fixture: ComponentFixture<PurchaseordersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseordersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseordersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
