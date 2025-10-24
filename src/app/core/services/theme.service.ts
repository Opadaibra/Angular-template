import { Injectable } from '@angular/core';
import { CacheManagerService } from './cache-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  private cacheKey = 'user-theme';

  constructor(private cache: CacheManagerService) {
    this.initTheme();
  }

  private initTheme() {
    const savedTheme = this.cache.getItem<'light-theme' | 'dark-theme'>(this.cacheKey);
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark-theme' : 'light-theme';
    }
    this.applyTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.applyTheme(this.currentTheme);
    this.cache.setItem(this.cacheKey, this.currentTheme); 
  }

  private applyTheme(theme: 'light-theme' | 'dark-theme') {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme);
  }

  getTheme() {
    return this.currentTheme;
  }
}
