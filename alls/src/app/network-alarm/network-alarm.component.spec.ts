import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkAlarmComponent } from './network-alarm.component';

describe('NetworkAlarmComponent', () => {
  let component: NetworkAlarmComponent;
  let fixture: ComponentFixture<NetworkAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
