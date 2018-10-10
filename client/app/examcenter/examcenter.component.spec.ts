import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcenterComponent } from './examcenter.component';

describe('ExamcenterComponent', () => {
  let component: ExamcenterComponent;
  let fixture: ComponentFixture<ExamcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
