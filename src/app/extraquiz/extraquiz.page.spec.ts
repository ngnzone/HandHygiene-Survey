import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraquizPage } from './extraquiz.page';

describe('ExtraquizPage', () => {
  let component: ExtraquizPage;
  let fixture: ComponentFixture<ExtraquizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraquizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraquizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
