import { Component, Inject, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/containers/home/home.component';
import { AboutComponent } from './components/containers/about/about.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ElementsComponent } from './components/containers/elements/elements.component';
import { InterfacesComponent } from './components/containers/interfaces/interfaces.component';
import { ContactComponent } from './components/containers/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  HomeComponent,
  AboutComponent,
  ElementsComponent,
  InterfacesComponent,
  ContactComponent,
  CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

 constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToComponent(anchor: string): void {
    const element = document.querySelector(`#${anchor}`);

    element?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start', 
      inline: 'nearest' 
    })
  }

  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.isMobile = window.innerWidth < 700;
  }

  /*ngOnInit(): void {
    this.checkScreenWidth();
  }*/

}
