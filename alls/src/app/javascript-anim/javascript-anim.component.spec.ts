import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAnimComponent } from './javascript-anim.component';

describe('JavascriptAnimComponent', () => {
  let component: JavascriptAnimComponent;
  let fixture: ComponentFixture<JavascriptAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
