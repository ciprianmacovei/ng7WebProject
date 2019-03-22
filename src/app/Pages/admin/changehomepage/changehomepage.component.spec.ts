import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangehomepageComponent } from './changehomepage.component';

describe('ChangehomepageComponent', () => {
  let component: ChangehomepageComponent;
  let fixture: ComponentFixture<ChangehomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangehomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
