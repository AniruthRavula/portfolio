import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Override console.warn to suppress specific warnings
const originalWarn = console.warn;
console.warn = function (...args) {
  // Suppress NG0505 and NG0913 warnings
  if (typeof args[0] === 'string' && (args[0].includes('NG0505') || args[0].includes('NG0913'))) {
    return; // Skip logging for these warnings
  }
  // Pass through other warnings
  originalWarn.apply(console, args);
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
