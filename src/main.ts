import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './router/config';
import { AppComponent } from './components/App/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
