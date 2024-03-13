import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'glassmorphism-login-01',
  standalone: true,
  imports: [LoginComponent,
  RegisterComponent],
  templateUrl: './glassmorphism-login-01.component.html',
  styleUrl: './glassmorphism-login-01.component.scss'
})
export class GlassmorphismLogin01Component {

}
