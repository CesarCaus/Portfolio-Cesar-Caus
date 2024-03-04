import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNeon03Component } from './button-neon-03.component';

describe('ButtonNeon03Component', () => {
  let component: ButtonNeon03Component;
  let fixture: ComponentFixture<ButtonNeon03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNeon03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNeon03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
