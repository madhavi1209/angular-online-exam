import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomFetchDto } from './model/CustomFetchDto';

@Injectable({
  providedIn: 'root'
})
export class AdminReportService {

  constructor(private http:HttpClient) { }
  FetchByTechnology(subjecName:string):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/report-technology?subjecName="+subjecName;
    return this.http.get(url);
  }
  FetchByLevel(level:number):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/report-level?level="+level;
    return this.http.get(url);
  }

  customFetch(customFetchDto:CustomFetchDto):Observable<any>{
    let url="http://localhost:8080/Online-exam-project/exam/report-custom";
    return this.http.post(url,customFetchDto);
  }

}
