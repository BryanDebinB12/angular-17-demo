import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildInputDecoratorComponent } from './child-input-decorator/child-input-decorator.component';

@Component({
  selector: 'app-input-decorator',
  standalone: true,
  imports: [CommonModule, ChildInputDecoratorComponent],
  templateUrl: './input-decorator.component.html',
  styleUrl: './input-decorator.component.scss',
})
export class InputDecoratorComponent {}
