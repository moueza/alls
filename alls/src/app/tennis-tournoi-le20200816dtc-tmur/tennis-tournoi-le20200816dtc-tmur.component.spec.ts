import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisTournoiLe20200816dtcTmurComponent } from './tennis-tournoi-le20200816dtc-tmur.component';

describe('TennisTournoiLe20200816dtcTmurComponent', () => {
  let component: TennisTournoiLe20200816dtcTmurComponent;
  let fixture: ComponentFixture<TennisTournoiLe20200816dtcTmurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisTournoiLe20200816dtcTmurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisTournoiLe20200816dtcTmurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
