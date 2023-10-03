import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassetsComponent } from './listassets.component';

describe('ListassetsComponent', () => {
  let component: ListassetsComponent;
  let fixture: ComponentFixture<ListassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
