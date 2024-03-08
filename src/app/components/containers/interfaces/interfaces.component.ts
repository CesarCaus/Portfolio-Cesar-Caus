import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassmorphismLogin01Component } from '../../interfaces/glassmorphism-login-01/glassmorphism-login-01.component';


@Component({
  selector: 'app-interfaces',
  standalone: true,
  imports: [CommonModule,
  GlassmorphismLogin01Component
  ],
  templateUrl: './interfaces.component.html',
  styleUrl: './interfaces.component.scss'
})
export class InterfacesComponent {

  valueMenu: boolean = false;

  openMenu() {
    this.valueMenu = !this.valueMenu;
  }


  interfaceValue: number = 1;


  contentInterfaceValue: number = 1;

  attPageInterfaces(n: number): void {
    this.interfaceValue = n;
  }

  attContentInterface(n: number): void {
    this.contentInterfaceValue = n;
  }
}
