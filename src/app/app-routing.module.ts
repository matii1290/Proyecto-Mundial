import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { animationFrames } from 'rxjs';
import { HomeComponent } from './components/components/home/home.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { FSPComponent } from './components/fsp/fsp.component';
import { GrAComponent } from './components/grupos/gr-a/gr-a.component';
import { GrBComponent } from './components/grupos/gr-b/gr-b.component';
import { GrCComponent } from './components/grupos/gr-c/gr-c.component';
import { GrDComponent } from './components/grupos/gr-d/gr-d.component';
import { GrEComponent } from './components/grupos/gr-e/gr-e.component';
import { GrFComponent } from './components/grupos/gr-f/gr-f.component';
import { GrGComponent } from './components/grupos/gr-g/gr-g.component';
import { GrHComponent } from './components/grupos/gr-h/gr-h.component';
import { NewsComponent } from './components/news/news.component';
import { TcsComponent } from './components/tcs/tcs.component';
import { TspComponent } from './components/tsp/tsp.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'fsp', component:FSPComponent},
  {path:'tsp', component:TspComponent},
  {path:'tcs',component:TcsComponent},
  {path:'ga',component:GrAComponent},
  {path:'gb',component:GrBComponent},
  {path:'gc',component:GrCComponent},
  {path:'gd',component:GrDComponent},
  {path:'ge',component:GrEComponent},
  {path:'gf',component:GrFComponent},
  {path:'gg',component:GrGComponent},
  {path:'gh',component:GrHComponent},
  {path:'fixture',component:FixtureComponent},
  {path:'news',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
