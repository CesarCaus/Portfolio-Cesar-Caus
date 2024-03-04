import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNeon04Component } from './button-neon-04.component';

describe('ButtonNeon04Component', () => {
  let component: ButtonNeon04Component;
  let fixture: ComponentFixture<ButtonNeon04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNeon04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNeon04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
