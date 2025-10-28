import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
    main {
      min-height: calc(100vh - 80px);
    }
    `,
  ],
})
export class App implements OnInit {
  protected readonly title = signal('Fernando Rocha - Portfolio');

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Fernando Rocha - Portfolio');
  }
}
