import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';
import { ShowReport } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view-by-level',
  templateUrl: './view-by-level.component.html',
  styleUrls: ['./view-by-level.component.css']
})
export class ViewByLevelComponent implements OnInit {

  constructor(private testService: TestService, private adminReportService:
    AdminReportService) { }
  level: number;
  reports: report[];
  showReport: ShowReport;
  percentage: number;

  ngOnInit(): void {
  }
  FetchReport() {
    alert(this.level);
    this.adminReportService.FetchByLevel(this.level).subscribe(response => {
      this.reports = response;
      alert(JSON.stringify(response));
      console.log(response);
    });

  }
  showDetails(report:report) {
    this.testService.getReportDetails(report).subscribe(response => {
      alert(JSON.stringify(response));
      this.showReport = response;
      this.percentage = (this.showReport.testScore / this.showReport.totalScore) * 100;
    });
  }

}
