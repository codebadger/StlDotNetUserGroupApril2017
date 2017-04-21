import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CompetitionComponent } from './competition/competition.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'competition', component: CompetitionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
