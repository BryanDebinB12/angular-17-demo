import { Routes } from '@angular/router';
import { ControlFlowForComponent } from './control-flow-for/control-flow-for.component';
import { ControlFlowIfComponent } from './control-flow-if/control-flow-if.component';
import { ControlFlowSwitchComponent } from './control-flow-switch/control-flow-switch.component';
import { DeferComponent } from './examples/defer/defer.component';
import { InjectComponent } from './inject/inject.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { SignalsComponent } from './signals/signals.component';
import { StandaloneComponent } from './standalone/standalone.component';
import { TypedFormComponent } from './typed-form/typed-form.component';

// by default standalone components are lazy loaded when no app.routing.module is present, like in this application
// We can still lazy load standalone component in application that use app.routing.module by using the "loadComponent" method, see https://angular.io/guide/standalone-components#routing-and-lazy-loading.
export const routes: Routes = [
  { path: '1', component: StandaloneComponent },
  { path: '2', component: InjectComponent },
  { path: '3', component: ControlFlowIfComponent },
  { path: '4', component: ControlFlowForComponent },
  { path: '5', component: ControlFlowSwitchComponent },
  { path: '6', component: DeferComponent },
  { path: '7', component: SignalsComponent },
  { path: '8', component: TypedFormComponent },
  { path: '9', component: InputDecoratorComponent },
  //   { path: '7', component},
  //   { path: '8', component},
  //   { path: '9', component},
  //   { path: '10', component},
  //   { path: '11', component},
  //   { path: '12' component},
  //   { path: '13',component},
  //   { path: '14', component},
  //   { path: '15', component},
  //   { path: '16', component},
  //   { path: '17', component},
  //   { path: '18', component},
  //   { path: '19', component},
  //   { path: '20', component},
  { path: '**', redirectTo: '1' },
];
