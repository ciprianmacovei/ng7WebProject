import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './Pages/home/home.component';
import { MasterComponent } from './Pages/master/master.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { EnrollComponent } from './Pages/enroll/enroll.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { CostComponent } from './Pages/cost/cost.component';
import { EnrollPageComponent } from 'src/app/Pages/enroll-page/enroll-page.component';
import { StudentsComponent } from 'src/app/Pages/students/students.component';
import { AboutComponent } from 'src/app/Pages/about/about.component';
import { AdminComponent } from 'src/app/Pages/admin/admin.component';
import { PanelComponent } from './Pages/admin/panel/panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: MasterComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'enroll', component: EnrollComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'cost', component: CostComponent },
      { path: 'enroll-page', component: EnrollPageComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/panel', component: PanelComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
