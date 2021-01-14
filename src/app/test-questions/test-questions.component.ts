import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateReport, Question, Report, ShowReport } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  userId:number;
  testId: number;
  questions: Question[];
  ques: Question = new Question();
  count: number = 0;
  isNext: boolean = true;
  isSubmit:boolean=false;
  optionChosen: string;
  correctAnswer: string;
  rdOption:string;
  subjectName:string;
  score:number=0;
  totalScore:number=0;
  report:CreateReport=new CreateReport();
  rep:Report=new Report;
  percentage:number;
  showReport:ShowReport;

  constructor(private testService: TestService,private router:Router) {

  }

  ngOnInit(): void {
    this.userId=parseInt(sessionStorage.getItem('userId'));;
    this.testId = parseInt(sessionStorage.getItem('testId'));
    //this.count=parseInt(sessionStorage.getItem('noOfQuestions'));
    this.subjectName=sessionStorage.getItem('subjectName');
    this.testService.startTest(this.testId).subscribe(response => {
      this.questions = response;
      this.ques = this.questions[this.count];
      this.count++;
      console.log(response);
    });


  }

  next(ques:Question) {
    this.optionChosen=this.rdOption;
    alert(this.optionChosen);
    this.rdOption="";
    this.generateScore(ques.correctAnswer,ques.marks);
      if (this.count >=this.questions.length) {
      this.isNext=false;
      this.isSubmit=true;
      this.count = this.questions.length;
    }
    this.ques = this.questions[this.count];
    this.count++;
  }
  
  first(){
    this.totalScore=0;
    this.score=0;
    this.count=1;
    this.ques = this.questions[0];
    this.isNext=true;
    this.isSubmit=false;
  }
  generateScore(cAns:string,marks:number){
    this.totalScore=this.totalScore+marks;
    if(cAns==this.optionChosen){
      this.score=this.score+marks;
    }
  }

  createReport(){
    this.report.userId=this.userId;
    this.report.testId=this.testId;
    this.report.marks=this.score;
    this.report.totalMarks=this.totalScore;

    this.testService.getReport(this.report).subscribe(response => {
      alert(JSON.stringify(response));
      this.rep.reportId=response.reportId;
      this.rep.testScore=response.testScore;
      this.rep.totalScore=response.totalScore;
      this.rep.clearedLevel=response.clearedLevel;
      this.showDetails(this.rep);
    });

    
  }

  showDetails(report:Report){
    this.testService.getReportDetails(report).subscribe(response => {
      alert(JSON.stringify(response));
      this.showReport=response;
      this.percentage=(this.showReport.testScore/this.showReport.totalScore)*100;
    });
  }
}
