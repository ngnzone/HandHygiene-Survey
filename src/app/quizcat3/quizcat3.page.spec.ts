import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizcat3Page } from './quizcat3.page';

describe('Quizcat3Page', () => {
  let component: Quizcat3Page;
  let fixture: ComponentFixture<Quizcat3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizcat3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizcat3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
