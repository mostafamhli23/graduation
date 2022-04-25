import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProblemComponent } from './components/problem/problem.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { FightComponent } from './components/fight/fight.component';
import { MakingFightComponent } from './components/making-fight/making-fight.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    ProblemComponent,
    AddProblemComponent,
    NavbarComponent,
    LogInComponent,
    ProfileComponent,
    FightComponent,
    MakingFightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
