import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateReport, Report, TakeTest, UserAnswer, UserResponse } from './model/userTest';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  createTest(usertest:TakeTest):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/start-test";
    return this.http.post(url,usertest);
  }

  getSubjects():Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/get-subjects";
    return this.http.get(url);
  }

  startTest(testId:number,level:number):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/questions?testId="+testId+"&level="+level;
    return this.http.get(url);
  }

  getReport(createReport:CreateReport):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/create-report";
    return this.http.post(url,createReport);
    
  }

  getReportDetails(report:Report):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/report-details";
    return this.http.post(url,report);
    
  }
  
  getAllReports(userId:number):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/reports?userId="+userId;
    return this.http.get(url);
  }

  getUserReports(userId:number,subjectId:number):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/user-reports?userId="+userId+"&subjectId="+subjectId;
    return this.http.get(url);
  }

  createResponse(response:UserResponse):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/create-response";
    return this.http.post(url,response);
  }

  alterResponse(response:UserAnswer):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/alter-response";
    return this.http.post(url,response);
  }
}
