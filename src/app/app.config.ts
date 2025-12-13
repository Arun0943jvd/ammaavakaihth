import { ApplicationConfig, provideBrowserGlobalErrorListeners , importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(MatTabsModule, FormsModule, CommonModule),
  ],
};
