import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
    selector: 'app-theme-toggle',
    template: `
   <div class="theme-toggle">
  <input type="checkbox" id="themeSwitch" (change)="toggleTheme()" [checked]="themeService.getTheme() === 'dark-theme'"/>
  <label for="themeSwitch" class="slider"></label>
</div>


  `,
    styles: `
.theme-toggle {
  position: relative;
  width: 60px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 34px;
    background-color: var(--secondary-color); // اللون حسب الثيم
    transition: background-color 0.3s;

    &:before {
      content: "";
      position: absolute;
      height: 26px;
      width: 26px;
      left: 2px;
      bottom: 2px;
      background-color: #fff;
      border-radius: 50%;
      transition: transform 0.3s;
    }
  }

  input:checked + .slider {
    background-color: var(--bg-color); // لون مختلف عند Dark
  }

  input:checked + .slider:before {
    transform: translateX(30px);
  }
}

  `
})
export class ThemeToggleComponent {
    constructor(public themeService: ThemeService) { }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
