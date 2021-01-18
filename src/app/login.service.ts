import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login/Model/Login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8080/Online-exam-project/exam/login";
   return this.http.post(url, login); 
  }
  forgotPassword(body):Observable<any>{
    let url="http://localhost:8080/forgotpassword";
    return this.http.post(url,body)
  }
  fetchAllReports():Observable<any> {
    let url="http://localhost:8080/Online-exam-project/exam/graph-reports";
    return this.http.get(url);
  }
  
}
