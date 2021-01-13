import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';

@Component({
  selector: 'app-view-by-technology',
  templateUrl: './view-by-technology.component.html',
  styleUrls: ['./view-by-technology.component.css']
})
export class ViewByTechnologyComponent implements OnInit {

  constructor(private adminReportService: AdminReportService) { }
  subjecName: string;
  reports:report[];
  ngOnInit(): void {
  }

  FetchReport() {
    this.adminReportService.FetchByTechnology(this.subjecName).subscribe(response =>{
      this.reports=response;
      alert(JSON.stringify(response));
      console.log(response);
    });
  }

}
