import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovidContainerComponent } from './components/covid-container/covid-container.component';
import { HelpConnectComponent } from './components/help-connect/help-connect.component';
import { HelpListComponent } from './components/help-list/help-list.component';
import { MyHelpComponent } from './components/my-help/my-help.component';
import { CovidTrackerComponent } from './components/covid-tracker/covid-tracker.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CovidContainerComponent,
    HelpConnectComponent,
    HelpListComponent,
    MyHelpComponent,
    CovidTrackerComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [LoginService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
