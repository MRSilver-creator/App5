import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter }     from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes }            from './app.routes';
import { initializeApp }     from 'firebase/app';
import { environment }       from '../environments/environments';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

initializeApp(environment.firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(CanvasJSAngularChartsModule),
  ]
};
