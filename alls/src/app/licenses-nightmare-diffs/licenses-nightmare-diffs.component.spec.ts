import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesNightmareDiffsComponent } from './licenses-nightmare-diffs.component';

describe('LicensesNightmareDiffsComponent', () => {
  let component: LicensesNightmareDiffsComponent;
  let fixture: ComponentFixture<LicensesNightmareDiffsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensesNightmareDiffsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesNightmareDiffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
