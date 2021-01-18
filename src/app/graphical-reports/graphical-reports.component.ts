import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { LoginService } from '../login.service';
import { GraphicalReport } from '../login/Model/report';


@Component({
  selector: 'app-graphical-reports',
  templateUrl: './graphical-reports.component.html',
  styleUrls: ['./graphical-reports.component.css']
})
export class GraphicalReportsComponent implements OnInit {

  graphicalReport: GraphicalReport[] = [];
  javaCount: number = 0;
  htmlCount: number = 0;
  dbmsCount: number = 0;
  pythonCount: number = 0;
  cppCount: number = 0;
  isPieChart: boolean = false;
  percentage: number;
  JavaF: number = 0;
  JavaP: number = 0;
  DbmsF: number = 0;
  DbmsP: number = 0;
  PythonF: number = 0;
  PythonP: number = 0;
  CppF: number = 0;
  CppP: number = 0;
  HtmlF: number = 0;
  HtmlP: number = 0;
  isBarGraph: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }
  public pieChartLabels: string[] = ['JAVA', 'HTML', 'DBMS', 'C++', 'PYTHON'];
  //public pieChartData:number[] = [40, 20, 20 , 10,10];
  public pieChartData: number[] = [this.javaCount, this.htmlCount, this.dbmsCount, this.pythonCount, this.cppCount];
  public pieChartType: string = 'pie';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['JAVA', 'HTML', 'DBMS', 'C++', 'PYTHON'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [this.JavaF, this.HtmlF, this.DbmsF, this.CppF, this.PythonF], label: 'FAIL' },
    { data: [this.JavaP, this.HtmlP, this.DbmsP, this.CppP, this.PythonP], label: 'PASS' }
  ];


  ngOnInit(): void {
    this.loginService.fetchAllReports().subscribe(response => {
      this.graphicalReport = response;
      //alert(JSON.stringify(response));
    });
  }
  view() {
    for (var r of this.graphicalReport) {
      switch (r.subjecName) {
        case "JAVA": {
          this.javaCount++;
          //alert("JAVA"+this.javaCount);
          break;
        }
        case "HTML": {
          this.htmlCount++;
          //alert("HTML"+this.htmlCount);
          break;
        }
        case "PYTHON": {
          this.pythonCount++;
          break;
        }
        case "DBMS": {
          this.dbmsCount++;
          break;
        }
        case "C++": {
          this.cppCount++;
          break;
        }
      }
    }
    this.pieChartData = [this.javaCount, this.htmlCount, this.dbmsCount, this.pythonCount, this.cppCount];
    if (this.isPieChart) {
      this.isPieChart = false;
    }
    else {
      this.isPieChart = true;
    }
  }
  viewBar() {
    for (var r of this.graphicalReport) {
      this.percentage = (r.testScore / r.totalScore) * 100;
      if (r.subjecName == "JAVA") {
        if (this.percentage <= 60) {
          this.JavaF++;
        }
        else {
          this.JavaP++;
        }
      }
      if (r.subjecName == "DBMS") {
        if (this.percentage <= 60) {
          this.DbmsF++;
        }
        else {
          this.DbmsP++;
        }
      }
      if (r.subjecName == "PYTHON") {
        if (this.percentage <= 60) {
          this.PythonF++;
        }
        else {
          this.PythonP++;
        }
      }
      if (r.subjecName == "C++") {
        if (this.percentage <= 60) {
          this.CppF++;
        }
        else {
          this.CppP++;
        }
      }
      if (r.subjecName == "HTML") {
        if (this.percentage <= 60) {
          this.HtmlF++;
        }
        else {
          this.HtmlP++;
        }
      }
    }
    this.barChartData = [
      { data: [this.JavaF, this.HtmlF, this.DbmsF, this.CppF, this.PythonF], label: 'FAIL' },
      { data: [this.JavaP, this.HtmlP, this.DbmsP, this.CppP, this.PythonP], label: 'PASS' }
    ];
    if (this.isBarGraph) {
      this.isBarGraph = false;
    }
    else {
      this.isBarGraph = true;
    }
  }
}
