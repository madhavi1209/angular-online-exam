import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminQuestion } from './add-question/model/class';
import { Question } from './model/userTest';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {
  constructor(private http: HttpClient) { }

  addquestion(question : AdminQuestion):Observable<any>{
    let url ="http://localhost:8080/Online-exam-project/exam/addquestion";
    return this.http.post(url,question);
  }
}
