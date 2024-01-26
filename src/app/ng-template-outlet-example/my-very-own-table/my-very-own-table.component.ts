import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-very-own-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-very-own-table.component.html',
  styleUrl: './my-very-own-table.component.scss',
})
export class MyVeryOwnTableComponent<T> {
  @Input() data!: T[];
  @ContentChild('headers') headers: TemplateRef<unknown> | undefined;
  @ContentChild('rows') rows: TemplateRef<unknown> | undefined;
}
