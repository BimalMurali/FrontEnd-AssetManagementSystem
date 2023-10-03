import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationListComponent } from './assetcreation-list.component';

describe('AssetcreationListComponent', () => {
  let component: AssetcreationListComponent;
  let fixture: ComponentFixture<AssetcreationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcreationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcreationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
