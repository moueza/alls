import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent } from './arbre-aux-herons-jardin-extraordinaire-jules-verne-carriere-misery-nantes-moueza-peter.component';

describe('ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent', () => {
  let component: ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent;
  let fixture: ComponentFixture<ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbreAuxHeronsJardinExtraordinaireJulesVerneCarriereMiseryNantesMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
