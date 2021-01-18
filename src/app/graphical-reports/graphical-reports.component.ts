import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { GraphicalReport } from '../login/Model/report';


@Component({
  selector: 'app-graphical-reports',
  templateUrl: './graphical-reports.component.html',
  styleUrls: ['./graphical-reports.component.css']
})
export class GraphicalReportsComponent implements OnInit {

  graphicalReport: GraphicalReport[]=[];
  javaCount: number = 0;
  htmlCount: number = 0;
  dbmsCount: number = 0;
  pythonCount: number = 0;
  cppCount: number = 0;
  isPieChart:boolean=false;
  constructor(private loginService: LoginService, private router: Router) { }
  public pieChartLabels:string[] = ['JAVA', 'HTML', 'DBMS','C++','PYTHON'];
  public pieChartData:number[]=[this.javaCount, this.htmlCount, this.dbmsCount , this.pythonCount,this.cppCount];
  public pieChartType:string = 'pie';
 
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


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
    

    this.pieChartData= [this.javaCount, this.htmlCount, this.dbmsCount , this.pythonCount,this.cppCount];
    

    if(this.isPieChart){
      this.isPieChart=false;
    }
 
    else{
      this.isPieChart=true;
    }

  }

}
