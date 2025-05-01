import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  template: `
    <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="themeDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
    <i class="bi bi-moon-stars-fill"></i>
    </button>
    <ul class="dropdown-menu" aria-labelledby="themeDropdown">
      <li *ngFor="let theme of themes">
        <button class="dropdown-item" (click)="changeTheme(theme)">
          {{ theme }}
        </button>
      </li>
    </ul>
  </div>
  `,
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {
  // List of all Bootswatch themes
  themes = [
    'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 
    'litera', 'lumen', 'lux', 'materia', 'minty', 'morph', 
    'pulse', 'quartz', 'sandstone', 'simplex', 'sketchy', 
    'slate', 'solar', 'spacelab', 'superhero', 'united', 'vapor', 
    'yeti', 'zephyr'
  ];

  constructor(private themeService:ThemeService){}
  changeTheme(theme:string){
    this.themeService.setTheme(theme);
  }
}
