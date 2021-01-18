import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report, TakeTest } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {

  userTest:TakeTest=new TakeTest();
  testId:number;
  userId:number;
  subjectId:number;
  subjectName:string;
  reports:Report[];
  level:number;
  constructor(private testService:TestService,private router:Router ) { }

  ngOnInit(): void {
    this.userId=parseInt(sessionStorage.getItem('userId'));
    this.subjectId=parseInt(sessionStorage.getItem('subjectId'));
    this.level=parseInt(sessionStorage.getItem('level'));
    this.subjectName=sessionStorage.getItem('subjectName');
    //alert("level"+this.level);
    this.testService.getUserReports(this.userId,this.subjectId).subscribe(response => {
      console.log(response);
      this.reports=response;
      //alert(JSON.stringify(response));
      for(var rep of this.reports){
        if(rep.clearedLevel==this.level){
          this.level++;
          sessionStorage.setItem('level',String(this.level));
        }
      }
    });
    
  }
  
  startTest(){
    this.level=parseInt(sessionStorage.getItem('level'));
    this.userTest.userId=this.userId;
    this.userTest.subjectId=this.subjectId;
    this.userTest.level=this.level;
    

    this.testService.createTest(this.userTest).subscribe(response =>{
      this.testId=response;
      alert("test created with ID : "+this.testId+"of level "+this.userTest.level);
      sessionStorage.setItem('testId',String(this.testId));
      this.router.navigate(['view-question']);
    });

  }
  details(){
    this.router.navigate(['view-report']);
  }
  logout(){
    sessionStorage.clear();
  }
}
