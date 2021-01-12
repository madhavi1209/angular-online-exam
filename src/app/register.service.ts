import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user-register/model/class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user : User){
    let url ="http://localhost:8080/Online-exam-project/exam/register.lti";
    return this.http.post(url,User);
  }
}
