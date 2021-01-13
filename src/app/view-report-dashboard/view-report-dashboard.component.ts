import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report-dashboard',
  templateUrl: './view-report-dashboard.component.html',
  styleUrls: ['./view-report-dashboard.component.css']
})
export class ViewReportDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  byTechnology(){
    this.router.navigateByUrl('view-by-technology');
  }
  byLevel(){
    this.router.navigateByUrl('view-by-level');
  }
  custom(){ 
    this.router.navigateByUrl('view-report-custom');
  }
}
