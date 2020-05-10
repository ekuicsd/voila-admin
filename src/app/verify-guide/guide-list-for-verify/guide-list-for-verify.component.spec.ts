import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideListForVerifyComponent } from './guide-list-for-verify.component';

describe('GuideListForVerifyComponent', () => {
  let component: GuideListForVerifyComponent;
  let fixture: ComponentFixture<GuideListForVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideListForVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideListForVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
