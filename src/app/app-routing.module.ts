import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserTestComponent } from './user-test/user-test.component';

const routes: Routes = [{path: 'take-test',component:UserTestComponent},
{path:'view-report',component:UserReportComponent},
{path:'view-subject',component:TestSubjectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
