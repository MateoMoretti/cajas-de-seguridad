import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosarioComponent } from './rosario.component';
import { CapitalComponent } from './capital.component';
import { CordobaComponent } from './cordoba.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalComponent,
    RosarioComponent,
    CordobaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
