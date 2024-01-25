import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Option = { label: string; value: ValueType };
type ValueType = string;
type ExtendedOption = Option & { additionalProperty: string };

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.scss',
})
export class ControlFlowSwitchComponent {
  public value: ValueType | undefined;
  public options: (Option | ExtendedOption)[] = [
    { label: 'Option 1', value: 'value 1' },
    {
      label: 'Option 2',
      value: 'value 2',
      additionalProperty: 'some very important value',
    },
    { label: 'Option 3', value: 'value 3' },
  ];

  // the function bellow are used for type-guard experimentation
  get selectionOptionItem(): Option | ExtendedOption | undefined {
    return this.options.find((option) => option.value === this.value);
  }
  public isOption(
    maybeOption: Option | ExtendedOption | undefined
  ): maybeOption is Option {
    return (maybeOption as Option).value !== undefined;
  }
  public isExtendedOption(
    maybeExtendedOption: Option | ExtendedOption | undefined
  ): maybeExtendedOption is ExtendedOption {
    return (
      (maybeExtendedOption as ExtendedOption).additionalProperty !== undefined
    );
  }
}
