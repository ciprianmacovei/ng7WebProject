import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './Pages/home/home.component';
import { MasterComponent } from './Pages/master/master.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { EnrollComponent } from './Pages/enroll/enroll.component';
import { CoursesComponent } from 'src/app/Pages/courses/courses.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: MasterComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'enroll', component: EnrollComponent},
    { path: 'courses', component: CoursesComponent}
  ]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }

  // {path: 'login', component:}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
