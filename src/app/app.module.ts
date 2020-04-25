import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidContainerComponent } from './covid-container/covid-container.component';
import { HelpConnectComponent } from './help-connect/help-connect.component';
import { HelpListComponent } from './help-list/help-list.component';
import { MyHelpComponent } from './my-help/my-help.component';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidContainerComponent,
    HelpConnectComponent,
    HelpListComponent,
    MyHelpComponent,
    CovidTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
