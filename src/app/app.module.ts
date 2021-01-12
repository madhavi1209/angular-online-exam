import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserTestComponent } from './user-test/user-test.component';
import { UserReportComponent } from './user-report/user-report.component';
import { FormsModule } from '@angular/forms';

import { TestSubjectComponent } from './test-subject/test-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserTestComponent,
    UserReportComponent,
    TestSubjectComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
