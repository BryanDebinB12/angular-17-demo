import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  // a signal can be writable
  count: WritableSignal<number> = signal(0);
  // but a signal computed from another one is not.
  double: Signal<number> = computed(() => this.count() * 2);
  // one can easily combine signals inside the compute function
  explanation = computed(
    () =>
      `the first number is ${this.count()} and the second is ${this.double()}`
  );

  /////// signals are lazy, they are only computed when they are read /////////
  computationallyIntensive = computed(() => {
    return this.mySlowFunction(6);
  });
  private mySlowFunction(baseNumber: number) {
    console.log('mySlowFunction starts');
    console.time('mySlowFunction');
    let result = 0;
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
    console.log('mySlowFunction took :');
    console.timeEnd('mySlowFunction');
    return result;
  }
  public showComputationallyExpensiveSignal = false;
  toggleComputationallyExpensiveSignal() {
    this.showComputationallyExpensiveSignal =
      !this.showComputationallyExpensiveSignal;
  }

  // if you want to define the effect in ngOnInit, you need some boilerplate  https://angular.dev/guide/signals#injection-context
  private effect = effect(() => {
    console.log('Count changed', this.count());
    console.log('explanation', this.explanation());
  });
  // nb : effects are automatically disposed when the component is destroyed

  inc() {
    this.count.update((c) => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
