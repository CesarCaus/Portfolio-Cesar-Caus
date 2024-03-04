import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonNeon01Component } from '../../elements/buttons/button-neon-01/button-neon-01.component';
import { ButtonNeon02Component } from '../../elements/buttons/button-neon-02/button-neon-02.component';
import { ButtonNeon03Component } from '../../elements/buttons/button-neon-03/button-neon-03.component';
import { ButtonNeon04Component } from '../../elements/buttons/button-neon-04/button-neon-04.component';
import { LiquidButtonComponent } from '../../elements/buttons/liquid-button/liquid-button.component';
import { ButtonSubmit01Component } from '../../elements/buttons/button-submit-01/button-submit-01.component';
import { ButtonSubmit02Component } from '../../elements/buttons/button-submit-02/button-submit-02.component';
import { ButtonSubmit03Component } from '../../elements/buttons/button-submit-03/button-submit-03.component';

@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [CommonModule,
  ButtonNeon01Component,
  ButtonNeon02Component,
  ButtonNeon03Component,
  ButtonNeon04Component,
  LiquidButtonComponent,
  ButtonSubmit01Component,
  ButtonSubmit02Component,
  ButtonSubmit03Component],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {

  categoryElement: number = 1;

  buttonElements() {
    this.categoryElement = 1;
  }

  toggleElements() {
    this.categoryElement = 2;
  }

  textElements() {
    this.categoryElement = 3;
  }

  checkboxElements() {
    this.categoryElement = 4;
  }

  radioElements() {
    this.categoryElement = 5;
  }
}
