import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';
import { ShowReport } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view-by-technology',
  templateUrl: './view-by-technology.component.html',
  styleUrls: ['./view-by-technology.component.css']
})
export class ViewByTechnologyComponent implements OnInit {

  constructor(private testService: TestService,private adminReportService: AdminReportService) { }
  subjecName: string;
  reports:report[];
  showReport:ShowReport;
  percentage:number;
  ngOnInit(): void {
  }

  FetchReport() {
    this.adminReportService.FetchByTechnology(this.subjecName).subscribe(response =>{
      this.reports=response;
      alert(JSON.stringify(response));
      console.log(response);
    });
  }
  showDetails(report:report){
    this.testService.getReportDetails(report).subscribe(response => {
      alert(JSON.stringify(response));
      this.showReport=response;
      this.percentage=(this.showReport.testScore/this.showReport.totalScore)*100;
    });
  }

}
