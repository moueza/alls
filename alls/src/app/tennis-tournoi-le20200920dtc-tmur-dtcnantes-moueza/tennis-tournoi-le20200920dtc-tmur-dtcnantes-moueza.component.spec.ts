import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent } from './tennis-tournoi-le20200920dtc-tmur-dtcnantes-moueza.component';

describe('TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent', () => {
  let component: TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent;
  let fixture: ComponentFixture<TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisTournoiLe20200920dtcTmurDTCnantesMOUEZAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
