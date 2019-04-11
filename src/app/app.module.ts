
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//services
import { AuthentificationService } from './Services/authentification.service';
import { CandeactivateGuardService } from './Guards/candeactivate-guard.service';

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
import { HeaderComponent } from './Components/header/header.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { CostComponent } from './Pages/cost/cost.component';
import { EnrollPageComponent } from './Pages/enroll-page/enroll-page.component';
import { StudentsComponent } from './Pages/students/students.component';
import { AboutComponent } from './Pages/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { PanelComponent } from './Pages/admin/panel/panel.component';
import { ChangemenuComponent } from './Pages/admin/changemenu/changemenu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChangehomepageComponent } from './Pages/admin/changehomepage/changehomepage.component';
import { DiplomasComponent } from './Pages/admin/changehomepage/diplomas/diplomas.component';
import { CardsComponent } from './Pages/admin/changehomepage/cards/cards.component';
import { NewsComponent } from './Pages/admin/changehomepage/news/news.component';
import { LocationComponent } from './Pages/admin/changehomepage/location/location.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { AboutMComponent } from './Pages/about/about-m/about-m.component';
import { MisionComponent } from './Pages/about/mision/mision.component';
import { HistoryComponent } from './Pages/about/history/history.component';
import { StudentComponent } from './Pages/about/student/student.component';
import { FaqComponent } from './Pages/about/faq/faq.component';
import { InterviewsComponent } from './Pages/about/interviews/interviews.component';
import { JobsComponent } from './Pages/about/jobs/jobs.component';
import { CampusComponent } from './Pages/about/campus/campus.component';
import { OpenComponent } from './Pages/about/open/open.component';
import { MenuComponent } from './Components/menu/menu.component';



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
    HeaderComponent,
    CoursesComponent,
    CostComponent,
    EnrollPageComponent,
    StudentsComponent,
    AboutComponent,
    FooterComponent,
    AdminComponent,
    PanelComponent,
    ChangemenuComponent,
    ChangehomepageComponent,
    DiplomasComponent,
    CardsComponent,
    NewsComponent,
    LocationComponent,
    NotificationComponent,
    AboutMComponent,
    MisionComponent,
    HistoryComponent,
    StudentComponent,
    FaqComponent,
    InterviewsComponent,
    JobsComponent,
    CampusComponent,
    OpenComponent,
    MenuComponent,
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
    FlexLayoutModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthentificationService,CandeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
