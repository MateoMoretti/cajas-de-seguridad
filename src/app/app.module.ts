import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChacabucoComponent } from './chacabuco.component';
import { JuninComponent } from './junin.component';
import { LincolnComponent } from './lincoln.component';

@NgModule({
  declarations: [
    AppComponent,
    JuninComponent,
    ChacabucoComponent,
    LincolnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
