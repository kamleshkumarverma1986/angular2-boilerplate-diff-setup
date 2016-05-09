import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { CareerStartupAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CareerStartupAppComponent,[ROUTER_PROVIDERS]);
