import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstraping is done differently than with modules https://angular.dev/guide/di/dependency-injection#at-application-root-level-using-applicationconfig
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
