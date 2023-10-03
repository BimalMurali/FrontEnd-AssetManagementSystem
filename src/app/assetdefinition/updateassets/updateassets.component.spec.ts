import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassetsComponent } from './updateassets.component';

describe('UpdateassetsComponent', () => {
  let component: UpdateassetsComponent;
  let fixture: ComponentFixture<UpdateassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
