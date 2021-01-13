import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeTest } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css']
})
export class UserTestComponent implements OnInit {

  userTest:TakeTest=new TakeTest();
  testId:number;
  constructor(private testService:TestService,private router:Router ) { }

  ngOnInit(): void {
   
    

  }
  
  startTest(){

    this.userTest.userId=156;
    this.userTest.subjectId= parseInt(sessionStorage.getItem('subjectId'));
    this.userTest.level=parseInt(sessionStorage.getItem('level'));

    this.testService.createTest(this.userTest).subscribe(response =>{
      this.testId=response;
      alert("test created with ID : "+this.testId);
      sessionStorage.setItem('testId',String(this.testId));
      this.router.navigate(['view-question']);
    });

  }
}
