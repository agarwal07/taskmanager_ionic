import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderSetPage } from './reminder-set.page';

describe('ReminderSetPage', () => {
  let component: ReminderSetPage;
  let fixture: ComponentFixture<ReminderSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderSetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
