import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserTestComponent } from './user-test/user-test.component';
const routes: Routes = [{path: 'take-test',component:UserTestComponent},
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'login', component: LoginComponent },
  {path:'view-report',component:UserReportComponent},
{path:'view-subject',component:TestSubjectComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
