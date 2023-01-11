import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {UserPageMeasurementsComponent} from "./user-page-measurements/user-page-measurements.component";
import {AuthGuardService as AuthGuard} from "./services/auth-guard.service";
import {AuthGuardUserService as AuthGuardUser} from "./services/auth-guard-user.service";
import {UserPageComponent} from "./user-page/user-page.component";


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path: 'login', component: LoginComponent },
  {path:'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
  {path:'user', component: UserPageComponent, canActivate: [AuthGuardUser]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
