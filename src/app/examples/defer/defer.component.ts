import { Component } from '@angular/core';
import { VeryBigComponentComponent } from './very-big-component/very-big-component.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [VeryBigComponentComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {}
