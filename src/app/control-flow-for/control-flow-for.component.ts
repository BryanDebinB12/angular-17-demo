import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type ListItem = { label: string; value: string; id: number };

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  imports: [NgFor],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.scss',
})
export class ControlFlowForComponent {
  public list: ListItem[] = [
    { label: 'Item 1', value: 'value 1', id: 1 },
    { label: 'Item 2', value: 'value 2', id: 2 },
    { label: 'Item 3', value: 'value 3', id: 3 },
  ];

  // Play with this function to see what changes in the re-rendering
  public changeItems() {
    // this.list[0].label = 'Item 1 changed';
    this.list = [
      { label: 'Item 1 changed', value: 'value 1', id: 1 + Math.random() },
      { label: 'Item 2', value: 'value 2', id: 2 },
      { label: 'Item 3', value: 'value 3', id: 3 },
    ];
  }
}
