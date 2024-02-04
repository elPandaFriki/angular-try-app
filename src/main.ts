import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './router/config';
import { RootComponent } from './app/Root/root.component';

bootstrapApplication(RootComponent, appConfig)
  .then((applicationRef) => {
    //
  })
  .catch((err) => {
    console.error(err);
  });
