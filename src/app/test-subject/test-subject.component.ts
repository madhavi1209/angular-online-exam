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

  subject:SubjectC[];
  ngOnInit(): void {
    this.testService.getSubjects().subscribe(response =>{
      this.subject=response;
      alert(JSON.stringify(response));
      console.log(response);
    });
  }

  startTest(sub:SubjectC){
    sessionStorage.setItem('subjectId',String(sub.subject_id));
    sessionStorage.setItem('subjectName',String(sub.subjecName));
    sessionStorage.setItem('level',String(sub.level));
    sessionStorage.setItem('noOfQuestions',String(sub.noOfQuestions));
    sessionStorage.setItem('duration',String(sub.duration));
    
    console.log(sub.subject_id);
    this.router.navigate(['take-test']);
  }

}
