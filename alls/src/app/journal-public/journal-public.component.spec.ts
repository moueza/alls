import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalPublicComponent } from './journal-public.component';

describe('JournalPublicComponent', () => {
  let component: JournalPublicComponent;
  let fixture: ComponentFixture<JournalPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
