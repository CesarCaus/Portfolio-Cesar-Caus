import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNeon02Component } from './button-neon-02.component';

describe('ButtonNeon02Component', () => {
  let component: ButtonNeon02Component;
  let fixture: ComponentFixture<ButtonNeon02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNeon02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNeon02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
