import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChacabucoComponent } from './chacabuco.component';
import { JuninComponent } from './junin.component';
import { LincolnComponent } from './lincoln.component';

const routes: Routes = [
  {path: 'junin', component: JuninComponent},
  {path: 'lincoln', component: LincolnComponent},
  {path: 'chacabuco', component: ChacabucoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
