import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../model/userTest';
import { TestService } from '../test.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  report:Report;
  constructor(private testService: TestService,private router:Router) { }

  ngOnInit(): void {
   console.log(this.router.getCurrentNavigation().extras.state);
    //this.testService.getReportDetails
  }

}
