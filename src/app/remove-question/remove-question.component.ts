import { Component, OnInit } from '@angular/core';
import { RemoveQuestionService } from '../remove-question.service';
import { RemoveQuestion } from './model/class';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {
  question: RemoveQuestion=new RemoveQuestion();

  constructor(private removequestionService: RemoveQuestionService) { }
  subId : number;
  questions: RemoveQuestion[];
  ngOnInit(): void  {
    this.subId=parseInt(sessionStorage.getItem('subId'));
    this.removequestionService.getquestion(this.subId).subscribe(response => {
      alert(JSON.stringify(response));
      this.questions=response;
    });
    
  }
  Remove(q:RemoveQuestion){
    this.removequestionService.removequestion(q).subscribe(response => {
      alert(JSON.stringify(response));
      
    });

    this.removequestionService.getquestion(this.subId).subscribe(response => {
      alert(JSON.stringify(response));
      this.questions=response;
    }); 
    
  }
  // register(){
  //   alert(JSON.stringify(this.question));
  //   this.removequestionService.removequestion(this.question).subscribe(response => {
  //     alert(JSON.stringify(response));
  //     this.question=response;
  //   });

}

