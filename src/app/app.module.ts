import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapContentComponent} from './map-content/map-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MapContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'TODO_ADD_YOUR_KEY_HERE'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
