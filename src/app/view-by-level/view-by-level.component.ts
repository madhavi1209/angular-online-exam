import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';

@Component({
  selector: 'app-view-by-level',
  templateUrl: './view-by-level.component.html',
  styleUrls: ['./view-by-level.component.css']
})
export class ViewByLevelComponent implements OnInit {

  constructor(private adminReportService: 
  AdminReportService) { }
  level:number;
  reports:report[];

  ngOnInit(): void {
  }
  FetchReport() {
    alert(this.level);
    this.adminReportService.FetchByLevel(this.level).subscribe(response =>{
      this.reports=response;

      alert(JSON.stringify(response));
      console.log(response);
    });
  }

}
