import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  name = signal('Fernando Rocha');
  email = signal('hello@frocha.net');

  private summaryText = signal(`👋 Olá, I'm Fernando, a software engineer and developer based in Porto.
I'm fluent in Portuguese, French, and English.

I have experience developing full stack web applications and integrating them with external services and APIs, always focusing on clean architecture, performance, and scalability.
Beyond web development, I'm deeply passionate about games and interactive systems, which fuel my curiosity and drive to explore new technologies and ways of creating engaging user experiences.

I'm constantly learning and experimenting, whether it's mastering a new framework, optimizing backend logic, or finding innovative ways to connect ideas through code. For me, innovation starts with curiosity, and I never stop being curious.`);

  // Split summary into paragraphs
  summaryParagraphs = computed(() => {
    return this.summaryText().split('\n\n').filter(paragraph => paragraph.trim().length > 0);
  });

  callToAction = signal('Feel free to reach out to me');

  socialLinks = signal([
    {
      name: 'GitHub',
      url: 'https://github.com/Fernando-A-Rocha',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/fernandorocha51',
      icon: 'fab fa-linkedin'
    }
  ]);

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Home - Fernando Rocha');
  }
}
