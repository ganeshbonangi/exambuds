import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSetupComponent } from './exam-setup.component';

describe('ExamSetupComponent', () => {
  let component: ExamSetupComponent;
  let fixture: ComponentFixture<ExamSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
