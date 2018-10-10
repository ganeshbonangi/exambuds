import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoringToolComponent } from './authoring-tool.component';

describe('AuthoringToolComponent', () => {
  let component: AuthoringToolComponent;
  let fixture: ComponentFixture<AuthoringToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoringToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
