import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-very-own-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-very-own-table.component.html',
  styleUrl: './my-very-own-table.component.scss',
})
export class MyVeryOwnTableComponent {
  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
}
