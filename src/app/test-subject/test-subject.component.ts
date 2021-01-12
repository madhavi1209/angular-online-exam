import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectC } from '../model/userTest';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.css']
})
export class TestSubjectComponent implements OnInit {

  constructor(private testService:TestService,private router:Router) { }

  subject:any;
  ngOnInit(): void {
    this.testService.getSubjects().subscribe(response =>{
      this.subject=response;
      alert(JSON.stringify(response));
      console.log(response);
    });
  }

  startTest(){
    sessionStorage.setItem('subjectId',String(this.subject.subjectId));
    this.router.navigate(['take-test']);
  }

}
