import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTourProfileComponent } from './personal-tour-profile.component';

describe('PersonalTourProfileComponent', () => {
  let component: PersonalTourProfileComponent;
  let fixture: ComponentFixture<PersonalTourProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTourProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTourProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
