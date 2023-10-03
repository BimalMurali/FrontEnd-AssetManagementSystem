import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetdefinitionComponent } from './assetdefinition.component';

describe('AssetdefinitionComponent', () => {
  let component: AssetdefinitionComponent;
  let fixture: ComponentFixture<AssetdefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetdefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetdefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
