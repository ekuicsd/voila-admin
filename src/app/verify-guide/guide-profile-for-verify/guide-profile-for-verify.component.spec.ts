import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideProfileForVerifyComponent } from './guide-profile-for-verify.component';

describe('GuideProfileForVerifyComponent', () => {
  let component: GuideProfileForVerifyComponent;
  let fixture: ComponentFixture<GuideProfileForVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideProfileForVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideProfileForVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
