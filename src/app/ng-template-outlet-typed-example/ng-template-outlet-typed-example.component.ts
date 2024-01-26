import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MyVeryOwnTableTypedComponent,
  MyVeryOwnTableTypedHeadersDirective,
  MyVeryOwnTableTypedRowsDirective,
} from './my-very-own-table-typed/my-very-own-table-typed.component';

@Component({
  selector: 'app-ng-template-outlet-typed-example',
  standalone: true,
  imports: [CommonModule, MyVeryOwnTableTypedComponent, MyVeryOwnTableTypedHeadersDirective, MyVeryOwnTableTypedRowsDirective],
  templateUrl: './ng-template-outlet-typed-example.component.html',
  styleUrl: './ng-template-outlet-typed-example.component.scss',
})
export class NgTemplateOutletTypedExampleComponent {
  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
