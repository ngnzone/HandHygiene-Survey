import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizcat6Page } from './quizcat6.page';

describe('Quizcat6Page', () => {
  let component: Quizcat6Page;
  let fixture: ComponentFixture<Quizcat6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizcat6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizcat6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
