import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveQuestion } from './remove-question/model/class';


@Injectable({
  providedIn: 'root'
})
export class RemoveQuestionService {

  constructor(private http: HttpClient) { }

  removequestion(question : RemoveQuestion):Observable<any>{
    let url ="http://localhost:8080/Online-exam-project/exam/removequestion";
    return this.http.post(url,question);
  }

  getquestion(subId: number):Observable<any>{
    let url ="http://localhost:8080/Online-exam-project/exam/getquestion?subId=" + subId;
    return this.http.get(url);
  }
}
