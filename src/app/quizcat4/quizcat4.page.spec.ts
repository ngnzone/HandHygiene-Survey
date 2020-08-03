import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizcat4Page } from './quizcat4.page';

describe('Quizcat4Page', () => {
  let component: Quizcat4Page;
  let fixture: ComponentFixture<Quizcat4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizcat4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizcat4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
