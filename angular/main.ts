const Ext = window['Ext']
import 'zone.js'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtAngularClassicModule } from '@sencha/ext-angular-classic';

import { PersonnelnewComponent } from './personnelnew.component';

Ext.angular = {
  personnelnew: getModule(PersonnelnewComponent),
  platformBrowserDynamic: platformBrowserDynamic,
}

function getModule(component) {
  @NgModule({
    declarations: [component],
    imports: [BrowserModule,ExtAngularClassicModule],
    entryComponents: [component]
  })
  class module {
    ngDoBootstrap(app) {
      app.bootstrap(component);
     }
  }
  return module
}