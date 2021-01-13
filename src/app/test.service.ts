import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateReport, TakeTest } from './model/userTest';

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

  startTest(testId:number):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/questions?testId="+testId;
    return this.http.get(url);
  }

  getReport(createReport:CreateReport):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/create-report";
    return this.http.post(url,createReport);
    
  }
  
}
