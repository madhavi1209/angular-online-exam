import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminReportService {

  constructor(private http:HttpClient) { }
  FetchByTechnology(subjecName:string):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/report-technology?subjecName="+subjecName;
    return this.http.get(url);
  }

}
