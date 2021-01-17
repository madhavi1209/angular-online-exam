import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  name:string;

  ngOnInit(): void {
    this.name=sessionStorage.getItem('name');
  }
  
  report(){
    this.router.navigateByUrl('view-report');
  }
  newTest(){
    this.router.navigateByUrl('view-subject');
  }
}
