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
const routes: Routes = [
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
  {path: 'add-question',component:AddQuestionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
