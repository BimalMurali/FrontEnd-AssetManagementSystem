import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationDeleteComponent } from './assetcreation-delete.component';

describe('AssetcreationDeleteComponent', () => {
  let component: AssetcreationDeleteComponent;
  let fixture: ComponentFixture<AssetcreationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcreationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcreationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
