import { Component, OnInit } from '@angular/core';
import { AdminReportService } from '../admin-report.service';
import { report } from '../login/Model/report';
import { CustomFetchDto } from '../model/CustomFetchDto';
import { ShowReport } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-view-by-custom',
  templateUrl: './view-by-custom.component.html',
  styleUrls: ['./view-by-custom.component.css']
})
export class ViewByCustomComponent implements OnInit {

  constructor(private testService: TestService, private adminReportService: AdminReportService) { }
  customFetchDto:CustomFetchDto=new CustomFetchDto;
  reports:report[];
  showReport:ShowReport;
  percentage:number;

  ngOnInit(): void {
  }
  FetchReport() {
    alert(this.customFetchDto.state);
    if (this.customFetchDto.marks===NaN)
    {
      this.customFetchDto.marks=-1;
    }
    
    if (this.customFetchDto.state===undefined)
    {
      this.customFetchDto.state="";
    }
    if (this.customFetchDto.city===undefined)
    {
      this.customFetchDto.city="";
    }
    alert(this.customFetchDto.state+"State");
    alert(this.customFetchDto.city+"city");
    this.adminReportService.customFetch(this.customFetchDto).subscribe(response =>{
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
