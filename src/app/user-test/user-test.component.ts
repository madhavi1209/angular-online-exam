import { Component, OnInit } from '@angular/core';
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

  constructor(private testService:TestService) { }

  ngOnInit(): void {
  }
  
  startTest(){

    this.userTest.userId=156;
    this.userTest.subjectId=157;
    this.userTest.level=1;

    this.testService.createTest(this.userTest).subscribe(response =>{
      this.testId=response;
      //alert(JSON.stringify(response));
      alert("test created with ID : "+this.testId);
    });

    this.testService.startTest(this.testId).subscribe(response =>{
      this.testId=response;
      alert(JSON.stringify(response));
     
    });
  }
}
