import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input-decorator',
  standalone: true,
  imports: [],
  templateUrl: './child-input-decorator.component.html',
  styleUrl: './child-input-decorator.component.scss',
})
export class ChildInputDecoratorComponent {
  @Input({
    required: true,
    alias: 'myInput',
    // prefer using the transform function than a setter Input
    transform: (inputValue: string) =>
      inputValue.replace('original', 'transformed'),
  })
  // Need a "!" because it's not initialized in the constructor.
  // Since the Input is required, there is a compilation when the component is used in a template, without this input.
  // A possible caveat of using this "!" is that in case the component is instantiated by a service (e.g for a modal),
  // the value might be undefined without compilation error. The code would then crash runtime.
  myInputName!: string;
}
