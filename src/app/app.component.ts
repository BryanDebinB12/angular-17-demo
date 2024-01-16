import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-17-demo';

  navigateTo(to: 'next' | 'previous') {
    const currentPath = window.location.pathname;
    const currentExampleNumber = parseInt(currentPath.split('/')[1], 10);
    const nextExampleNumber = currentExampleNumber + (to === 'next' ? 1 : -1);
    window.location.href = `/${nextExampleNumber}`;
  }
}
