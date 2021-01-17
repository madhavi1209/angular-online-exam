import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserTestComponent } from './user-test/user-test.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminSubjectComponent } from './admin-subject/admin-subject.component';


import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewByCustomComponent } from './view-by-custom/view-by-custom.component';
import { ViewByTechnologyComponent } from './view-by-technology/view-by-technology.component';
import { ViewByLevelComponent } from './view-by-level/view-by-level.component';
import { ViewReportDashboardComponent } from './view-report-dashboard/view-report-dashboard.component';

import { report } from './login/Model/report';
import { Report } from './model/userTest';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'take-test',component:UserTestComponent},
  {path: 'dashboard', component: UserDashboardComponent },
  {path: 'home', component: HomeComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: UserRegisterComponent},
  {path: 'view-report',component:UserReportComponent},
  {path: 'view-subject',component:TestSubjectComponent},
  {path: 'view-question',component:TestQuestionsComponent},
  {path: 'admin-subject',component:AdminSubjectComponent},
  {path: 'view-report-custom',component:ViewByCustomComponent},
  {path: 'view-by-technology',component:ViewByTechnologyComponent},
  {path: 'view-by-level',component:ViewByLevelComponent},
  {path: 'view-report-dashboard',component:ViewReportDashboardComponent},
  
  {path: 'add-question',component:AddQuestionComponent},
  {path: 'remove-question',component:RemoveQuestionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
