import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeStarPdfPoleEmploiVSIMouezaPeterComponent } from './methode-star-pdf-pole-emploi-vsi-moueza-peter.component';

describe('MethodeStarPdfPoleEmploiVSIMouezaPeterComponent', () => {
  let component: MethodeStarPdfPoleEmploiVSIMouezaPeterComponent;
  let fixture: ComponentFixture<MethodeStarPdfPoleEmploiVSIMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodeStarPdfPoleEmploiVSIMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodeStarPdfPoleEmploiVSIMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
