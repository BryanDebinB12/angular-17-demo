import { CommonModule } from '@angular/common';
import { Component, ContentChild, Directive, Input, TemplateRef } from '@angular/core';

// Typing trick with context guard for headers
type MyVeryOwnTableTypedHeadersTemplateContext = {
  // nothing for now
}

@Directive({
  selector: 'ng-template[appMyVeryOwnTableTypedHeaders]',
  standalone: true,
})
export class MyVeryOwnTableTypedHeadersDirective {
  @Input() appMyVeryOwnTableTypedContent = '';
  static ngTemplateContextGuard(
    dir: MyVeryOwnTableTypedHeadersDirective,
    ctx: unknown
  ): ctx is MyVeryOwnTableTypedHeadersTemplateContext {
    return true;
  }
}

// Typing trick with context guard for rows
type MyVeryOwnTableTypedRowsTemplateContext<T> = {
  $implicit: T;
  // add more properties here if needed
}

@Directive({
  selector: 'ng-template[appMyVeryOwnTableTypedRows]',
  standalone: true,
})
export class MyVeryOwnTableTypedRowsDirective<T> {
  @Input('appMyVeryOwnTableTypedRows') data! : Array<T>;
  static ngTemplateContextGuard<T>(
    dir: MyVeryOwnTableTypedRowsDirective<T>,
    ctx: unknown
  ): ctx is MyVeryOwnTableTypedRowsTemplateContext<T> {
    return true;
  }
}

@Component({
  selector: 'app-my-very-own-table-typed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-very-own-table-typed.component.html',
  styleUrl: './my-very-own-table-typed.component.scss',
})
export class MyVeryOwnTableTypedComponent<T> {
  @Input() data!: T[];
  @ContentChild('headers') headers: TemplateRef<unknown> | undefined;
  @ContentChild('rows') rows: TemplateRef<unknown> | undefined;
}
