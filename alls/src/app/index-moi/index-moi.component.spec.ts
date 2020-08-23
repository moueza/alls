import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMoiComponent } from './index-moi.component';

describe('IndexMoiComponent', () => {
  let component: IndexMoiComponent;
  let fixture: ComponentFixture<IndexMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
