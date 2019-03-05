import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydayPage } from './myday.page';

describe('MydayPage', () => {
  let component: MydayPage;
  let fixture: ComponentFixture<MydayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
