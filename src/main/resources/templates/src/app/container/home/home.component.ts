import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {MannerDataService} from "../../services/manner.data.service";
import * as Highcharts from 'highcharts';
import {Observable, Subscription} from "rxjs/index";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/internal/operators";
import {MainDataService} from "../../services/main.data.service";
import {ApprovalMain, BriefingMain, General, GmailMain, ScheduleMain, TodoMain} from "../../models/main";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  constructor(
    private breakpointObserver: BreakpointObserver,
    private mainDataService: MainDataService,
  ) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
    );
  currentGeneralMainState$: Observable<General> = this.mainDataService.currentGeneralMainState();
  currentApprovalsMainState$: Observable<ApprovalMain> = this.mainDataService.currentApprovalMainState();
  currentSchedulesMainState$: Observable<ScheduleMain> = this.mainDataService.currentScheduleMainState();
  currentTodosMainState$: Observable<TodoMain> = this.mainDataService.currentTodoMainState();
  currentGmailsMainState$: Observable<GmailMain> = this.mainDataService.currentGmailMainState();
  currentBriefingsMainState$: Observable<BriefingMain> = this.mainDataService.currentBriefingMainState();

  generalMain:General = {
    approvalNum:0,
    scheduleNum:0,
    todoNum:0,
    gmailNum:0,
    jiraNum:0,
    calendarNum:0,
    datas:[]
  }
  currentGeneralObservable: Subscription;
  ngOnInit() {
    this.currentGeneralObservable = this.currentGeneralMainState$.subscribe(p => {
      this.generalMain = p;
      this.optFromInput = JSON.parse(this.optFromInputString);
      this.optFromInput.series[0].data = this.generalMain.datas;
    })
    this.mainDataService.selectGeneralMainState();
  }

  Highcharts = Highcharts;
  optFromInputString = `
  {
    "chart": {
        "type": "spline",
        "backgroundColor": "#272727"
    },
    "title": { "text": "" },
    "subtitle": { "text": "Daily user activity statics" },
    "xAxis": {
      "categories": ["1.May","2.May","3.May","4.May","5.May","6.May","7.May","8.May","9.May","10.May","11.May","12.May"]
    },
    "yAxis": {
      "title": {
        "text": ""
      }
	  },
    "series": [{
      "type": "line",
      "data": []
    }]
  }
  `;
  optFromInput = JSON.parse(this.optFromInputString);

  ngOnDestroy(){
    this.currentGeneralObservable.unsubscribe();
  }
}


