import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  url: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  projects = signal<Project[]>([]);
  /* projects = signal<Project[]>([
    {
      id: 'angular-todo-app',
      title: 'Angular Todo Application',
      description: 'A modern todo application built with Angular 20, featuring dark/light mode, local storage persistence, and responsive design.',
      image: '/assets/images/angular-todo.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
      date: '2024-01-15',
      url: '/project/angular-todo-app'
    },
    {
      id: 'react-dashboard',
      title: 'React Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with real-time data visualization, built with React and Chart.js.',
      image: '/assets/images/react-dashboard.jpg',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      date: '2023-11-20',
      url: '/project/react-dashboard'
    },
    {
      id: 'vue-ecommerce',
      title: 'Vue.js E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin panel.',
      image: '/assets/images/vue-ecommerce.jpg',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe'],
      date: '2023-09-10',
      url: '/project/vue-ecommerce'
    }
  ]); */

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Portfolio - Fernando Rocha');
  }
}
