import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBattleDevMouezaPeterComponent } from './google-battle-dev-moueza-peter.component';

describe('GoogleBattleDevMouezaPeterComponent', () => {
  let component: GoogleBattleDevMouezaPeterComponent;
  let fixture: ComponentFixture<GoogleBattleDevMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBattleDevMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBattleDevMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
