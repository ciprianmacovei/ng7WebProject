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
import { CandeactivateGuardService } from './Guards/candeactivate-guard.service';
import { AboutMComponent } from './Pages/about/about-m/about-m.component';
import { MisionComponent } from './Pages/about/mision/mision.component';
import { HistoryComponent } from './Pages/about/history/history.component';
import { StudentComponent } from './Pages/about/student/student.component';
import { FaqComponent } from './Pages/about/faq/faq.component';
import { InterviewsComponent } from './Pages/about/interviews/interviews.component';
import { JobsComponent } from './Pages/about/jobs/jobs.component';
import { CampusComponent } from './Pages/about/campus/campus.component';
import { OpenComponent } from './Pages/about/open/open.component';

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
      { path: 'about', component: AboutComponent, children: [
        { path: '', component:AboutMComponent, pathMatch:'full'},
        { path: 'mision', component:MisionComponent},
        { path: 'history', component:HistoryComponent},
        { path: 'student', component:StudentComponent},
        { path: 'faq', component:FaqComponent},
        { path: 'interviews', component:InterviewsComponent},
        { path: 'jobs', component:JobsComponent},
        { path: 'campus', component:CampusComponent},
        { path: 'open', component:OpenComponent}
      ] }
    ]
  },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'adminPanel', component: PanelComponent, canActivate: [AdminLoginService], children: [
      { path: 'menu', component: ChangemenuComponent },
      {
        path: 'home', component: ChangehomepageComponent, children: [
          { path: 'diplomas', component:DiplomasComponent, canDeactivate:[CandeactivateGuardService]},
          { path: 'cards', component:CardsComponent, canDeactivate:[CandeactivateGuardService]},
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
