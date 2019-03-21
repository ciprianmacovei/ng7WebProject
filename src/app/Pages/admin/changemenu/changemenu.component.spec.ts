import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemenuComponent } from './changemenu.component';

describe('ChangemenuComponent', () => {
  let component: ChangemenuComponent;
  let fixture: ComponentFixture<ChangemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
