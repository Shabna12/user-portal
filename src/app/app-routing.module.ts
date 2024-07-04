import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // http:localhost:4200/users
  { 
    path: 'users', canActivate:[authGuard], loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) 
  },
  // http:localhost:4200/
  {
    path:'', component:LoginComponent
  },
  // http:localhost:4200/dashboard
  {
    path:'dashboard', canActivate:[authGuard], component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
