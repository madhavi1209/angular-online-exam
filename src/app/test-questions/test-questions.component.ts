import { Component, OnInit } from '@angular/core';
import { Question } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  testId:number;
  questions:Question[];
  ques:Question=new Question();
  count:number=0;
  isNext:boolean=true;
  constructor(private testService:TestService) {
    
   }

  ngOnInit(): void {
    this.testId= parseInt(sessionStorage.getItem('testId'));
    //this.count=parseInt(sessionStorage.getItem('noOfQuestions'));

    this.testService.startTest(this.testId).subscribe(response =>{
      this.questions=response;
      this.ques=this.questions[this.count];
      this.count++;
      console.log(response);
    });
    
    
  }
  
  next(){
  if(this.count>this.questions.length){
    this.count=this.questions.length;
  }
  this.ques=this.questions[this.count];
  this.count++;
  }
}
