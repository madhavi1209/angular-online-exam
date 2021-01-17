import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectC } from '../model/userTest';
import { RegisterService } from '../register.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css']
})
export class AdminSubjectComponent implements OnInit {

  constructor(private testService:RegisterService,private router:Router) { }

  subject:SubjectC[];
  ngOnInit(): void {
    this.testService.getSubjects().subscribe(response =>{
      this.subject=response;
      alert(JSON.stringify(response));
      console.log(response);
    });
  }

  addQuestion(sub:SubjectC){
    sessionStorage.setItem('subId',String(sub.subject_id));
    
    console.log(sub.subject_id);
    this.router.navigate(['add-question']);
  }
  removeQuestion(sub:SubjectC){
    sessionStorage.setItem('subId',String(sub.subject_id));
    
    console.log(sub.subject_id);
    this.router.navigate(['remove-question']);
  }


}
