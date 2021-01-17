import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report, ShowReport } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(private testService:TestService,private router:Router) { }

  userId:number;
  isPresent:boolean=true;
  reports:Report[];
  showReport:ShowReport;
  percentage:number;
  
  ngOnInit(): void {
    this.userId=parseInt(sessionStorage.getItem('userId'));

    this.testService.getAllReports(this.userId).subscribe(response => {
      console.log(response);
      this.reports=response;
      if(this.reports.length!=0){
        this.isPresent=false;
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

    newTest(){
      this.router.navigateByUrl('view-subject');
    }

}
