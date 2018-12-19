import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { BoxComponent } from './components/box/box.component';
import { EmptyBoxComponent } from './components/empty-box/empty-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    BoxComponent,
    EmptyBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
