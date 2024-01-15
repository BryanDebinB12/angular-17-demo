import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-very-big-component',
  standalone: true,
  imports: [],
  templateUrl: './very-big-component.component.html',
  styleUrl: './very-big-component.component.scss',
})
export class VeryBigComponentComponent {
  constructor() {
    _.map([], () =>
      console.log(
        'dummy lodash call to make the component import this huge library'
      )
    );
  }
}
