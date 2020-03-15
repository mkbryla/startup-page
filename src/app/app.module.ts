import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { DateComponent, BoxComponent, EmptyBoxComponent, SettingsComponent, AuthComponent } from './components';
import { HoverDirective, FadeDirective } from './directives';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
  AppComponent, AuthComponent, DateComponent, BoxComponent, EmptyBoxComponent, SettingsComponent
];

const directives = [
  HoverDirective, FadeDirective
];

@NgModule({
  declarations: [
    components,
    directives,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
