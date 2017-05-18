/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExctractComponent } from './exctract.component';

describe('ExctractComponent', () => {
  let component: ExctractComponent;
  let fixture: ComponentFixture<ExctractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExctractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExctractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
