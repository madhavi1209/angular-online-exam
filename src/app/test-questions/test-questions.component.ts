import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateReport, Question, Report, ShowReport, UserAnswer, UserResponse } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.css']
})
export class TestQuestionsComponent implements OnInit {

  level:number;
  userId:number;
  testId: number;
  questions: Question[];
  ques: Question = new Question();
  count: number = 0;
  isNext: boolean = true;
  isSubmit:boolean=false;
  isFirst:boolean=false;
  isCleared:boolean=false;
  isFailed:boolean=false;
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
  options:string[]=[];
  ocount:number=0;
  userResponse:UserResponse=new UserResponse();
  userAnswer:UserAnswer[]=[];
  ucount:number=0;
  constructor(private testService: TestService,private router:Router) {

  }

  ngOnInit(): void {
    this.userId=parseInt(sessionStorage.getItem('userId'));
    this.testId = parseInt(sessionStorage.getItem('testId'));
    this.level=parseInt(sessionStorage.getItem('level'));

    this.subjectName=sessionStorage.getItem('subjectName');

    this.testService.startTest(this.testId,this.level).subscribe(response => {
      this.questions = response;
      this.ques = this.questions[this.count];
      this.count++;
      console.log(response);
    });


  }

  next(ques:Question) {
   
    this.optionChosen=this.rdOption;
    if(this.isFirst){
      this.rdOption=this.options[this.count]
    }
    else {
      this.rdOption="";
     
    }
   
    this.options[this.ocount]=this.optionChosen;
    alert(this.options[this.ocount]);
    this.ocount++;
   
    this.generateResponse(ques);
    //alert(this.score);

    if (this.count >=this.questions.length) {
      this.isNext=false;
      this.isSubmit=true;
      this.count = this.questions.length;
    }

    this.ques = this.questions[this.count];
    this.count++;
  }

  generateResponse(question:Question){
    if(this.userAnswer[this.ucount]){
      this.userAnswer[this.ucount].optionChosen=this.optionChosen;
      if(this.optionChosen==question.correctAnswer){
        this.userAnswer[this.ucount].marksObtained=question.marks;
      }
      else{
        this.userAnswer[this.ucount].marksObtained=0;
      }
      this.testService.alterResponse(this.userAnswer[this.ucount]).subscribe(response =>{
        alert(JSON.stringify(response));
        this.userAnswer[this.ucount]=response;
        this.ucount++;
      });
    }
    else{
      this.userResponse.testId=this.testId;
      this.userResponse.questionId=question.questionId;
      this.userResponse.optionChosen=this.optionChosen;
      if(this.optionChosen==question.correctAnswer){
        this.userResponse.marksObtained=question.marks;
      }
      else{
        this.userResponse.marksObtained=0;
      }
      this.testService.createResponse(this.userResponse).subscribe(response =>{
        alert(JSON.stringify(response));
        this.userAnswer[this.ucount]=response;
        this.ucount++;
      })
    }
  }

  first(){
    alert(JSON.stringify(this.userAnswer));
    this.totalScore=0;
    this.score=0;
    this.count=1;
    this.ques = this.questions[0];
    this.rdOption=this.options[0];
    this.isNext=true;
    this.isSubmit=false;
    this.isFirst=true;
    this.ocount=0;
    this.ucount=0;
  }
  generateScore(){
    for(var quest of this.questions){
      this.totalScore=this.totalScore+quest.marks;
      }
    for(var ans of this.userAnswer){
      this.score=this.score+ans.marksObtained;
    }
    
  }

  createReport(){
    this.isSubmit=false;
    this.generateScore();
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

      if(this.rep.clearedLevel==this.level){
        this.isCleared=true;
      }
      else{
        this.isFailed=true;
      }
    });

    
  }

  showDetails(report:Report){
    this.testService.getReportDetails(report).subscribe(response => {
      alert(JSON.stringify(response));
      this.showReport=response;
      this.percentage=(this.showReport.testScore/this.showReport.totalScore)*100;
    });
  }


  nextLevel(){
    this.level++;
    sessionStorage.setItem('level',String(this.level));
    this.router.navigateByUrl('take-test');
  }

  goHome(){
    this.router.navigateByUrl('dashboard');
  }
}
