import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RegisterUserComponent } from './register-user/register-user.component';
import { MenuComponent } from './menu/menu.component';
import { RecoverpwUserComponent } from './recoverpw-user/recoverpw-user.component';
import { ConfirmmailUserComponent } from './confirmmail-user/confirmmail-user.component';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { AccueilComponent } from './accueil/accueil.component';

import { LoginComponent } from './login/login/login.component';
import { HttpClientModule } from '@angular/common/http';

//import { UserRegistrationService } from './user-registration.service';
import { RegisterComponent } from './register/register/register.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { RegisterService } from './register/register.service';
import { Menu2Component } from './menu2/menu2.component';
import { AddCapteurComponent } from './capteur/add-capteur/add-capteur/add-capteur.component';
import { UserAccountComponent } from './user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    //RegisterUserComponent,
    MenuComponent,

    RecoverpwUserComponent,
    ConfirmmailUserComponent,
    LogoutUserComponent,
    AccueilComponent,
    
    LoginComponent,
    
    RegisterComponent,
    SerachDeleteComponent,
    Menu2Component,
    AddCapteurComponent,
    UserAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [ RegisterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
