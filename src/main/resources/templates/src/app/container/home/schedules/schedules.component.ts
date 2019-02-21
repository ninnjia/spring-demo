import {Component, Input, OnInit} from '@angular/core';
import {MainDataService} from "../../../services/main.data.service";
import {ScheduleMain} from "../../../models/main";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.less']
})
export class SchedulesComponent implements OnInit {
  @Input('scheduleMain') scheduleMain:ScheduleMain;
  constructor(
    private mainDataService: MainDataService,

  ) { }

  ngOnInit() {
    this.scheduleMain = {
      itemsNum:0,
      schedules:[]
    }
    this.mainDataService.selectScheduleMainState();
  }

}
