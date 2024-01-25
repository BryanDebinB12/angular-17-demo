import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  standalone: true,
  // import commonModule here, otherwise you need to import ngFor, asyncPipe, etc when needed.
  imports: [CommonModule],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss',
})
export class StandaloneComponent {}
