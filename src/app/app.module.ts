import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SerieModule } from './serie/serie.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentsComponent } from '.c:/Users/dscv0/OneDrive/Escritorio/parcial2/parcial2/src/environments/environments.component';
import { EnvironmentsComponent } from '.c:/Users/dscv0/OneDrive/Escritorio/parcial2/parcial2/src/environments/environments.component';
import { PinguinoComponent } from '.c:/Users/dscv0/OneDrive/Escritorio/parcial2/parcial2/src/pinguino/pinguino.component';
import { PinguinoComponent } from '.c:/Users/dscv0/OneDrive/Escritorio/parcial2/parcial2/src/pinguino/pinguino.component';

@NgModule({
  declarations: [				
    AppComponent,
      EnvironmentsComponent,
      EnvironmentsComponent,
      PinguinoComponent,
      PinguinoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
