import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';
import { CustomFetchDto } from '../model/CustomFetchDto';

@Component({
  selector: 'app-view-by-custom',
  templateUrl: './view-by-custom.component.html',
  styleUrls: ['./view-by-custom.component.css']
})
export class ViewByCustomComponent implements OnInit {

  constructor(private adminReportService: AdminReportService) { }
  customFetchDto:CustomFetchDto=new CustomFetchDto;
  reports:report[];

  ngOnInit(): void {
  }
  FetchReport() {
    this.adminReportService.customFetch(this.customFetchDto).subscribe(response =>{
      this.reports=response;
      alert(JSON.stringify(response));
      console.log(response);
    });

}
}
