import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealProfileComponent } from './deal-profile.component';

describe('DealProfileComponent', () => {
  let component: DealProfileComponent;
  let fixture: ComponentFixture<DealProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
