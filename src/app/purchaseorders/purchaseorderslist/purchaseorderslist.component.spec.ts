import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderslistComponent } from './purchaseorderslist.component';

describe('PurchaseorderslistComponent', () => {
  let component: PurchaseorderslistComponent;
  let fixture: ComponentFixture<PurchaseorderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
