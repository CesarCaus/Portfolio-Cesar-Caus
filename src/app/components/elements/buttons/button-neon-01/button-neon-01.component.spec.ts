import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNeon01Component } from './button-neon-01.component';

describe('ButtonNeon01Component', () => {
  let component: ButtonNeon01Component;
  let fixture: ComponentFixture<ButtonNeon01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNeon01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNeon01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
