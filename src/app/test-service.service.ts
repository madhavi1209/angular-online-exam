import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakeTest } from './model/userTest';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }

  createTest(usertest:TakeTest):Observable<any>{
    let url="http://localhost:8081/Online-exam-project/exam/start-test";
    return this.http.post(url,usertest);
  }
}
