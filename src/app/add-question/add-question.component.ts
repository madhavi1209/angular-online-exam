import { Component, OnInit } from '@angular/core';
import { AddQuestionService } from '../add-question.service';
import { Question } from '../model/userTest';
import { AdminQuestion } from './model/class';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
question: AdminQuestion=new AdminQuestion();
  constructor(private addquestionService: AddQuestionService) { }

  ngOnInit(): void {​​
    this.question.subId=parseInt(sessionStorage.getItem('subId'));
     }​​

  register(){
    alert(JSON.stringify(this.question));
    this.addquestionService.addquestion(this.question).subscribe(response => {
      alert(JSON.stringify(response));
      this.question=response;
    });

}
}
