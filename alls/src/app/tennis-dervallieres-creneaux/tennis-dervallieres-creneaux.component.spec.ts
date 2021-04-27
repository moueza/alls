import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisDervallieresCreneauxComponent } from './tennis-dervallieres-creneaux.component';

describe('TennisDervallieresCreneauxComponent', () => {
  let component: TennisDervallieresCreneauxComponent;
  let fixture: ComponentFixture<TennisDervallieresCreneauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisDervallieresCreneauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisDervallieresCreneauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
