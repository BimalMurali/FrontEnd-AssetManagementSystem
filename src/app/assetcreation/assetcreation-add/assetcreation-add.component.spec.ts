import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationAddComponent } from './assetcreation-add.component';

describe('AssetcreationAddComponent', () => {
  let component: AssetcreationAddComponent;
  let fixture: ComponentFixture<AssetcreationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcreationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcreationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
