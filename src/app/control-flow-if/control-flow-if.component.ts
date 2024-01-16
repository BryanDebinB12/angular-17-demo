import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-if',
  standalone: true,
  imports: [NgIf, JsonPipe],
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.scss',
})
export class ControlFlowIfComponent {
  public firstCondition = true;
  public secondCondition = true;
}
