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
import { ChangemenuComponent } from './Pages/admin/changemenu/changemenu.component';
import { AdminLoginService } from './Guards/admin-login.service';
import { ChangehomepageComponent } from './Pages/admin/changehomepage/changehomepage.component';
import { CardsComponent } from './Pages/admin/changehomepage/cards/cards.component';
import { DiplomasComponent } from './Pages/admin/changehomepage/diplomas/diplomas.component';
import { NewsComponent } from './Pages/admin/changehomepage/news/news.component';
import { LocationComponent } from './Pages/admin/changehomepage/location/location.component';

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
  {
    path: 'adminPanel', component: PanelComponent, canActivate: [AdminLoginService], children: [
      { path: 'menu', component: ChangemenuComponent },
      {
        path: 'home', component: ChangehomepageComponent, children: [
          { path: 'diplomas', component:DiplomasComponent},
          { path: 'cards', component:CardsComponent },
          { path: 'news', component:NewsComponent },
          { path: 'location', component:LocationComponent }
        ]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
