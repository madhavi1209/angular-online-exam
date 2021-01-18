import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addQuestion(){

    this.router.navigate(['admin-subject']);
  }
  removeQuestion(){

    this.router.navigate(['admin-subject']);
  }
  viewReports(){
    this.router.navigate(['view-report-dashboard']);
  }
  logout(){
    sessionStorage.clear();
  }
}
