import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeintureMuraleMouezaPeterImageComponent } from './peinture-murale-moueza-peter-image.component';

describe('PeintureMuraleMouezaPeterImageComponent', () => {
  let component: PeintureMuraleMouezaPeterImageComponent;
  let fixture: ComponentFixture<PeintureMuraleMouezaPeterImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeintureMuraleMouezaPeterImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeintureMuraleMouezaPeterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
