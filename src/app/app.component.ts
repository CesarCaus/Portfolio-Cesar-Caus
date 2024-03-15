import { Component, Inject, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/containers/home/home.component';
import { AboutComponent } from './components/containers/about/about.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ElementsComponent } from './components/containers/elements/elements.component';
import { ContactComponent } from './components/containers/contact/contact.component';
import { ProjectsComponent } from './components/containers/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  HomeComponent,
  AboutComponent,
  ElementsComponent,
  ProjectsComponent,
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

  darkTheme:boolean = true;

  // Aplica a classe CSS correspondente ao tema atual
  @HostBinding('class') get themeClass() {
    return this.darkTheme ? 'dark-theme' : 'light-theme';
  }

  // Alterna entre os temas
  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem('theme', JSON.stringify(this.darkTheme));
  }


  menuValue: boolean = false;
  iconMenu: string = 'menu'

  openMenuSup() {
    this.menuValue = !this.menuValue;
    this.iconMenu = this.menuValue? 'menu_open' :'menu';
    
  }



}
