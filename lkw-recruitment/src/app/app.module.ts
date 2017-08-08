import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DancersDataService } from './services/dancers-data.service';
import { LoginComponent } from './components/layouts/login/login.component';
import { HomedancersComponent } from './components/layouts/homedancers/homedancers.component';
import { DancersPageComponent } from './components/layouts/pages/dancers-page/dancers-page.component';
import { FadeListDirective } from './directives/fade-list.directive';
import { ShowsPageComponent } from './components/layouts/pages/shows-page/shows-page.component';
import { CoursesPageComponent } from './components/layouts/pages/courses-page/courses-page.component';
import { CoursesComponent } from './components/layouts/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomedancersComponent,
    DancersPageComponent,
    FadeListDirective,
    ShowsPageComponent,
    CoursesPageComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dancers',
        component: DancersPageComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'courses',
        component: CoursesPageComponent
      },
      {
        path: 'shows',
        component: ShowsPageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
