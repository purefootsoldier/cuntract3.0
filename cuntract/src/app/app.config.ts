import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
provideHttpClient
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient } from '@angular/common/http';
import { BrowserStorageService } from './services/browser/browser-storage-service.service';
import { BrowserStorageServerService } from './services/browser/browser-storage-server-service.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), BrowserStorageService, {
    provide: BrowserStorageService,
    useClass: BrowserStorageServerService,
  }]
};
