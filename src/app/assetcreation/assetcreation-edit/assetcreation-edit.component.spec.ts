import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationEditComponent } from './assetcreation-edit.component';

describe('AssetcreationEditComponent', () => {
  let component: AssetcreationEditComponent;
  let fixture: ComponentFixture<AssetcreationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcreationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcreationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
