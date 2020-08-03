import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizcat5Page } from './quizcat5.page';

describe('Quizcat5Page', () => {
  let component: Quizcat5Page;
  let fixture: ComponentFixture<Quizcat5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizcat5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizcat5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
