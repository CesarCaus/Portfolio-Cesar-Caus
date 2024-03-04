import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubmit02Component } from './button-submit-02.component';

describe('ButtonSubmit02Component', () => {
  let component: ButtonSubmit02Component;
  let fixture: ComponentFixture<ButtonSubmit02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSubmit02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSubmit02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
