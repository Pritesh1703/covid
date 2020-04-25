import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CovidContainerComponent } from './components/covid-container/covid-container.component';
import { InformationComponent } from './information/information.component';
import { AssessmentComponent } from './components/assessment/assessment.component';


const routes: Routes = [
  { path:'',component:CovidContainerComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CovidContainerComponent },
  {path:'educate',component:InformationComponent},
  {path:'assessment',component:AssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
