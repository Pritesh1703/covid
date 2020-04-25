import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidContainerComponent } from './covid-container/covid-container.component';


const routes: Routes = [
  {
    path:'',
    component:CovidContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
