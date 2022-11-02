import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ListasComponent } from './components/listas/listas.component';
import { HomeComponent } from './components/components/home/home.component';
import { FSPComponent } from './components/fsp/fsp.component';
import { TspComponent } from './components/tsp/tsp.component';
import { TcsComponent } from './components/tcs/tcs.component';
import { GrAComponent } from './components/grupos/gr-a/gr-a.component';
import { GrBComponent } from './components/grupos/gr-b/gr-b.component';
import { GrCComponent } from './components/grupos/gr-c/gr-c.component';
import { GrDComponent } from './components/grupos/gr-d/gr-d.component';
import { GrEComponent } from './components/grupos/gr-e/gr-e.component';
import { GrFComponent } from './components/grupos/gr-f/gr-f.component';
import { GrGComponent } from './components/grupos/gr-g/gr-g.component';
import { GrHComponent } from './components/grupos/gr-h/gr-h.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ListasComponent,
    HomeComponent,
    FSPComponent,
    TspComponent,
    TcsComponent,
    GrAComponent,
    GrBComponent,
    GrCComponent,
    GrDComponent,
    GrEComponent,
    GrFComponent,
    GrGComponent,
    GrHComponent,
    FixtureComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
