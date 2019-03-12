import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPageComponent } from './enroll-page.component';

describe('EnrollPageComponent', () => {
  let component: EnrollPageComponent;
  let fixture: ComponentFixture<EnrollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
