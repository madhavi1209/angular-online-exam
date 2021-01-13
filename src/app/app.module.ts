import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserTestComponent } from './user-test/user-test.component';
import { UserReportComponent } from './user-report/user-report.component';

import { TestSubjectComponent } from './test-subject/test-subject.component';

//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PageTemplateComponent } from './page-template/page-template.component';

import { TestQuestionsComponent } from './test-questions/test-questions.component';
import { HomeComponent } from './home/home.component';
import { AdminSubjectComponent } from './admin-subject/admin-subject.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserTestComponent,
    UserReportComponent,
    TestSubjectComponent,
    //ForgotPasswordComponent,
    PageTemplateComponent,
    TestQuestionsComponent,
    HomeComponent,
    AdminSubjectComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
