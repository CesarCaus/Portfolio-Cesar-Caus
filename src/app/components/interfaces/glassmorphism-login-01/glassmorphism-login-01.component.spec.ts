import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphismLogin01Component } from './glassmorphism-login-01.component';

describe('GlassmorphismLogin01Component', () => {
  let component: GlassmorphismLogin01Component;
  let fixture: ComponentFixture<GlassmorphismLogin01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassmorphismLogin01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlassmorphismLogin01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
