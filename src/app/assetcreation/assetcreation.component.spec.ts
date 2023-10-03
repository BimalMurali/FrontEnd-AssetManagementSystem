import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationComponent } from './assetcreation.component';

describe('AssetcreationComponent', () => {
  let component: AssetcreationComponent;
  let fixture: ComponentFixture<AssetcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
