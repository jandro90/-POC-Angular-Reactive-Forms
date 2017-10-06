import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoComponent } from './../components/form-two.component';

describe('FormTwoComponent', () => {
  let component: FormTwoComponent;
  let fixture: ComponentFixture<FormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
