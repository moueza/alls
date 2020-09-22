import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KizombaNantesDanseMouezaPeterComponent } from './kizomba-nantes-danse-moueza-peter.component';

describe('KizombaNantesDanseMouezaPeterComponent', () => {
  let component: KizombaNantesDanseMouezaPeterComponent;
  let fixture: ComponentFixture<KizombaNantesDanseMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KizombaNantesDanseMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KizombaNantesDanseMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
