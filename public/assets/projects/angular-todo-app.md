# Angular Todo Application

A modern, responsive todo application built with Angular 20, featuring dark/light mode toggle, local storage persistence, and a clean, minimalistic design.

## Overview

This project demonstrates modern Angular development practices including:
- Standalone components
- Signals for reactive state management
- SCSS for styling with CSS custom properties
- Responsive design principles
- Accessibility features

## Features

- ✅ **Dark/Light Mode**: Toggle between themes with persistent user preference
- ✅ **Add/Edit/Delete**: Full CRUD operations for todo items
- ✅ **Local Storage**: Data persists between browser sessions
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile
- ✅ **Accessibility**: ARIA labels and keyboard navigation support
- ✅ **Modern UI**: Clean, minimalistic design with smooth animations

## Technologies Used

- **Angular 20**: Latest version with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Advanced CSS with variables and mixins
- **RxJS**: Reactive programming patterns
- **FontAwesome**: Icon library for UI elements

## Key Implementation Details

### Theme Service
The application uses a custom theme service that manages dark/light mode switching:

```typescript
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSignal = signal<'dark' | 'light'>('light');
  
  toggleTheme(): void {
    const newTheme = this.themeSignal() === 'dark' ? 'light' : 'dark';
    this.themeSignal.set(newTheme);
    localStorage.setItem('theme-preference', newTheme);
  }
}
```

### CSS Custom Properties
Theming is implemented using CSS custom properties for seamless theme switching:

```scss
:root {
  --bg-primary: #ffffff;
  --text-primary: #212529;
  --accent-color: #007bff;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-color: #4dabf7;
}
```

### Local Storage Integration
Todo items are automatically saved to and loaded from localStorage:

```typescript
private saveTodos(): void {
  localStorage.setItem('todos', JSON.stringify(this.todos()));
}

private loadTodos(): void {
  const saved = localStorage.getItem('todos');
  if (saved) {
    this.todos.set(JSON.parse(saved));
  }
}
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   └── todo-item/
│   ├── services/
│   │   └── theme.service.ts
│   ├── home/
│   └── todos/
├── styles.scss
└── main.ts
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Open browser to `http://localhost:4200`

## Future Enhancements

- [ ] Add due dates and reminders
- [ ] Implement categories and tags
- [ ] Add drag-and-drop reordering
- [ ] Export/import functionality
- [ ] Offline support with service workers

## Live Demo

You can see this application in action by visiting the live demo or checking out the source code on GitHub.

---

*This project showcases modern Angular development practices and serves as a foundation for more complex applications.*
