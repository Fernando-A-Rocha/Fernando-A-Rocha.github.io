import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements OnInit {
  private route = inject(ActivatedRoute);
  private title = inject(Title);

  projectId = signal<string>('');
  projectContent = signal<string>('');
  isLoading = signal<boolean>(true);

  projects = signal([
    {
      id: 'angular-todo-app',
      title: 'Angular Todo Application',
      markdownFile: 'angular-todo-app.md'
    },
    {
      id: 'react-dashboard',
      title: 'React Analytics Dashboard',
      markdownFile: 'react-dashboard.md'
    },
    {
      id: 'vue-ecommerce',
      title: 'Vue.js E-commerce Platform',
      markdownFile: 'vue-ecommerce.md'
    }
  ]);

  constructor() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.projectId.set(id);
      this.loadProjectContent(id);
    });
  }

  ngOnInit() {
    // Set initial title, will be updated when project loads
    this.title.setTitle('Project - Fernando Rocha');
  }

  private async loadProjectContent(projectId: string) {
    this.isLoading.set(true);

    try {
      const project = this.projects().find(p => p.id === projectId);
      if (project) {
        // Update page title with project name
        this.title.setTitle(`${project.title} - Fernando Rocha`);

        const response = await fetch(`/assets/projects/${project.markdownFile}`);
        if (response.ok) {
          const markdown = await response.text();
          // Handle both sync and async versions of marked
          const html = await marked(markdown);
          this.projectContent.set(html);
        } else {
          this.projectContent.set('<p>Project content not found.</p>');
        }
      } else {
        this.projectContent.set('<p>Project not found.</p>');
      }
    } catch (error) {
      console.error('Error loading project content:', error);
      this.projectContent.set('<p>Error loading project content.</p>');
    } finally {
      this.isLoading.set(false);
    }
  }
}
