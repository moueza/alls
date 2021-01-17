import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent } from './tags-entreprise-trafic-ador-et-semor-nantes-arts-graphiques-moueza-peter.component';

describe('TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent', () => {
  let component: TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent;
  let fixture: ComponentFixture<TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsEntrepriseTRAFICAdorEtSemorNantesArtsGraphiquesMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
