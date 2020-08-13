import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailleBrezeBateauNantesMouezaComponent } from './maille-breze-bateau-nantes-moueza.component';

describe('MailleBrezeBateauNantesMouezaComponent', () => {
  let component: MailleBrezeBateauNantesMouezaComponent;
  let fixture: ComponentFixture<MailleBrezeBateauNantesMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailleBrezeBateauNantesMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailleBrezeBateauNantesMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
