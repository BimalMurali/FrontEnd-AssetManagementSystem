import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevendorsComponent } from './homevendors.component';

describe('HomevendorsComponent', () => {
  let component: HomevendorsComponent;
  let fixture: ComponentFixture<HomevendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
