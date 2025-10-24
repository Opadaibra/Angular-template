import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';
import { LanguageSwitcherComponent } from "../../../core/shared/language-switcher.component";
import { ThemeToggleComponent } from "../../../core/shared/theme-toggle.component";

@Component({
  selector: 'app-landing-page',
  imports: [SharedModule, TranslatePipe, LanguageSwitcherComponent, ThemeToggleComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  theme: 'dark' | 'light' = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';

  // navbar.component.ts
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#api' }, // لو عندك Dropdown ممكن تعمل object فيه children
    { label: 'Security', href: '#security' },
    { label: 'Contact', href: '#contact' }
  ];

  features = [
    {
      icon: '🧩',
      title: 'FEATURE_1_TITLE', // keys expected in i18n files
      desc: 'FEATURE_1_DESC',
      points: ['FEATURE_1_POINT_1', 'FEATURE_1_POINT_2']
    },
    {
      icon: '⚡',
      title: 'FEATURE_2_TITLE',
      desc: 'FEATURE_2_DESC',
      points: ['FEATURE_2_POINT_1']
    },
    {
      icon: '🔒',
      title: 'FEATURE_3_TITLE',
      desc: 'FEATURE_3_DESC',
      points: ['FEATURE_3_POINT_1', 'FEATURE_3_POINT_2']
    },
  ];
}
