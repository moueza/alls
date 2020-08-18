import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionnatTennis2020a2021tmurComponent } from './championnat-tennis2020a2021tmur.component';

describe('ChampionnatTennis2020a2021tmurComponent', () => {
  let component: ChampionnatTennis2020a2021tmurComponent;
  let fixture: ComponentFixture<ChampionnatTennis2020a2021tmurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionnatTennis2020a2021tmurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionnatTennis2020a2021tmurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
