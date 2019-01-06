import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DateComponent, BoxComponent, EmptyBoxComponent, SettingsComponent } from './components';
import { HoverDirective, IfFadedDirective } from './directives';

const components = [
  AppComponent, DateComponent, BoxComponent, EmptyBoxComponent, SettingsComponent
]

const directives = [
  HoverDirective, IfFadedDirective
]

@NgModule({
  declarations: [
    components,
    directives
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
