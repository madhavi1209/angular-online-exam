import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserTestComponent } from './user-test/user-test.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'take-test',component:UserTestComponent},
  {path: 'dashboard', component: UserDashboardComponent },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: UserRegisterComponent},
  {path:'view-report',component:UserReportComponent},
  {path:'view-subject',component:TestSubjectComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
