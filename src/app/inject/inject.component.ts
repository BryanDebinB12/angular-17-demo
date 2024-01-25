import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  getImportantQueryParam$,
  importantQueryParamName,
} from './get-important-query-param.util';

@Component({
  selector: 'app-inject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inject.component.html',
  styleUrl: './inject.component.scss',
})
export class InjectComponent implements OnInit {
  // example of constructor-less injection
  private readonly router = inject(Router);
  // equivalent to: constructor(private readonly router: Router) {}

  public readonly importantQueryParamName = importantQueryParamName;

  ngOnInit(): void {}

  public displayQueryParamValue$ = getImportantQueryParam$();
}
