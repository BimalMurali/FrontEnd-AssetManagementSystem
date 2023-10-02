import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevendorComponent } from './homevendor.component';

describe('HomevendorComponent', () => {
  let component: HomevendorComponent;
  let fixture: ComponentFixture<HomevendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
