import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CanvasModule } from 'src/app/canvas/canvas.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CanvasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
