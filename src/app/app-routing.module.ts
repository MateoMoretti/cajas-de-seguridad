import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosarioComponent } from './rosario.component';
import { CapitalComponent } from './capital.component';
import { CordobaComponent } from './cordoba.component';

const routes: Routes = [
  {path: '', component: CapitalComponent},
  {path: 'cordoba', component: CordobaComponent},
  {path: 'rosario', component: RosarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
