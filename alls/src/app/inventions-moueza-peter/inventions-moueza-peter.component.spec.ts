import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionsMouezaPeterComponent } from './inventions-moueza-peter.component';

describe('InventionsMouezaPeterComponent', () => {
  let component: InventionsMouezaPeterComponent;
  let fixture: ComponentFixture<InventionsMouezaPeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionsMouezaPeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionsMouezaPeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
