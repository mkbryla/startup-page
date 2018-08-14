import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { BoxComponent } from './components/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
