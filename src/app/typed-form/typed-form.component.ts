import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-typed-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './typed-form.component.html',
  styleUrl: './typed-form.component.scss',
})
export class TypedFormComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly nonNullableFormBuilder = inject(NonNullableFormBuilder);
  // you can still use the old reactive forms, which now have the "untyped" prefix.
  // example, for the formBuilder :
  private readonly untypedFormBuilder = inject(UntypedFormBuilder);

  // initial values let angular infer the type automatically
  public formGroup = this.formBuilder.group({
    firstName: ['initial name'],
    lastName: ['initial last name'],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  public nonNullableFormGroup = this.nonNullableFormBuilder.group({
    firstName: ['initial name'],
    lastName: ['initial last name'],
    address: this.nonNullableFormBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  ngOnInit(): void {
    // type safety and IDE completion when accessing form values
    const city = this.formGroup.value.address?.city;

    // note : old way of accessing form values is also type safe (but no IDE completion)!
    const maybeCityIfIMadeNoTypo = this.formGroup.get('address.city')?.value;

    // prefer using nonNullableFormBuilder when possible : the formGroup will reset to the initial values instead of null.
    console.log('formGroup before reset', this.formGroup.value);
    this.formGroup.reset();
    console.log('formGroup after reset', this.formGroup.value);

    console.log(
      'nonNullableFormGroup before reset',
      this.nonNullableFormGroup.value
    );
    this.nonNullableFormGroup.reset();
    console.log(
      'nonNullableFormGroup after reset',
      this.nonNullableFormGroup.value
    );

    // When a field is disabled, the value is evaluated at undefined.
    this.nonNullableFormGroup.controls.firstName.setValue('new first name');
    this.nonNullableFormGroup.controls.firstName.disable();
    console.log(
      'firstName value after disabling firstName:',
      this.nonNullableFormGroup.value.firstName,
      ', firstName raw value after disabling firstName:',
      this.nonNullableFormGroup.getRawValue().firstName
    );
    this.nonNullableFormGroup.controls.firstName.enable();
    console.log(
      'firstName value after enabling firstName:',
      this.nonNullableFormGroup.value.firstName,
      ',firstName raw value after enabling firstName:',
      this.nonNullableFormGroup.getRawValue().firstName
    );

    // setValue() must specify every child controls, while patchValue allows partial updates
    this.formGroup.controls.address.setValue({
      street: 'new street', // compilation error if something was missing
      city: 'new city',
      state: 'new state',
      zip: 'new zip',
    });
    this.formGroup.controls.address.patchValue({
      street: 'new street', // no compilation error
    });
  }
}
