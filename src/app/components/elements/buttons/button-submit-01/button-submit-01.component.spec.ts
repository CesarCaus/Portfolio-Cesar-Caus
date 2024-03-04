import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmit01Component } from './button-submit-01.component';

describe('ButtonSubmit01Component', () => {
  let component: ButtonSubmit01Component;
  let fixture: ComponentFixture<ButtonSubmit01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSubmit01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSubmit01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
