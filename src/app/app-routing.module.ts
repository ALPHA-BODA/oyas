import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import {RegisterComponent} from './register/register/register.component';
import { MenuComponent } from './menu/menu.component';
import {SerachDeleteComponent} from './serach-delete/serach-delete.component';
import { RecoverpwUserComponent } from './recoverpw-user/recoverpw-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component : RegisterComponent

  },
  
  {
    path: 'recoverpw-user',
    component : RecoverpwUserComponent

  },

  {
    path: 'logout-user',
    component : LogoutUserComponent

  },

  {
    path: 'serach',
    component : SerachDeleteComponent

  },

  {
    path: 'menu',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
