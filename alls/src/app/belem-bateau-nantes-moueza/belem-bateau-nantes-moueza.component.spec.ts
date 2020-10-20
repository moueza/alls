import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelemBateauNantesMouezaComponent } from './belem-bateau-nantes-moueza.component';

describe('BelemBateauNantesMouezaComponent', () => {
  let component: BelemBateauNantesMouezaComponent;
  let fixture: ComponentFixture<BelemBateauNantesMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelemBateauNantesMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelemBateauNantesMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
