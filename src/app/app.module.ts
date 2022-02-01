import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { LoginbuttonComponent } from './loginbutton/loginbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    PasswordComponent,
    LoginbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
