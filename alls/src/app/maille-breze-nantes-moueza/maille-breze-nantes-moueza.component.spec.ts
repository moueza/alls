import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailleBrezeNantesMouezaComponent } from './maille-breze-nantes-moueza.component';

describe('MailleBrezeNantesMouezaComponent', () => {
  let component: MailleBrezeNantesMouezaComponent;
  let fixture: ComponentFixture<MailleBrezeNantesMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailleBrezeNantesMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailleBrezeNantesMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
