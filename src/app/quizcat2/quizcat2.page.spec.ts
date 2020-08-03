import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quizcat2Page } from './quizcat2.page';

describe('Quizcat2Page', () => {
  let component: Quizcat2Page;
  let fixture: ComponentFixture<Quizcat2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quizcat2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quizcat2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
