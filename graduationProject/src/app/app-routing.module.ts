import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { ProblemComponent } from './components/problem/problem.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FightComponent } from './components/fight/fight.component';
import { MakingFightComponent } from './components/making-fight/making-fight.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LogInComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserComponent},
  {path:'friend/:id',component:UserComponent},
  {path:'profile',component:ProfileComponent},
  {path:'problem',component:ProblemComponent},
  {path:'problem/:id',component:ProblemComponent},
  {path:'addproblem',component:AddProblemComponent},
  {path:'fight',component:FightComponent},
  {path:'makeFight',component:MakingFightComponent},
  {path:'makeFight/:id',component:MakingFightComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
