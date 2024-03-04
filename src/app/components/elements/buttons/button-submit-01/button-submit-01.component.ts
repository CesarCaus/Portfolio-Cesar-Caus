import { Component } from '@angular/core';

@Component({
  selector: 'button-submit-01',
  standalone: true,
  imports: [],
  templateUrl: './button-submit-01.component.html',
  styleUrl: './button-submit-01.component.scss'
})
export class ButtonSubmit01Component {

  disabledButton: boolean = false;

  addClassClick() {

    this.disabledButton = true;
    let rocket = document.getElementsByClassName('icon-rocket')[0];
    let submitted = document.getElementsByClassName('text-btn-click')[0];

      rocket.classList.add('icon-rocket-animation');
      submitted.classList.add('text-btn-click-animation')
      

      setTimeout(() => {
        this.disabledButton = false;
        rocket.classList.remove('icon-rocket-animation');
        submitted.classList.remove('text-btn-click-animation');
      }, 3000);

  }

 

}
