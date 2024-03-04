import { Component } from '@angular/core';

@Component({
  selector: 'button-submit-02',
  standalone: true,
  imports: [],
  templateUrl: './button-submit-02.component.html',
  styleUrl: './button-submit-02.component.scss'
})
export class ButtonSubmit02Component {
  disabledButton: boolean = false;
  buttonClicked: boolean = false;

  addClassClick() {
    this.disabledButton = true;
    this.buttonClicked = true;
    setTimeout(() => {
      this.disabledButton = false;
      this.buttonClicked = false;
    }, 5000);
  }

}