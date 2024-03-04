import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmit03Component } from './button-submit-03.component';

describe('ButtonSubmit03Component', () => {
  let component: ButtonSubmit03Component;
  let fixture: ComponentFixture<ButtonSubmit03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSubmit03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSubmit03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
