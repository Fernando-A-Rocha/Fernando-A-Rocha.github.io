import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';

  // Signal for current theme ('dark' or 'light')
  private themeSignal = signal<'dark' | 'light'>('light');

  // Computed signal for CSS class
  public themeClass = computed(() => this.themeSignal());

  // Computed signal for icon class
  public themeIcon = computed(() =>
    this.themeSignal() === 'dark' ? 'fa-sun' : 'fa-moon'
  );

  constructor() {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem(this.THEME_KEY) as 'dark' | 'light' | null;
    if (savedTheme) {
      this.themeSignal.set(savedTheme);
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    const newTheme = this.themeSignal() === 'dark' ? 'light' : 'dark';
    this.themeSignal.set(newTheme);
    localStorage.setItem(this.THEME_KEY, newTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const theme = this.themeSignal();
    document.documentElement.setAttribute('data-theme', theme);
  }
}
