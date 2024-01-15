import { Routes } from '@angular/router';
import { DeferComponent } from './examples/defer/defer.component';

export const routes: Routes = [
  { path: '1', component: DeferComponent },
  { path: '**', redirectTo: '1' },
];
