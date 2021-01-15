import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-register/model/class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user : User):Observable<any>{
    let url ="http://localhost:8080/Online-exam-project/exam/register.lti";
    return this.http.post(url,user);
  }
  getSubjects():Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/get-subjects";
    return this.http.get(url);
  }
}
