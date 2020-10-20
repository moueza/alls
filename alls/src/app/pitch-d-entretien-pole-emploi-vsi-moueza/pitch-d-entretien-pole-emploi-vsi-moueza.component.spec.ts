import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchDEntretienPoleEmploiVSIMouezaComponent } from './pitch-d-entretien-pole-emploi-vsi-moueza.component';

describe('PitchDEntretienPoleEmploiVSIMouezaComponent', () => {
  let component: PitchDEntretienPoleEmploiVSIMouezaComponent;
  let fixture: ComponentFixture<PitchDEntretienPoleEmploiVSIMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchDEntretienPoleEmploiVSIMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchDEntretienPoleEmploiVSIMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
