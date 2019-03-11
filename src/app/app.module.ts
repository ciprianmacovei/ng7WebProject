
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from './material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { MasterComponent } from './Pages/master/master.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { EnrollComponent } from './Pages/enroll/enroll.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginAndRegisterDirective } from './Directives/login-and-register.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    LoginComponent,
    RegisterComponent,
    EnrollComponent,
    NavbarComponent,
    LoginAndRegisterDirective,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
